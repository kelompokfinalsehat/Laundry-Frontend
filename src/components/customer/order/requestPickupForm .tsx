"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Stack,
  Radio,
  Group,
  Text,
  Button,
  Alert,
  Paper,
  Divider,
  Loader,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { useForm, schemaResolver } from "@mantine/form";
import { createOrderSchema } from "@/lib/validation/order.validation";
import { ApiError } from "@/lib/api/axios";
import { useAddresses } from "@/hooks/address.hooks";
import { useCreateOrder } from "@/hooks/order.hooks";
import { useLocationPermission } from "@/components/shared/Location/LocationPermission/hooks/useLocationPermission";
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

const TODAY = dayjs().format("YYYY-MM-DD");

type FormValues = {
  addressId: string;
  pickupDate: string;
  pickupTime: string;
};

export function RequestPickupForm() {
  const router = useRouter();
  const locationStatus = useLocationPermission();
  const { data: addresses, isLoading: isLoadingAddresses } = useAddresses();
  const [isReviewing, setIsReviewing] = useState(false);
  const [isChangingAddress, setIsChangingAddress] = useState(false);

  const { mutate, isPending, error } = useCreateOrder();

  const form = useForm<FormValues>({
    initialValues: {
      addressId: "",
      pickupDate: TODAY, // dikunci ke hari ini, tidak bisa dipilih customer
      pickupTime: "",
    },
    validate: schemaResolver(createOrderSchema),
  });

  useEffect(() => {
    if (addresses && addresses.length > 0 && !form.values.addressId) {
      const primaryAddress = addresses.find((a) => a.isPrimary) ?? addresses[0];
      form.setFieldValue("addressId", primaryAddress.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses]);

  const selectedAddress = addresses?.find(
    (a) => a.id === form.values.addressId,
  );

  const isLocationBlocked = locationStatus.status !== "granted";

  async function handleReview() {
    const result = await form.validate();
    if (result.hasErrors) return;
    setIsReviewing(true);
  }

  function handleConfirm() {
    const values = form.values;
    const payload = {
      addressId: values.addressId,
      pickupDate: values.pickupDate,
      pickupTime: values.pickupTime,
      locationPermissionGranted: locationStatus.status === "granted",
    };

    mutate(payload, {
      onSuccess: (result) => {
        router.push(`/pesanan/${result.id}`);
      },
    });
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "OUTLET_OUT_OF_RANGE"
        ? "Alamat ini berada di luar jangkauan 10 km dari outlet manapun."
        : error.code === "NO_ACTIVE_OUTLET"
          ? "Tidak ada outlet aktif yang bisa melayani saat ini."
          : error.code === "PRICING_NOT_AVAILABLE"
            ? "Layanan sedang tidak tersedia. Coba lagi nanti."
            : error.code === "OUTSIDE_OPERATIONAL_HOURS"
              ? "Request pickup hanya bisa dibuat pada jam operasional."
              : error.message
      : null;

  if (isLoadingAddresses) {
    return (
      <Group justify="center" py="xl">
        <Loader color="var(--color-primary)" />
      </Group>
    );
  }

  if (!addresses || addresses.length === 0) {
    return (
      <Stack gap="md" align="center" ta="center" py="xl">
        <Text c="var(--color-text-secondary)">
          Kamu belum punya alamat tersimpan. Tambah alamat dulu sebelum request
          pickup.
        </Text>
        <Button
          component={Link}
          href="/alamat"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Tambah Alamat
        </Button>
      </Stack>
    );
  }

  if (isLocationBlocked) {
    return (
      <Alert
        style={{
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary)",
        }}
      >
        Izinkan akses lokasi browser dulu untuk membuat request pickup. Klik
        ikon 🔒 di address bar → izinkan lokasi → refresh halaman.
      </Alert>
    );
  }

  if (isReviewing && selectedAddress) {
    return (
      <Stack gap="md">
        <Paper withBorder p="md" radius="md">
          <Stack gap="xs">
            <Text fw={600} style={{ color: "var(--color-text-primary)" }}>
              {selectedAddress.label || "Alamat"}
            </Text>
            <Text size="sm" c="var(--color-text-secondary)">
              {selectedAddress.formattedAddress}
            </Text>
            <Text size="sm" c="var(--color-text-secondary)">
              {selectedAddress.phone}
            </Text>
            <Divider my={4} />
            <Text size="sm" c="var(--color-text-secondary)">
              Tanggal:{" "}
              <strong>
                {dayjs(form.values.pickupDate).format("dddd, D MMMM YYYY")}
              </strong>
            </Text>
            <Text size="sm" c="var(--color-text-secondary)">
              Jam: <strong>{form.values.pickupTime}</strong>
            </Text>
          </Stack>
        </Paper>

        <Alert
          style={{
            backgroundColor: "var(--color-error-light)",
            color: "var(--color-error)",
          }}
        >
          Pastikan alamat serta jadwal pickup sudah benar. Request yang sudah
          dibuat tidak dapat dibatalkan atau diubah.
        </Alert>

        {errorMessage && (
          <Alert
            color="red"
            style={{
              backgroundColor: "var(--color-error-light)",
              color: "var(--color-error)",
            }}
          >
            {errorMessage}
          </Alert>
        )}

        <Group grow>
          <Button
            variant="subtle"
            onClick={() => setIsReviewing(false)}
            disabled={isPending}
          >
            Kembali
          </Button>
          <Button
            loading={isPending}
            onClick={handleConfirm}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Buat Request Pickup
          </Button>
        </Group>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Group justify="space-between" align="center" mb="xs">
          <Text size="sm" fw={500}>
            Alamat Pickup
          </Text>
          {!isChangingAddress && addresses.length > 1 && (
            <Button
              variant="subtle"
              size="xs"
              onClick={() => setIsChangingAddress(true)}
            >
              Ganti Alamat
            </Button>
          )}
        </Group>

        {isChangingAddress ? (
          <Radio.Group
            {...form.getInputProps("addressId")}
            onChange={(value) => {
              form.setFieldValue("addressId", value);
              setIsChangingAddress(false);
            }}
          >
            <Stack gap="xs">
              {addresses.map((address) => (
                <Paper key={address.id} withBorder p="sm" radius="md">
                  <Radio
                    value={address.id}
                    label={
                      <Stack gap={0}>
                        <Text size="sm" fw={600}>
                          {address.label || "Alamat"}{" "}
                          {address.isPrimary && "(Utama)"}
                        </Text>
                        <Text size="xs" c="var(--color-text-secondary)">
                          {address.formattedAddress}
                        </Text>
                      </Stack>
                    }
                  />
                </Paper>
              ))}
            </Stack>
          </Radio.Group>
        ) : (
          selectedAddress && (
            <Paper withBorder p="sm" radius="md">
              <Stack gap={0}>
                <Text size="sm" fw={600}>
                  {selectedAddress.label || "Alamat"}{" "}
                  {selectedAddress.isPrimary && "(Utama)"}
                </Text>
                <Text size="xs" c="var(--color-text-secondary)">
                  {selectedAddress.formattedAddress}
                </Text>
              </Stack>
            </Paper>
          )
        )}
      </div>

      <div>
        <Text size="sm" fw={500} mb={4}>
          Tanggal Pickup
        </Text>
        <Paper
          withBorder
          p="sm"
          radius="md"
          style={{ backgroundColor: "var(--color-surface-muted, #f8f9fa)" }}
        >
          <Text size="sm" style={{ color: "var(--color-text-primary)" }}>
            {dayjs(TODAY).format("dddd, D MMMM YYYY")}
          </Text>
        </Paper>
      </div>

      <TimeInput label="Jam Pickup" {...form.getInputProps("pickupTime")} />

      <Button
        onClick={handleReview}
        style={{
          backgroundColor: "var(--color-accent)",
          color: "var(--color-text-on-accent)",
        }}
      >
        Lanjut ke Review
      </Button>
    </Stack>
  );
}
