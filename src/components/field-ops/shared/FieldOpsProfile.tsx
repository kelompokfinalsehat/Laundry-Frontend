"use client";

import { Avatar, Button, Divider, Fieldset, FileInput, Group, Modal, Paper, Skeleton, Stack, Text, TextInput, ThemeIcon, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBuilding, IconLogout, IconMail, IconPencil, IconPhone, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/authCustomer.hooks";
import { useFieldOpsProfile, useFieldOpsProfileEdit } from "@/hooks/fieldOpsProfile.hooks";
import type { FieldOpsProfile as FieldOpsProfileData } from "@/types/api/fieldOpsProfile.types";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { openActionConfirmModal } from "./OpenActionConfirmModal";

export function FieldOpsProfile() {
  const profileQuery = useFieldOpsProfile();

  return (
    <AsyncStateView
      isLoading={profileQuery.isLoading}
      isError={profileQuery.isError}
      error={profileQuery.error}
      data={profileQuery.data}
      onRetry={() => profileQuery.refetch()}
      skeleton={<ProfileSkeleton />}
    >
      {(profile) => <ProfileContent profile={profile} />}
    </AsyncStateView>
  );
}

function ProfileContent({ profile }: { profile: FieldOpsProfileData }) {
  const router = useRouter();
  const logout = useLogout();

  const [editOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);

  const { form, handleSubmit, handleReset, isPending } = useFieldOpsProfileEdit(profile, closeEdit);

  const handleOpenEdit = () => {
    handleReset();
    openEdit();
  };

  const handleCloseEdit = () => {
    handleReset();
    closeEdit();
  };

  const handleLogout = () => {
    openActionConfirmModal({
      title: "Logout",
      message: "Apakah kamu yakin ingin keluar dari akun?",
      confirmLabel: "Logout",
      onConfirm: () => {
        logout.mutate(undefined, {
          onSuccess: () => {
            router.replace("/internal/login");
          },
        });
      },
    });
  };

  return (
    <>
      <Stack gap="xl">
        <Stack align="center" gap="sm" pt="md">
          <Avatar src={profile.profilePhotoUrl ?? undefined} size={120} radius="50%" />

          <Title order={2} ta="center" style={{ color: "var(--color-text-primary)" }}>
            {profile.name}
          </Title>
        </Stack>

        <Button
          fullWidth
          size="md"
          radius="xl"
          leftSection={<IconPencil size={18} />}
          onClick={handleOpenEdit}
          style={{
            backgroundColor: "var(--color-primary-dark)",
            color: "var(--color-text-on-primary)",
          }}
        >
          Edit Profil
        </Button>

        <Paper withBorder radius="lg" style={{ overflow: "hidden" }}>
          <Group
            gap="sm"
            p="lg"
            style={{
              backgroundColor: "var(--color-primary-light)",
            }}
          >
            <ThemeIcon variant="light" radius="md">
              <IconUser size={20} />
            </ThemeIcon>

            <Title order={4} style={{ color: "var(--color-primary-dark)" }}>
              Informasi Profil
            </Title>
          </Group>

          <Stack gap="md" p="lg">
            <ProfileInfo icon={<IconUser size={18} />} label="Nama" value={profile.name} />

            <Divider />

            <ProfileInfo icon={<IconMail size={18} />} label="Email" value={profile.email} />

            <Divider />

            <ProfileInfo icon={<IconPhone size={18} />} label="Nomor HP" value={profile.phone ?? "Belum diisi"} />

            <Divider />

            <ProfileInfo icon={<IconUser size={18} />} label="Pekerjaan" value={profile.role === "DRIVER" ? "Driver" : "Worker"} />

            <Divider />

            <ProfileInfo
              icon={<IconBuilding size={18} />}
              label="Outlet Kerja Terkini"
              value={profile.currentOutlet?.name ?? "Belum terdaftar di outlet"}
              description={profile.currentOutlet?.address ?? undefined}
            />
          </Stack>
        </Paper>

        <Button
          fullWidth
          size="md"
          radius="xl"
          variant="outline"
          color="red"
          leftSection={<IconLogout size={18} />}
          loading={logout.isPending}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Stack>

      <Modal opened={editOpened} onClose={handleCloseEdit} title="Edit Profil" centered radius="lg">
        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            <Fieldset legend="Foto Profil">
              <Stack align="center">
                <Avatar src={profile.profilePhotoUrl ?? undefined} size={96} radius="50%" />

                <FileInput
                  w="100%"
                  label="Ganti Foto"
                  placeholder="Pilih foto"
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  clearable
                  {...form.getInputProps("photo")}
                />
              </Stack>
            </Fieldset>

            <Fieldset legend="Informasi Profil">
              <Stack gap="md">
                <TextInput label="Nama" placeholder="Nama lengkap" required {...form.getInputProps("name")} />

                <TextInput label="Email" placeholder="nama@email.com" required {...form.getInputProps("email")} />

                <TextInput label="Nomor HP" placeholder="08xxxxxxxxxx" {...form.getInputProps("phone")} />
              </Stack>
            </Fieldset>

            <Group grow>
              <Button type="button" variant="default" onClick={handleCloseEdit} disabled={isPending}>
                Batal
              </Button>

              <Button
                type="submit"
                loading={isPending}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Simpan
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
}

function ProfileInfo({ icon, label, value, description }: { icon: React.ReactNode; label: string; value: string; description?: string }) {
  return (
    <Group align="flex-start" wrap="nowrap">
      <ThemeIcon
        variant="light"
        radius="md"
        style={{
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary-dark)",
          flexShrink: 0,
        }}
      >
        {icon}
      </ThemeIcon>

      <Stack gap={2}>
        <Text size="xs" fw={600} tt="uppercase" c="var(--color-text-secondary)">
          {label}
        </Text>

        <Text fw={600} c="var(--color-text-primary)">
          {value}
        </Text>

        {description && (
          <Text size="sm" c="var(--color-text-secondary)">
            {description}
          </Text>
        )}
      </Stack>
    </Group>
  );
}

function ProfileSkeleton() {
  return (
    <Stack gap="xl">
      <Stack align="center">
        <Skeleton circle height={120} />
        <Skeleton height={28} width={180} />
      </Stack>

      <Skeleton height={44} radius="xl" />

      <Paper withBorder radius="lg" p="lg">
        <Stack gap="lg">
          <Skeleton height={24} width={160} />
          <Skeleton height={46} />
          <Skeleton height={46} />
          <Skeleton height={46} />
          <Skeleton height={46} />
        </Stack>
      </Paper>
    </Stack>
  );
}
