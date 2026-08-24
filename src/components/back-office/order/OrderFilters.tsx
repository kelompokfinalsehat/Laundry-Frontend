"use client";

import {
  ActionIcon,
  Group,
  Select,
  TextInput,
  Tooltip,
} from "@mantine/core";

import {DateInput} from"@mantine/dates"

import {
  IconRefresh,
  IconSearch,
} from "@tabler/icons-react";

import type {
  OrderQuery,
} from "@/types/api/order.types";

type OrderFiltersState = Pick<
  OrderQuery,
  | "search"
  | "customerStatus"
  | "paymentStatus"
  | "outletId"
  | "startDate"
  | "endDate"
>;

type Props = {
  filters: OrderFiltersState;

  sortBy: NonNullable<OrderQuery["sortBy"]>;

  sortOrder: NonNullable<OrderQuery["sortOrder"]>;

  outlets?: {
    id: string;
    name: string;
  }[];

  showOutletFilter: boolean;

  onChange: (
    key: keyof OrderFiltersState,
    value: string | null,
  ) => void;

  onSortByChange: (
    value: NonNullable<OrderQuery["sortBy"]>,
  ) => void;

  onSortOrderChange: (
    value: NonNullable<OrderQuery["sortOrder"]>,
  ) => void;

  onReset: () => void;
};

const CUSTOMER_STATUS_OPTIONS = [
  {
    value: "SCHEDULED",
    label: "Terjadwal",
  },
  {
    value: "WAITING_DRIVER_PICKUP",
    label: "Menunggu Driver",
  },
  {
    value: "ON_THE_WAY_TO_OUTLET",
    label: "Menuju Outlet",
  },
  {
    value: "ARRIVED_AT_OUTLET",
    label: "Tiba di Outlet",
  },
  {
    value: "WASHING",
    label: "Pencucian",
  },
  {
    value: "IRONING",
    label: "Penyetrikaan",
  },
  {
    value: "PACKING",
    label: "Pengemasan",
  },
  {
    value: "WAITING_PAYMENT",
    label: "Menunggu Pembayaran",
  },
  {
    value: "OVERDUE",
    label: "Jatuh Tempo",
  },
  {
    value: "READY_FOR_DELIVERY",
    label: "Siap Diantar",
  },
  {
    value: "ON_THE_WAY_TO_CUSTOMER",
    label: "Dalam Pengantaran",
  },
  {
    value: "WAITING_CUSTOMER_CONFIRMATION",
    label: "Menunggu Konfirmasi Pelanggan",
  },
  {
    value: "RECEIVED_BY_CUSTOMER",
    label: "Diterima Pelanggan",
  },
];

const PAYMENT_STATUS_OPTIONS = [
  {
    value: "UNPAID",
    label: "Belum Dibayar",
  },
  {
    value: "PAID",
    label: "Sudah Dibayar",
  },
];

const SORT_OPTIONS = [
  {
    value: "createdAt",
    label: "Tanggal dibuat",
  },
  {
    value: "pickupScheduledAt",
    label: "Jadwal pickup",
  },
  {
    value: "orderCode",
    label: "Kode pesanan",
  },
];

export function OrderFilters({
  filters,
  sortBy,
  sortOrder,
  outlets = [],
  showOutletFilter,
  onChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
}: Props) {
  return (
    <Group align="end" wrap="wrap" gap="sm">
      <TextInput
        label="Cari"
        placeholder="Kode pesanan atau pelanggan"
        leftSection={<IconSearch size={16} />}
        value={filters.search ?? ""}
        onChange={(event) =>
          onChange(
            "search",
            event.currentTarget.value || null,
          )
        }
      />

      <Select
        label="Status Pesanan"
        placeholder="Semua status"
        clearable
        data={CUSTOMER_STATUS_OPTIONS}
        value={filters.customerStatus ?? null}
        onChange={(value) =>
          onChange("customerStatus", value)
        }
      />

      <Select
        label="Status Pembayaran"
        placeholder="Semua status"
        clearable
        data={PAYMENT_STATUS_OPTIONS}
        value={filters.paymentStatus ?? null}
        onChange={(value) =>
          onChange("paymentStatus", value)
        }
      />

      {showOutletFilter && (
        <Select
          label="Outlet"
          placeholder="Semua outlet"
          clearable
          searchable
          data={outlets.map((outlet) => ({
            value: outlet.id,
            label: outlet.name,
          }))}
          value={filters.outletId ?? null}
          onChange={(value) =>
            onChange("outletId", value)
          }
        />
      )}
      <DateInput
        label="Dari Tanggal"
        placeholder="Pilih tanggal"
        clearable
        value={filters.startDate ?? null}
        valueFormat="DD MMM YYYY"
        onChange={(value) =>
          onChange("startDate", value)
        }
      />

      <DateInput
        label="Sampai Tanggal"
        placeholder="Pilih tanggal"
        clearable
        value={filters.endDate ?? null}
        valueFormat="DD MMM YYYY"
        onChange={(value) =>
          onChange("endDate", value)
        }
      />

      <Select
        label="Urutkan"
        value={sortBy}
        data={SORT_OPTIONS}
        onChange={(value) => {
          if (
            value === "createdAt" ||
            value === "pickupScheduledAt" ||
            value === "orderCode"
          ) {
            onSortByChange(value);
          }
        }}
      />

      <Select
        label="Urutan"
        value={sortOrder}
        data={[
          {
            value: "desc",
            label: "Menurun",
          },
          {
            value: "asc",
            label: "Menaik",
          },
        ]}
        onChange={(value) => {
          if (value === "asc" || value === "desc") {
            onSortOrderChange(value);
          }
        }}
      />

      <Tooltip label="Reset filter">
        <ActionIcon
          variant="default"
          size="input-sm"
          onClick={onReset}
          aria-label="Reset filter"
        >
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}