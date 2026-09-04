"use client";
import { Alert, Button, Card, Group, NumberInput, Paper, Stack, Text } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import type { WorkerActiveAssigned, WorkerBypassPayload, WorkerValidatePayload } from "@/types/api/worker.types";
import { workerQuantitySchema } from "@/lib/validation/worker.validation";

type WorkerAssignedTaskProps = {
  assignment: WorkerActiveAssigned;
  isValidating: boolean;
  isRequestingBypass: boolean;
  validationErrorCode?: string | null;
  onValidate: (payload: WorkerValidatePayload) => void;
  onRequestBypass: (payload: WorkerBypassPayload) => void;
};

export function WorkerAssignedTask({
  assignment,
  isValidating,
  isRequestingBypass,
  validationErrorCode,
  onValidate,
  onRequestBypass,
}: WorkerAssignedTaskProps) {
  const { items } = assignment.order;

  const form = useForm({
    mode: "controlled",
    initialValues: {
      items: items.map((item) => ({ orderItemId: item.orderItemId, submittedQuantity: "" })),
    },
    validate: schemaResolver(workerQuantitySchema, { sync: true }),
  });

  const quantityMismatch = validationErrorCode === "QUANTITY_MISMATCH";
  const isSubmitting = isValidating || isRequestingBypass;

  function handleSubmit(values: typeof form.values) {
    onValidate({
      items: values.items.map((item) => ({
        orderItemId: item.orderItemId,
        submittedQuantity: Number(item.submittedQuantity),
      })),
    });
  }

  function handleBypass() {
    if (form.validate().hasErrors) return;

    const values = form.getValues();
    onRequestBypass({
      items: values.items.map((item) => ({
        orderItemId: item.orderItemId,
        submittedQuantity: Number(item.submittedQuantity),
      })),
    });
  }

  return (
    <Card withBorder radius="lg" p="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Stack gap={2}>
            <Text fw={600}>Validasi Kuantitas</Text>
            <Text size="sm" c="dimmed">
              Masukkan jumlah aktual setiap item laundry sebelum memulai proses.
            </Text>
          </Stack>

          {items.map((item, index) => (
            <Paper key={item.orderItemId} withBorder radius="md" p="md">
              <Group justify="space-between" align="flex-end">
                <Stack gap={2}>
                  <Text size="sm" fw={500}>
                    {item.laundryItem.name}
                  </Text>
                  <Text size="xs" c="dimmed">
                    Jumlah aktual
                  </Text>
                </Stack>

                <NumberInput
                  placeholder="0"
                  suffix=" pcs"
                  min={0}
                  allowDecimal={false}
                  allowNegative={false}
                  w={120}
                  disabled={isSubmitting}
                  {...form.getInputProps(`items.${index}.submittedQuantity`)}
                />
              </Group>
            </Paper>
          ))}

          {quantityMismatch && (
            <Alert color="orange" title="Kuantitas tidak sesuai">
              <Stack gap={4}>
                <Text size="sm">Jumlah aktual yang dimasukkan berbeda dengan data order.</Text>
                <Text size="sm" c="dimmed">
                  Periksa kembali jumlah aktual lalu lakukan validasi ulang, atau ajukan bypass jika jumlah aktual memang berbeda.
                </Text>
              </Stack>
            </Alert>
          )}

          {!assignment.canValidate && (
            <Text size="sm" c="dimmed">
              Batas percobaan validasi telah tercapai. Ajukan bypass untuk melanjutkan.
            </Text>
          )}

          <Button type="submit" loading={isValidating} disabled={!assignment.canValidate || isRequestingBypass}>
            Validasi & Mulai Proses
          </Button>

          {assignment.canRequestBypass && (
            <Button type="button" variant="light" color="orange" loading={isRequestingBypass} disabled={isValidating} onClick={handleBypass}>
              Ajukan Bypass
            </Button>
          )}
        </Stack>
      </form>
    </Card>
  );
}
