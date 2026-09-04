import { CreateOrderPayload, OrderListItem, OrderQuery } from "@/types/api/order.types";
import { useState } from "react";
import { useLaundryItems } from "./laundry-item.hooks";
import { CustomerStatus } from "@/types/api";
import { useCreateOrderAdmin, useOrderList, useReceiveOrder } from "./order.hooks";
import { notifications } from "@mantine/notifications";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";

type CreateOrderItemForm = {
  laundryItemId: string;
  quantity: number;
};

const INITIAL_ITEM: CreateOrderItemForm = {
  laundryItemId: "",
  quantity: 1,
};

type CreateOrderProps = {
  opened: boolean;
  order: OrderListItem | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (orderId: string, payload: CreateOrderPayload) => Promise<void>;
};

export function useCreateOrderHooks({ order, isSubmitting, onClose, onSubmit }: CreateOrderProps) {
  const [weightKg, setWeightKg] = useState<number | string>("");
  const [items, setItems] = useState<CreateOrderItemForm[]>([
    {
      ...INITIAL_ITEM,
    },
  ]);

  const { data: laundryItems, isLoading: isLaundryItemsLoading } = useLaundryItems({
    page: 1,
    pageSize: 100,
  });

  const resetForm = () => {
    setWeightKg("");
    setItems([
      {
        ...INITIAL_ITEM,
      },
    ]);
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    resetForm(); 
    onClose();
  };

  const handleAddItem = () => {
    setItems((previous) => [
      ...previous,
      {
        ...INITIAL_ITEM,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems((previous) => previous.filter((_, itemIndex) => itemIndex !== index));
  };

  const handleLaundryItemChange = (index: number, value: string | null) => {
    setItems((previous) =>
      previous.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          laundryItemId: value ?? "",
        };
      }),
    );
  };

  const handleQuantityChange = (index: number, value: string | number) => {
    const quantity = typeof value === "number" ? value : Number(value);

    setItems((previous) =>
      previous.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          quantity: Number.isInteger(quantity) && quantity > 0 ? quantity : 1,
        };
      }),
    );
  };

  const getLaundryItemOptions = (currentItemId: string) => {
    const selectedItemIds = items
      .filter((item) => item.laundryItemId !== "" && item.laundryItemId !== currentItemId)
      .map((item) => item.laundryItemId);

    return (
      laundryItems?.data
        .filter((item) => !selectedItemIds.includes(item.id))
        .map((item) => ({
          value: item.id,
          label: item.name,
        })) ?? []
    );
  };

  const handleSubmit = async () => {
    if (!order) {
      return;
    }

    if (typeof weightKg !== "number" || weightKg <= 0) {
      return;
    }

    const hasInvalidItem = items.some((item) => item.laundryItemId === "" || !Number.isInteger(item.quantity) || item.quantity <= 0);

    if (hasInvalidItem) {
      return;
    }

    const payload: CreateOrderPayload = {
      weightKg,
      items: items.map((item) => ({
        laundryItemId: item.laundryItemId,
        quantity: item.quantity,
      })),
    };

    await onSubmit(order.id, payload);
    resetForm(); 
  };

  return {
    handleClose,
    weightKg,
    setWeightKg,
    handleAddItem,
    isLaundryItemsLoading,
    items,
    getLaundryItemOptions,
    handleLaundryItemChange,
    handleQuantityChange,
    handleRemoveItem,
    handleSubmit,
  };
}

type ReceptionStage = "WAITING_RECEIPT" | "READY_TO_CREATE";
type ReceptionTableMode = "RECEIVE" | "CREATE_ORDER";
const STAGE_STATUS: Record<ReceptionStage, CustomerStatus> = {
  WAITING_RECEIPT: "ON_THE_WAY_TO_OUTLET",
  READY_TO_CREATE: "ARRIVED_AT_OUTLET",
};

export function useReceiveOrderHooks() {
  const router = useRouter();
  const [stage, setStage] = useState<ReceptionStage>("WAITING_RECEIPT");
  const [selectedOrderToReceive, setSelectedOrderToReceive] = useState<OrderListItem | null>(null);
  const [selectedOrderToCreate, setSelectedOrderToCreate] = useState<OrderListItem | null>(null);
  const tableMode: ReceptionTableMode = stage === "WAITING_RECEIPT" ? "RECEIVE" : "CREATE_ORDER";
  const [query, setQuery] = useState<OrderQuery>({
    page: 1,
    pageSize: 10,
    customerStatus: STAGE_STATUS.WAITING_RECEIPT,
    sortBy: "pickupScheduledAt",
    sortOrder: "asc",
  });

  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useOrderList({ ...query, search: debouncedSearch });
  const receiveOrderMutation = useReceiveOrder();
  const createOrderMutation = useCreateOrderAdmin();

  const handleStageChange = (value: string | null) => {
    if (value !== "WAITING_RECEIPT" && value !== "READY_TO_CREATE") {
      return;
    }

    setStage(value);

    setQuery((previous) => ({
      ...previous,
      page: 1,
      customerStatus: STAGE_STATUS[value],
    }));
  };

  const handleQueryChange = <Key extends keyof OrderQuery>(key: Key, value: OrderQuery[Key]) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: 10,
      customerStatus: STAGE_STATUS[stage],
      sortBy: "pickupScheduledAt",
      sortOrder: "asc",
    });
  };

  const handleReceive = (order: OrderListItem) => {
    setSelectedOrderToReceive(order);
  };

  const handleReceiveConfirm = async () => {
    if (!selectedOrderToReceive) {
      return;
    }

    await receiveOrderMutation.mutateAsync(selectedOrderToReceive.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Pesanan berhasil diterima.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message: err instanceof Error ? err.message : "Gagal menerima pesanan.",
          color: "red",
        });
      },
    });

    setSelectedOrderToReceive(null);
  };

  const handleCreateOrder = (order: OrderListItem) => {
    setSelectedOrderToCreate(order);
  };

  const handleCreateOrderSubmit = async (orderId: string, payload: CreateOrderPayload) => {
    await createOrderMutation.mutateAsync(
      {
        orderId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Order berhasil dibuat.",
            color: "green",
          });
        },
        onError: (err) => {
          notifications.show({
            title: "Gagal",
            message: err instanceof Error ? err.message : "Gagal membuat order.",
            color: "red",
          });
        },
      },
    );

    setSelectedOrderToCreate(null);
  };

  const handleView = (orderId: string) => {
    router.push(`/internal/outlet-admin/pesanan/${orderId}`);
  };

  return {
    stage,
    handleStageChange,
    query,
    handleQueryChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    tableMode,
    handlePageChange,
    handlePageSizeChange,
    handleReceive,
    handleCreateOrder,
    handleView,
    selectedOrderToReceive,
    receiveOrderMutation,
    setSelectedOrderToReceive,
    handleReceiveConfirm,
    selectedOrderToCreate,
    createOrderMutation,
    setSelectedOrderToCreate,
    handleCreateOrderSubmit,
  };
}