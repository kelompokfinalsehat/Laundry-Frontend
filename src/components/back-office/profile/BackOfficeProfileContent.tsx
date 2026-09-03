"use client";

import { useBackOfficeCurrentUser, useBackOfficeLogout } from "@/hooks/backOfficeAuth.hooks";
import { Avatar, Badge, Button, Divider, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconAt, IconCamera, IconEdit, IconLogout, IconPhone, IconShield, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { BackOfficeProfileForm } from "./BackOfficeProfileForm";
import { notifications } from "@mantine/notifications";
import { useUpdateBackOfficeProfilePhoto } from "@/hooks/backOfficeProfile.hooks";
import { BackOfficePasswordForm } from "./BackOfficePasswordForm";

export function BackOfficeProfileContent() {
  const router = useRouter();

  const { data: user, isLoading } = useBackOfficeCurrentUser();
  const logoutMutation = useBackOfficeLogout();
  const updatePhoto = useUpdateBackOfficeProfilePhoto();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  if (isLoading || !user) {
    return null;
  }

  const initials = user.name
    ? user.name
        .split(" ")
        .map((name) => name[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  const roleLabel = user.role === "SUPER_ADMIN" ? "Super Admin" : "Outlet Admin";

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        router.replace("/login");
      },
    });
  };

  const handlePhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      await updatePhoto.mutateAsync(file);

      notifications.show({
        title: "Berhasil",
        message: "Foto profil berhasil diperbarui.",
        color: "green",
      });
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message: error instanceof Error ? error.message : "Gagal memperbarui foto profil.",
        color: "red",
      });
    } finally {
      event.target.value = "";
    }
  };

  return (
    <Stack gap="xl">
      <div>
        <Title order={2}>Profil Saya</Title>

        <Text size="sm" c="dimmed" mt={4}>
          Informasi akun dan akses Back Office.
        </Text>
      </div>

      <Paper
        withBorder
        radius="md"
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 100,
            backgroundImage: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          }}
        />

        <Stack align="center" gap={6} px="xl" pb="xl" mt={-44}>
          <div className="relative h-22 w-22 cursor-pointer group" onClick={() => fileInputRef.current?.click()}>
            <Avatar size={88} radius="100%" src={user.profilePhotoUrl || undefined}>
              {initials}
            </Avatar>

            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <IconCamera size={24} color="white" />
            </div>
          </div>

          <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/jpg,image/gif" hidden onChange={handlePhotoChange} />

          <Text fw={700} size="lg" mt={6}>
            {user.name}
          </Text>

          <Text size="sm" c="dimmed">
            {user.email}
          </Text>

          <Badge mt={4} variant="light" color={user.role === "SUPER_ADMIN" ? "blue" : "cyan"}>
            {roleLabel}
          </Badge>
        </Stack>
      </Paper>

      <Paper withBorder radius="md" p="lg">
        <Stack gap="lg">
          <Group justify="space-between" align="flex-start">
            <div>
              <Title order={4}>Informasi Akun</Title>

              <Text size="sm" c="dimmed" mt={4}>
                Informasi akun yang sedang digunakan untuk mengakses Back Office.
              </Text>
            </div>

            {!isEditingProfile && (
              <Button variant="light" leftSection={<IconEdit size={17} />} onClick={() => setIsEditingProfile(true)}>
                Edit Profil
              </Button>
            )}
          </Group>

          <Divider />

          {isEditingProfile ? (
            <BackOfficeProfileForm name={user.name} phone={user.phone} onCancel={() => setIsEditingProfile(false)} />
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              <ProfileField icon={IconUser} label="Nama Lengkap" value={user.name} />

              <ProfileField icon={IconAt} label="Email" value={user.email} />

              <ProfileField icon={IconPhone} label="Nomor Telepon" value={user.phone || "Belum diisi"} />

              <ProfileField icon={IconShield} label="Role" value={roleLabel} />
            </SimpleGrid>
          )}
        </Stack>
      </Paper>

      <Paper withBorder radius="md" p="lg">
        <Stack gap="md">
          <Group justify="space-between">
            <div>
              <Title order={4}>Keamanan</Title>
              <Text size="sm" c="dimmed">
                Kelola password akun Anda.
              </Text>
            </div>

            {!isChangingPassword && (
              <Button variant="light" leftSection={<IconEdit size={16} />} onClick={() => setIsChangingPassword(true)}>
                Ubah Password
              </Button>
            )}
          </Group>

          <Divider />

          {isChangingPassword ? (
            <BackOfficePasswordForm onCancel={() => setIsChangingPassword(false)} />
          ) : (
            <Group gap="sm">
              <ThemeIcon variant="light" radius="xl">
                <IconShield size={18} />
              </ThemeIcon>

              <div>
                <Text fw={500}>Password</Text>
                <Text size="sm" c="dimmed">
                  Gunakan password yang kuat untuk menjaga keamanan akun.
                </Text>
              </div>
            </Group>
          )}
        </Stack>
      </Paper>

      <Paper withBorder radius="md" p="lg">
        <Group justify="space-between" align="center">
          <div>
            <Text fw={600}>Keluar dari akun</Text>

            <Text size="sm" c="dimmed" mt={4}>
              Akhiri sesi Back Office pada perangkat ini.
            </Text>
          </div>

          <Button variant="light" color="red" leftSection={<IconLogout size={17} />} loading={logoutMutation.isPending} onClick={handleLogout}>
            Keluar
          </Button>
        </Group>
      </Paper>
    </Stack>
  );
}

function ProfileField({ icon: Icon, label, value }: { icon: React.ComponentType<{ size?: number }>; label: string; value: string }) {
  return (
    <Group gap="sm" align="flex-start" wrap="nowrap">
      <ThemeIcon
        size={38}
        radius="md"
        variant="light"
        style={{
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary)",
          flexShrink: 0,
        }}
      >
        <Icon size={18} />
      </ThemeIcon>

      <div style={{ minWidth: 0 }}>
        <Text size="xs" c="dimmed">
          {label}
        </Text>

        <Text size="sm" fw={500} mt={2}>
          {value}
        </Text>
      </div>
    </Group>
  );
}
