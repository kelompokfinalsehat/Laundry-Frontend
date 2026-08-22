"use client";

import {
  Button,
  Group,
  Paper,
  Stack,
  TextInput,
} from "@mantine/core";

import {
  schemaResolver,
  useForm,
} from "@mantine/form";

import {
  useRouter,
} from "next/navigation";

import {
  laundryItemSchema,
  type LaundryItemFormValues,
} from "@/lib/validation/laundry-item.validation";

type Props = {
  initialValues?: LaundryItemFormValues;

  onSubmit: (
    values: LaundryItemFormValues,
  ) => void;

  isSubmitting?: boolean;

  submitLabel?: string;
};

export function LaundryItemForm({
  initialValues = {
    name: "",
  },
  onSubmit,
  isSubmitting = false,
  submitLabel = "Tambah Item",
}: Props) {
  const router = useRouter();

  const form =
    useForm<LaundryItemFormValues>({
      initialValues,

      validate: schemaResolver(
        laundryItemSchema,
      ),
    });

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor:
          "var(--color-surface)",
      }}
    >
      <form
        onSubmit={form.onSubmit(
          onSubmit,
        )}
      >
        <Stack gap="md">
          <TextInput
            label="Nama Item Laundry"
            placeholder="Contoh: Pakaian, Sepatu, Karpet"
            withAsterisk
            {...form.getInputProps(
              "name",
            )}
          />

          <Group
            justify="flex-end"
            mt="sm"
          >
            <Button
              variant="default"
              onClick={() =>
                router.back()
              }
              disabled={isSubmitting}
            >
              Batal
            </Button>

            <Button
              type="submit"
              loading={isSubmitting}
            >
              {submitLabel}
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}