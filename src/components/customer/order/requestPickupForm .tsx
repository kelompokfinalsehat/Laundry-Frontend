"use client";

import { useEffect } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/id";

import { notifications } from "@mantine/notifications";
import {
  Alert,
  Button,
  Divider,
  Group,
  Loader,
  Paper,
  Radio,
  Select,
  Stack,
  Text,
} from "@mantine/core";

import { useRequestPickup } from "@/hooks/order/request-pickup.hooks";
import { getCreateOrderErrorMessage } from "@/lib/utils/order-error.util";

dayjs.locale("id");

export function RequestPickupForm() {
  const {
    form,
    addresses,
    selectedAddress,

    isLoadingAddresses,
    isLocationBlocked,

    isReviewing,
    setIsReviewing,

    isChangingAddress,
    setIsChangingAddress,

    pickupTimeOptions,
    pickupDate,

    isPending,
    error,

    handleReview,
    handleConfirm,
  } = useRequestPickup();

  const errorMessage = getCreateOrderErrorMessage(error);

  useEffect(() => {
    if (!errorMessage) return;

    notifications.show({
      id: "request-pickup-error",
      title: "Gagal membuat request pickup",
      message: errorMessage,
      color: "red",
      autoClose: 5000,
    });
  }, [errorMessage]);

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
        Izinkan akses lokasi browser dulu untuk membuat request pickup.
      </Alert>
    );
  }

  if (isReviewing && selectedAddress) {
    return (
      <Stack gap="md">
        <Paper withBorder p="md" radius="md">
          <Stack gap="xs">
            <Text fw={500} c="var(--color-text-primary)">
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
              <strong>{dayjs(pickupDate).format("dddd, D MMMM YYYY")}</strong>
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
      {/* Address */}
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <Group
          justify="space-between"
          align="center"
          mb="xs"
          wrap="wrap"
          gap="xs"
        >
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
                          <Text component="span" fw={600}>
                            Alamat:
                          </Text>{" "}
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
            <Paper withBorder p="sm" radius="md" mih={100}>
              <Stack gap={10}>
                <Text size="sm" fw={600}>
                  {selectedAddress.label || "Alamat"}{" "}
                  {selectedAddress.isPrimary && "(Utama)"}
                </Text>

                <Text size="xs" c="var(--color-text-secondary)">
                  <Text component="span" fw={600}>
                    Alamat:
                  </Text>{" "}
                  {selectedAddress.formattedAddress}
                </Text>
              </Stack>
            </Paper>
          )
        )}
      </div>

      {/* Pickup Date */}
      <div style={{ width: "100%" }}>
        <Text size="sm" fw={500} mb={4}>
          Tanggal Pickup
        </Text>

        <Paper
          withBorder
          p="sm"
          radius="md"
          w={{ base: "100%", sm: 250 }}
          style={{
            backgroundColor: "var(--color-surface-muted, #f8f9fa)",
          }}
        >
          <Text size="sm" c="var(--color-text-primary)">
            {dayjs(pickupDate).format("dddd, D MMMM YYYY")}
          </Text>
        </Paper>
      </div>

      {/* Pickup Time */}
      <Select
        label="Jam Pickup"
        placeholder="Pilih jam pickup"
        data={pickupTimeOptions}
        w={{ base: "100%", sm: 250 }}
        {...form.getInputProps("pickupTime")}
      />

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
