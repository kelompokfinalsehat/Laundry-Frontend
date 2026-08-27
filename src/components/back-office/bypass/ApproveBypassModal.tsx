"use client";

import { useState } from "react";
import { Button, Modal, PasswordInput, Stack, Textarea, Text } from "@mantine/core";
import type { ApproveBypassPayload } from "@/types/api/bypass.types";

type Props = {
  opened: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (payload: ApproveBypassPayload) => Promise<void>;
};

export function ApproveBypassModal({ opened, isSubmitting, onClose, onSubmit }: Props) {
  const [problemNote, setProblemNote] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => {
    if (isSubmitting) return;
    setProblemNote("");
    setPassword("");
    onClose();
  };

  const handleSubmit = async () => {
    if (!problemNote.trim() || !password) return;
    await onSubmit({
      problemNote: problemNote.trim(),
      password,
    });
    setProblemNote("");
    setPassword("");
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Setujui Permintaan Bypass" centered>
      <Stack gap="md">
        <Text size="sm" c="var(--color-text-secondary)">
          Menyetujui permintaan ini akan memperbarui kuantitas item sesuai hasil validasi worker dan melanjutkan proses pengerjaan.
        </Text>

        <Textarea
          label="Catatan Masalah"
          placeholder="Jelaskan penyebab perbedaan kuantitas"
          required
          minRows={4}
          value={problemNote}
          onChange={(event) => setProblemNote(event.currentTarget.value)}
          disabled={isSubmitting}
        />

        <PasswordInput
          label="Konfirmasi Password"
          placeholder="Masukkan password Anda"
          required
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          disabled={isSubmitting}
        />

        <Button color="rinseBlue" loading={isSubmitting} disabled={!problemNote.trim() || !password} onClick={handleSubmit}>
          Setujui Permintaan
        </Button>
      </Stack>
    </Modal>
  );
}
