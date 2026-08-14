"use client";

import { useEffect } from "react";
import { useSearchParams} from "next/navigation";
import Link from "next/link";
import { Paper, Title, Text, Stack, Anchor, Loader } from "@mantine/core";
import { useConfirmEmailChange } from "@/hooks/profile.hooks";

export default function ConfirmEmailChangePage() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const { mutate, isPending, isSuccess, isError, error } =
    useConfirmEmailChange();

  useEffect(() => {
    if (token) mutate(token);
  }, [token]);

  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md" ta="center" align="center">
        {!token && (
          <>
            <Title order={3} style={{ color: "var(--color-error)" }}>
              Link tidak valid
            </Title>
            <Text size="sm" c="var(--color-text-secondary)">
              Link konfirmasi ini tidak lengkap.
            </Text>
          </>
        )}

        {token && isPending && <Loader color="var(--color-primary)" />}

        {isSuccess && (
          <>
            <Title order={3} style={{ color: "var(--color-primary)" }}>
              Email berhasil diperbarui
            </Title>
            <Text size="sm" c="var(--color-text-secondary)">
              Email baru kamu sudah aktif. Silakan login kembali kalau diminta.
            </Text>
            <Anchor component={Link} href="/profil" c="var(--color-primary)">
              Kembali ke profil
            </Anchor>
          </>
        )}

        {isError && (
          <>
            <Title order={3} style={{ color: "var(--color-error)" }}>
              Konfirmasi gagal
            </Title>
            <Text size="sm" c="var(--color-text-secondary)">
              {error instanceof Error
                ? error.message
                : "Link mungkin sudah kedaluwarsa atau pernah dipakai."}
            </Text>
            <Anchor component={Link} href="/profil" c="var(--color-primary)">
              Kembali ke profil
            </Anchor>
          </>
        )}
      </Stack>
    </Paper>
  );
}
