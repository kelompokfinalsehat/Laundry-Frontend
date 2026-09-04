import dayjs from "dayjs";
import { Button, Group, Paper, Radio, Select, Stack, Text } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import type { Address } from "@/types/api/address.types";
import type { FormValues } from "@/hooks/order/request-pickup.hooks";

export function RequestPickupFormFields({
  form,
  addresses,
  selectedAddress,
  isChangingAddress,
  setIsChangingAddress,
  pickupDate,
  pickupTimeOptions,
  onReview,
}: {
  form: UseFormReturnType<FormValues>;
  addresses: Address[];
  selectedAddress: Address | undefined;
  isChangingAddress: boolean;
  setIsChangingAddress: (value: boolean) => void;
  pickupDate: string;
  pickupTimeOptions: { value: string; label: string }[];
  onReview: () => void;
}) {
  return (
    <Stack gap="md">
      <AddressPicker
        form={form}
        addresses={addresses}
        selectedAddress={selectedAddress}
        isChangingAddress={isChangingAddress}
        setIsChangingAddress={setIsChangingAddress}
      />

      <div style={{ width: "100%" }}>
        <Text size="sm" fw={500} mb={4}>
          Tanggal Pickup
        </Text>

        <Paper
          withBorder
          p="sm"
          radius="md"
          w={{ base: "100%", sm: 250 }}
          style={{ backgroundColor: "var(--color-surface-muted, #f8f9fa)" }}
        >
          <Text size="sm" c="var(--color-text-primary)">
            {dayjs(pickupDate).format("dddd, D MMMM YYYY")}
          </Text>
        </Paper>
      </div>

      <Select
        label="Jam Pickup"
        placeholder="Pilih jam pickup"
        data={pickupTimeOptions}
        w={{ base: "100%", sm: 250 }}
        {...form.getInputProps("pickupTime")}
      />

      <Button
        onClick={onReview}
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

function AddressPicker({
  form,
  addresses,
  selectedAddress,
  isChangingAddress,
  setIsChangingAddress,
}: {
  form: UseFormReturnType<FormValues>;
  addresses: Address[];
  selectedAddress: Address | undefined;
  isChangingAddress: boolean;
  setIsChangingAddress: (value: boolean) => void;
}) {
  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <Group justify="space-between" align="center" mb="xs" wrap="wrap" gap="xs">
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
  );
}
