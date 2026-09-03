import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { useForm, schemaResolver } from "@mantine/form";

import { createOrderSchema } from "@/lib/validation/order.validation";
import { useAddresses } from "@/hooks/address.hooks";
import { useCreateOrder } from "./order.hooks";
import { useLocationPermission } from "@/components/shared/Location/LocationPermission/hooks/useLocationPermission";

import { getPickupTimeOptions } from "@/components/customer/order/pickupTimeHelper";
import { notifications } from "@mantine/notifications";

const TODAY = dayjs().format("YYYY-MM-DD");

export type FormValues = {
  addressId: string;
  pickupDate: string;
  pickupTime: string;
};

export function useRequestPickup() {
  const router = useRouter();

  const locationStatus = useLocationPermission();
  const { data: addresses, isLoading: isLoadingAddresses } = useAddresses();
  const { mutate, isPending, error } = useCreateOrder();

  const [isReviewing, setIsReviewing] = useState(false);
  const [isChangingAddress, setIsChangingAddress] = useState(false);

  const form = useForm<FormValues>({
    initialValues: {
      addressId: "",
      pickupDate: TODAY,
      pickupTime: "",
    },
    validate: schemaResolver(createOrderSchema),
  });

  useEffect(() => {
    if (!addresses?.length || form.values.addressId) return;

    const primaryAddress =
      addresses.find((address) => address.isPrimary) ?? addresses[0];

    form.setFieldValue("addressId", primaryAddress.id);
  }, [addresses, form]);

  const selectedAddress = addresses?.find(
    (address) => address.id === form.values.addressId,
  );

  const isLocationBlocked = locationStatus.status !== "granted";

  const pickupTimeOptions = getPickupTimeOptions(form.values.pickupDate);

  async function handleReview() {
    const result = await form.validate();

    if (result.hasErrors) return;

    setIsReviewing(true);
  }

  function handleConfirm() {
    const values = form.values;

    mutate(
      {
        addressId: values.addressId,
        pickupDate: values.pickupDate,
        pickupTime: values.pickupTime,
      },
      {
       onSuccess: (result) => {
        notifications.show({
          title: "Berhasil",
          message: "Request pickup berhasil dibuat.",
          color: "green",
        });

        router.push(`/pesanan/${result.id}`);
      },
      },
    );
  }

  return {
    form,

    addresses,
    selectedAddress,

    isLoadingAddresses,
    isLocationBlocked,
    locationStatus,

    isReviewing,
    setIsReviewing,

    isChangingAddress,
    setIsChangingAddress,

    pickupTimeOptions,

    isPending,
    error,

    handleReview,
    handleConfirm,

    pickupDate: TODAY,
  };
}