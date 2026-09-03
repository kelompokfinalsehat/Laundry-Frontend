import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";

type ActionConfirmModalParams = {
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
};
export function openActionConfirmModal({
  title,
  message,
  confirmLabel,
  onConfirm,
}: ActionConfirmModalParams) {
  modals.openConfirmModal({
    title: title,
    centered: true,
    children: (
      <Text size="sm" c="var(--color-text-secondary)">
        {message}
      </Text>
    ),
    labels: {
      confirm: confirmLabel,
      cancel: "Batal",
    },

    confirmProps: {
      style: {
        backgroundColor: "var(--color-accent)",
        color: "var(--color-text-on-accent)",
      },
    },

    cancelProps: {
      variant: "default",
    },

    onConfirm,
  });
}
