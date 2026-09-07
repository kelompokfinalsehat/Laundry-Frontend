This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
````
public/
  favicon/
    android-chrome-192x192.png
    android-chrome-512x512.png
    apple-touch-icon.png
    favicon-16x16.png
    favicon-32x32.png
    favicon.ico
    site.webmanifest
  images/
    delivery.png
    forbidden.png
    menunggu-cucian.png
    popomaskot.png
    popoTeam.png
    request-pickup.png
src/
  app/
    (auth)/
      internal/
        (auth)/
          accept-invitation/
            page.tsx
          forgot-password/
            page.tsx
          login/
            page.tsx
          reset-password/
            page.tsx
      login/
        page.tsx
      lupa-password/
        page.tsx
      register/
        page.tsx
      reset-password/
        page.tsx
      verify-email/
        page.tsx
    (customer)/
      alamat/
        page.tsx
      pesanan/
        [id]/
          invoice/
            page.tsx
          komplain/
            page.tsx
          page.tsx
        payment/
          error/
            page.tsx
          finish/
            page.tsx
          unfinish/
            page.tsx
        page.tsx
      profil/
        confirm-email/
          page.tsx
        edit/
          page.tsx
        page.tsx
      request-pickup/
        page.tsx
      layout.tsx
    internal/
      (back-office)/
        outlet-admin/
          absensi/
            page.tsx
          antrean/
            driver/
              page.tsx
            station/
              page.tsx
          bypass/
            [bypassId]/
              page.tsx
            page.tsx
          dashboard/
            page.tsx
          komplain/
            [complaintId]/
              page.tsx
            page.tsx
          laporan/
            kinerja-karyawan/
              page.tsx
            penjualan/
              page.tsx
          penerimaan/
            page.tsx
          pesanan/
            [orderId]/
              page.tsx
            page.tsx
          tim-outlet/
            page.tsx
          layout.tsx
        profile/
          layout.tsx
          page.tsx
        super-admin/
          dashboard/
            page.tsx
          harga/
            laundry/
              page.tsx
            shipping/
              page.tsx
          item-laundry/
            [laundryItemId]/
              page.tsx
            baru/
              page.tsx
            page.tsx
          karyawan/
            [userId]/
              page.tsx
            undang/
              page.tsx
            page.tsx
          komplain/
            page.tsx
          laporan/
            kinerja-karyawan/
              page.tsx
            penjualan/
              page.tsx
          outlet/
            [outletId]/
              page.tsx
            baru/
              page.tsx
            page.tsx
          pesanan/
            [orderId]/
              page.tsx
            page.tsx
          layout.tsx
        layout.tsx
      (field-ops)/
        driver/
          absensi/
            page.tsx
          profil/
            page.tsx
          riwayat/
            [assignmentId]/
              page.tsx
            page.tsx
          tugas/
            aktif/
              page.tsx
            page.tsx
          layout.tsx
          page.tsx
        worker/
          absensi/
            page.tsx
          profil/
            page.tsx
          riwayat/
            [assignmentId]/
              page.tsx
            page.tsx
          tugas/
            aktif/
              page.tsx
            page.tsx
          layout.tsx
          page.tsx
        layout.tsx
      forbidden/
        page.tsx
      layout.tsx
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
  components/
    authCustomer/
      ForgotPasswordForm.tsx
      GoogleLoginButton.tsx
      LoginCustomerContent.tsx
      LoginCustomerForm.tsx
      RegisterCustomerForm.tsx
      ResetPasswordForm.tsx
      VerifyEmailForm.tsx
    back-office/
      absensi/
        AttandanceTable.tsx
        AttendanceContent.tsx
        AttendanceFilters.tsx
        AttendanceSummary.tsx
      bypass/
        ApproveBypassModal.tsx
        BypassContent.tsx
        BypassDecisionSection.tsx
        BypassDetailContent.tsx
        BypassDetailHeader.tsx
        BypassDifferenceTable.tsx
        BypassFilters.tsx
        BypassRequestInformation.tsx
        BypassTable.tsx
        RejectBypassModal.tsx
      dashboard/
        DashboardContent.tsx
        DashboardSkeleton.tsx
        DashboardSummary.tsx
        OrderOverview.tsx
        PendingBypass.tsx
        PendingReceive.tsx
        RecentOrders.tsx
        RevenueTrendChart.tsx
      employee/
        EmployeeActions.tsx
        EmployeeContent.tsx
        EmployeeDetailContent.tsx
        EmployeeDetailHeader.tsx
        EmployeeFilters.tsx
        EmployeeInformation.tsx
        EmployeeOutlet.tsx
        EmployeeStatus.tsx
        EmployeeTable.tsx
        InviteEmployeeContent.tsx
        InviteEmployeeForm.tsx
      komplain/
        ComplaintContent.tsx
        ComplaintDecisionModal.tsx
        ComplaintFilters.tsx
        ComplaintTable.tsx
      laporan/
        kinerja-karyawan/
          EmployeePerformanceContent.tsx
          EmployeePerformanceFilters.tsx
          EmployeePerformanceSkeleton.tsx
          EmployeePerformanceSummary.tsx
          EmployeePerformanceTable.tsx
        penjualan/
          SalesReportBreakdown.tsx
          SalesReportContent.tsx
          SalesReportFilters.tsx
          SalesReportSkeleton.tsx
          SalesReportSummary.tsx
          SalesTrend.tsx
      laundry-item/
        CreateLaundryItemContent.tsx
        EditLaundryItemContent.tsx
        LaundryItemContent.tsx
        LaundryItemFilters.tsx
        LaundryItemForm.tsx
        LaundryItemTable.tsx
      order/
        DriverAssignmentsSection.tsx
        OrderBillSection.tsx
        OrderComplaintSection.tsx
        OrderContent.tsx
        OrderCustomerSection.tsx
        OrderDetailContent.tsx
        OrderDetailHeader.tsx
        OrderFilters.tsx
        OrderInformationSection.tsx
        OrderItemsSection.tsx
        OrderPickupSection.tsx
        OrderTable.tsx
        WorkerAssignmentsSection.tsx
      outlet/
        CreateOutletContent.tsx
        EditOutletContent.tsx
        OutletContent.tsx
        OutletFilters.tsx
        OutletForm.tsx
        OutletTable.tsx
      penerimaan/
        CreateOrderModal.tsx
        ReceiveOrderModal.tsx
        ReceptionContent.tsx
        ReceptionFilters.tsx
        ReceptionTable.tsx
      pricing/
        laundry/
          LaundryPricingContent.tsx
          LaundryPricingModal.tsx
        shipping/
          DeactivateShippingRateModal.tsx
          ShippingRateContent.tsx
          ShippingRateFilters.tsx
          ShippingRateModal.tsx
          ShippingRateTable.tsx
      profile/
        BackOfficePasswordForm.tsx
        BackOfficeProfileContent.tsx
        BackOfficeProfileForm.tsx
      shared/
        BackOfficeAppShell.tsx
        BackOfficeNotificationWatcher.tsx
        BackOfficeProfileMenu.tsx
        TableSkeleton.tsx
      tim-outlet/
        OutletTeamContent.tsx
        OutletTeamFilters.tsx
        OutletTeamTable.tsx
    customer/
      alamat/
        AddressCard.tsx
        AddressForm.tsx
        AddressList.tsx
        AddressMapSection.tsx
        AddressRegionFields.tsx
      order/
        complaint/
          complaintDetail.tsx
          complaintForm.tsx
        RequestPickup/
          pickupTimeHelper.ts
          requestPickupForm .tsx
          Requestpickupformfields.tsx
          Requestpickupreview.tsx
        billDetailContent.tsx
        billDetailView.tsx
        OrderActionsSection.tsx
        OrderBillSummaryCard.tsx
        orderDetail.tsx
        OrderInfoCard.tsx
        orderList.tsx
        orderTimeLine.tsx
      profil/
        emailChangeForm.tsx
        profileForm.tsx
        profilePhotoUpload.tsx
      CustomerAppShell.tsx
    field-ops/
      driver/
        DriverActiveSummary.tsx
        DriverActiveTaskView.tsx
        DriverAvailableAssignment.tsx
        DriverDestinationCard.tsx
        DriverHistory.tsx
        DriverHistoryDetail.tsx
      shared/
        AttendanceHistory.tsx
        AttendanceStatusCard.tsx
        BottomNav.tsx
        FieldOpsAppShell.tsx
        FieldOpsGreeting.tsx
        FieldOpsHome.tsx
        FieldOpsProfile.tsx
        OpenActionConfirmModal.tsx
      worker/
        active/
          WorkerAssignedTask.tsx
          WorkerInProgressTask.tsx
          WorkerOnHoldBypassTask.tsx
        WorkerActiveSummary.tsx
        WorkerActiveTaskView.tsx
        WorkerAvailableAssignment.tsx
        WorkerHistory.tsx
    internalAuth/
      AcceptInvitationForm.tsx
      EmployeeForgotPasswordForm.tsx
      EmployeeLoginForm.tsx
      EmployeeResetPasswordForm.tsx
    landing-page/
      css/
        CarouselSection.module.css
      CaraKerjaSection.tsx
      CarouselSection.tsx
      FeatureSection.tsx
      HeroSection.tsx
    shared/
      Headers/
        Header.tsx
        HeaderProfile.tsx
        nav-links.ts
      Location/
        LocationPermission/
          hooks/
            useLocationPermission.tsx
          lib/
            browser-detect.ts
          LocationPermissionGate.tsx
        LocationPicker.tsx
        LocationPickerInner.tsx
      AuthBootstrap.tsx
      FeaturePlaceholder.tsx
      Footer.tsx
      ListPageScaffold.tsx
    ui/
      AsyncStateView.tsx
      ConfirmDialog.tsx
      EmptyState.tsx
      ErrorState.tsx
      PageHeader.tsx
      ServerDataTable.tsx
      ServerListNotice.tsx
      ServerPagination.tsx
      StatusBadge.tsx
  hooks/
    addressCustomer/
      address.hooks.ts
      Useaddresslocationpreview .ts
      Useaddressregioncascade.ts
    order/
      order.hooks.ts
      request-pickup.hooks.ts
    attendance.hooks.ts
    authCustomer.hooks.ts
    authEmployee.hooks.ts
    backOfficeAuth.hooks.ts
    backOfficeNotification.hooks.ts
    backOfficeProfile.hooks.ts
    bypass.hooks.ts
    complaint.hooks.ts
    dashboard.hooks.ts
    driver.hooks.ts
    employee.hooks.ts
    fieldOpsProfile.hooks.ts
    fieldOpsTaskNotification.hooks.ts
    laundry-item.hooks.ts
    order.hooks.ts
    outlet.hooks.ts
    outletForm.hooks.ts
    pricing.hooks.ts
    profile.hooks.ts
    reception.hooks.ts
    report.hooks.ts
    worker.hooks.ts
  lib/
    api/
      addressCustomer.api.ts
      attendance.api.ts
      auth.api.ts
      authEmployee.api.ts
      axios.ts
      backOfficeAuth.api.ts
      backOfficeProfile.api.ts
      bypass.api.ts
      complaint.api.ts
      dashboard.api.ts
      driver.api.ts
      employee.api.ts
      fieldOpsProfile.api.ts
      laundry-item.api.ts
      order.api.ts
      orderCustomer.api.ts
      outlet.api.ts
      pricing.api.ts
      profileCustomer.api.ts
      report.api.ts
      worker.api.ts
    auth/
      AuthGateCustomer.tsx
      AuthGateEmployee.tsx
    constants/
      customer-status.ts
      order.ts
      routes.ts
      status.ts
    query/
      buildQueryString.ts
    theme/
      theme.ts
    utils/
      order-error.util.ts
    validation/
      address.validation.ts
      auth.validation.ts
      employee.validation.ts
      fieldOpsProfile.validation.ts
      laundry-item.validation.ts
      order.validation.ts
      outlet.validation.ts
      profile.validation.ts
      worker.validation.ts
    safe-redirect.ts
  providers/
    Providers.tsx
  stores/
    useAuthStore.ts
  types/
    api/
      address.types.ts
      attendance.types.ts
      bypass.types.ts
      complaint.types.ts
      dashboard.types.ts
      driver.types.ts
      employee.types.ts
      fieldOpsProfile.types.ts
      index.ts
      laundry-item.types.ts
      order.types.ts
      orders.types.ts
      outlet.types.ts
      pricing.types.ts
      profile.type.ts
      profile.types.ts
      report.types.ts
      worker.types.ts
  utils/
    dateFormatter.ts
    fieldops.date.ts
    index.ts
    redirect.ts
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
````

# Files

## File: public/favicon/site.webmanifest
````
{
  "name": "Popo Laundry",
  "short_name": "Popo Laundry",
  "icons": [
    {
      "src": "/favicon/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#2C6E8C",
  "background_color": "#F5F6F2",
  "display": "standalone"
}
````

## File: src/app/internal/(back-office)/outlet-admin/antrean/driver/page.tsx
````typescript
import { ListPageScaffold } from '@/components/shared/ListPageScaffold';
export default function Page(){return <ListPageScaffold title='Antrean Driver' description='FIFO ditentukan backend dan tidak boleh diurutkan ulang bebas.'/>}
````

## File: src/app/internal/(back-office)/outlet-admin/antrean/station/page.tsx
````typescript
import { ListPageScaffold } from '@/components/shared/ListPageScaffold';
export default function Page(){return <ListPageScaffold title='Antrean Station' description='FIFO per washing, ironing, dan packing dari backend.'/>}
````

## File: src/app/internal/(back-office)/outlet-admin/komplain/[complaintId]/page.tsx
````typescript
import { FeaturePlaceholder } from '@/components/shared/FeaturePlaceholder';
export default function Page(){return <FeaturePlaceholder title='Keputusan Komplain' description='Outlet Admin memilih Disetujui/Ditolak dan wajib memberi tanggapan.'/>}
````

## File: src/app/internal/(back-office)/profile/layout.tsx
````typescript
"use client";

import { Center, Loader } from "@mantine/core";
import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
import { useBackOfficeCurrentUser } from "@/hooks/backOfficeAuth.hooks";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isLoading } = useBackOfficeCurrentUser();

  if (isLoading || !user) {
    return (
      <Center mih="100vh">
        <Loader size="md" />
      </Center>
    );
  }

  const role =
    user.role === "SUPER_ADMIN"
      ? "SUPER_ADMIN"
      : "OUTLET_ADMIN";

  return (
    <BackOfficeAppShell role={role}>
      {children}
    </BackOfficeAppShell>
  );
}
````

## File: src/app/internal/(back-office)/profile/page.tsx
````typescript
import { BackOfficeProfileContent } from "@/components/back-office/profile/BackOfficeProfileContent";

export default function BackOfficeProfilePage() {
  return <BackOfficeProfileContent />;
}
````

## File: src/app/internal/forbidden/page.tsx
````typescript
"use client";

import { Stack, Title, Text, Button, Center } from "@mantine/core";
import Link from "next/link";
import forbidden from "@/../public/images/forbidden.png";
import Image from "next/image";

export default function ForbiddenPage() {
  return (
    <Center mih="100vh" px="md">
      <Stack align="center" gap="md" maw={420} ta="center">
        <Image
          alt="ilustrasi"
          src={forbidden}
          sizes="(max-width: 768px) 60vw, 300px"
          style={{
            width: "100%",
            maxWidth: 280,
            height: "auto",
          }}
        />

        <Title order={2} style={{ color: "var(--color-text-primary)" }}>
          Akses Ditolak
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Kamu tidak memiliki izin untuk mengakses halaman ini. Role atau
          cakupan outlet akunmu tidak sesuai dengan halaman yang dituju.
        </Text>

        <Button
          component={Link}
          href="/"
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Beranda
        </Button>
      </Stack>
    </Center>
  );
}
````

## File: src/components/back-office/profile/BackOfficePasswordForm.tsx
````typescript
"use client";

import { Button, Group, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { useUpdateBackOfficeProfile } from "@/hooks/backOfficeProfile.hooks";
import { updateProfileSchema } from "@/lib/validation/profile.validation";

type Props = {
  onCancel: () => void;
};

export function BackOfficePasswordForm({ onCancel }: Props) {
  const updateProfile = useUpdateBackOfficeProfile();

  const form = useForm({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    validate: {
      currentPassword: (value) =>
        value ? null : "Password saat ini wajib diisi",

      newPassword: (value) => {
        const result = updateProfileSchema.shape.newPassword.safeParse(value);

        if (!result.success) {
          return result.error.issues[0]?.message;
        }

        if (value.length < 8) {
          return "Password baru minimal 8 karakter";
        }

        return null;
      },

      confirmPassword: (value, values) =>
        value === values.newPassword
          ? null
          : "Konfirmasi password tidak sama",
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await updateProfile.mutateAsync({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });

      notifications.show({
        title: "Berhasil",
        message: "Password berhasil diperbarui.",
        color: "green",
      });

      form.reset();
      onCancel();
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message:
          error instanceof Error
            ? error.message
            : "Gagal memperbarui password.",
        color: "red",
      });
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <PasswordInput
          label="Password Saat Ini"
          placeholder="Masukkan password saat ini"
          withAsterisk
          {...form.getInputProps("currentPassword")}
        />

        <PasswordInput
          label="Password Baru"
          placeholder="Minimal 8 karakter"
          withAsterisk
          {...form.getInputProps("newPassword")}
        />

        <PasswordInput
          label="Konfirmasi Password Baru"
          placeholder="Ulangi password baru"
          withAsterisk
          {...form.getInputProps("confirmPassword")}
        />

        <Group justify="flex-end" mt="sm">
          <Button
            variant="default"
            onClick={onCancel}
            disabled={updateProfile.isPending}
          >
            Batal
          </Button>

          <Button type="submit" loading={updateProfile.isPending}>
            Ubah Password
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
````

## File: src/components/back-office/profile/BackOfficeProfileContent.tsx
````typescript
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
````

## File: src/components/back-office/shared/BackOfficeProfileMenu.tsx
````typescript
"use client";

import {
  Avatar,
  Box,
  Group,
  Menu,
  Skeleton,
  Text,
  UnstyledButton,
} from "@mantine/core";

import {
  IconChevronDown,
  IconLogout,
  IconUser,
} from "@tabler/icons-react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/useAuthStore";
import { useBackOfficeLogout } from "@/hooks/backOfficeAuth.hooks";

type Props = {
  role: "OUTLET_ADMIN" | "SUPER_ADMIN";
};

export function BackOfficeProfileMenu({ role }: Props) {
  const user = useAuthStore((state) => state.user);
  const isInitializing = useAuthStore(
    (state) => state.isInitializing,
  );

  const router = useRouter();

  const { mutate: logout, isPending } = useBackOfficeLogout();

  if (isInitializing) {
    return (
      <Group gap="xs">
        <Skeleton height={36} width={36} radius="xl" />
        <Skeleton height={14} width={90} visibleFrom="sm" />
      </Group>
    );
  }

  if (!user) {
    return null;
  }

  const initials =
    user.name
      ?.split(" ")
      .map((item) => item[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "?";

  const roleLabel =
    role === "SUPER_ADMIN"
      ? "Super Admin"
      : "Outlet Admin";

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        useAuthStore.getState().clearUser();
        router.replace("/internal/login");
      },
    });
  };

  return (
    <Menu
      shadow="md"
      width={240}
      position="bottom-end"
    >
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar
              src={user.profilePhotoUrl || undefined}
              radius="xl"
              size={38}
            >
              {initials}
            </Avatar>

            <Box visibleFrom="sm">
              <Text size="sm" fw={600}>
                {user.name}
              </Text>

              <Text size="xs" c="dimmed">
                {roleLabel}
              </Text>
            </Box>

            <Box
              visibleFrom="sm"
              component="span"
              style={{
                display: "inline-flex",
              }}
            >
              <IconChevronDown size={16} />
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>
          {user.email}
        </Menu.Label>

        <Menu.Item
          component={Link}
          href="/internal/profile"
          leftSection={<IconUser size={16} />}
        >
          Profil Saya
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item
          color="red"
          leftSection={<IconLogout size={16} />}
          onClick={handleLogout}
          disabled={isPending}
        >
          {isPending ? "Keluar..." : "Keluar"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
````

## File: src/components/landing-page/css/CarouselSection.module.css
````css
.indicator {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--color-background) 33%, transparent);
  transition: width 200ms ease;
}

.indicator[data-active] {
  width: 24px;
  background-color: var(--color-accent);
}
````

## File: src/components/landing-page/CaraKerjaSection.tsx
````typescript
"use client";

import { Text, Title, SimpleGrid, Box, Paper, Flex } from "@mantine/core";

const STEPS: {
  n: number;
  title: string;
  desc: string;
}[] = [
  {
    n: 1,
    title: "Request Pickup",
    desc: "Ajukan penjemputan lewat aplikasi, kurir kami datang ke lokasimu.",
  },
  {
    n: 2,
    title: "Dicuci & Dirapikan",
    desc: "Pakaian dicuci, dikeringkan, dan dilipat dengan rapi.",
  },
  {
    n: 3,
    title: "Diantar Kembali",
    desc: "Laundry bersih diantar langsung sampai depan pintu.",
  },
];

export default function CaraKerja() {
  return (
    <Box component="section" id="cara-kerja" py={20} mt={50}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Text
          tt="uppercase"
          fw={700}
          fz={13}
          c="orange.6"
          style={{ letterSpacing: 1.2 }}
        >
          Tiga langkah
        </Text>

        <Title order={2} mt={8} fz={{ base: 28, sm: 34 }}>
          Semudah menjemur baju
        </Title>
      </Flex>
      <Box pos="relative" mt={56}>
        {/* garis putus-putus penghubung, hanya tampil di desktop */}
        <Box
          visibleFrom="md"
          pos="absolute"
          top={22}
          left="8%"
          right="8%"
          h={0}
          style={{ borderTop: "2px dashed var(--mantine-color-gray-4)" }}
        />

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={32}>
          {STEPS.map((s) => (
            <Paper
              key={s.n}
              pos="relative"
              radius="lg"
              shadow="sm"
              pt={40}
              pb={28}
              px={24}
              ta="center"
              style={{
                boxShadow: "0 12px 30px rgba(16, 48, 79, 0.06)",
              }}
            >
              {/* nomor bulat */}
              <Box
                pos="absolute"
                top={-22}
                left="50%"
                w={44}
                h={44}
                style={{
                  transform: "translateX(-50%)",
                  borderRadius: "50%",
                  background: "var(--mantine-color-orange-4)",
                  boxShadow: "0 6px 16px rgba(245, 185, 66, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "var(--mantine-color-dark-7)",
                }}
              >
                {s.n}
              </Box>

              <Title order={3} mt={20} fz={19}>
                {s.title}
              </Title>

              <Text mt={10} fz={15} lh={1.6} c="dimmed">
                {s.desc}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
````

## File: src/components/shared/FeaturePlaceholder.tsx
````typescript
"use client";

import { Alert, Card, Grid, Stack, Text, Title } from "@mantine/core";
import { PageHeader } from "@/components/ui/PageHeader";

export function FeaturePlaceholder({
  title,
  description,
  notes = [],
}: {
  title: string;
  description: string;
  notes?: string[];
}) {
  return (
    <Stack>
      <PageHeader title={title} description={description} />
      {notes.length > 0 && (
        <Alert title="Aturan bisnis halaman ini">
          {notes.map((n) => (
            <Text key={n} size="sm">
              • {n}
            </Text>
          ))}
        </Alert>
      )}
      <Grid>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder>
            <Title order={4}>Loading</Title>
            <Text c="dimmed">Gunakan Skeleton saat mengambil data.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder>
            <Title order={4}>Empty</Title>
            <Text c="dimmed">Tampilkan empty state yang instruktif.</Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder>
            <Title order={4}>Error</Title>
            <Text c="dimmed">Tampilkan pesan error dan tombol retry.</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
````

## File: src/components/shared/ListPageScaffold.tsx
````typescript
"use client";
import { useState } from "react";
import { TextInput, Stack } from "@mantine/core";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServerListNotice } from "@/components/ui/ServerListNotice";
import { ServerDataTable } from "@/components/ui/ServerDataTable";
import { ServerPagination } from "@/components/ui/ServerPagination";

type Row = { id: string; name: string; status: string };
export function ListPageScaffold({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(20);
  const data: Row[] = [];
  return (
    <Stack>
      <PageHeader title={title} description={description} />
      <ServerListNotice />
      <TextInput
        label="Pencarian"
        placeholder="Query dikirim ke backend (debounce 300–500 ms)"
      />
      <ServerDataTable
        data={data}
        rowKey={(r) => r.id}
        columns={[
          { key: "name", label: "Nama", render: (r) => r.name },
          { key: "status", label: "Status", render: (r) => r.status },
        ]}
      />
      <ServerPagination
        page={page}
        pageSize={pageSize}
        totalItems={0}
        totalPages={0}
        onPageChange={setPage}
        onPageSizeChange={(s) => {
          setPage(1);
          setPageSize(s);
        }}
      />
    </Stack>
  );
}
````

## File: src/components/ui/ConfirmDialog.tsx
````typescript
"use client";
import {
  Button,
  Group,
  Modal,
  PasswordInput,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useState } from "react";

export function ConfirmDialog({
  opened,
  title,
  message,
  confirmLabel = "Konfirmasi",
  withPasswordReentry = false,
  requireReason = false,
  loading = false,
  onClose,
  onConfirm,
}: {
  opened: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  withPasswordReentry?: boolean;
  requireReason?: boolean;
  loading?: boolean;
  onClose: () => void;
  onConfirm: (payload: { password?: string; reason?: string }) => void;
}) {
  const [password, setPassword] = useState("");
  const [reason, setReason] = useState("");
  const blocked =
    (withPasswordReentry && !password) || (requireReason && !reason.trim());
  return (
    <Modal opened={opened} onClose={onClose} title={title} centered>
      <Stack>
        <Text>{message}</Text>
        {withPasswordReentry && (
          <PasswordInput
            label="Masukkan ulang password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
        )}
        {requireReason && (
          <Textarea
            label="Keterangan masalah"
            value={reason}
            onChange={(e) => setReason(e.currentTarget.value)}
            required
          />
        )}
        <Group justify="flex-end">
          <Button variant="default" onClick={onClose}>
            Batal
          </Button>
          <Button
            color="red"
            loading={loading}
            disabled={blocked}
            onClick={() => onConfirm({ password, reason })}
          >
            {confirmLabel}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/ui/EmptyState.tsx
````typescript
"use client";

import { Button, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconInbox } from "@tabler/icons-react";
import type { ReactNode } from "react";

export function EmptyState({
  icon,
  title = "Belum ada data",
  description,
  action,
}: {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: { label: string; onClick: () => void };
}) {
  return (
    <Stack align="center" py={48} gap="xs">
      <ThemeIcon size={56} radius="xl" variant="light" color="gray">
        {icon ?? <IconInbox size={28} />}
      </ThemeIcon>
      <Text fw={600}>{title}</Text>
      {description && (
        <Text size="sm" c="dimmed" ta="center" maw={320}>
          {description}
        </Text>
      )}
      {action && (
        <Button variant="light" size="xs" mt="xs" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </Stack>
  );
}
````

## File: src/components/ui/ErrorState.tsx
````typescript
"use client";

import { Button, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

export function ErrorState({
  title = "Gagal memuat data",
  description,
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <Stack align="center" py={48} gap="xs">
      <ThemeIcon size={56} radius="xl" variant="light" color="red">
        <IconAlertTriangle size={28} />
      </ThemeIcon>
      <Text fw={600}>{title}</Text>
      {description && (
        <Text size="sm" c="dimmed" ta="center" maw={320}>
          {description}
        </Text>
      )}
      {onRetry && (
        <Button color="red" variant="light" size="xs" mt="xs" onClick={onRetry}>
          Coba lagi
        </Button>
      )}
    </Stack>
  );
}
````

## File: src/components/ui/ServerDataTable.tsx
````typescript
"use client";
import { Loader, Table, Text } from "@mantine/core";
import { EmptyState } from "./EmptyState";

export type Column<T> = {
  key: string;
  label: string;
  render: (row: T) => React.ReactNode;
};
export function ServerDataTable<T>({
  data,
  columns,
  loading = false,
  rowKey,
}: {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  rowKey: (row: T) => string;
}) {
  if (loading) return <Loader />;
  if (!data.length) return <EmptyState />;
  return (
    <Table.ScrollContainer minWidth={700}>
      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            {columns.map((c) => (
              <Table.Th key={c.key}>{c.label}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((row) => (
            <Table.Tr key={rowKey(row)}>
              {columns.map((c) => (
                <Table.Td key={c.key}>{c.render(row)}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
````

## File: src/components/ui/ServerListNotice.tsx
````typescript
import { Alert, Text } from "@mantine/core";
export function ServerListNotice() {
  return (
    <Alert color="yellow" title="Aturan list wajib" mb="md">
      <Text fw={700}>Pagination, filtering, dan sorting diproses server.</Text>
      <Text size="sm">
        Frontend hanya mengirim query URL; jangan mengambil seluruh data lalu
        memakai Array.filter/sort/slice.
      </Text>
    </Alert>
  );
}
````

## File: src/components/ui/StatusBadge.tsx
````typescript
import { Badge } from "@mantine/core";
import { CUSTOMER_STATUS_LABEL } from "@/lib/constants/status";
import type { CustomerOrderStatus } from "@/types/api";

const colors: Partial<Record<CustomerOrderStatus, string>> = {
  MENUNGGU_PEMBAYARAN: "orange",
  LAUNDRY_SIAP_DIANTAR: "teal",
  SELESAI: "green",
  DIBATALKAN_CUSTOMER: "red",
  DALAM_PENANGANAN_KOMPLAIN: "grape",
};
export function StatusBadge({ status }: { status: CustomerOrderStatus }) {
  return (
    <Badge color={colors[status] ?? "blue"} variant="light">
      {CUSTOMER_STATUS_LABEL[status]}
    </Badge>
  );
}
````

## File: src/hooks/backOfficeAuth.hooks.ts
````typescript
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { backOfficeAuthApi } from "@/lib/api/backOfficeAuth.api";
import { useAuthStore } from "@/stores/useAuthStore";

export const BACK_OFFICE_AUTH_QUERY_KEY = ["back-office", "auth", "me"];

export function useBackOfficeCurrentUser() {
  return useQuery({
    queryKey: BACK_OFFICE_AUTH_QUERY_KEY,
    queryFn: backOfficeAuthApi.me,
    retry: false,
  });
}

export function useBackOfficeLogout() {
  const queryClient = useQueryClient();
  const clearUser = useAuthStore((state) => state.clearUser);

  return useMutation({
    mutationFn: backOfficeAuthApi.logout,

    onSuccess: () => {
      clearUser();

      queryClient.setQueryData(BACK_OFFICE_AUTH_QUERY_KEY, null);
      queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}
````

## File: src/hooks/backOfficeProfile.hooks.ts
````typescript
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { backOfficeProfileApi } from "@/lib/api/backOfficeProfile.api";
import { BACK_OFFICE_AUTH_QUERY_KEY } from "./backOfficeAuth.hooks";

export function useUpdateBackOfficeProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: backOfficeProfileApi.updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BACK_OFFICE_AUTH_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}

export function useUpdateBackOfficeProfilePhoto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: backOfficeProfileApi.updateProfilePhoto,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: BACK_OFFICE_AUTH_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: ["auth", "me"],
      });
    },
  });
}
````

## File: src/lib/api/backOfficeAuth.api.ts
````typescript
import { MeResponse, MessageResponse } from "@/types/api";
import { api } from "./axios";

export class BackOfficeAuthApi {
  async me() {
    const { data } = await api.get<MeResponse>("/internal/profile/me");

    return data.data;
  }

  async logout() {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/logout",
    );

    return data.data;
  }
}

export const backOfficeAuthApi = new BackOfficeAuthApi();
````

## File: src/lib/api/backOfficeProfile.api.ts
````typescript
import type { UpdatePhotoResponse, UpdateProfileResponse } from "@/types/api/profile.type";

import { MAX_PHOTO_SIZE_BYTES, profilePhotoSchema, type UpdateProfileSchema } from "@/lib/validation/profile.validation";

import { api, ApiError } from "./axios";

class BackOfficeProfileApi {
  async updateProfile(payload: UpdateProfileSchema) {
    const body: Record<string, string> = {
      name: payload.name!,
    };

    if (payload.phone) {
      body.phone = payload.phone;
    }

    if (payload.newPassword) {
      body.newPassword = payload.newPassword;
      body.currentPassword = payload.currentPassword!;
    }

    const { data } = await api.patch<{
      data: UpdateProfileResponse;
    }>("/internal/profile/me", body);

    return data.data;
  }

  async updateProfilePhoto(file: File) {
    const parsed = profilePhotoSchema.safeParse(file);

    if (!parsed.success) {
      const isTooLarge = file.size > MAX_PHOTO_SIZE_BYTES;

      throw new ApiError(isTooLarge ? "FILE_TOO_LARGE" : "FILE_TYPE_INVALID", parsed.error.issues[0].message);
    }

    const formData = new FormData();

    formData.append("PROFILE_PHOTO", file);

    const { data } = await api.patch<{
      data: UpdatePhotoResponse;
    }>("/internal/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  }
}

export const backOfficeProfileApi = new BackOfficeProfileApi();
````

## File: src/lib/auth/AuthGateEmployee.tsx
````typescript
"use client";

import { useCurrentUser } from "@/hooks/authCustomer.hooks";
import { Role } from "@/types/api";
import { Center, Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export type AuthGateEmployeeProps = {
  children: React.ReactNode;
  allowedRoles: Role[];
};

export function AuthGateEmployee({
  children,
  allowedRoles,
}: AuthGateEmployeeProps) {
  const router = useRouter();
  const { data: user, isLoading, isError } = useCurrentUser();

  const isUnauthenticated = !isLoading && (isError || !user);
  const isCustomer = !isLoading && !!user && user.accountType === "customer";
  const isWrongRole =
    !isLoading && !!user && !allowedRoles.includes(user.role as Role);
 

  useEffect(() => {
    if (isLoading) return;

    if (isUnauthenticated) {
      router.replace("/login");
      return;
    }

    if (isCustomer) {
      router.replace("/");
      return;
    }

    if (isWrongRole) {
      router.replace("/internal/forbidden");
      return;
    }
  }, [isLoading, isUnauthenticated, isCustomer, isWrongRole, router]);

  if (isLoading || isUnauthenticated || isCustomer || isWrongRole) {
    return (
      <Center mih="100vh">
        <Loader size="md" />
      </Center>
    );
  }

  return <>{children}</>;
}
````

## File: src/lib/constants/routes.ts
````typescript
import type { Role } from "@/types/api";

export const ROLE_HOME: Record<Role, string> = {
  CUSTOMER: "/beranda",
  WORKER: "/internal/worker",
  DRIVER: "/internal/driver",
  OUTLET_ADMIN: "/internal/outlet-admin/dashboard",
  SUPER_ADMIN: "/internal/super-admin/dashboard",
};

export const INTERNAL_ROLES: Role[] = [
  "WORKER",
  "DRIVER",
  "OUTLET_ADMIN",
  "SUPER_ADMIN",
];
````

## File: src/lib/constants/status.ts
````typescript
import type { CustomerOrderStatus } from "@/types/api";

export const CUSTOMER_STATUS_LABEL: Record<CustomerOrderStatus, string> = {
  MENUNGGU_PENJEMPUTAN_DRIVER: "Menunggu Penjemputan Driver",
  LAUNDRY_SEDANG_MENUJU_OUTLET: "Laundry Sedang Menuju Outlet",
  LAUNDRY_TELAH_SAMPAI_OUTLET: "Laundry Telah Sampai Outlet",
  LAUNDRY_SEDANG_DICUCI: "Laundry Sedang Dicuci",
  LAUNDRY_SEDANG_DISETRIKA: "Laundry Sedang Disetrika",
  LAUNDRY_SEDANG_DI_PACKING: "Laundry Sedang Di Packing",
  MENUNGGU_PEMBAYARAN: "Menunggu Pembayaran",
  LAUNDRY_SIAP_DIANTAR: "Laundry Siap Diantar",
  LAUNDRY_SEDANG_DIKIRIM_MENUJU_CUSTOMER:
    "Laundry Sedang Dikirim Menuju Customer",
  MENUNGGU_KONFIRMASI_CUSTOMER: "Menunggu Konfirmasi Customer",
  SELESAI: "Laundry Telah Diterima Customer / Selesai",
  DIBATALKAN_CUSTOMER: "Dibatalkan Customer",
  DALAM_PENANGANAN_KOMPLAIN: "Dalam Penanganan Komplain",
};
````

## File: src/lib/query/buildQueryString.ts
````typescript
import type { ListQuery } from "@/types/api";

export function buildQueryString(query: ListQuery): string {
  const params = new URLSearchParams({
    page: String(query.page),
    pageSize: String(query.pageSize),
    ...(query.search ? { search: query.search } : {}),
    ...(query.sortBy ? { sortBy: query.sortBy } : {}),
    ...(query.sortOrder ? { sortOrder: query.sortOrder } : {}),
  });
  Object.entries(query.filters ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== "") params.set(key, String(value));
  });
  return params.toString();
}
````

## File: src/lib/theme/theme.ts
````typescript
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "rinseBlue",
  colors: {
    rinseBlue: [
      "#e6f0f4",
      "#c2dbe4",
      "#9dc5d3",
      "#78afc2",
      "#549ab1",
      "#2c6e8c",
      "#245a71",
      "#1c4557",
      "#14313d",
      "#0c1c23",
    ],
  },
  defaultRadius: "md",
  radius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
  },
  shadows: {
    sm: '0 1px 2px rgba(38, 49, 58, 0.06)',
    md: '0 4px 12px rgba(38, 49, 58, 0.08)',
  },
  fontFamily: "var(--font-body), sans-serif",
headings: { fontFamily: "var(--font-display), sans-serif" },
});
````

## File: AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
````

## File: CLAUDE.md
````markdown
@AGENTS.md
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
````

## File: postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: src/app/(auth)/internal/(auth)/accept-invitation/page.tsx
````typescript
import { Center, Loader, Paper, Stack } from "@mantine/core";
import { Suspense } from "react";

import { AcceptInvitationForm } from "@/components/internalAuth/AcceptInvitationForm";

export default function AcceptInvitationPage() {
  return (
    <Suspense
      fallback={
        <Center mih="60vh">
          <Loader size="md" />
        </Center>
      }
    >
      <Paper
        maw={420}
        mx="auto"
        mt={64}
        p={32}
        radius="md"
        withBorder
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <AcceptInvitationForm />
        </Stack>
      </Paper>
    </Suspense>
  );
}
````

## File: src/app/(auth)/internal/(auth)/forgot-password/page.tsx
````typescript
import { Paper, Stack } from "@mantine/core";

import { EmployeeForgotPasswordForm } from "@/components/internalAuth/EmployeeForgotPasswordForm";

export default function EmployeeForgotPasswordPage() {
  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md">
        <EmployeeForgotPasswordForm />
      </Stack>
    </Paper>
  );
}
````

## File: src/app/(auth)/internal/(auth)/reset-password/page.tsx
````typescript
import { Center, Loader, Paper, Stack } from "@mantine/core";
import { Suspense } from "react";

import { EmployeeResetPasswordForm } from "@/components/internalAuth/EmployeeResetPasswordForm";

export default function EmployeeResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <Center mih="60vh">
          <Loader />
        </Center>
      }
    >
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md">
          <EmployeeResetPasswordForm />
        </Stack>
      </Paper>
    </Suspense>
  );
}
````

## File: src/app/(customer)/pesanan/payment/error/page.tsx
````typescript
"use client";

import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { IconCircleX } from "@tabler/icons-react";
import Link from "next/link";

export default function PaymentErrorPage() {
  return (
    <Paper
      maw={500}
      mx="auto"
      mt={{ base: 40, sm: 80 }}
      p={{ base: "lg", sm: "xl" }}
      withBorder
      radius="md"
    >
      <Stack align="center" gap="md">
        <IconCircleX
          size={64}
          stroke={1.5}
          color="var(--color-error)"
        />

        <Title order={2} ta="center">
          Pembayaran Gagal
        </Title>

        <Text
          ta="center"
          c="var(--color-text-secondary)"
        >
          Pembayaran tidak dapat diproses. Silakan coba
          kembali atau pilih metode pembayaran lainnya.
        </Text>

        <Button
          component={Link}
          href="/pesanan"
          fullWidth
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Pesanan
        </Button>
      </Stack>
    </Paper>
  );
}
````

## File: src/app/(customer)/pesanan/payment/finish/page.tsx
````typescript
"use client";

import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function PaymentFinishPage() {
  return (
    <Paper
      maw={500}
      mx="auto"
      mt={{ base: 40, sm: 80 }}
      p={{ base: "lg", sm: "xl" }}
      withBorder
      radius="md"
    >
      <Stack align="center" gap="md">
        <IconCircleCheck
          size={64}
          stroke={1.5}
          color="var(--color-primary)"
        />

        <Title order={2} ta="center">
          Pembayaran Berhasil
        </Title>

        <Text
          ta="center"
          c="var(--color-text-secondary)"
        >
          Terima kasih. Pembayaran kamu sedang diproses.
          Status pembayaran akan diperbarui secara otomatis.
        </Text>

        <Button
          component={Link}
          href="/pesanan"
          fullWidth
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Lihat Pesanan
        </Button>
      </Stack>
    </Paper>
  );
}
````

## File: src/app/(customer)/pesanan/payment/unfinish/page.tsx
````typescript
"use client";

import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import Link from "next/link";

export default function PaymentUnfinishPage() {
  return (
    <Paper
      maw={500}
      mx="auto"
      mt={{ base: 40, sm: 80 }}
      p={{ base: "lg", sm: "xl" }}
      withBorder
      radius="md"
    >
      <Stack align="center" gap="md">
        <IconClock
          size={64}
          stroke={1.5}
          color="var(--color-accent)"
        />

        <Title order={2} ta="center">
          Pembayaran Belum Selesai
        </Title>

        <Text
          ta="center"
          c="var(--color-text-secondary)"
        >
          Pembayaran kamu belum selesai. Kamu dapat
          melanjutkan pembayaran dari halaman tagihan.
        </Text>

        <Button
          component={Link}
          href="/pesanan"
          fullWidth
          mt="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Pesanan
        </Button>
      </Stack>
    </Paper>
  );
}
````

## File: src/app/internal/(back-office)/outlet-admin/absensi/page.tsx
````typescript
import { AttendanceContent } from "@/components/back-office/absensi/AttendanceContent";

export default function Page() {
  return (<AttendanceContent />)
}
````

## File: src/app/internal/(back-office)/outlet-admin/bypass/[bypassId]/page.tsx
````typescript
import { BypassDetailContent } from "@/components/back-office/bypass/BypassDetailContent";

type Props = {
  params: Promise<{
    bypassId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { bypassId } = await params;

  return <BypassDetailContent bypassId={bypassId} />;
}
````

## File: src/app/internal/(back-office)/outlet-admin/bypass/page.tsx
````typescript
import { BypassContent } from "@/components/back-office/bypass/BypassContent";
export default function Page() {
  return <BypassContent />;
}
````

## File: src/app/internal/(back-office)/outlet-admin/laporan/kinerja-karyawan/page.tsx
````typescript
import { EmployeePerformanceContent } from "@/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceContent";
export default function Page() {
  return <EmployeePerformanceContent role="OUTLET_ADMIN" />;
}
````

## File: src/app/internal/(back-office)/outlet-admin/laporan/penjualan/page.tsx
````typescript
import { SalesReportContent } from "@/components/back-office/laporan/penjualan/SalesReportContent";
export default function Page() {
  return <SalesReportContent role="OUTLET_ADMIN" />;
}
````

## File: src/app/internal/(back-office)/outlet-admin/pesanan/[orderId]/page.tsx
````typescript
import { OrderDetailContent } from "@/components/back-office/order/OrderDetailContent";

export default async function Page({params}: {params: Promise<{orderId: string}>}) {
    const {orderId} = await params
  return <OrderDetailContent orderId={orderId} />
}
````

## File: src/app/internal/(back-office)/outlet-admin/pesanan/page.tsx
````typescript
import { OrderContent } from "@/components/back-office/order/OrderContent";

export default function Page() {
  return <OrderContent role="OUTLET_ADMIN" />;
}
````

## File: src/app/internal/(back-office)/outlet-admin/tim-outlet/page.tsx
````typescript
import { OutletTeamContent } from "@/components/back-office/tim-outlet/OutletTeamContent";
export default function Page() {
  return (
    <OutletTeamContent />
  );
}
````

## File: src/app/internal/(back-office)/super-admin/harga/shipping/page.tsx
````typescript
import { ShippingRateContent } from "@/components/back-office/pricing/shipping/ShippingRateContent";

export default function Page(){return <ShippingRateContent />}
````

## File: src/app/internal/(back-office)/super-admin/item-laundry/[laundryItemId]/page.tsx
````typescript
import {
  EditLaundryItemContent,
} from "@/components/back-office/laundry-item/EditLaundryItemContent";

export default function Page() {
  return <EditLaundryItemContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/item-laundry/baru/page.tsx
````typescript
import { CreateLaundryItemContent } from
  "@/components/back-office/laundry-item/CreateLaundryItemContent";

export default function Page() {
  return <CreateLaundryItemContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/karyawan/[userId]/page.tsx
````typescript
import { EmployeeDetailContent } from "@/components/back-office/employee/EmployeeDetailContent";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <EmployeeDetailContent
      userId={userId}
    />
  );
}
````

## File: src/app/internal/(back-office)/super-admin/karyawan/undang/page.tsx
````typescript
import { InviteEmployeeContent } from "@/components/back-office/employee/InviteEmployeeContent";

export default function Page() {
  return <InviteEmployeeContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/karyawan/page.tsx
````typescript
import { EmployeeContent } from "@/components/back-office/employee/EmployeeContent";

export default function Page() {
  return <EmployeeContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/outlet/[outletId]/page.tsx
````typescript
import { EditOutletContent } from "@/components/back-office/outlet/EditOutletContent";

export default function EditOutletPage() {
  return <EditOutletContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/outlet/baru/page.tsx
````typescript
import { CreateOutletContent } from "@/components/back-office/outlet/CreateOutletContent";

export default function CreateOutletPage() {
  return <CreateOutletContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/outlet/page.tsx
````typescript
import { OutletContent } from "@/components/back-office/outlet/OutletContent";

export default function OutletPage() {
  return <OutletContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/pesanan/[orderId]/page.tsx
````typescript
import { OrderDetailContent } from "@/components/back-office/order/OrderDetailContent";

type Props = {
  params: Promise<{
    orderId: string;
  }>;
};

export default async function Page({
  params,
}: Props) {
  const { orderId } = await params;

  return (
    <OrderDetailContent
      orderId={orderId}
    />
  );
}
````

## File: src/app/internal/(back-office)/super-admin/pesanan/page.tsx
````typescript
import { OrderContent } from "@/components/back-office/order/OrderContent";

export default function Page() {
  return <OrderContent role="SUPER_ADMIN" />;
}
````

## File: src/app/internal/(field-ops)/driver/profil/page.tsx
````typescript
import { FieldOpsProfile } from "@/components/field-ops/shared/FieldOpsProfile";

export default function DriverProfilePage() {
  return <FieldOpsProfile />;
}
````

## File: src/app/internal/(field-ops)/driver/riwayat/[assignmentId]/page.tsx
````typescript
import { DriverHistoryDetail } from "@/components/field-ops/driver/DriverHistoryDetail";

export default function Page() {
  return (
    <DriverHistoryDetail
      taskTypeLabel="Delivery"
      orderCode="#ORD-00201"
      destination={{
        name: "Ani Wijaya",
        address: "Jl. Melati No. 12, Tangerang Selatan",
        phone: "0812-3456-7890",
      }}
      assignedAt="09:00"
      completedAt="10:40"
    />
  );
}
````

## File: src/app/internal/(field-ops)/worker/profil/page.tsx
````typescript
import { FieldOpsProfile } from "@/components/field-ops/shared/FieldOpsProfile";

export default function WorkerProfilePage() {
  return <FieldOpsProfile />;
}
````

## File: src/app/internal/(field-ops)/worker/riwayat/[assignmentId]/page.tsx
````typescript
import { DriverHistoryDetail } from "@/components/field-ops/driver/DriverHistoryDetail";

export default function Page() {
  return (
    <DriverHistoryDetail
      taskTypeLabel="Delivery"
      orderCode="#ORD-00201"
      destination={{
        name: "Ani Wijaya",
        address: "Jl. Melati No. 12, Tangerang Selatan",
        phone: "0812-3456-7890",
      }}
      assignedAt="09:00"
      completedAt="10:40"
    />
  );
}
````

## File: src/components/authCustomer/ForgotPasswordForm.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Button,
  Divider,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  forgotPasswordSchema,
  registerCustomerSchema,
} from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import {
  useForgotPasswordCustomer,
  useLoginWithGoogle,
} from "@/hooks/authCustomer.hooks";
import { GoogleSignInButton } from "./GoogleLoginButton";

export function ForgotPasswordForm() {
  const router = useRouter();

  const { mutate, isPending, isSuccess, data, error } =
    useForgotPasswordCustomer();

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: schemaResolver(forgotPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values);
  });

  const { mutate: mutateGoogle, error: googleError } = useLoginWithGoogle();

  function handleGoogleIdToken(idToken: string) {
    mutateGoogle(
      { idToken },
      { onSuccess: (result) => router.push(result.homeUrl) },
    );
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "EMAIL_ALREADY_REGISTERED"
        ? "Email ini sudah terdaftar. Silakan login, atau gunakan email lain."
        : error.message
      : googleError instanceof ApiError
        ? googleError.message
        : null;

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-primary)" }}>
          Cek email kamu
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          <strong>{data.message}</strong>.
        </Text>
        <Anchor
          component={Link}
          href="/login"
          size="sm"
          c="var(--color-primary-dark)"
        >
          Kembali ke halaman login
        </Anchor>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
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

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="nama@email.com"
            {...form.getInputProps("email")}
          />

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kirim
          </Button>
        </Stack>
      </form>

      <Divider label="atau" labelPosition="center" />

      <GoogleSignInButton onIdToken={handleGoogleIdToken} text="signup_with" />

      <Anchor
        component={Link}
        href="/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Kembali ke Login
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/authCustomer/LoginCustomerContent.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";

import { LoginCustomerForm } from "@/components/authCustomer/LoginCustomerForm";

export default function LoginPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const justVerified = searchParams.get("verified") === "1";

  const intendedUrl =
    searchParams.get("intended_url") ?? undefined;

  function handleBack() {
    router.push("/");
  }

  return (
    <Center
      mih="100vh"
      px={{ base: 16, sm: 24 }}
      py={{ base: 24, sm: 40 }}
    >
      <Stack
        w="100%"
        maw={420}
        gap="sm"
      >
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--color-text-primary)"
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Group gap={4}>
            <IconChevronLeft size={16} stroke={2} />
            Kembali
          </Group>
        </Anchor>

        <Paper
          w="100%"
          p={{ base: 24, sm: 32 }}
          radius="md"
          withBorder
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <div>
              <Title
                order={3}
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Masuk ke Popo Laundry
              </Title>

              <Text
                size="sm"
                c="var(--color-text-secondary)"
              >
                Masukkan email dan password kamu.
              </Text>
            </div>

            {justVerified && (
              <Alert
                style={{
                  backgroundColor: "var(--color-success-light)",
                  color: "var(--color-success)",
                }}
              >
                Email berhasil diverifikasi. Silakan masuk.
              </Alert>
            )}

            <LoginCustomerForm
              intendedUrl={intendedUrl}
            />
          </Stack>
        </Paper>
      </Stack>
    </Center>
  );
}
````

## File: src/components/authCustomer/RegisterCustomerForm.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Button,
  Divider,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { registerCustomerSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import {
  useRegisterCustomer,
  useLoginWithGoogle,
} from "@/hooks/authCustomer.hooks";
import { GoogleSignInButton } from "./GoogleLoginButton";

export function RegisterCustomerForm() {
  const router = useRouter();

  const { mutate, isPending, isSuccess, data, error } = useRegisterCustomer();

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: schemaResolver(registerCustomerSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values);
  });

  const { mutate: mutateGoogle, error: googleError } = useLoginWithGoogle();

  function handleGoogleIdToken(idToken: string) {
    mutateGoogle(
      { idToken },
      { onSuccess: (result) => router.push(result.homeUrl) },
    );
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "EMAIL_ALREADY_REGISTERED"
        ? "Email ini sudah terdaftar. Silakan login, atau gunakan email lain."
        : error.message
      : googleError instanceof ApiError
        ? googleError.message
        : null;

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-primary)" }}>
          Cek email kamu
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Kami sudah kirim link verifikasi ke <strong>{data.email}</strong>.
          Klik link itu untuk melengkapi pendaftaran. Link berlaku 1 jam.
        </Text>
        <Anchor
          component={Link}
          href="/login"
          size="sm"
          c="var(--color-primary-dark)"
        >
          Kembali ke halaman login
        </Anchor>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
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

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="nama@email.com"
            {...form.getInputProps("email")}
          />

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Daftar
          </Button>
        </Stack>
      </form>

      <Divider label="atau" labelPosition="center" />

      <GoogleSignInButton onIdToken={handleGoogleIdToken} text="signup_with" />

      <Anchor
        component={Link}
        href="/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Sudah punya akun? Masuk di sini
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/authCustomer/ResetPasswordForm.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { resetPasswordSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useResetPasswordCustomer } from "@/hooks/authCustomer.hooks";

export function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const { mutate, isPending, isSuccess, data, error } =
    useResetPasswordCustomer();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: schemaResolver(resetPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    if (!token) {
      return;
    }

    mutate({
      token,
      newPassword: values.password,
    });
  });

  const apiError = error instanceof ApiError ? error : null;

  /*
   * Token tidak ditemukan di URL
   */
  if (!token) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-error)" }}>
          Link tidak valid
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Link reset password tidak valid atau tidak lengkap. Silakan minta link
          reset password baru.
        </Text>

        <Anchor
          component={Link}
          href="/lupa-password"
          c="var(--color-primary-dark)"
        >
          Minta link reset password
        </Anchor>
      </Stack>
    );
  }

  /*
   * Password berhasil direset
   */
  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-primary)" }}>
          Password berhasil diubah
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          {data?.message ??
            "Password berhasil diperbarui. Silakan login dengan password baru."}
        </Text>

        <Button
          component={Link}
          href="/login"
          fullWidth
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Login
        </Button>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Title
          order={3}
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Reset Password
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Buat password baru untuk akun kamu.
        </Text>
      </div>

      {apiError && (
        <Alert
          color="red"
          style={{
            backgroundColor: "var(--color-error-light)",
            color: "var(--color-error)",
          }}
        >
          {apiError.message}
        </Alert>
      )}

      <form onSubmit={submit}>
        <Stack gap="md">
          <PasswordInput
            label="Password Baru"
            placeholder="Minimal 8 karakter"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Konfirmasi Password"
            placeholder="Masukkan kembali password"
            {...form.getInputProps("confirmPassword")}
          />

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Reset Password
          </Button>
        </Stack>
      </form>

      <Anchor
        component={Link}
        href="/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Kembali ke Login
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/authCustomer/VerifyEmailForm.tsx
````typescript
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Paper,
  Title,
  Text,
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Alert,
  Anchor,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { useVerifyCustomerEmail } from "@/hooks/authCustomer.hooks";
import { ApiError } from "@/lib/api/axios";
import { emailVerificationSchema } from "@/lib/validation/auth.validation";

export default function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, isPending, error } = useVerifyCustomerEmail();

  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    validate: schemaResolver(emailVerificationSchema),
  });

  function handleSubmit(values: { name: string; password: string }) {
    if (!token) return;

    mutate(
      { token, ...values },
      {
        onSuccess: () => router.push("/login?verified=1"),
      },
    );
  }

  const apiError = error instanceof ApiError ? error : null;

  // Token nggak ada di URL sama sekali — link rusak/nggak lengkap.
  if (!token) {
    return (
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md" ta="center" align="center">
          <Title order={3} style={{ color: "var(--color-error)" }}>
            Link tidak valid
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Link verifikasi ini tidak lengkap. Pastikan kamu membuka link persis
            seperti yang dikirim ke email.
          </Text>
          <Anchor component={Link} href="/register" c="var(--color-primary)">
            Kembali ke halaman daftar
          </Anchor>
        </Stack>
      </Paper>
    );
  }

  if (apiError?.code === "TOKEN_EXPIRED") {
    return (
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md" ta="center" align="center">
          <Title order={3} style={{ color: "var(--color-error)" }}>
            Link sudah kedaluwarsa
          </Title>

          <Text size="sm" c="var(--color-text-secondary)">
            {apiError.message}
          </Text>

          <Button
            component={Link}
            href="/resend-verification"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kirim ulang link verifikasi
          </Button>
        </Stack>
      </Paper>
    );
  }

  if (apiError?.code === "TOKEN_ALREADY_USED") {
    return (
      <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
        <Stack gap="md" ta="center" align="center">
          <Title order={3} style={{ color: "var(--color-error)" }}>
            Email sudah diverifikasi
          </Title>

          <Text size="sm" c="var(--color-text-secondary)">
            Link verifikasi ini sudah pernah digunakan. Silakan login
            menggunakan akun kamu.
          </Text>

          <Button
            component={Link}
            href="/login"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kembali ke login
          </Button>
        </Stack>
      </Paper>
    );
  }
  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md">
        <div>
          <Title order={3} style={{ color: "var(--color-text-primary)" }}>
            Lengkapi akun kamu
          </Title>
          <Text size="sm" c="var(--color-text-secondary)">
            Isi nama dan buat password untuk menyelesaikan pendaftaran.
          </Text>
        </div>

        {apiError && (
          <Alert
            color="red"
            style={{
              backgroundColor: "var(--color-error-light)",
              color: "var(--color-error)",
            }}
          >
            {apiError.message}
          </Alert>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <TextInput
              label="Nama Lengkap"
              placeholder="Nama kamu"
              {...form.getInputProps("name")}
            />
            <PasswordInput
              label="Password"
              placeholder="Minimal 8 karakter"
              {...form.getInputProps("password")}
            />

            <Button
              type="submit"
              loading={isPending}
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
              }}
            >
              Verifikasi & Buat Akun
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/absensi/AttandanceTable.tsx
````typescript
"use client";

import { Badge, Group, Stack, Table, Text, UnstyledButton } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import type { OutletAttendanceItem, OutletAttendanceSortBy } from "@/types/api/employee.types";
import type { PaginatedResponse } from "@/types/api";
import type { AttendanceStatus } from "@/types/api/employee.types";
import type { SortOrder } from "@/types/api";
import { useHover } from "@mantine/hooks";

type Props = {
  data: OutletAttendanceItem[];
  meta: PaginatedResponse<OutletAttendanceItem>["meta"];
  sortBy: OutletAttendanceSortBy;
  sortOrder: SortOrder;
  onSort: (column: OutletAttendanceSortBy) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50 | 100) => void;
};

function getRoleLabel(role: OutletAttendanceItem["role"]) {
  const roleMap: Record<string, string> = {
    WORKER: "Worker",
    DRIVER: "Driver",
  };

  return roleMap[role] ?? role;
}

function getStatusLabel(status: AttendanceStatus) {
  const statusMap: Record<AttendanceStatus, string> = {
    NOT_CLOCKED_IN: "Belum absen",
    CLOCKED_IN: "Sedang bertugas",
    CLOCKED_OUT: "Sudah pulang",
  };

  return statusMap[status];
}

function getStatusColor(status: AttendanceStatus) {
  const colorMap: Record<AttendanceStatus, string> = {
    NOT_CLOCKED_IN: "gray",
    CLOCKED_IN: "blue",
    CLOCKED_OUT: "green",
  };

  return colorMap[status];
}

function formatTime(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function SortableHeader({
  label,
  column,
  sortBy,
  sortOrder,
  onSort,
}: {
  label: string;

  column: OutletAttendanceSortBy;

  sortBy: OutletAttendanceSortBy;

  sortOrder: SortOrder;

  onSort: (column: OutletAttendanceSortBy) => void;
}) {
  const isActive = sortBy === column;
    const {ref} = useHover()
  return (
    <Table.Th>
      <UnstyledButton
      ref={ref}
        onClick={() => onSort(column)}
        style={{
          width: "100%",
        }}
      >
        <Group gap={6} wrap="nowrap">
          <Text size="sm" fw={600}>
            {label}
          </Text>

          {isActive && (sortOrder === "asc" ? <IconChevronUp size={15} /> : <IconChevronDown size={15} />)}
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

export function AttendanceTable({ data, meta, sortBy, sortOrder, onSort, onPageChange, onPageSizeChange }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={850}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <SortableHeader label="Karyawan" column="name" sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

              <Table.Th>Role</Table.Th>

              <SortableHeader label="Jam Masuk" column="clockInAt" sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

              <SortableHeader label="Jam Pulang" column="clockOutAt" sortBy={sortBy} sortOrder={sortOrder} onSort={onSort} />

              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => (
              <Table.Tr key={employee.employeeId}>
                <Table.Td>
                  <Stack gap={2}>
                    <Text size="sm" fw={600} c="var(--color-text-primary)">
                      {employee.employeeName}
                    </Text>

                    <Text size="xs" c="var(--color-text-secondary)">
                      {employee.employeeEmail}
                    </Text>
                  </Stack>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">{getRoleLabel(employee.role)}</Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">{formatTime(employee.clockInAt)}</Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">{formatTime(employee.clockOutAt)}</Text>
                </Table.Td>

                <Table.Td>
                  <Badge variant="light" color={getStatusColor(employee.status)}>
                    {getStatusLabel(employee.status)}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50 | 100}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/absensi/AttendanceContent.tsx
````typescript
"use client";

import { Paper, Stack } from "@mantine/core";

import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import TableSkeleton from "../shared/TableSkeleton";

import { AttendanceFilters } from "./AttendanceFilters";
import { AttendanceTable } from "./AttandanceTable";
import { AttendanceSummary } from "./AttendanceSummary";

import { useEmployeeAttendanceHooks } from "@/hooks/employee.hooks";

export function AttendanceContent() {
  const {
    form,
    handleReset,
    attendance,
    setPage,
    setPageSize,
    sortBy,
    sortOrder,
    handleSort,
  } = useEmployeeAttendanceHooks();

  return (
    <Stack gap="lg">
      <PageHeader
        title="Monitoring Absensi"
        description="Pantau kehadiran worker dan driver pada outlet."
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor:
            "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <AttendanceFilters
            form={form}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={attendance.isLoading}
            isError={attendance.isError}
            error={attendance.error}
            data={attendance.data}
            onRetry={() =>
              attendance.refetch()
            }
            isEmpty={(response) =>
              response.data.data.length === 0
            }
            emptyTitle="Data absensi tidak ditemukan"
            emptyDescription="Tidak ada data absensi yang sesuai dengan filter."
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <>
                <AttendanceSummary
                  summary={
                    response.data.summary
                  }
                />

                <AttendanceTable
                  data={response.data.data}
                  meta={response.meta}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  onSort={handleSort}
                  onPageChange={setPage}
                  onPageSizeChange={(value) => {
                    setPageSize(
                      value as
                        | 10
                        | 20
                        | 50
                        | 100,
                    );

                    setPage(1);
                  }}
                />
              </>
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
````

## File: src/components/back-office/absensi/AttendanceFilters.tsx
````typescript
import { FilterOutletAttendanceValues } from "@/lib/validation/employee.validation";
import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { IconRefresh, IconSearch } from "@tabler/icons-react";

type Props = {
  form: UseFormReturnType<FilterOutletAttendanceValues>;
  onReset: () => void;
};

const ROLE_OPTIONS = [
  {
    value: "WORKER",
    label: "Worker",
  },
  {
    value: "DRIVER",
    label: "Driver",
  },
];

const STATUS_OPTIONS = [
  {
    value: "NOT_CLOCKED_IN",
    label: "Belum absen",
  },
  {
    value: "CLOCKED_IN",
    label: "Sedang bertugas",
  },
  {
    value: "CLOCKED_OUT",
    label: "Sudah pulang",
  },
];

export function AttendanceFilters({ form, onReset }: Props) {
  return (
    <Group align="flex-end" wrap="wrap" gap="sm">
      <TextInput
        label="Cari"
        placeholder="Cari nama atau email"
        leftSection={<IconSearch size={16} />}
        style={{
          flex: 1,
          minWidth: 220,
        }}
        {...form.getInputProps("search")}
      />
      <DatePickerInput label="Tanggal" placeholder="Pilih tanggal" valueFormat="DD MMM YYYY" clearable w={180} {...form.getInputProps("date")} />
      <Select label="Role" placeholder="Semua role" clearable data={ROLE_OPTIONS} w={160} {...form.getInputProps("role")} />
      <Select label="Status" placeholder="Semua status" clearable data={STATUS_OPTIONS} w={180} {...form.getInputProps("status")} />
      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
````

## File: src/components/back-office/absensi/AttendanceSummary.tsx
````typescript
import { OutletAttendanceSummary } from "@/types/api/employee.types";
import { Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconClock, IconLogin, IconLogout, IconUser } from "@tabler/icons-react";

type Props = {
  summary: OutletAttendanceSummary;
};

export function AttendanceSummary({ summary }: Props) {
  const items = [
    { label: "Total Karyawan", value: summary.totalEmployees, icon: IconUser },
    { label: "Belum Absen", value: summary.notClockedIn, icon: IconClock },
    { label: "Sedang Bertugas", value: summary.clockedIn, icon: IconLogin },
    { label: "Sudah Pulang", value: summary.clockedOut, icon: IconLogout },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="sm">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Paper key={item.label} withBorder radius="md" p="md">
            <Group justify="space-between" align="flex-start" wrap="nowrap">
              <Stack gap={4}>
                <Text size="sm" c="var(--color-text-secondary)">
                  {item.label}
                </Text>
                <Text size="xl" fw={700}>
                    {item.value}
                </Text>
                <Icon size={20} />
              </Stack>
            </Group>
          </Paper>
        );
      })}
    </SimpleGrid>
  );
}
````

## File: src/components/back-office/bypass/ApproveBypassModal.tsx
````typescript
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
````

## File: src/components/back-office/bypass/BypassContent.tsx
````typescript
"use client";

import { Paper, Stack } from "@mantine/core";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useBypassHooks } from "@/hooks/bypass.hooks";

import { BypassFilters } from "./BypassFilters";
import { BypassTable } from "./BypassTable";
import TableSkeleton from "../shared/TableSkeleton";

export function BypassContent() {
  const { query, handleFilterChange, handleSortByChange, handleReset, isLoading, isError, data, error, refetch, handlePageChange, handlePageSizeChange, handleSelectBypass } =
    useBypassHooks();

  return (
    <Stack gap="lg">
      <PageHeader title="Permintaan Bypass" description="Kelola permintaan bypass yang diajukan karyawan." />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <BypassFilters
            filters={{
              search: query.search,
              status: query.status,
              stationType: query.stationType,
            }}
            onChange={handleFilterChange}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={data}
            onRetry={refetch}
            isEmpty={(result) => result.data.length === 0}
            skeleton={<TableSkeleton />}
          >
            {(result) => (
              <BypassTable
                data={result.data}
                meta={result.meta}
                sortBy={query.sortBy ?? "createdAt"}
                sortOrder={query.sortOrder ?? "desc"}
                onSort={handleSortByChange}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onSelect={handleSelectBypass}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
````

## File: src/components/back-office/bypass/BypassDecisionSection.tsx
````typescript
"use client";

import { BypassStatus } from "@/types/api";
import { Button, Group, Paper, Stack, Text } from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

type Props = {
  status: BypassStatus;
  isApproving?: boolean;
  isRejecting?: boolean;
  onApprove: () => void;
  onReject: () => void;
};

export function BypassDecisionSection({ status, isApproving = false, isRejecting = false, onApprove, onReject }: Props) {
  if (status !== "PENDING") {
    return null;
  }
  const isLoading = isApproving || isRejecting;
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <div>
          <Text fw={600}>Keputusan Permintaan</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Periksa kembali perbedaan kuantitas sebelum mengambil keputusan.
          </Text>
        </div>

        <Group justify="flex-end" gap="sm">
          <Button variant="default" color="red" leftSection={<IconX size={16} />} loading={isRejecting} disabled={isLoading} onClick={onReject}>
            Tolak
          </Button>

          <Button color="rinseBlue" leftSection={<IconCheck size={16} />} loading={isApproving} disabled={isLoading} onClick={onApprove}>
            Setujui
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/bypass/BypassDetailContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useBypassDetailHooks } from "@/hooks/bypass.hooks";
import { ApproveBypassModal } from "./ApproveBypassModal";
import { BypassDetailHeader } from "./BypassDetailHeader";
import { BypassDecisionSection } from "./BypassDecisionSection";
import { BypassDifferenceTable } from "./BypassDifferenceTable";
import { BypassRequestInformation } from "./BypassRequestInformation";
import { RejectBypassModal } from "./RejectBypassModal";

type Props = {
  bypassId: string;
};

export function BypassDetailContent({ bypassId }: Props) {
  const {
    bypassQuery,
    approveBypass,
    rejectBypass,
    setApproveModalOpened,
    setRejectModalOpened,
    approveModalOpened,
    handleApproveModalClose,
    handleApprove,
    rejectModalOpened,
    handleRejectModalClose,
    handleReject,
  } = useBypassDetailHooks(bypassId);
  return (
    <>
      <AsyncStateView
        isLoading={bypassQuery.isLoading}
        isError={bypassQuery.isError}
        error={bypassQuery.error}
        data={bypassQuery.data}
        onRetry={() => bypassQuery.refetch()}
        emptyTitle="Permintaan bypass tidak ditemukan"
        emptyDescription="Data permintaan bypass yang kamu cari tidak tersedia."
      >
        {(response) => {
          const bypass = response.data;

          return (
            <Stack gap="lg">
              <BypassDetailHeader bypass={bypass} />

              <BypassRequestInformation bypass={bypass} />

              <BypassDifferenceTable differences={bypass.differences} />

              <BypassDecisionSection
                status={bypass.status}
                isApproving={approveBypass.isPending}
                isRejecting={rejectBypass.isPending}
                onApprove={() => setApproveModalOpened(true)}
                onReject={() => setRejectModalOpened(true)}
              />
            </Stack>
          );
        }}
      </AsyncStateView>

      <ApproveBypassModal
        opened={approveModalOpened}
        isSubmitting={approveBypass.isPending}
        onClose={handleApproveModalClose}
        onSubmit={handleApprove}
      />

      <RejectBypassModal opened={rejectModalOpened} isSubmitting={rejectBypass.isPending} onClose={handleRejectModalClose} onConfirm={handleReject} />
    </>
  );
}
````

## File: src/components/back-office/bypass/BypassDifferenceTable.tsx
````typescript
"use client";

import { Badge, Group, Paper, Table, Text } from "@mantine/core";
import type { QuantityDifference } from "@/types/api/bypass.types";

type Props = {
  differences: QuantityDifference[];
};

function formatDifference(value: number) {
  if (value > 0) {
    return `+${value}`;
  }
  return value.toString();
}

export function BypassDifferenceTable({ differences }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Group justify="space-between" mb="xs">
        <div>
          <Text fw={600}>Perbedaan Kuantitas</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Bandingkan data pesanan dengan kuantitas yang diajukan worker.
          </Text>
        </div>

        <Badge variant="light" color="yellow">
          {differences.length} item
        </Badge>
      </Group>

      <Table.ScrollContainer minWidth={650}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Item Laundry</Table.Th>

              <Table.Th ta="center">Kuantitas Pesanan</Table.Th>

              <Table.Th ta="center">Kuantitas Worker</Table.Th>

              <Table.Th ta="right">Selisih</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {differences.map((difference) => (
              <Table.Tr key={difference.orderItemId}>
                <Table.Td>
                  <Text size="sm" fw={500}>
                    {difference.itemName}
                  </Text>
                </Table.Td>

                <Table.Td ta="center">
                  <Text size="sm">{difference.officialQuantity}</Text>
                </Table.Td>

                <Table.Td ta="center">
                  <Text size="sm" fw={600}>
                    {difference.submittedQuantity}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Badge variant="light" color={difference.difference > 0 ? "green" : "red"}>
                    {formatDifference(difference.difference)}
                  </Badge>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Paper>
  );
}
````

## File: src/components/back-office/bypass/BypassFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { BypassQuery } from "@/types/api/bypass.types";

type BypassFiltersState = Pick<BypassQuery, "search" | "status" | "stationType">;

type Props = {
  filters: BypassFiltersState;
  onChange: (key: keyof BypassFiltersState, value: string | null) => void;
  onReset: () => void;
};

const STATUS_OPTIONS = [
  {
    value: "PENDING",
    label: "Menunggu",
  },
  {
    value: "APPROVED",
    label: "Disetujui",
  },
  {
    value: "REJECTED",
    label: "Ditolak",
  },
];

const STATION_TYPE_OPTIONS = [
  {
    value: "WASHING",
    label: "Washing",
  },
  {
    value: "IRONING",
    label: "Ironing",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

export function BypassFilters({ filters, onChange, onReset }: Props) {
  return (
    <>
      <Group align="flex-end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Kode pesanan atau worker"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || null)}
          style={{
            flex: 1,
            minWidth: 220,
          }}
        />

        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Group align="flex-end" wrap="wrap" gap="sm">
        <Select label="Status" placeholder="Semua status" clearable data={STATUS_OPTIONS} value={filters.status ?? null} onChange={(value) => onChange("status", value)} />

        <Select
          label="Station"
          placeholder="Semua station"
          clearable
          data={STATION_TYPE_OPTIONS}
          value={filters.stationType ?? null}
          onChange={(value) => onChange("stationType", value)}
        />
      </Group>
    </>
  );
}
````

## File: src/components/back-office/bypass/BypassRequestInformation.tsx
````typescript
import { Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { BypassDetail } from "@/types/api/bypass.types";
import { StationType } from "@/types/api";

type Props = {
  bypass: BypassDetail;
};

const STATION_LABEL: Record<StationType, string> = {
  WASHING: "Washing",
  IRONING: "Ironing",
  PACKING: "Packing",
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function BypassRequestInformation({ bypass }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>Informasi Permintaan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            md: 4,
          }}
        >
          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Pesanan
            </Text>

            <Text size="sm" fw={600}>
              {bypass.order.orderCode}
            </Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Worker
            </Text>

            <Text size="sm" fw={600}>
              {bypass.worker.name}
            </Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Station
            </Text>

            <Text size="sm" fw={600}>
              {STATION_LABEL[bypass.stationType]}
            </Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Diajukan Pada
            </Text>

            <Text size="sm" fw={600}>
              {formatDateTime(bypass.createdAt)}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/bypass/BypassTable.tsx
````typescript
"use client";

import {
  ActionIcon,
  Badge,
  Group,
  Table,
  Text,
  UnstyledButton,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
} from "@tabler/icons-react";

import { ServerPagination } from "@/components/ui/ServerPagination";
import {
  BypassListItem,
  BypassSortBy,
} from "@/types/api/bypass.types";
import {
  BypassStatus,
  PaginatedResponse,
  SortOrder,
  StationType,
} from "@/types/api";

type Props = {
  data: BypassListItem[];
  meta: PaginatedResponse<BypassListItem>["meta"];
  sortBy: BypassSortBy;
  sortOrder: SortOrder;
  onSort: (column: BypassSortBy) => void;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onSelect: (bypass: BypassListItem) => void;
};

function SortableHeader({
  label,
  column,
  sortBy,
  sortOrder,
  onSort,
}: {
  label: string;
  column: BypassSortBy;
  sortBy: BypassSortBy;
  sortOrder: SortOrder;
  onSort: (column: BypassSortBy) => void;
}) {
  const isActive = sortBy === column;

  return (
    <Table.Th>
      <UnstyledButton
        onClick={() => onSort(column)}
        style={{
          width: "100%",
        }}
      >
        <Group
          gap={6}
          wrap="nowrap"
        >
          <Text
            size="sm"
            fw={600}
          >
            {label}
          </Text>

          {isActive &&
            (sortOrder === "asc" ? (
              <IconChevronUp size={15} />
            ) : (
              <IconChevronDown size={15} />
            ))}
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function formatDateTime(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getStatusLabel(status: BypassStatus) {
  const statusMap: Record<BypassStatus, string> = {
    PENDING: "Menunggu",
    APPROVED: "Disetujui",
    REJECTED: "Ditolak",
  };

  return statusMap[status];
}

function getStatusColor(status: BypassStatus) {
  const colorMap: Record<BypassStatus, string> = {
    PENDING: "yellow",
    APPROVED: "green",
    REJECTED: "red",
  };

  return colorMap[status];
}

function getStationLabel(stationType: StationType) {
  const stationMap: Record<StationType, string> = {
    WASHING: "Washing",
    IRONING: "Ironing",
    PACKING: "Packing",
  };

  return stationMap[stationType];
}

export function BypassTable({
  data,
  meta,
  sortBy,
  sortOrder,
  onSort,
  onPageChange,
  onPageSizeChange,
  onSelect,
}: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table
          highlightOnHover
          verticalSpacing="sm"
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                Pesanan
              </Table.Th>

              <Table.Th>
                Worker
              </Table.Th>

              <Table.Th>
                Station
              </Table.Th>

              <Table.Th>
                Status
              </Table.Th>

              <SortableHeader
                label="Dibuat Pada"
                column="createdAt"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
              />

              <SortableHeader
                label="Diputuskan Pada"
                column="decidedAt"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
              />

              <Table.Th ta="right">
                Aksi
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((bypass) => (
              <Table.Tr key={bypass.id}>
                <Table.Td>
                  <Text
                    size="sm"
                    fw={600}
                    c="var(--color-text-primary)"
                  >
                    {bypass.order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text
                    size="sm"
                    fw={600}
                    c="var(--color-text-primary)"
                  >
                    {bypass.workerAssignment.worker?.name}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text
                    size="sm"
                    c="var(--color-text-secondary)"
                  >
                    {getStationLabel(
                      bypass.stationType
                    )}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge
                    variant="light"
                    color={getStatusColor(
                      bypass.status
                    )}
                  >
                    {getStatusLabel(
                      bypass.status
                    )}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">
                    {formatDateTime(
                      bypass.createdAt
                    )}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm">
                    {formatDateTime(
                      bypass.decidedAt
                    )}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <ActionIcon
                    variant="subtle"
                    onClick={() =>
                      onSelect(bypass)
                    }
                    aria-label="Lihat detail bypass"
                  >
                    <IconChevronRight size={18} />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={
          meta.pageSize as 10 | 20 | 50
        }
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={
          onPageSizeChange
        }
      />
    </>
  );
}
````

## File: src/components/back-office/bypass/RejectBypassModal.tsx
````typescript
"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";

type Props = {
  opened: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

export function RejectBypassModal({ opened, isSubmitting, onClose, onConfirm }: Props) {
  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Tolak Permintaan Bypass" centered>
      <Stack gap="md">
        <Group gap="xs" wrap="nowrap">
          <IconAlertTriangle size={20} color="var(--mantine-color-yellow-filled)" />

          <Text fw={600}>Anda yakin ingin menolak permintaan ini?</Text>
        </Group>

        <Text size="sm" c="var(--color-text-secondary)">
          Worker akan dikembalikan ke status assignment sebelumnya dan harus melakukan input serta validasi ulang sebelum dapat melanjutkan proses.
        </Text>

        <Group justify="flex-end" gap="sm">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button color="red" loading={isSubmitting} onClick={handleConfirm}>
            Ya, Tolak
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/dashboard/DashboardSkeleton.tsx
````typescript
import { Box, Card, Group, SimpleGrid, Skeleton, Stack } from "@mantine/core";

export default function DashboardSkeleton() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
          <SimpleGrid cols={{ base: 2 }}>
            <Group>
              <Skeleton height={10} />
              <Skeleton height={20} />
            </Group>
          </SimpleGrid>
        </Card>
      </SimpleGrid>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 6 }}>
        <Box style={{ gridColumn: "span 4" }}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
            <Group>
              <Skeleton height={20} width={"20%"} />
              <Skeleton height={300} />
            </Group>
          </Card>
        </Box>
        <Box style={{ gridColumn: "span 2" }} h={"100%"}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }} h="100%">
            <Group>
              <Skeleton height={20} width={"20%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
        </Box>
      </SimpleGrid>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }}>
        <Box style={{ gridColumn: "span 3" }} h={'100%'}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }} h={'100%'}>
            <Group>
              <Skeleton height={20} width={"20%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
        </Box>
        <Stack style={{ gridColumn: "span 2" }}>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
            <Group>
              <Skeleton height={20} width={"40%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
          <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
            <Group>
              <Skeleton height={20} width={"40%"} />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Group>
          </Card>
        </Stack>
      </SimpleGrid>
    </>
  );
}
````

## File: src/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceSkeleton.tsx
````typescript
import { Card, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import TableSkeleton from "../../shared/TableSkeleton";

export function EmployeePerformanceSkeleton() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
        <Card withBorder radius="md" padding="lg">
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
        <Card withBorder radius="md" padding="lg">
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
        <Card withBorder radius="md" padding="lg">
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
        <Card withBorder radius="md" padding="lg" style={{ gridColumn: "span 2" }}>
            <Stack gap={8}>
            <Skeleton height={20} width={'60%'} />
            <Skeleton height={20} width={'40%'} />
            <Skeleton height={20} width={'60%'} />
            </Stack>
        </Card>
      </SimpleGrid>
      <TableSkeleton />
    </>
  );
}
````

## File: src/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceSummary.tsx
````typescript
"use client";

import { Card, SimpleGrid, Stack, Text } from "@mantine/core";
import { EmployeePerformanceSummary as EmployeePerformanceSummaryType } from "@/types/api/report.types";

type Props = { summary: EmployeePerformanceSummaryType };

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(value);

export function EmployeePerformanceSummary({ summary }: Props) {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Karyawan Produktif
          </Text>
          <Text size="xl" fw={700}>
            {formatNumber(summary.totalEmployees)}
          </Text>
          <Text size="xs" c="var(--color-text-secondary)">
            Karyawan aktif bekerja
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Total Pekerjaan Selesai
          </Text>
          <Text size="xl" fw={700}>
            {formatNumber(summary.totalCompletedJobs)}
          </Text>
          <Text size="xs" c="var(--color-text-secondary)">
            Worker {formatNumber(summary.workerCompletedJobs)} · Driver {formatNumber(summary.driverCompletedJobs)}
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg">
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Rata-rata per Karyawan
          </Text>
          <Text size="xl" fw={700}>
            {formatNumber(summary.averageJobsPerEmployee)}
          </Text>
          <Text size="xs" c="var(--color-text-secondary)">
            Pekerjaan selesai per karyawan
          </Text>
        </Stack>
      </Card>

      <Card withBorder radius="md" padding="lg" style={{ gridColumn: "span 2" }}>
        <Stack gap={4}>
          <Text size="sm" c="var(--color-text-secondary)">
            Performa Tertinggi
          </Text>
          <Text size="xl" fw={700}>
            {summary.topPerformer?.employeeName ?? "Belum ada data"}
          </Text>
          {summary.topPerformer && (
            <Text size="xs" c="var(--color-text-secondary)">
              {summary.topPerformer.role === "WORKER" ? "Worker" : "Driver"} · {formatNumber(summary.topPerformer.completedJobs)} pekerjaan selesai
            </Text>
          )}
        </Stack>
      </Card>
    </SimpleGrid>
  );
}
````

## File: src/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceTable.tsx
````typescript
"use client";

import { Badge, Paper, Table, Text } from "@mantine/core";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { EmployeePerformanceItem } from "@/types/api/report.types";
import { PaginatedResponse } from "@/types/api";

type Props = {
  data: EmployeePerformanceItem[];
  meta: PaginatedResponse<EmployeePerformanceItem>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50 | 100) => void;
};

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(value);

function getRoleLabel(role: EmployeePerformanceItem["role"]) {
  return role === "DRIVER" ? "Driver" : "Worker";
}

function getRoleColor(role: EmployeePerformanceItem["role"]) {
  return role === "DRIVER" ? "blue" : "violet";
}

function formatDuration(minutes: number | null) {
  if (minutes === null) return "-";
  if (minutes < 60) return `${Math.round(minutes)} mnt`;
  return `${Math.floor(minutes / 60)} j ${Math.round(minutes % 60)} mnt`;
}

function getJobDetail(employee: EmployeePerformanceItem) {
  if (employee.role === "DRIVER") {
    return `Pickup ${employee.pickupJobs} · Delivery ${employee.deliveryJobs}`;
  }
  return `Wash ${employee.washingJobs} · Iron ${employee.ironingJobs} · Pack ${employee.packingJobs}`;
}

export function EmployeePerformanceTable({ data, meta, onPageChange, onPageSizeChange }: Props) {
  return (
    <Paper p="md" withBorder radius="md" style={{ backgroundColor: "var(--color-surface)" }}>
      <Text fw={600} mb={4}>
        Kinerja per Karyawan
      </Text>
      <Text size="sm" c="var(--color-text-secondary)" mb="md">
        Rincian pekerjaan yang selesai dan waktu penyelesaian rata-rata berdasarkan periode terpilih.
      </Text>

      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama Karyawan</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Rincian Pekerjaan</Table.Th>
              <Table.Th ta="right">Pekerjaan Selesai</Table.Th>
              <Table.Th ta="right">Rata-rata Waktu</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((employee) => (
              <Table.Tr key={employee.employeeId}>
                <Table.Td>
                  <Text size="sm" fw={600}>
                    {employee.employeeName}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge color={getRoleColor(employee.role)} variant="light">
                    {getRoleLabel(employee.role)}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {getJobDetail(employee)}
                  </Text>
                </Table.Td>
                <Table.Td ta="right">
                  <Text size="sm" fw={600}>
                    {formatNumber(employee.completedJobs)}
                  </Text>
                </Table.Td>
                <Table.Td ta="right">
                  <Text size="sm">{formatDuration(employee.averageCompletionMinutes)}</Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50 | 100}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </Paper>
  );
}
````

## File: src/components/back-office/laporan/penjualan/SalesReportSkeleton.tsx
````typescript
import { Card, SimpleGrid, Skeleton, Stack } from "@mantine/core";
import TableSkeleton from "../../shared/TableSkeleton";

export function SalesReportSkeleton() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
        {Array.from({ length: 5 }, (_, index) => (
          <Card key={index} withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
            <Stack gap={6}>
              <Skeleton height={20} width={"50%"} />
              <Skeleton height={30} width={"60%"} />
              <Skeleton height={15} width={"70%"} />
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
      <Card withBorder radius="md" padding="xl" style={{ backgroundColor: "var(--color-surface)" }}>
        <Skeleton height={300} />
      </Card>
      <TableSkeleton />
    </>
  );
}
````

## File: src/components/back-office/profile/BackOfficeProfileForm.tsx
````typescript
"use client";

import { useEffect } from "react";
import { Button, Group, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { updateProfileSchema } from "@/lib/validation/profile.validation";
import { useUpdateBackOfficeProfile } from "@/hooks/backOfficeProfile.hooks";

type Props = {
  name: string;
  phone?: string | null;
  onCancel: () => void;
};

export function BackOfficeProfileForm({ name, phone, onCancel }: Props) {
  const updateProfile = useUpdateBackOfficeProfile();

  const form = useForm({
    initialValues: {
      name,
      phone: phone ?? "",
    },

    validate: {
      name: (value) => {
        const result = updateProfileSchema.shape.name.safeParse(value);

        return result.success ? null : result.error.issues[0]?.message;
      },

      phone: (value) => {
        const result = updateProfileSchema.shape.phone.safeParse(value);

        return result.success ? null : result.error.issues[0]?.message;
      },
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    try {
      await updateProfile.mutateAsync({
        name: values.name,
        phone: values.phone,
      });

      notifications.show({
        title: "Berhasil",
        message: "Profil berhasil diperbarui.",
        color: "green",
      });

      onCancel();
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message: error instanceof Error ? error.message : "Gagal memperbarui profil.",
        color: "red",
      });
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput label="Nama Lengkap" placeholder="Masukkan nama lengkap" withAsterisk {...form.getInputProps("name")} />

        <TextInput label="Nomor Telepon" placeholder="Masukkan nomor telepon" {...form.getInputProps("phone")} />

        <Group justify="flex-end" mt="sm">
          <Button variant="default" onClick={onCancel} disabled={updateProfile.isPending}>
            Batal
          </Button>

          <Button type="submit" loading={updateProfile.isPending}>
            Simpan Perubahan
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
````

## File: src/components/back-office/shared/BackOfficeNotificationWatcher.tsx
````typescript
"use client";

import { useBackOfficeNotification } from "@/hooks/backOfficeNotification.hooks";

export function BackOfficeNotificationWatcher() {
  useBackOfficeNotification();

  return null;
}
````

## File: src/components/back-office/shared/TableSkeleton.tsx
````typescript
import { Box, Paper, SimpleGrid, Skeleton } from "@mantine/core";
import React from "react";

export default function TableSkeleton() {
  return (
    <Paper p="md">
      <SimpleGrid cols={{ base: 8 }} verticalSpacing="md">
        <Box style={{ gridColumn: "span 2" }}>
          <Skeleton height={20} width={"40%"} />
        </Box>
        <Box style={{ gridColumn: "span 3" }}>
          <Skeleton height={20} width={"40%"} />
        </Box>
        <Skeleton height={20} width={"40%"} />
        <Skeleton height={20} width={"40%"} />
        <Skeleton height={20} width={"40%"} />
        {Array.from({ length: 8 }, (_, index) => (
          <React.Fragment key={index}>
            <Box style={{ gridColumn: "span 2" }}>
              <Skeleton height={20} width={"60%"} />
            </Box>
            <Box style={{ gridColumn: "span 3" }}>
              <Skeleton height={20} width={"80%"} />
            </Box>
            <Skeleton height={20} width={"40%"} />
            <Skeleton height={20} width={"60%"} />
            <Skeleton height={20} width={"40%"} />
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Paper>
  );
}
````

## File: src/components/back-office/tim-outlet/OutletTeamContent.tsx
````typescript
"use client";

import { Paper, Stack } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { useState } from "react";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useCurrentOutletTeam } from "@/hooks/employee.hooks";
import TableSkeleton from "../shared/TableSkeleton";
import { OutletTeamFilters } from "./OutletTeamFilters";
import { OutletTeamTable } from "./OutletTeamTable";
import type { SortOrder } from "@/types/api";
import type { OutletTeamQuery, OutletTeamSortBy } from "@/types/api/employee.types";

const DEFAULT_PAGE_SIZE = 10;

type FilterState = Pick<OutletTeamQuery, "search" | "role" | "workStatus" | "stationType">;

type FilterKey = keyof FilterState;

export function OutletTeamContent() {
  const [query, setQuery] = useState<OutletTeamQuery>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE,
    sortBy: "name",
    sortOrder: "asc",
  });

  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);

  const { data, isLoading, isError, error, refetch } = useCurrentOutletTeam({
    ...query,
    search: debouncedSearch || undefined,
  });

  const handleFilterChange = <Key extends FilterKey>(key: Key, value: FilterState[Key]) => {
    setQuery((previous) => {
      if (key === "role" && value === "DRIVER") {
        return {
          ...previous,
          role: "DRIVER",
          stationType: undefined,
          page: 1,
        };
      }

      return {
        ...previous,
        [key]: value,
        page: 1,
      };
    });
  };

  const handleSortByChange = (sortBy: OutletTeamSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy,
      page: 1,
    }));
  };

  const handleSortOrderChange = (sortOrder: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50 | 100) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: DEFAULT_PAGE_SIZE,
      sortBy: "name",
      sortOrder: "asc",
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Tim Outlet" description={"Pantau anggota tim dan status pekerjaan saat ini."} />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <OutletTeamFilters
            filters={{
              search: query.search,
              role: query.role,
              workStatus: query.workStatus,
              stationType: query.stationType,
            }}
            sortBy={query.sortBy ?? "name"}
            sortOrder={query.sortOrder ?? "asc"}
            onChange={handleFilterChange}
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={data}
            onRetry={refetch}
            isEmpty={(result) => result.data.length === 0}
            skeleton={<TableSkeleton />}
          >
            {(result) => <OutletTeamTable data={result.data} meta={result.meta} onPageChange={handlePageChange} onPageSizeChange={handlePageSizeChange} />}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
````

## File: src/components/back-office/tim-outlet/OutletTeamFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import type { SortOrder } from "@/types/api";
import type { EmployeeRole, StationType, WorkStatus } from "@/types/api";
import type { OutletTeamQuery, OutletTeamSortBy } from "@/types/api/employee.types";

type OutletTeamFiltersState = Pick<OutletTeamQuery, "search" | "role" | "workStatus" | "stationType">;
type FilterKey = keyof OutletTeamFiltersState;

type Props = {
  filters: OutletTeamFiltersState;
  sortBy: NonNullable<OutletTeamQuery["sortBy"]>;
  sortOrder: NonNullable<OutletTeamQuery["sortOrder"]>;
  onChange: <Key extends FilterKey>(key: Key, value: OutletTeamFiltersState[Key]) => void;
  onSortByChange: (value: OutletTeamSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const ROLE_OPTIONS = [
  {
    value: "WORKER",
    label: "Worker",
  },
  {
    value: "DRIVER",
    label: "Driver",
  },
];

const WORK_STATUS_OPTIONS = [
  {
    value: "AVAILABLE",
    label: "Tersedia",
  },
  {
    value: "BUSY",
    label: "Sedang bekerja",
  },
  {
    value: "OFF_DUTY",
    label: "Tidak bertugas",
  },
];

const STATION_TYPE_OPTIONS = [
  {
    value: "WASHING",
    label: "Washing",
  },
  {
    value: "IRONING",
    label: "Ironing",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

const SORT_OPTIONS = [
  {
    value: "name",
    label: "Nama",
  },
  {
    value: "role",
    label: "Role",
  },
  {
    value: "workStatus",
    label: "Status kerja",
  },
];

export function OutletTeamFilters({ filters, sortBy, sortOrder, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <>
      <Group align="flex-end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Cari nama atau email"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || undefined)}
          style={{
            flex: 1,
            minWidth: 220,
          }}
        />

        <Select
          label="Urutkan"
          value={sortBy}
          data={SORT_OPTIONS}
          onChange={(value) => {
            if (value === "name" || value === "role" || value === "workStatus") {
              onSortByChange(value);
            }
          }}
          w={180}
        />

        <Select
          label="Urutan"
          value={sortOrder}
          data={[
            {
              value: "asc",
              label: "Menaik",
            },
            {
              value: "desc",
              label: "Menurun",
            },
          ]}
          onChange={(value) => {
            if (value === "asc" || value === "desc") {
              onSortOrderChange(value);
            }
          }}
          w={180}
        />

        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Group align="flex-end" wrap="wrap" gap="sm">
        <Select
          label="Role"
          placeholder="Semua role"
          clearable
          data={ROLE_OPTIONS}
          value={filters.role ?? null}
          onChange={(value) => {
            if (value === "WORKER" || value === "DRIVER") {
              onChange("role", value as EmployeeRole);

              return;
            }

            onChange("role", undefined);
          }}
        />

        <Select
          label="Status Kerja"
          placeholder="Semua status"
          clearable
          data={WORK_STATUS_OPTIONS}
          value={filters.workStatus ?? null}
          onChange={(value) => {
            if (value === "AVAILABLE" || value === "BUSY" || value === "OFF_DUTY") {
              onChange("workStatus", value as WorkStatus);

              return;
            }

            onChange("workStatus", undefined);
          }}
        />

        <Select
          label="Station"
          placeholder="Semua station"
          clearable
          data={STATION_TYPE_OPTIONS}
          value={filters.stationType ?? null}
          onChange={(value) => {
            if (value === "WASHING" || value === "IRONING" || value === "PACKING") {
              onChange("stationType", value as StationType);

              return;
            }

            onChange("stationType", undefined);
          }}
          disabled={filters.role === "DRIVER"}
        />
      </Group>
    </>
  );
}
````

## File: src/components/back-office/tim-outlet/OutletTeamTable.tsx
````typescript
"use client";

import { Badge, Stack, Table, Text } from "@mantine/core";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { OutletTeamItem } from "@/types/api/employee.types";
import { EmployeeRole, PaginatedResponse } from "@/types/api";

type Props = {
  data: OutletTeamItem[];
  meta: PaginatedResponse<OutletTeamItem>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50 | 100) => void;
};

function getRoleLabel(role: Exclude<EmployeeRole, "OUTLET_ADMIN">) {
  const roleMap = {
    WORKER: "Worker",
    DRIVER: "Driver",
  };

  return roleMap[role];
}

function getWorkStatusLabel(status: OutletTeamItem["workStatus"]) {
  if (!status) {
    return "Belum tersedia";
  }

  const statusMap = {
    AVAILABLE: "Tersedia",
    BUSY: "Sedang bekerja",
    OFF_DUTY: "Tidak bertugas",
  };

  return statusMap[status];
}

function getWorkStatusColor(status: OutletTeamItem["workStatus"]) {
  if (!status) {
    return "gray";
  }

  const colorMap = {
    AVAILABLE: "green",
    BUSY: "blue",
    OFF_DUTY: "gray",
  };

  return colorMap[status];
}

function getStationLabel(stationType: string) {
  const stationMap: Record<string, string> = {
    WASHING: "Washing",
    IRONING: "Ironing",
    PACKING: "Packing",
  };

  return stationMap[stationType] ?? stationType;
}

function getTaskTypeLabel(taskType: string) {
  const taskTypeMap: Record<string, string> = {
    PICKUP: "Pickup",
    DELIVERY: "Delivery",
  };

  return taskTypeMap[taskType] ?? taskType;
}

function getAssignmentStatusLabel(status: string) {
  const statusMap: Record<string, string> = {
    ASSIGNED: "Ditugaskan",
    IN_PROGRESS: "Sedang dikerjakan",
    ON_HOLD_BYPASS: "Menunggu bypass",
  };

  return statusMap[status] ?? status;
}

function getAssignmentStatusColor(status: string) {
  const colorMap: Record<string, string> = {
    ASSIGNED: "yellow",
    IN_PROGRESS: "blue",
    ON_HOLD_BYPASS: "orange",
  };

  return colorMap[status] ?? "gray";
}

export function OutletTeamTable({ data, meta, onPageChange, onPageSizeChange }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={850}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Karyawan</Table.Th>

              <Table.Th>Role</Table.Th>

              <Table.Th>Status Kerja</Table.Th>

              <Table.Th>Tugas Saat Ini</Table.Th>

              <Table.Th>Status Tugas</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => {
              const workerTask = employee.workerTasks[0];

              const driverTask = employee.driverTasks[0];

              const currentTask = workerTask ?? driverTask;

              const taskLabel = workerTask ? getStationLabel(workerTask.stationType) : driverTask ? getTaskTypeLabel(driverTask.taskType) : null;

              return (
                <Table.Tr key={employee.id}>
                  <Table.Td>
                    <Stack gap={2}>
                      <Text size="sm" fw={600} c="var(--color-text-primary)">
                        {employee.name}
                      </Text>

                      <Text size="xs" c="var(--color-text-secondary)">
                        {employee.email}
                      </Text>
                    </Stack>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{getRoleLabel(employee.role)}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge color={getWorkStatusColor(employee.workStatus)} variant="light">
                      {getWorkStatusLabel(employee.workStatus)}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {taskLabel ? (
                      <Text size="sm">{taskLabel}</Text>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        Tidak ada tugas aktif
                      </Text>
                    )}
                  </Table.Td>

                  <Table.Td>
                    {currentTask ? (
                      <Badge color={getAssignmentStatusColor(currentTask.status)} variant="light">
                        {getAssignmentStatusLabel(currentTask.status)}
                      </Badge>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        -
                      </Text>
                    )}
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50 | 100}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/customer/alamat/AddressMapSection.tsx
````typescript
import { Alert, Button, Group, Text } from "@mantine/core";
import { LocationPicker } from "@/components/shared/Location/LocationPicker";

export function AddressMapSection({
  isAddressDetailComplete,
  hasPosition,
  latitude,
  longitude,
  locationError,
  isCheckingLocation,
  onCheckLocation,
  onPinChange,
}: {
  isAddressDetailComplete: boolean;
  hasPosition: boolean;
  latitude: number | undefined;
  longitude: number | undefined;
  locationError: string | null;
  isCheckingLocation: boolean;
  onCheckLocation: () => void;
  onPinChange: (lat: number, lng: number) => void;
}) {
  return (
    <div>
      <Group justify="space-between" align="center" mb="xs">
        <Text size="sm" fw={500}>
          Titik Lokasi di Peta
        </Text>
        <Button
          variant="light"
          size="xs"
          disabled={!isAddressDetailComplete}
          loading={isCheckingLocation}
          onClick={onCheckLocation}
        >
          {hasPosition ? "Cek Ulang Lokasi" : "Cek di Peta"}
        </Button>
      </Group>

      {!isAddressDetailComplete && (
        <Text size="xs" c="var(--color-text-secondary)">
          Lengkapi provinsi, kota, kecamatan, kode pos, dan detail alamat dulu
          untuk menampilkan peta.
        </Text>
      )}

      {locationError && (
        <Alert
          mt="xs"
          style={{
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary)",
          }}
        >
          {locationError}
        </Alert>
      )}

      {hasPosition && latitude !== undefined && longitude !== undefined && (
        <div style={{ marginTop: 8 }}>
          <LocationPicker
            initialLat={latitude}
            initialLng={longitude}
            onChange={onPinChange}
          />
          <Text size="xs" c="var(--color-text-secondary)" mt={4}>
            Geser pin merah kalau posisinya belum tepat.
          </Text>
        </div>
      )}
    </div>
  );
}
````

## File: src/components/customer/alamat/AddressRegionFields.tsx
````typescript
import { Select } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import type { AddressFormValues } from "@/types/api/address.types";
import { useAddressRegionCascade } from "@/hooks/addressCustomer/Useaddressregioncascade";

export function AddressRegionFields({
  form,
}: {
  form: UseFormReturnType<AddressFormValues>;
}) {
  const {
    provinces,
    cities,
    districts,
    subDistricts,
    loadingProvinces,
    loadingCities,
    loadingDistricts,
    loadingSubDistricts,
    handleProvinceChange,
    handleCityChange,
    handleDistrictChange,
    handleSubDistrictChange,
  } = useAddressRegionCascade(form);

  return (
    <>
      <Select
        label="Provinsi"
        placeholder="Pilih provinsi"
        required
        searchable
        data={
          provinces?.map((p) => ({ value: String(p.id), label: p.name })) ??
          []
        }
        disabled={loadingProvinces}
        value={form.values.provinceId}
        onChange={handleProvinceChange}
      />

      <Select
        label="Kota/Kabupaten"
        placeholder="Pilih kota/kabupaten"
        required
        searchable
        data={
          cities?.map((c) => ({ value: String(c.id), label: c.name })) ?? []
        }
        disabled={!form.values.provinceId || loadingCities}
        value={form.values.cityId}
        onChange={handleCityChange}
      />

      <Select
        label="Kecamatan"
        placeholder="Pilih kecamatan"
        required
        searchable
        data={
          districts?.map((d) => ({ value: String(d.id), label: d.name })) ??
          []
        }
        disabled={!form.values.cityId || loadingDistricts}
        value={form.values.districtId}
        onChange={handleDistrictChange}
      />

      <Select
        label="Kelurahan"
        placeholder="Pilih kelurahan"
        required
        searchable
        data={
          subDistricts?.map((sd) => ({
            value: String(sd.id),
            label: sd.name,
          })) ?? []
        }
        disabled={!form.values.districtId || loadingSubDistricts}
        value={form.values.subDistrictId}
        onChange={handleSubDistrictChange}
      />
    </>
  );
}
````

## File: src/components/customer/order/complaint/complaintForm.tsx
````typescript
"use client";

import { useState } from "react";
import {
  Stack,
  Select,
  Textarea,
  Button,
  FileInput,
  Image,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useCreateComplaint } from "@/hooks/order/order.hooks";
import { ApiError } from "@/lib/api/axios";
import {
  createComplaintSchema,
  type CreateComplaintSchema,
} from "@/lib/validation/order.validation";
import {
  COMPLAINT_CATEGORIES,
  COMPLAINT_CATEGORY_LABELS,
  type ComplaintCategory,
} from "@/types/api/orders.types";

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

type ComplaintFormValues = {
  category: ComplaintCategory | null;
  description: string;
  photo: File | null;
};

type ComplaintFormProps = {
  id: string;
  onSuccess: () => void;
  onCancel: () => void;
};

export function ComplaintForm({ id, onSuccess, onCancel }: ComplaintFormProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const mutation = useCreateComplaint(id);

  const form = useForm<ComplaintFormValues>({
    initialValues: {
      category: null,
      description: "",
      photo: null,
    },
    validate: schemaResolver(createComplaintSchema),
  });

  function handlePhotoChange(file: File | null) {
    form.setFieldValue("photo", file);

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  }

  function handleSubmit(values: ComplaintFormValues) {
    if (!values.category || !values.photo) return;

    const payload: CreateComplaintSchema = {
      category: values.category,
      description: values.description,
      photo: values.photo,
    };

    mutation.mutate(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Komplain berhasil dikirim",
          message: "Tim kami akan segera meninjau komplain kamu.",
          color: "green",
        });
        onSuccess();
      },
      onError: (error) => {
        let message = "Gagal mengirim komplain.";

        if (error instanceof ApiError) {
          switch (error.code) {
            case "PHOTO_REQUIRED":
              message = "Foto bukti komplain wajib diunggah.";
              break;
            case "INVALID_FILE_TYPE":
              message = "Format foto harus JPG, PNG, atau WEBP.";
              break;
            case "ORDER_FORBIDDEN":
              message = "Order tidak ditemukan atau bukan milik kamu.";
              break;
            default:
              message = error.message;
          }
        }

        notifications.show({
          title: "Komplain gagal dikirim",
          message,
          color: "red",
        });
      },
    });
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <Select
          label="Kategori Komplain"
          placeholder="Pilih kategori"
          required
          data={COMPLAINT_CATEGORIES.map((c) => ({
            value: c,
            label: COMPLAINT_CATEGORY_LABELS[c],
          }))}
          {...form.getInputProps("category")}
        />

        <Textarea
          label="Deskripsi"
          placeholder="Jelaskan detail masalah yang kamu alami"
          minRows={4}
          required
          {...form.getInputProps("description")}
        />

        <FileInput
          label="Foto Bukti"
          description={`JPG, PNG, atau WEBP. Maksimal ${MAX_FILE_SIZE_MB}MB.`}
          placeholder="Pilih foto"
          accept={ACCEPTED_TYPES.join(",")}
          required
          value={form.values.photo}
          onChange={handlePhotoChange}
          error={form.errors.photo}
        />

        {previewUrl && (
          <Image
            src={previewUrl}
            alt="Preview bukti komplain"
            radius="md"
            mah={200}
            w="auto"
            fit="contain"
          />
        )}

        <Stack gap="xs">
          <Button
            type="submit"
            loading={mutation.isPending}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Kirim Komplain
          </Button>
          <Button variant="subtle" onClick={onCancel} disabled={mutation.isPending}>
            Batal
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
````

## File: src/components/customer/order/RequestPickup/pickupTimeHelper.ts
````typescript
const OPERATIONAL_START_HOUR = 8;
const OPERATIONAL_END_HOUR = 23;

export function getPickupTimeOptions(pickupDate: string) {
  const options: {
    value: string;
    label: string;
  }[] = [];

  const now = new Date();

  for (
    let hour = OPERATIONAL_START_HOUR;
    hour < OPERATIONAL_END_HOUR;
    hour++
  ) {
    const time = `${String(hour).padStart(2, "0")}:00`;

    if (!pickupDate) {
      options.push({
        value: time,
        label: time,
      });

      continue;
    }

    const pickupDateTime = new Date(
      `${pickupDate}T${time}:00`,
    );

    if (pickupDateTime > now) {
      options.push({
        value: time,
        label: time,
      });
    }
  }

  return options;
}
````

## File: src/components/customer/order/RequestPickup/requestPickupForm .tsx
````typescript
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import "dayjs/locale/id";

import { notifications } from "@mantine/notifications";
import { Alert } from "@mantine/core";

import { useRequestPickup } from "@/hooks/order/request-pickup.hooks";
import { getCreateOrderErrorMessage } from "@/lib/utils/order-error.util";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { RequestPickupReview } from "./Requestpickupreview";
import { RequestPickupFormFields } from "./Requestpickupformfields";


dayjs.locale("id");

export function RequestPickupForm() {
  const router = useRouter();
  const {
    form,
    addresses,
    selectedAddress,

    isLoadingAddresses,
    isErrorAddresses,
    addressesError,
    refetchAddresses,
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

  return (
    <AsyncStateView
      isLoading={isLoadingAddresses}
      isError={isErrorAddresses}
      error={addressesError}
      data={addresses}
      onRetry={() => refetchAddresses()}
      isEmpty={(data) => data.length === 0}
      emptyTitle="Belum ada alamat"
      emptyDescription="Tambah alamat dulu sebelum request pickup."
      emptyAction={{
        label: "Tambah Alamat",
        onClick: () => router.push("/alamat"),
      }}
    >
      {(loadedAddresses) => {
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
            <RequestPickupReview
              selectedAddress={selectedAddress}
              pickupDate={pickupDate}
              pickupTime={form.values.pickupTime}
              isPending={isPending}
              onBack={() => setIsReviewing(false)}
              onConfirm={handleConfirm}
            />
          );
        }

        return (
          <RequestPickupFormFields
            form={form}
            addresses={loadedAddresses}
            selectedAddress={selectedAddress}
            isChangingAddress={isChangingAddress}
            setIsChangingAddress={setIsChangingAddress}
            pickupDate={pickupDate}
            pickupTimeOptions={pickupTimeOptions}
            onReview={handleReview}
          />
        );
      }}
    </AsyncStateView>
  );
}
````

## File: src/components/customer/order/RequestPickup/Requestpickupformfields.tsx
````typescript
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
````

## File: src/components/customer/order/RequestPickup/Requestpickupreview.tsx
````typescript
import dayjs from "dayjs";
import { Alert, Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import type { Address } from "@/types/api/address.types";

export function RequestPickupReview({
  selectedAddress,
  pickupDate,
  pickupTime,
  isPending,
  onBack,
  onConfirm,
}: {
  selectedAddress: Address;
  pickupDate: string;
  pickupTime: string;
  isPending: boolean;
  onBack: () => void;
  onConfirm: () => void;
}) {
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
            Jam: <strong>{pickupTime}</strong>
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
        <Button variant="subtle" onClick={onBack} disabled={isPending}>
          Kembali
        </Button>

        <Button
          loading={isPending}
          onClick={onConfirm}
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
````

## File: src/components/customer/order/billDetailContent.tsx
````typescript
"use client";

import { OrderDetail } from "@/types/api/orders.types";
import { Badge, Box, Button, Divider, Group, Paper, Stack, Text, Title } from "@mantine/core";

type BillStatus = NonNullable<OrderDetail["bill"]>;

function formatRupiah(value: string | number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(Number(value));
}

function getPaymentStatusLabel(status: BillStatus["paymentStatus"] | undefined) {
  switch (status) {
    case "PAID":
      return "Sudah Dibayar";

    case "UNPAID":
    default:
      return "Belum Dibayar";
  }
}

function getPaymentStatusColor(status: BillStatus["paymentStatus"] | undefined) {
  switch (status) {
    case "PAID":
      return "green";

    case "UNPAID":
    default:
      return "yellow";
  }
}

export function BillDetailContent({
  order,
  bill,
  onPay,
  isPaying,
}: {
  order: OrderDetail;
  bill: BillStatus;
  onPay: () => void;
  isPaying: boolean;
}) {
  const weight = Number(bill.weightKg ?? 0);
  const pricePerKg = Number(bill.pricePerKgSnapshot ?? 0);
  const shippingFee = Number(bill.shippingFeeSnapshot ?? 0);

  const laundrySubtotal = weight * pricePerKg;
  const totalAmount = laundrySubtotal + shippingFee;

  return (
    <Stack gap="lg">
      <Box>
        <Title order={2}>Detail Tagihan</Title>

        <Text c="dimmed" size="sm" mt={4}>
          Order: {order.orderCode}
        </Text>
      </Box>

      <Paper withBorder radius="md" p={{ base: "md", sm: "lg" }}>
        <Stack gap="md">
          <Group justify="space-between">
            <Text fw={600}>Status Pembayaran</Text>

            <Badge color={getPaymentStatusColor(bill.paymentStatus)} variant="light">
              {getPaymentStatusLabel(bill.paymentStatus)}
            </Badge>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Box>
              <Text fw={500}>Laundry</Text>

              <Text size="sm" c="dimmed">
                {weight} kg × {formatRupiah(pricePerKg)}
              </Text>
            </Box>

            <Text fw={500}>{formatRupiah(laundrySubtotal)}</Text>
          </Group>

          <Group justify="space-between">
            <Text fw={500}>Biaya Pengiriman</Text>

            <Text fw={500}>{formatRupiah(shippingFee)}</Text>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Text fw={700} size="lg">
              Total Pembayaran
            </Text>

            <Text fw={700} size="lg">
              {formatRupiah(totalAmount)}
            </Text>
          </Group>

          {order.allowedActions.canPay && bill.paymentStatus === "UNPAID" && (
            <Button fullWidth mt="sm" onClick={onPay} loading={isPaying}>
              Bayar Sekarang
            </Button>
          )}
        </Stack>
      </Paper>

      <Paper withBorder radius="md" p={{ base: "md", sm: "lg" }}>
        <Stack gap="sm">
          <Title order={4}>Informasi Tagihan</Title>

          <Group justify="space-between">
            <Text c="dimmed">Order</Text>

            <Text>{order.orderCode}</Text>
          </Group>

          <Group justify="space-between">
            <Text c="dimmed">Berat</Text>

            <Text>{weight} kg</Text>
          </Group>

          <Group justify="space-between">
            <Text c="dimmed">Harga per kg</Text>

            <Text>{formatRupiah(pricePerKg)}</Text>
          </Group>

          <Group justify="space-between">
            <Text c="dimmed">Ongkos Pengiriman</Text>

            <Text>{formatRupiah(shippingFee)}</Text>
          </Group>

          <Group justify="space-between">
            <Text c="dimmed">Subtotal Laundry</Text>

            <Text>{formatRupiah(laundrySubtotal)}</Text>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Text fw={700}>Total</Text>

            <Text fw={700}>{formatRupiah(totalAmount)}</Text>
          </Group>
        </Stack>
      </Paper>
    </Stack>
  );
}
````

## File: src/components/customer/order/OrderActionsSection.tsx
````typescript
import Link from "next/link";
import { Anchor, Button, Stack, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { OrderTimeline } from "./orderTimeLine";
import type { OrderDetail } from "@/types/api/orders.types";

export function OrderActionsSection({
  order,
  isConfirming,
  onConfirmReceived,
}: {
  order: OrderDetail;
  isConfirming: boolean;
  onConfirmReceived: () => void;
}) {
  function handleConfirmClick() {
    modals.openConfirmModal({
      title: "Konfirmasi order diterima?",
      children: (
        <Text size="sm">
          Pastikan laundry sudah kamu terima dengan baik. Tindakan ini tidak
          dapat dibatalkan.
        </Text>
      ),
      labels: { confirm: "Ya, Sudah Diterima", cancel: "Batal" },
      confirmProps: {
        style: {
          backgroundColor: "var(--color-accent)",
          color: "var(--color-text-on-accent)",
        },
      },
      onConfirm: onConfirmReceived,
    });
  }

  return (
    <Stack gap="xl">
      <div>
        <Text fw={600} mb="md" style={{ color: "var(--color-text-primary)" }}>
          Tracking
        </Text>
        <OrderTimeline timeline={order.timeline} complaint={order.complaint} />
      </div>

      {order.complaint && (
        <Anchor
          component={Link}
          href={`/pesanan/${order.id}/komplain`}
          fw={600}
        >
          Lihat status komplain kamu →
        </Anchor>
      )}

      {order.allowedActions.canConfirmReceived &&
        order.complaint?.status !== "OPEN" && (
          <Button
            onClick={handleConfirmClick}
            disabled={isConfirming}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            {isConfirming ? "Mengonfirmasi..." : "Konfirmasi Diterima"}
          </Button>
        )}

      {order.allowedActions.canFileComplaint && !order.complaint && (
        <Button
          component={Link}
          href={`/pesanan/${order.id}/komplain`}
          variant="outline"
        >
          Ajukan Komplain
        </Button>
      )}
    </Stack>
  );
}
````

## File: src/components/customer/order/OrderBillSummaryCard.tsx
````typescript
import Link from "next/link";
import { Button, Paper, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/orders.types";

export function OrderBillSummaryCard({ order }: { order: OrderDetail }) {
  if (!order.bill) return null;

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="xs">
        <Text fw={600} style={{ color: "var(--color-text-primary)" }}>
          Tagihan
        </Text>

        {order.bill.weightKg ? (
          <>
            <Text size="sm" c="var(--color-text-secondary)">
              Berat: {order.bill.weightKg} kg
            </Text>
            <Text size="sm" c="var(--color-text-secondary)">
              Total: Rp{order.bill.totalAmount?.toLocaleString("id-ID")}
            </Text>
          </>
        ) : (
          <Text size="sm" c="var(--color-text-secondary)">
            Berat & total belum tersedia — menunggu outlet memproses laundry.
          </Text>
        )}

        {order.allowedActions.canPay && (
          <Button
            component={Link}
            href={`/pesanan/${order.id}/invoice`}
            mt="xs"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Bayar Sekarang
          </Button>
        )}

        {order.bill?.paymentStatus === "PAID" && (
          <Button
            component={Link}
            href={`/pesanan/${order.id}/invoice`}
            mt="xs"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Lihat Detail & Histori Pembayaran
          </Button>
        )}
      </Stack>
    </Paper>
  );
}
````

## File: src/components/customer/order/OrderInfoCard.tsx
````typescript
import { Badge, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/orders.types";

export function OrderInfoCard({ order }: { order: OrderDetail }) {
  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="xs">
        <Group justify="space-between" gap="xs">
          <Text style={{ color: "var(--color-text-primary)" }}>
            <Text component="span" fw={600}>
              Nomor Pesanan:
            </Text>{" "}
            <Text component="span" fw={700}>
              {order.orderCode}
            </Text>
          </Text>
          <Badge
            style={{
              backgroundColor: "var(--color-primary-light)",
              color: "var(--color-primary)",
            }}
          >
            {order.customerStatusLabel}
          </Badge>
        </Group>
        <Divider />
        <Text size="sm" c="var(--color-text-secondary)">
          Alamat: {order.addressSnapshot}
        </Text>
        <Text size="sm" c="var(--color-text-secondary)">
          Telpon: {order.addressPhoneSnapshot}
        </Text>
        <Text size="sm" c="var(--color-text-secondary)">
          Jadwal: {new Date(order.pickupScheduledAt).toLocaleString("id-ID")}
        </Text>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/field-ops/driver/DriverActiveSummary.tsx
````typescript
import type { DriverActiveAssignment, TaskType } from "@/types/api/driver.types";
import { Badge, Card, Divider, Group, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconClipboardList, IconTruckDelivery } from "@tabler/icons-react";

function getTaskTypeLabel(taskType: TaskType) {
  switch (taskType) {
    case "PICKUP":
      return "Penjemputan";
    case "DELIVERY":
      return "Pengantaran";
  }
}

function getStateBadge(state: DriverActiveAssignment["state"]) {
  switch (state) {
    case "PICKUP_ASSIGNED":
      return { label: "Siap Jemput", color: "yellow" };
    case "PICKUP_TO_CUSTOMER":
      return { label: "Menuju Pelanggan", color: "blue" };
    case "PICKUP_TO_OUTLET":
      return { label: "Menuju Outlet", color: "blue" };
    case "DELIVERY_ASSIGNED":
      return { label: "Siap Antar", color: "yellow" };
    case "DELIVERY_TO_CUSTOMER":
      return { label: "Menuju Pelanggan", color: "blue" };
  }
}

export function DriverActiveSummary({ assignment }: { assignment: DriverActiveAssignment }) {
  const taskTypeLabel = getTaskTypeLabel(assignment.taskType);
  const stateBadge = getStateBadge(assignment.state);

  return (
    <Card withBorder shadow="sm" radius="lg" p="lg">
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Group align="center" gap="sm">
            <ThemeIcon size={44} radius="xl" variant="light" color="blue">
              <IconTruckDelivery size={22} />
            </ThemeIcon>
            <Stack gap={2}>
              <Text size="xs" c="dimmed">
                Tugas Aktif
              </Text>
              <Text fw={700} size="lg">
                {assignment.order.orderCode}
              </Text>
            </Stack>
          </Group>

          <Badge color={stateBadge.color} variant="light" size="lg" radius="sm">
            {stateBadge.label}
          </Badge>
        </Group>

        <Divider />

        <Group justify="space-between" align="center">
          <Group align="center" gap="sm">
            <ThemeIcon size={32} radius="xl" variant="light" color="gray">
              <IconClipboardList size={16} />
            </ThemeIcon>
            <Text size="sm" c="dimmed">
              Jenis Tugas
            </Text>
          </Group>
          <Badge variant="light" color="grape" radius="sm">
            {taskTypeLabel}
          </Badge>
        </Group>
      </Stack>
    </Card>
  );
}
````

## File: src/components/field-ops/driver/DriverActiveTaskView.tsx
````typescript
import type { DriverActiveAssignment } from "@/types/api/driver.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { Button, Card, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";

import { IconCalendarTime, IconPackage, IconRoute, IconTruck } from "@tabler/icons-react";

import { DriverDestinationCard } from "./DriverDestinationCard";

type DriverActiveTaskViewProps = {
  assignment: DriverActiveAssignment;

  isStarting: boolean;
  isPickingUp: boolean;
  isCompleting: boolean;

  onStart: () => void;
  onPickup: () => void;
  onComplete: () => void;
};

export function DriverActiveTaskView({
  assignment,
  isStarting,
  isPickingUp,
  isCompleting,
  onStart,
  onPickup,
  onComplete,
}: DriverActiveTaskViewProps) {
  switch (assignment.state) {
    case "PICKUP_ASSIGNED":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Tujuan Penjemputan"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="yellow">
                  <IconTruck size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Siap Melakukan Penjemputan</Text>

                  <Text size="sm" c="dimmed">
                    Pastikan lokasi pelanggan sudah sesuai sebelum memulai perjalanan.
                  </Text>
                </Stack>
              </Group>

              <Paper withBorder radius="md" p="md" bg="var(--color-primary-light)">
                <Group justify="space-between" align="center">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconCalendarTime size={17} />
                    </ThemeIcon>

                    <Stack gap={1}>
                      <Text size="xs" c="dimmed">
                        Jadwal Penjemputan
                      </Text>

                      <Text size="sm" fw={600}>
                        {formatFieldOpsDate(assignment.pickupScheduledAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Text size="sm" fw={600}>
                    {formatFieldOpsTime(assignment.pickupScheduledAt)}
                  </Text>
                </Group>
              </Paper>

              <Text size="xs" c="dimmed">
                Tekan tombol di bawah saat Anda benar-benar siap menuju pelanggan.
              </Text>

              <Button
                loading={isStarting}
                onClick={onStart}
                leftSection={<IconRoute size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Mulai Penjemputan
              </Button>
            </Stack>
          </Card>
        </Stack>
      );

    case "PICKUP_TO_CUSTOMER":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Lokasi Pelanggan"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                  <IconRoute size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Menuju Pelanggan</Text>

                  <Text size="sm" c="dimmed">
                    Datangi lokasi pelanggan dan ambil laundry sesuai tugas penjemputan.
                  </Text>
                </Stack>
              </Group>

              <Paper withBorder radius="md" p="md" bg="var(--color-primary-light)">
                <Group justify="space-between" align="center">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconCalendarTime size={17} />
                    </ThemeIcon>

                    <Stack gap={1}>
                      <Text size="xs" c="dimmed">
                        Jadwal Penjemputan
                      </Text>

                      <Text size="sm" fw={600}>
                        {formatFieldOpsDate(assignment.pickupScheduledAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Text size="sm" fw={600}>
                    {formatFieldOpsTime(assignment.pickupScheduledAt)}
                  </Text>
                </Group>
              </Paper>

              <Text size="xs" c="dimmed">
                Konfirmasi hanya setelah laundry benar-benar sudah diterima dari pelanggan.
              </Text>

              <Button
                loading={isPickingUp}
                onClick={onPickup}
                leftSection={<IconPackage size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Konfirmasi Laundry Diambil
              </Button>
            </Stack>
          </Card>
        </Stack>
      );

    case "PICKUP_TO_OUTLET":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Lokasi Outlet"
            name={assignment.destination.name}
            address={assignment.destination.address}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                  <IconRoute size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Menuju Outlet</Text>

                  <Text size="sm" c="dimmed">
                    Silakan kembali ke outlet dan tunggu Outlet Admin menyelesaikan order.
                  </Text>
                </Stack>
              </Group>

              <Paper withBorder radius="md" p="md" bg="var(--color-primary-light)">
                <Group justify="space-between" align="center">
                  <Group gap="sm">
                    <ThemeIcon variant="light" radius="xl" color="blue">
                      <IconCalendarTime size={17} />
                    </ThemeIcon>

                    <Stack gap={1}>
                      <Text size="xs" c="dimmed">
                        Waktu Pengambilan
                      </Text>

                      <Text size="sm" fw={600}>
                        {formatFieldOpsDate(assignment.pickedUpAt)}
                      </Text>
                    </Stack>
                  </Group>

                  <Text size="sm" fw={600}>
                    {formatFieldOpsTime(assignment.pickedUpAt)}
                  </Text>
                </Group>
              </Paper>
            </Stack>
          </Card>
        </Stack>
      );

    case "DELIVERY_ASSIGNED":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Tujuan Pengantaran"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="yellow">
                  <IconTruck size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Siap Melakukan Pengantaran</Text>

                  <Text size="sm" c="dimmed">
                    Pastikan lokasi pelanggan sudah sesuai sebelum memulai perjalanan.
                  </Text>
                </Stack>
              </Group>

              <Text size="xs" c="dimmed">
                Tekan tombol di bawah saat Anda benar-benar siap menuju pelanggan.
              </Text>

              <Button
                loading={isStarting}
                onClick={onStart}
                leftSection={<IconRoute size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Mulai Pengantaran
              </Button>
            </Stack>
          </Card>
        </Stack>
      );

    case "DELIVERY_TO_CUSTOMER":
      return (
        <Stack gap="md">
          <DriverDestinationCard
            title="Tujuan Pengantaran"
            name={assignment.destination.name}
            address={assignment.destination.address}
            phone={assignment.destination.phone}
            latitude={assignment.destination.latitude}
            longitude={assignment.destination.longitude}
          />

          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Group gap="sm" align="flex-start">
                <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                  <IconRoute size={18} />
                </ThemeIcon>

                <Stack gap={2}>
                  <Text fw={600}>Sedang Mengantar</Text>

                  <Text size="sm" c="dimmed">
                    Datangi lokasi pelanggan dan serahkan laundry yang sudah selesai.
                  </Text>
                </Stack>
              </Group>

              <Text size="xs" c="dimmed">
                Konfirmasi hanya setelah laundry benar-benar telah diserahkan ke pelanggan.
              </Text>

              <Button
                loading={isCompleting}
                onClick={onComplete}
                leftSection={<IconPackage size={18} />}
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-text-on-accent)",
                }}
              >
                Selesaikan Pengantaran
              </Button>
            </Stack>
          </Card>
        </Stack>
      );
  }
}
````

## File: src/components/field-ops/driver/DriverDestinationCard.tsx
````typescript
import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";

import {
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

type DriverDestinationCardProps = {
  title: string;
  name: string;
  address: string;
  phone?: string;
  latitude: number;
  longitude: number;
};

export function DriverDestinationCard({
  title,
  name,
  address,
  phone,
  latitude,
  longitude,
}: DriverDestinationCardProps) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Group gap="sm" align="flex-start">
          <ThemeIcon
            variant="light"
            radius="xl"
            size="lg"
          >
            <IconMapPin size={18} />
          </ThemeIcon>

          <Stack gap={2}>
            <Text fw={600}>
              {title}
            </Text>

            <Text size="xs" c="dimmed">
              Lokasi tujuan tugas driver
            </Text>
          </Stack>
        </Group>

        <Stack gap={4}>
          <Text fw={600}>
            {name}
          </Text>

          <Text
            size="sm"
            c="dimmed"
            style={{ lineHeight: 1.5 }}
          >
            {address}
          </Text>
        </Stack>

        {phone && (
          <Group gap="xs">
            <IconPhone
              size={16}
              color="var(--color-text-secondary)"
            />

            <Text
              component="a"
              href={`tel:${phone}`}
              size="sm"
              fw={500}
              style={{
                color: "var(--color-primary-dark)",
                textDecoration: "none",
              }}
            >
              {phone}
            </Text>
          </Group>
        )}

        <Button
          component="a"
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          leftSection={<IconMapPin size={18} />}
        >
          Buka di Maps
        </Button>
      </Stack>
    </Card>
  );
}
````

## File: src/components/field-ops/driver/DriverHistory.tsx
````typescript
"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useHistoryList } from "@/hooks/driver.hooks";
import type { TaskType } from "@/types/api/driver.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { ActionIcon, Badge, Card, Grid, Group, Pagination, Paper, Select, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { IconArrowNarrowDown, IconArrowNarrowUp, IconCalendarMonth, IconChecklist, IconClock } from "@tabler/icons-react";
import dayjs from "dayjs";

const TASK_TYPE_INFO: Record<
  TaskType,
  {
    label: string;
    color: string;
  }
> = {
  PICKUP: {
    label: "Penjemputan",
    color: "blue",
  },
  DELIVERY: {
    label: "Pengantaran",
    color: "yellow",
  },
};

export function DriverHistory() {
  const {
    historyQuery,

    page,
    period,
    taskType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleTaskTypeFilter,
    handleSortChange,
  } = useHistoryList();

  return (
    <Stack gap="md">
      <Stack gap={4}>
        <Text fw={700} size="lg">
          Riwayat Tugas
        </Text>

        <Text size="sm" c="dimmed">
          Daftar tugas yang telah Anda selesaikan.
        </Text>
      </Stack>

      <AsyncStateView
        isLoading={historyQuery.isPending}
        isError={historyQuery.isError}
        error={historyQuery.error}
        data={historyQuery.data}
        onRetry={() => historyQuery.refetch()}
        emptyTitle="Belum ada riwayat tugas"
        emptyDescription="Belum ada tugas selesai pada bulan dan filter yang dipilih."
        skeleton={
          <Stack gap="md">
            <Skeleton height={88} radius="lg" />

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={20} width="30%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={20} width="30%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>
          </Stack>
        }
      >
        {(response) => {
          const { historyList, summary } = response.data;
          const { meta } = response;

          return (
            <Stack gap="md">
              <Paper withBorder radius="lg" p="md" bg="var(--color-primary-light)">
                <Group gap="sm">
                  <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                    <IconChecklist size={18} />
                  </ThemeIcon>

                  <Stack gap={1}>
                    <Text size="xs" c="dimmed">
                      Tugas Selesai per {period}
                    </Text>

                    <Text fw={700} size="lg">
                      {summary.totalCompleted}
                    </Text>
                  </Stack>
                </Group>
              </Paper>

              <Grid gap="xs" align="flex-end">
                <Grid.Col span={5}>
                  <MonthPickerInput
                    label="Bulan"
                    placeholder="Pilih bulan"
                    value={`${period}-01`}
                    valueFormat="MMM YYYY"
                    leftSection={<IconCalendarMonth size={17} />}
                    clearable={false}
                    onChange={(value) => {
                      if (!value) return;

                      handlePeriodChange(dayjs(value).format("YYYY-MM"));
                    }}
                  />
                </Grid.Col>

                <Grid.Col span={4}>
                  <Select
                    label="Tipe Tugas"
                    value={taskType}
                    onChange={handleTaskTypeFilter}
                    allowDeselect={false}
                    data={[
                      {
                        value: "ALL",
                        label: "Semua",
                      },
                      {
                        value: "PICKUP",
                        label: "Pickup",
                      },
                      {
                        value: "DELIVERY",
                        label: "Delivery",
                      },
                    ]}
                  />
                </Grid.Col>

                <Grid.Col span={3}>
                  <Stack gap={4}>
                    <Text size="sm" fw={500}>
                      Urutkan
                    </Text>

                    <Group gap={4} wrap="nowrap">
                      <ActionIcon
                        variant={sortOrder === "asc" ? "filled" : "light"}
                        size="lg"
                        aria-label="Urutkan terlama"
                        onClick={() => handleSortChange("asc")}
                      >
                        <IconArrowNarrowUp size={18} />
                      </ActionIcon>

                      <ActionIcon
                        variant={sortOrder === "desc" ? "filled" : "light"}
                        size="lg"
                        aria-label="Urutkan terbaru"
                        onClick={() => handleSortChange("desc")}
                      >
                        <IconArrowNarrowDown size={18} />
                      </ActionIcon>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>

              <Stack gap="sm">
                {historyList.map((item) => {
                  const taskInfo = TASK_TYPE_INFO[item.taskType];

                  return (
                    <Card key={item.id} withBorder radius="lg" p="lg">
                      <Stack gap="md">
                        {/* Baris atas: label kiri, tanggal kanan */}
                        <Grid align="center">
                          <Grid.Col span="auto">
                            <Badge variant="light" color={taskInfo.color}>
                              {taskInfo.label}
                            </Badge>
                          </Grid.Col>
                          <Grid.Col span="content">
                            <Text size="xs" c="dimmed">
                              {formatFieldOpsDate(item.completedAt)}
                            </Text>
                          </Grid.Col>
                        </Grid>

                        {/* Baris bawah: kode order kiri, jam kanan */}
                        <Grid align="center">
                          <Grid.Col span="auto">
                            <Stack gap={2}>
                              <Text size="xs" c="dimmed">
                                Kode Order
                              </Text>
                              <Text fw={700}>{item.order.orderCode}</Text>
                            </Stack>
                          </Grid.Col>
                          <Grid.Col span="content">
                            <Group gap="xs">
                              <IconClock size={16} color="var(--color-text-secondary)" />
                              <Text size="sm" c="dimmed">
                                Selesai pukul {formatFieldOpsTime(item.completedAt)}
                              </Text>
                            </Group>
                          </Grid.Col>
                        </Grid>
                      </Stack>
                    </Card>
                  );
                })}
              </Stack>

              {meta.totalPages > 1 && (
                <Group justify="center">
                  <Pagination value={page} total={meta.totalPages} onChange={setPage} size="sm" />
                </Group>
              )}
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/field-ops/driver/DriverHistoryDetail.tsx
````typescript
"use client";

import { Stack, Badge, Text, Card } from "@mantine/core";

// ── UI KOSONGAN — data dummy, belum disambungkan hooks/API ──────────
// Murni tampilan baca (tidak ada tombol aksi sama sekali).

export function DriverHistoryDetail({
  taskTypeLabel,
  orderCode,
  destination,
  assignedAt,
  completedAt,
}: {
  taskTypeLabel: string;
  orderCode: string;
  destination: { name: string; address: string; phone: string };
  assignedAt: string;
  completedAt: string;
}) {
  return (
    <Stack gap="lg">
      <Badge color="teal" variant="light">
        {taskTypeLabel} — Selesai
      </Badge>
      <Text size="sm" c="dimmed">
        {orderCode}
      </Text>

      <Card withBorder radius="md" p="md">
        <Text size="xs" c="dimmed" tt="uppercase" fw={700} mb={6}>
          Tujuan
        </Text>
        <Text size="sm" fw={600}>
          {destination.name}
        </Text>
        <Text size="sm" c="dimmed">
          {destination.address}
        </Text>
        <Text size="sm" c="dimmed">
          {destination.phone}
        </Text>
      </Card>

      <Card withBorder radius="md" p="md">
        <Text size="xs" c="dimmed" tt="uppercase" fw={700} mb={6}>
          Waktu
        </Text>
        <Text size="sm" c="dimmed">
          Ditugaskan: {assignedAt} · Selesai: {completedAt}
        </Text>
      </Card>
    </Stack>
  );
}
````

## File: src/components/field-ops/worker/active/WorkerInProgressTask.tsx
````typescript
import type { StationType } from "@/types/api/worker.types";
import {
  Badge,
  Button,
  Card,
  Stack,
  Text,
} from "@mantine/core";

type WorkerInProgressTaskProps = {
  stationType: StationType;
  isCompleting: boolean;
  onComplete: () => void;
};

function getStationLabel(stationType: StationType) {
  switch (stationType) {
    case "WASHING":
      return "Cuci";
    case "IRONING":
      return "Setrika";
    case "PACKING":
      return "Packing";
  }
}

export function WorkerInProgressTask({
  stationType,
  isCompleting,
  onComplete,
}: WorkerInProgressTaskProps) {
  const stationLabel =
    getStationLabel(stationType);

  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Badge
          color="blue"
          variant="light"
          w="fit-content"
        >
          Sedang Diproses
        </Badge>

        <Stack gap={4}>
          <Text fw={600}>
            Proses {stationLabel}
          </Text>

          <Text size="sm" c="dimmed">
            Kuantitas telah divalidasi.
            Selesaikan proses {stationLabel},
            kemudian tandai tugas sebagai selesai.
          </Text>
        </Stack>

        <Button
          type="button"
          loading={isCompleting}
          disabled={isCompleting}
          onClick={onComplete}
        >
          Tandai Selesai
        </Button>
      </Stack>
    </Card>
  );
}
````

## File: src/components/field-ops/worker/active/WorkerOnHoldBypassTask.tsx
````typescript
import { Badge, Card, Stack, Text } from "@mantine/core";

export function WorkerOnHoldBypassTask() {
  return (
    <Card withBorder radius="lg" p="lg">
      <Stack gap="md">
        <Badge
          color="orange"
          variant="light"
          w="fit-content"
        >
          Menunggu Persetujuan
        </Badge>

        <Stack gap={4}>
          <Text fw={600}>
            Permintaan bypass sedang diproses
          </Text>

          <Text size="sm" c="dimmed">
            Penyesuaian kuantitas sedang menunggu
            keputusan dari Outlet Admin.
          </Text>

          <Text size="sm" c="dimmed">
            Tugas akan dapat dilanjutkan setelah
            permintaan bypass disetujui.
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
}
````

## File: src/components/field-ops/worker/WorkerActiveSummary.tsx
````typescript
import type { StationType, WorkerActiveAssignment } from "@/types/api/worker.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { Badge, Card, Divider, Group, Stack, Text } from "@mantine/core";

function getStationLabel(stationType: StationType) {
  switch (stationType) {
    case "WASHING":
      return "Cuci";
    case "IRONING":
      return "Setrika";
    case "PACKING":
      return "Packing";
  }
}
function getStatusBadge(status: WorkerActiveAssignment["status"]) {
  switch (status) {
    case "ASSIGNED":
      return { label: "Menunggu Diproses", color: "yellow" };
    case "IN_PROGRESS":
      return { label: "Sedang Diproses", color: "blue" };
    case "ON_HOLD_BYPASS":
      return { label: "Menunggu Bypass", color: "orange" };
  }
}

export function WorkerActiveSummary({ assignment }: { assignment: WorkerActiveAssignment }) {
  const stationLabel = getStationLabel(assignment.stationType);
  const statusBadge = getStatusBadge(assignment.status);
  return (
    <Card withBorder shadow="sm" radius="lg" p="lg">
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Stack gap={2}>
            <Text size="xs" c="dimmed">
              Tugas Aktif
            </Text>
            <Text fw={700} size="lg">
              {assignment.order.orderCode}
            </Text>
          </Stack>

          <Badge color={statusBadge.color} variant="light" size="lg">
            {statusBadge.label}
          </Badge>
        </Group>

        <Divider />

        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            Station Kerja
          </Text>
          <Badge variant="light">{stationLabel}</Badge>
        </Group>

        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            Diambil
          </Text>
          <Text size="sm">
            {formatFieldOpsDate(assignment.assignedAt)} · {formatFieldOpsTime(assignment.assignedAt)}
          </Text>
        </Group>

        {assignment.startedAt && (
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Mulai Diproses
            </Text>
            <Text size="sm">{formatFieldOpsTime(assignment.startedAt)}</Text>
          </Group>
        )}
      </Stack>
    </Card>
  );
}
````

## File: src/components/field-ops/worker/WorkerHistory.tsx
````typescript
"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useHistoryList } from "@/hooks/worker.hooks";
import type { StationType } from "@/types/api/worker.types";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { ActionIcon, Badge, Card, Grid, Group, Pagination, Paper, Select, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";

import { MonthPickerInput } from "@mantine/dates";

import { IconArrowNarrowDown, IconArrowNarrowUp, IconCalendarMonth, IconChecklist, IconClock } from "@tabler/icons-react";

import dayjs from "dayjs";

const STATION_INFO: Record<
  StationType,
  {
    label: string;
    color: string;
  }
> = {
  WASHING: {
    label: "Washing",
    color: "blue",
  },
  IRONING: {
    label: "Ironing",
    color: "yellow",
  },
  PACKING: {
    label: "Packing",
    color: "grape",
  },
};

export function WorkerHistory() {
  const {
    historyQuery,

    page,
    period,
    stationType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleStationFilter,
    handleSortChange,
  } = useHistoryList();

  return (
    <Stack gap="md">
      <Stack gap={4}>
        <Text fw={700} size="lg">
          Riwayat Tugas
        </Text>

        <Text size="sm" c="dimmed">
          Daftar tugas yang telah Anda selesaikan.
        </Text>
      </Stack>

      <AsyncStateView
        isLoading={historyQuery.isPending}
        isError={historyQuery.isError}
        error={historyQuery.error}
        data={historyQuery.data}
        onRetry={() => historyQuery.refetch()}
        emptyTitle="Belum ada riwayat tugas"
        emptyDescription="Belum ada tugas selesai pada bulan dan filter yang dipilih."
        skeleton={
          <Stack gap="md">
            <Skeleton height={88} radius="lg" />

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={20} width="30%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={20} width="30%" />
                <Skeleton height={20} width="50%" />
                <Skeleton height={16} width="40%" />
              </Stack>
            </Card>
          </Stack>
        }
      >
        {(response) => {
          const { historyList, summary } = response.data;
          const { meta } = response;

          return (
            <Stack gap="md">
              <Paper withBorder radius="lg" p="md" bg="var(--color-primary-light)">
                <Group gap="sm">
                  <ThemeIcon variant="light" radius="xl" size="lg" color="blue">
                    <IconChecklist size={18} />
                  </ThemeIcon>

                  <Stack gap={1}>
                    <Text size="xs" c="dimmed">
                      Tugas Selesai per {period}
                    </Text>

                    <Text fw={700} size="lg">
                      {summary.totalCompleted}
                    </Text>
                  </Stack>
                </Group>
              </Paper>

              <Grid gap="xs" align="flex-end">
                <Grid.Col span={5}>
                  <MonthPickerInput
                    label="Bulan"
                    placeholder="Pilih bulan"
                    value={`${period}-01`}
                    valueFormat="MMM YYYY"
                    leftSection={<IconCalendarMonth size={17} />}
                    clearable={false}
                    onChange={(value) => {
                      if (!value) return;

                      handlePeriodChange(dayjs(value).format("YYYY-MM"));
                    }}
                  />
                </Grid.Col>

                <Grid.Col span={4}>
                  <Select
                    label="Station"
                    value={stationType}
                    onChange={handleStationFilter}
                    allowDeselect={false}
                    data={[
                      {
                        value: "ALL",
                        label: "Semua",
                      },
                      {
                        value: "WASHING",
                        label: "Washing",
                      },
                      {
                        value: "IRONING",
                        label: "Ironing",
                      },
                      {
                        value: "PACKING",
                        label: "Packing",
                      },
                    ]}
                  />
                </Grid.Col>

                <Grid.Col span={3}>
                  <Stack gap={4}>
                    <Text size="sm" fw={500}>
                      Urutkan
                    </Text>

                    <Group gap={4} wrap="nowrap">
                      <ActionIcon
                        variant={sortOrder === "asc" ? "filled" : "light"}
                        size="lg"
                        aria-label="Urutkan terlama"
                        onClick={() => handleSortChange("asc")}
                      >
                        <IconArrowNarrowUp size={18} />
                      </ActionIcon>

                      <ActionIcon
                        variant={sortOrder === "desc" ? "filled" : "light"}
                        size="lg"
                        aria-label="Urutkan terbaru"
                        onClick={() => handleSortChange("desc")}
                      >
                        <IconArrowNarrowDown size={18} />
                      </ActionIcon>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>

              <Stack gap="sm">
                {historyList.map((item) => {
                  const stationInfo = STATION_INFO[item.stationType];

                  return (
                    <Card key={item.id} withBorder radius="lg" p="lg">
                      <Stack gap="md">
                        {/* Baris atas: station kiri, tanggal kanan */}
                        <Grid align="center">
                          <Grid.Col span="auto">
                            <Badge variant="light" color={stationInfo.color}>
                              {stationInfo.label}
                            </Badge>
                          </Grid.Col>

                          <Grid.Col span="content">
                            <Text size="xs" c="dimmed">
                              {formatFieldOpsDate(item.completedAt)}
                            </Text>
                          </Grid.Col>
                        </Grid>

                        {/* Baris bawah: kode order kiri, jam kanan */}
                        <Grid align="center">
                          <Grid.Col span="auto">
                            <Stack gap={2}>
                              <Text size="xs" c="dimmed">
                                Kode Order
                              </Text>

                              <Text fw={700}>{item.order.orderCode}</Text>
                            </Stack>
                          </Grid.Col>

                          <Grid.Col span="content">
                            <Group gap="xs">
                              <IconClock size={16} color="var(--color-text-secondary)" />

                              <Text size="sm" c="dimmed">
                                Selesai pukul {formatFieldOpsTime(item.completedAt)}
                              </Text>
                            </Group>
                          </Grid.Col>
                        </Grid>
                      </Stack>
                    </Card>
                  );
                })}
              </Stack>

              {meta.totalPages > 1 && (
                <Group justify="center">
                  <Pagination value={page} total={meta.totalPages} onChange={setPage} size="sm" />
                </Group>
              )}
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/internalAuth/AcceptInvitationForm.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { acceptInvitationSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useAcceptEmployeeInvitation } from "@/hooks/authEmployee.hooks";

export function AcceptInvitationForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { mutate, isPending, isSuccess, data, error } =
    useAcceptEmployeeInvitation();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: schemaResolver(acceptInvitationSchema),
  });

  const submit = form.onSubmit((values) => {
    if (!token) return;

    mutate({
      token,
      password: values.password,
    });
  });

  const apiError = error instanceof ApiError ? error : null;

  if (!token) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-error)" }}>
          Link tidak valid
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Link undangan tidak valid atau tidak lengkap. Pastikan kamu membuka
          link persis seperti yang dikirim melalui email.
        </Text>

        <Anchor
          component={Link}
          href="/internal/login"
          c="var(--color-primary-dark)"
        >
          Kembali ke Login
        </Anchor>
      </Stack>
    );
  }

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-success)" }}>
          Akun berhasil diaktifkan
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          {data?.message ??
            "Akun kamu berhasil diaktifkan. Silakan login menggunakan password yang baru dibuat."}
        </Text>

        <Button
          component={Link}
          href="/internal/login"
          fullWidth
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Login
        </Button>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Aktivasi Akun Internal
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Buat password untuk mengaktifkan akun employee kamu.
        </Text>
      </div>

      {apiError && (
        <Alert
          color="red"
          style={{
            backgroundColor: "var(--color-error-light)",
            color: "var(--color-error)",
          }}
        >
          {apiError.message}
        </Alert>
      )}

      <form onSubmit={submit}>
        <Stack gap="md">
          <PasswordInput
            label="Password"
            placeholder="Minimal 8 karakter"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Konfirmasi Password"
            placeholder="Masukkan kembali password"
            {...form.getInputProps("confirmPassword")}
          />

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Aktifkan Akun
          </Button>
        </Stack>
      </form>

      <Anchor
        component={Link}
        href="/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Kembali ke Login
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/internalAuth/EmployeeForgotPasswordForm.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Button,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import Link from "next/link";

import { forgotPasswordSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useForgotPasswordEmployee } from "@/hooks/authEmployee.hooks";

export function EmployeeForgotPasswordForm() {
  const { mutate, isPending, isSuccess, data, error } =
    useForgotPasswordEmployee();

  const form = useForm({
    initialValues: {
      email: "",
    },
    validate: schemaResolver(forgotPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values);
  });

  const apiError = error instanceof ApiError ? error : null;

  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3}>Cek email kamu</Title>

        <Text size="sm" c="dimmed">
          {data?.message ??
            "Jika email terdaftar, link reset password telah dikirim."}
        </Text>

        <Anchor component={Link} href="/internal/login">
          Kembali ke Login Internal
        </Anchor>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Title order={3}>Lupa Password?</Title>

        <Text size="sm" c="dimmed">
          Masukkan email akun internal kamu untuk menerima link reset password.
        </Text>
      </div>

      {apiError && <Alert color="red">{apiError.message}</Alert>}

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="nama@email.com"
            {...form.getInputProps("email")}
          />

          <Button type="submit" loading={isPending} fullWidth>
            Kirim Link Reset
          </Button>
        </Stack>
      </form>

      <Anchor component={Link} href="/internal/login" ta="center">
        Kembali ke Login Internal
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/internalAuth/EmployeeResetPasswordForm.tsx
````typescript
"use client";

import {
  Alert,
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { resetPasswordSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { useResetPasswordEmployee } from "@/hooks/authEmployee.hooks";

export function EmployeeResetPasswordForm() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const { mutate, isPending, isSuccess, data, error } =
    useResetPasswordEmployee();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: schemaResolver(resetPasswordSchema),
  });

  const submit = form.onSubmit((values) => {
    if (!token) {
      return;
    }

    mutate({
      token,
      newPassword: values.password,
    });
  });

  const apiError = error instanceof ApiError ? error : null;

  /*
   * Token tidak ditemukan di URL
   */
  if (!token) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-error)" }}>
          Link tidak valid
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Link reset password tidak valid atau tidak lengkap. Silakan minta link
          reset password baru.
        </Text>

        <Anchor
          component={Link}
          href="/internal/forgot-password"
          c="var(--color-primary-dark)"
        >
          Minta link reset password
        </Anchor>
      </Stack>
    );
  }

  /*
   * Password berhasil direset
   */
  if (isSuccess) {
    return (
      <Stack gap="md" align="center" ta="center">
        <Title order={3} style={{ color: "var(--color-primary)" }}>
          Password berhasil diubah
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          {data?.message ??
            "Password berhasil diperbarui. Silakan login dengan password baru."}
        </Text>

        <Button
          component={Link}
          href="/internal/login"
          fullWidth
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Kembali ke Login
        </Button>
      </Stack>
    );
  }

  return (
    <Stack gap="md">
      <div>
        <Title
          order={3}
          style={{
            color: "var(--color-text-primary)",
          }}
        >
          Reset Password
        </Title>

        <Text size="sm" c="var(--color-text-secondary)">
          Buat password baru untuk akun kamu.
        </Text>
      </div>

      {apiError && (
        <Alert
          color="red"
          style={{
            backgroundColor: "var(--color-error-light)",
            color: "var(--color-error)",
          }}
        >
          {apiError.message}
        </Alert>
      )}

      <form onSubmit={submit}>
        <Stack gap="md">
          <PasswordInput
            label="Password Baru"
            placeholder="Minimal 8 karakter"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Konfirmasi Password"
            placeholder="Masukkan kembali password"
            {...form.getInputProps("confirmPassword")}
          />

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Reset Password
          </Button>
        </Stack>
      </form>

      <Anchor
        component={Link}
        href="/internal/login"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Kembali ke Login
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/landing-page/FeatureSection.tsx
````typescript
import { Box, Title, Text, Paper } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconTruck, IconActivity, IconMapPin, Icon } from "@tabler/icons-react";
import Link from "next/link";

export const FEATURES: {
  icon: Icon;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: IconTruck,
    title: "Request pickup",
    description:
      "Jadwalkan penjemputan cucian dari alamat tersimpan, kapan saja kamu mau.",
    href: "/request-pickup",
  },
  {
    icon: IconActivity,
    title: "Tracking proses",
    description:
      "Ikuti tiap tahap: pickup, cuci-setrika-packing, sampai diantar kembali.",
    href: "/pesanan",
  },
  {
    icon: IconMapPin,
    title: "Kelola Alamat",
    description:
      "Kelola alamat pengiriman dan penjemputan laundry dengan mudah dan praktis.",
    href: "/alamat",
  },
];

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  href,
}: (typeof FEATURES)[number]) {
  const { hovered, ref } = useHover();

  return (
    <Paper
      ref={ref}
      component={Link}
      href={href}
      withBorder
      p="lg"
      radius="md"
      style={{
        borderColor:
          "color-mix(in srgb, var(--color-primary) 20%, transparent)",
        backgroundColor: "var(--color-surface)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "var(--shadow-md)" : "none",
        transition: "transform 160ms ease, box-shadow 160ms ease",
      }}
    >
      <Box
        style={{
          width: 50,
          height: 50,
          borderRadius: "var(--radius-sm)",
          backgroundColor: "var(--color-primary-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
        }}
      >
        <Icon size={22} color="var(--color-primary-dark)" />
      </Box>
      <Title order={3} style={{ color: "var(--color-primary-dark)" }}>
        {title}
      </Title>
      <Text c="dimmed" mt={4}>
        {description}
      </Text>
    </Paper>
  );
}
````

## File: src/components/shared/Location/LocationPermission/lib/browser-detect.ts
````typescript
export type BrowserName = "chrome" | "firefox" | "safari" | "edge" | "other";

export function detectBrowser(): BrowserName {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent;

  // urutan pengecekan penting: Edge & Chrome sama-sama punya "Chrome" di UA
  if (/Edg\//.test(ua)) return "edge";
  if (/Chrome\//.test(ua) && !/Edg\//.test(ua)) return "chrome";
  if (/Firefox\//.test(ua)) return "firefox";
  if (/Safari\//.test(ua) && !/Chrome\//.test(ua)) return "safari";

  return "other";
}

const INSTRUCTIONS: Record<BrowserName, string> = {
  chrome:
    'Klik ikon gembok di sebelah kiri address bar, lalu ubah izin Lokasi jadi "Izinkan".',
  edge:
    'Klik ikon gembok di sebelah kiri address bar, lalu ubah izin Lokasi jadi "Izinkan".',
  firefox:
    'Klik ikon gembok di sebelah kiri address bar, lalu hapus blokir izin Lokasi.',
  safari:
    "Buka menu Safari → Settings for This Website (atau Preferences → Websites → Location), lalu ubah izin jadi Allow.",
  other:
    'Buka pengaturan situs di browser Anda, cari izin "Lokasi", lalu ubah jadi diizinkan.',
};

export function getLocationPermissionInstruction(): string {
  return INSTRUCTIONS[detectBrowser()];
}
````

## File: src/components/shared/Location/LocationPermission/LocationPermissionGate.tsx
````typescript
"use client";

import { useEffect } from "react";
import { Button, Group, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconMapPinOff } from "@tabler/icons-react";
import { useLocationPermission } from "./hooks/useLocationPermission";
import { getLocationPermissionInstruction } from "./lib/browser-detect";

const NOTIFICATION_ID = "location-permission-denied";

export function LocationPermissionGate() {
  const { status, requestPermission } = useLocationPermission();

  useEffect(() => {
    if (status !== "denied") {
      notifications.hide(NOTIFICATION_ID);
      return;
    }

    notifications.show({
      id: NOTIFICATION_ID,
      autoClose: false,
      withCloseButton: false,
      icon: <IconMapPinOff size={18} />,
      color: "blue",
      title: "Izin lokasi diperlukan",
      message: (
        <Stack gap={10}>
          <Text size="sm" c="var(--color-text-secondary)">
            {getLocationPermissionInstruction()}
          </Text>
          <Group gap={8}>
            <Button
              size="xs"
              style={{ backgroundColor: "var(--color-primary)" }}
              onClick={requestPermission}
            >
              Coba Lagi
            </Button>
            <Button
              size="xs"
              variant="outline"
              color="gray"
              onClick={() => notifications.hide(NOTIFICATION_ID)}
            >
              Tutup
            </Button>
          </Group>
        </Stack>
      ),
      styles: {
        root: { backgroundColor: "#ffffff", borderRadius: 12 },
        icon: {
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary)",
        },
        title: { color: "var(--color-primary)", fontWeight: 500 },
      },
    });
  }, [status, requestPermission]);

  return null;
}
````

## File: src/components/shared/Location/LocationPicker.tsx
````typescript
"use client";

import dynamic from "next/dynamic";

export const LocationPicker = dynamic(
  () => import("./LocationPickerInner").then((mod) => mod.LocationPickerInner),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
        Memuat peta...
      </div>
    ),
  },
);
````

## File: src/components/shared/Location/LocationPickerInner.tsx
````typescript
"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useRef } from "react";
import L from "leaflet";

// Fix icon default yang rusak akibat bundler
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

type LocationPickerInnerProps = {
  initialLat: number;
  initialLng: number;
  onChange: (lat: number, lng: number) => void;
};

function DraggableMarker({ initialLat, initialLng, onChange }: LocationPickerInnerProps) {
  const markerRef = useRef<L.Marker>(null);

  const eventHandlers = {
    dragend() {
      const marker = markerRef.current;
      if (marker) {
        const { lat, lng } = marker.getLatLng();
        onChange(lat, lng);
      }
    },
  };

  // Tap/klik di peta juga memindahkan pin, tidak cuma drag
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });

  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={[initialLat, initialLng]}
      ref={markerRef}
    />
  );
}

export function LocationPickerInner({ initialLat, initialLng, onChange }: LocationPickerInnerProps) {
  return (
    <MapContainer
      center={[initialLat, initialLng]}
      zoom={16}
      style={{ height: 300, width: "100%", borderRadius: 8 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <DraggableMarker initialLat={initialLat} initialLng={initialLng} onChange={onChange} />
    </MapContainer>
  );
}
````

## File: src/components/ui/AsyncStateView.tsx
````typescript
"use client";

import { Skeleton, Stack } from "@mantine/core";
import type { ReactNode } from "react";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";

type AsyncStateViewProps<T> = {
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
  data: T | undefined | null;
  onRetry?: () => void;
  isEmpty?: (data: T) => boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: { label: string; onClick: () => void };
  skeleton?: ReactNode;
  children: (data: T) => ReactNode;
};

export function AsyncStateView<T>({
  isLoading,
  isError,
  error,
  data,
  onRetry,
  isEmpty,
  emptyTitle,
  emptyDescription,
  emptyAction,
  skeleton,
  children,
}: AsyncStateViewProps<T>) {
  if (isLoading) {
    return (
      skeleton ?? (
        <Stack gap="sm">
          <Skeleton height={20} width="40%" />
          <Skeleton height={16} />
          <Skeleton height={16} />
          <Skeleton height={16} width="70%" />
        </Stack>
      )
    );
  }

  if (isError) {
    return (
      <ErrorState
        description={
          error instanceof Error ? error.message : "Terjadi kesalahan tak terduga."
        }
        onRetry={onRetry}
      />
    );
  }

  const empty =
    data == null || (isEmpty ? isEmpty(data) : Array.isArray(data) && data.length === 0);

  if (empty) {
    return (
      <EmptyState
        title={emptyTitle}
        description={emptyDescription}
        action={emptyAction}
      />
    );
  }

  return <>{children(data as T)}</>;
}
````

## File: src/components/ui/PageHeader.tsx
````typescript
import {
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <Group
      justify="space-between"
      align="flex-end"
      wrap="wrap"
      gap="md"
    >
      <Stack gap={4}>
        <Title
          order={2}
          c="var(--color-text-primary)"
        >
          {title}
        </Title>

        {description && (
          <Text
            size="sm"
            c="var(--color-text-secondary)"
          >
            {description}
          </Text>
        )}
      </Stack>

      {action}
    </Group>
  );
}
````

## File: src/components/ui/ServerPagination.tsx
````typescript
"use client";

import {
  Group,
  Pagination,
  Select,
  Text,
} from "@mantine/core";

export function ServerPagination({
  page,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
  onPageSizeChange,
}: {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;

  onPageChange: (
    page: number,
  ) => void;

  onPageSizeChange: (
    size: 10 | 20 | 50,
  ) => void;
}) {
  return (
    <Group
      justify="space-between"
      align="center"
      mt="md"
      wrap="wrap"
    >
      <Text
        size="sm"
        c="var(--color-text-secondary)"
      >
        Total {totalItems} data
      </Text>

      <Group gap="sm">
        <Select
          aria-label="Jumlah per halaman"
          w={90}
          value={String(pageSize)}
          data={["10", "20", "50"]}
          onChange={(value) =>
            onPageSizeChange(
              Number(value) as
                | 10
                | 20
                | 50,
            )
          }
        />

        <Pagination
          value={page}
          total={Math.max(
            totalPages,
            1,
          )}
          onChange={onPageChange}
        />
      </Group>
    </Group>
  );
}
````

## File: src/hooks/addressCustomer/address.hooks.ts
````typescript
import { AddressApi } from "@/lib/api/addressCustomer.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const addressApi = new AddressApi();

const ADDRESSES_QUERY_KEY = ["addresses"];

export function useAddresses() {
  return useQuery({
    queryKey: ADDRESSES_QUERY_KEY,
    queryFn: addressApi.getAddresses,
  });
}

export function useCreateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addressApi.createAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useUpdateAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: Parameters<typeof addressApi.updateAddress>[1];
    }) => addressApi.updateAddress(id, payload),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useDeleteAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addressApi.deleteAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useSetPrimaryAddress() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addressApi.setPrimaryAddress,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ADDRESSES_QUERY_KEY }),
  });
}

export function useProvinces() {
  return useQuery({
    queryKey: ["regions", "provinces"],
    queryFn: addressApi.getProvince,
    staleTime: Infinity,
  });
}

export function useCities(provinceId: string | null) {
  return useQuery({
    queryKey: ["regions", "cities", provinceId],
    queryFn: () => addressApi.getCities(provinceId),
    enabled: !!provinceId,
  });
}

export function useDistrict(cityId: string | null) {
  return useQuery({
    queryKey: ["regions", "districts", cityId],
    queryFn: () => addressApi.getDistrict(cityId),
    enabled: !!cityId,
  });
}

export function useSubDistrict(districtsId: string | null) {
  return useQuery({
    queryKey: ["regions", "subDistricts", districtsId],
    queryFn: () => addressApi.getSubDistricts(districtsId),
    enabled: !!districtsId,
  });
}

export function usePreviewLocation() {
  return useMutation({
    mutationFn: addressApi.getPreviewLocation,
  });
}
````

## File: src/hooks/addressCustomer/Useaddresslocationpreview .ts
````typescript
import { useState } from "react";
import { UseFormReturnType } from "@mantine/form";
import { previewLocationSchema } from "@/lib/validation/address.validation";
import { usePreviewLocation } from "./address.hooks";
import type { AddressFormValues } from "@/types/api/address.types";

const DEFAULT_FALLBACK_POSITION = { lat: -6.2, lng: 106.816666 };

/**
 * Encapsulates the "preview location on map" flow for AddressForm: checking
 * whether enough address detail has been entered, calling the geocoding
 * preview endpoint, falling back to a default pin on failure, and letting
 * the user drag the pin to a corrected position.
 */
export function useAddressLocationPreview(
  form: UseFormReturnType<AddressFormValues>,
) {
  const [locationError, setLocationError] = useState<string | null>(null);
  const previewLocationMutation = usePreviewLocation();

  const previewLocationCheck = previewLocationSchema.safeParse({
    provinceName: form.values.provinceName,
    cityName: form.values.cityName,
    districtName: form.values.districtName,
    subDistrictName: form.values.subDistrictName,
    zipCode: form.values.zipCode,
    streetDetail: form.values.streetDetail,
  });

  const isAddressDetailComplete = previewLocationCheck.success;

  const hasPosition =
    form.values.latitude !== undefined && form.values.longitude !== undefined;

  function resetPin() {
    form.setFieldValue("latitude", undefined);
    form.setFieldValue("longitude", undefined);
  }

  function applyFallbackPosition(message: string) {
    form.setFieldValue("latitude", DEFAULT_FALLBACK_POSITION.lat);
    form.setFieldValue("longitude", DEFAULT_FALLBACK_POSITION.lng);
    setLocationError(message);
  }

  function handleCheckLocation() {
    setLocationError(null);

    const result = previewLocationSchema.safeParse({
      provinceName: form.values.provinceName,
      cityName: form.values.cityName,
      districtName: form.values.districtName,
      subDistrictName: form.values.subDistrictName,
      zipCode: form.values.zipCode,
      streetDetail: form.values.streetDetail,
    });

    if (!result.success) {
      setLocationError(
        result.error.issues[0]?.message ?? "Lengkapi alamat terlebih dahulu.",
      );
      return;
    }

    previewLocationMutation.mutate(result.data, {
      onSuccess: ({ latitude, longitude, found }) => {
        if (found && latitude !== undefined && longitude !== undefined) {
          form.setFieldValue("latitude", latitude);
          form.setFieldValue("longitude", longitude);
        } else {
          applyFallbackPosition(
            "Lokasi tidak ditemukan otomatis. Geser pin ke posisi yang benar di peta.",
          );
        }
      },
      onError: () => {
        applyFallbackPosition(
          "Gagal memuat perkiraan lokasi. Geser pin ke posisi yang benar di peta.",
        );
      },
    });
  }

  function handlePinChange(lat: number, lng: number) {
    form.setFieldValue("latitude", lat);
    form.setFieldValue("longitude", lng);
  }

  return {
    locationError,
    isAddressDetailComplete,
    hasPosition,
    isCheckingLocation: previewLocationMutation.isPending,
    resetPin,
    handleCheckLocation,
    handlePinChange,
  };
}
````

## File: src/hooks/addressCustomer/Useaddressregioncascade.ts
````typescript
import { UseFormReturnType } from "@mantine/form";

import type { AddressFormValues } from "@/types/api/address.types";
import { useCities, useDistrict, useProvinces, useSubDistrict } from "./address.hooks";

/**
 * Encapsulates the province -> city -> district -> subdistrict cascading
 * selects used by AddressForm: fetching each level's options and resetting
 * every downstream field (plus the map pin) whenever a parent level changes.
 */
export function useAddressRegionCascade(
  form: UseFormReturnType<AddressFormValues>,
) {
  const { data: provinces, isLoading: loadingProvinces } = useProvinces();
  const { data: cities, isLoading: loadingCities } = useCities(
    form.values.provinceId || null,
  );
  const { data: districts, isLoading: loadingDistricts } = useDistrict(
    form.values.cityId || null,
  );
  const { data: subDistricts, isLoading: loadingSubDistricts } =
    useSubDistrict(form.values.districtId || null);

  function resetPin() {
    form.setFieldValue("latitude", undefined);
    form.setFieldValue("longitude", undefined);
  }

  function handleProvinceChange(value: string | null) {
    const selected = provinces?.find((p) => String(p.id) === value);
    form.setFieldValue("provinceId", value ?? "");
    form.setFieldValue("provinceName", selected?.name ?? "");
    form.setFieldValue("cityId", "");
    form.setFieldValue("cityName", "");
    form.setFieldValue("districtId", "");
    form.setFieldValue("districtName", "");
    form.setFieldValue("subDistrictId", "");
    form.setFieldValue("subDistrictName", "");
    resetPin();
  }

  function handleCityChange(value: string | null) {
    const selected = cities?.find((c) => String(c.id) === value);
    form.setFieldValue("cityId", value ?? "");
    form.setFieldValue("cityName", selected?.name ?? "");
    form.setFieldValue("districtId", "");
    form.setFieldValue("districtName", "");
    form.setFieldValue("subDistrictId", "");
    form.setFieldValue("subDistrictName", "");
    resetPin();
  }

  function handleDistrictChange(value: string | null) {
    const selected = districts?.find((d) => String(d.id) === value);
    form.setFieldValue("districtId", value ?? "");
    form.setFieldValue("districtName", selected?.name ?? "");
    form.setFieldValue("subDistrictId", "");
    form.setFieldValue("subDistrictName", "");
    resetPin();
  }

  function handleSubDistrictChange(value: string | null) {
    const selected = subDistricts?.find((sd) => String(sd.id) === value);
    form.setFieldValue("subDistrictId", value ?? "");
    form.setFieldValue("subDistrictName", selected?.name ?? "");
    resetPin();
  }

  return {
    provinces,
    cities,
    districts,
    subDistricts,
    loadingProvinces,
    loadingCities,
    loadingDistricts,
    loadingSubDistricts,
    handleProvinceChange,
    handleCityChange,
    handleDistrictChange,
    handleSubDistrictChange,
  };
}
````

## File: src/hooks/order/order.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderApi } from "@/lib/api/orderCustomer.api";
import {
  CreatePaymentResponse,
  ListOrderQuery,
} from "@/types/api/orders.types";
import { ApiError } from "@/lib/api/axios";
import { CreateComplaintSchema } from "@/lib/validation/order.validation";

const orderApi = new OrderApi();

export function useCreateOrder() {
  return useMutation({ mutationFn: orderApi.createOrder });
}

export function useOrders(query: ListOrderQuery) {
  return useQuery({
    queryKey: ["orders", query],
    queryFn: () => orderApi.listOrders(query),
  });
}

export function useOrderDetail(id: string) {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => orderApi.getOrderDetail(id),
    enabled: !!id,
  });
}

export function useCreatePayment(id: string) {
  return useMutation<CreatePaymentResponse, ApiError, void>({
    mutationFn: () => orderApi.paymentAttempt(id),
  });
}

export function useLatestPayment(id: string) {
  return useQuery({
    queryKey: ["payment", id],
    queryFn: () => orderApi.getLastestPayment(id),
    enabled: !!id,
  });
}

export function useConfirmOrder() {
  return useMutation({ mutationFn: orderApi.confirm });
}


export function useCreateComplaint(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateComplaintSchema) => {
      const formData = new FormData();

      formData.append("category", input.category);
      formData.append("description", input.description);
      formData.append("PHOTO", input.photo);

      return orderApi.complaint(id, formData);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", id],
      });
    },
  });
}
````

## File: src/hooks/authCustomer.hooks.ts
````typescript
"use client";

import { AuthApi } from "@/lib/api/auth.api";
import {
  RegisterCustomerSchema,
} from "@/lib/validation/auth.validation";
import {
  ResetPasswordCustomerPayload,
  VerificationPayload,
  VerifyEmailPayload,
} from "@/types/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const authApi = new AuthApi();

export const AUTH_ME_QUERY_KEY = ["auth", "me"];

export function useRegisterCustomer() {
  return useMutation({
    mutationFn: (payload: RegisterCustomerSchema) =>
      authApi.registerCustomer(payload),
  });
}

export function useLoginCustomer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.loginCustomer,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
    },
  });
}

export function useLoginWithGoogle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.loginWithGoogle,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
    },
  });
}

export function useVerifyCustomerEmail() {
  return useMutation({
    mutationFn: (payload: VerifyEmailPayload) =>
      authApi.verifyCustomerEmail(payload),
  });
}

export function useResendCustomerVerification() {
  return useMutation({
    mutationFn: (payload: VerificationPayload) =>
      authApi.resendCustomerVerification(payload),
  });
}

export function useForgotPasswordCustomer() {
  return useMutation({
    mutationFn: (payload: VerificationPayload) =>
      authApi.forgotPasswordCustomer(payload),
  });
}

export function useResetPasswordCustomer() {
  return useMutation({
    mutationFn: (payload: ResetPasswordCustomerPayload) =>
      authApi.resetPasswordCustomer(payload),
  });
}

export function useCurrentUser() {
  return useQuery({
    queryKey: AUTH_ME_QUERY_KEY,
    queryFn: authApi.me,
    retry: false,
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      queryClient.setQueryData(["auth", "me"], null);
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
    },
  });
}
````

## File: src/hooks/authEmployee.hooks.ts
````typescript
import { AuthEmployeeApi } from "@/lib/api/authEmployee.api";
import {
  AcceptInvitationPayload,
  ResetPasswordCustomerPayload,
  VerificationPayload,
} from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_ME_QUERY_KEY } from "./authCustomer.hooks";

const authEmployeeApi = new AuthEmployeeApi();

export function useLoginEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authEmployeeApi.login,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY });
    },
  });
}

export function useAcceptEmployeeInvitation() {
  return useMutation({
    mutationFn: (payload: AcceptInvitationPayload) =>
      authEmployeeApi.acceptInvitation(payload),
  });
}

export function useForgotPasswordEmployee() {
  return useMutation({
    mutationFn: (payload: VerificationPayload) =>
      authEmployeeApi.forgotPassword(payload),
  });
}

export function useResetPasswordEmployee() {
  return useMutation({
    mutationFn: (payload: ResetPasswordCustomerPayload) =>
      authEmployeeApi.resetPassword(payload),
  });
}
````

## File: src/hooks/backOfficeNotification.hooks.ts
````typescript
"use client";

import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

import { OrderApi } from "@/lib/api/order.api";
import { BypassApi } from "@/lib/api/bypass.api";
import type { OrderListItem } from "@/types/api/order.types";
import type { BypassListItem } from "@/types/api/bypass.types";

const orderApi = new OrderApi();
const bypassApi = new BypassApi();

const POLLING_INTERVAL = 15_000;

export function useBackOfficeNotification() {
  const knownOrderIdsRef = useRef<Set<string>>(new Set());
  const knownBypassIdsRef = useRef<Set<string>>(new Set());

  const hasOrderBaselineRef = useRef(false);
  const hasBypassBaselineRef = useRef(false);

  const orderQuery = useQuery({
    queryKey: ["back-office", "notifications", "orders"],
    queryFn: () =>
      orderApi.getOrders({
        page: 1,
        pageSize: 20,
        customerStatus: "ON_THE_WAY_TO_OUTLET",
        sortBy: "createdAt",
        sortOrder: "desc",
      }),
    refetchInterval: POLLING_INTERVAL,
    refetchOnWindowFocus: true,
  });

  const bypassQuery = useQuery({
    queryKey: ["back-office", "notifications", "bypass"],
    queryFn: () =>
      bypassApi.getBypassRequests({
        page: 1,
        pageSize: 20,
        status: "PENDING",
        sortBy: "createdAt",
        sortOrder: "desc",
      }),
    refetchInterval: POLLING_INTERVAL,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (!orderQuery.data) {
      return;
    }

    const orders: OrderListItem[] = orderQuery.data.data;

    const currentOrderIds = new Set(
      orders.map((order) => order.id),
    );

    // Response pertama hanya menjadi baseline.
    if (!hasOrderBaselineRef.current) {
      knownOrderIdsRef.current = currentOrderIds;
      hasOrderBaselineRef.current = true;

      return;
    }

    const newOrders = orders.filter(
      (order) => !knownOrderIdsRef.current.has(order.id),
    );

    if (newOrders.length > 0) {
      newOrders.forEach((order) => {
        notifications.show({
          title: "Pesanan baru",
          message: `Pesanan ${order.orderCode} sedang menuju outlet.`,
          color: "blue",
        });
      });
    }

    knownOrderIdsRef.current = currentOrderIds;
  }, [orderQuery.data]);

  useEffect(() => {
    if (!bypassQuery.data) {
      return;
    }

    const bypasses: BypassListItem[] = bypassQuery.data.data;

    const currentBypassIds = new Set(
      bypasses.map((bypass) => bypass.id),
    );

    // Response pertama hanya menjadi baseline.
    if (!hasBypassBaselineRef.current) {
      knownBypassIdsRef.current = currentBypassIds;
      hasBypassBaselineRef.current = true;

      return;
    }

    const newBypasses = bypasses.filter(
      (bypass) => !knownBypassIdsRef.current.has(bypass.id),
    );

    if (newBypasses.length > 0) {
      newBypasses.forEach((bypass) => {
        notifications.show({
          title: "Permintaan bypass baru",
          message: `Pesanan ${bypass.order.orderCode} memiliki permintaan bypass.`,
          color: "orange",
        });
      });
    }

    knownBypassIdsRef.current = currentBypassIds;
  }, [bypassQuery.data]);
}
````

## File: src/hooks/fieldOpsProfile.hooks.ts
````typescript
import { FieldOpsProfileApi } from "@/lib/api/fieldOpsProfile.api";
import { fieldOpsProfileSchema } from "@/lib/validation/fieldOpsProfile.validation";
import type { FieldOpsProfile, UpdateFieldOpsProfilePayload } from "@/types/api/fieldOpsProfile.types";
import { schemaResolver, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const FIELD_OPS_PROFILE_QUERY_KEY = ["field-ops", "profile"] as const;

const fieldOpsProfileApi = new FieldOpsProfileApi();

export function useFieldOpsProfile() {
  return useQuery({
    queryKey: FIELD_OPS_PROFILE_QUERY_KEY,
    queryFn: () => fieldOpsProfileApi.getProfile(),
  });
}

export function useUpdateFieldOpsProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateFieldOpsProfilePayload) => fieldOpsProfileApi.updateProfile(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: FIELD_OPS_PROFILE_QUERY_KEY,
      });
    },
  });
}

export function useUpdateFieldOpsProfilePhoto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => fieldOpsProfileApi.updateProfilePhoto(file),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: FIELD_OPS_PROFILE_QUERY_KEY,
      });
    },
  });
}

export function useFieldOpsProfileEdit(profile: FieldOpsProfile, onSuccess: () => void) {
  const updateProfile = useUpdateFieldOpsProfile();
  const updatePhoto = useUpdateFieldOpsProfilePhoto();

  const form = useForm({
    initialValues: {
      name: profile.name,
      email: profile.email,
      phone: profile.phone ?? "",
      photo: null as File | null,
    },

    validate: schemaResolver(fieldOpsProfileSchema),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await updateProfile.mutateAsync({
      name: values.name,
      email: values.email,
      ...(values.phone && { phone: values.phone }),
    });

    if (values.photo) {
      await updatePhoto.mutateAsync(values.photo);
    }

    notifications.show({
      title: "Profil berhasil diperbarui",
      message: "Perubahan profil berhasil disimpan.",
      color: "green",
    });

    form.setFieldValue("photo", null);
    form.resetDirty();

    onSuccess();
  });

  const handleReset = () => {
    form.setValues({
      name: profile.name,
      email: profile.email,
      phone: profile.phone ?? "",
      photo: null,
    });

    form.resetDirty();
  };

  return {
    form,
    handleSubmit,
    handleReset,
    isPending: updateProfile.isPending || updatePhoto.isPending,
  };
}
````

## File: src/hooks/outletForm.hooks.ts
````typescript
import {
  editOutletSchema,
  OutletFormValues,
  outletSchema,
} from "@/lib/validation/outlet.validation";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  useCities,
  useDistrict,
  usePreviewLocation,
  useProvinces,
  useSubDistrict,
} from "./addressCustomer/address.hooks";
import { previewLocationSchema } from "@/lib/validation/address.validation";

export function useOutletFormHooks({
  initialValues,
  mode,
}: {
  initialValues: OutletFormValues;
  mode: "create" | "edit";
}) {
  const router = useRouter();
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isEditingLocation, setIsEditingLocation] = useState(mode === "create");

  const form = useForm<OutletFormValues>({
    mode: "controlled",
    initialValues, // Otomatis terisi saat pertama kali render/remount

    validate: (values) => {
      const schema =
        mode === "edit" && !isEditingLocation ? editOutletSchema : outletSchema;
      const result = schema.safeParse(values);

      if (result.success) {
        return {};
      }

      return result.error.issues.reduce<Record<string, string>>(
        (errors, issue) => {
          const field = issue.path[0];

          if (typeof field === "string" && !errors[field]) {
            errors[field] = issue.message;
          }

          return errors;
        },
        {},
      );
    },

    validateInputOnChange: true,
  });

  // Hapus useEffect yang memanggil form.setValues(initialValues)

  const { data: provinces, isLoading: isLoadingProvinces } = useProvinces();
  const { data: cities, isLoading: isLoadingCities } = useCities(
    form.values.provinceId || null,
  );
  const { data: districts, isLoading: isLoadingDistricts } = useDistrict(
    form.values.cityId || null,
  );
  const { data: subDistricts, isLoading: isLoadingSubDistricts } =
    useSubDistrict(form.values.districtId || null);
  const previewLocation = usePreviewLocation();

  const handleProvinceChange = (value: string | null) => {
    const selected = provinces?.find((item) => String(item.id) === value);

    form.setValues({
      provinceId: value ?? "",
      provinceName: selected?.name ?? "",
      cityId: "",
      cityName: "",
      districtId: "",
      districtName: "",
      subDistrictId: "",
      subDistrictName: "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handleCityChange = (value: string | null) => {
    const selected = cities?.find((item) => String(item.id) === value);

    form.setValues({
      cityId: value ?? "",
      cityName: selected?.name ?? "",
      districtId: "",
      districtName: "",
      subDistrictId: "",
      subDistrictName: "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handleDistrictChange = (value: string | null) => {
    const selected = districts?.find((item) => String(item.id) === value);

    form.setValues({
      districtId: value ?? "",
      districtName: selected?.name ?? "",
      subDistrictId: "",
      subDistrictName: "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handleSubDistrictChange = (value: string | null) => {
    const selected = subDistricts?.find((item) => String(item.id) === value);

    form.setValues({
      subDistrictId: value ?? "",
      subDistrictName: selected?.name ?? "",
      zipCode: "",
      latitude: undefined,
      longitude: undefined,
    });

    setLocationError(null);
  };

  const handlePreviewLocation = async () => {
    const validation = previewLocationSchema.safeParse({
      provinceName: form.values.provinceName,
      cityName: form.values.cityName,
      districtName: form.values.districtName,
      subDistrictName: form.values.subDistrictName,
      zipCode: form.values.zipCode,
      streetDetail: form.values.streetDetail,
    });

    if (!validation.success) {
      form.validate();
      return;
    }

    setLocationError(null);

    try {
      const result = await previewLocation.mutateAsync({
        provinceName: form.values.provinceName,
        cityName: form.values.cityName,
        districtName: form.values.districtName,
        subDistrictName: form.values.subDistrictName,
        zipCode: form.values.zipCode,
        streetDetail: form.values.streetDetail,
      });

      if (
        !result.found ||
        result.latitude === undefined ||
        result.longitude === undefined
      ) {
        setLocationError(
          "Lokasi tidak ditemukan. Periksa kembali alamat yang dimasukkan.",
        );
        return;
      }

      form.setValues({
        latitude: result.latitude,
        longitude: result.longitude,
      });
    } catch (error) {
      setLocationError(
        error instanceof Error ? error.message : "Gagal mencari lokasi.",
      );
    }
  };

  const handleLocationChange = (latitude: number, longitude: number) => {
    form.setValues({
      latitude,
      longitude,
    });

    setLocationError(null);
  };

  const handleCancelEditLocation = () => {
    form.setValues(initialValues);
    setIsEditingLocation(false);
    setLocationError(null);
    form.clearErrors();
  };

  const hasPosition =
    typeof form.values.latitude === "number" &&
    typeof form.values.longitude === "number";

  return {
    form,
    isEditingLocation,
    hasPosition,
    setIsEditingLocation,
    provinces,
    handleProvinceChange,
    isLoadingProvinces,
    cities,
    handleCityChange,
    isLoadingCities,
    districts,
    handleDistrictChange,
    isLoadingDistricts,
    subDistricts,
    handleSubDistrictChange,
    isLoadingSubDistricts,
    previewLocation,
    handlePreviewLocation,
    handleCancelEditLocation,
    locationError,
    handleLocationChange,
    router,
  };
}
````

## File: src/hooks/reception.hooks.ts
````typescript
import { CreateOrderPayload, OrderListItem, OrderQuery } from "@/types/api/order.types";
import { useState } from "react";
import { useLaundryItems } from "./laundry-item.hooks";
import { CustomerStatus } from "@/types/api";
import { useCreateOrderAdmin, useOrderList, useReceiveOrder } from "./order.hooks";
import { notifications } from "@mantine/notifications";
import { useDebouncedValue } from "@mantine/hooks";
import { useRouter } from "next/navigation";

type CreateOrderItemForm = {
  laundryItemId: string;
  quantity: number;
};

const INITIAL_ITEM: CreateOrderItemForm = {
  laundryItemId: "",
  quantity: 1,
};

type CreateOrderProps = {
  opened: boolean;
  order: OrderListItem | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (orderId: string, payload: CreateOrderPayload) => Promise<void>;
};

export function useCreateOrderHooks({ order, isSubmitting, onClose, onSubmit }: CreateOrderProps) {
  const [weightKg, setWeightKg] = useState<number | string>("");
  const [items, setItems] = useState<CreateOrderItemForm[]>([
    {
      ...INITIAL_ITEM,
    },
  ]);

  const { data: laundryItems, isLoading: isLaundryItemsLoading } = useLaundryItems({
    page: 1,
    pageSize: 100,
  });

  const resetForm = () => {
    setWeightKg("");
    setItems([
      {
        ...INITIAL_ITEM,
      },
    ]);
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    resetForm(); 
    onClose();
  };

  const handleAddItem = () => {
    setItems((previous) => [
      ...previous,
      {
        ...INITIAL_ITEM,
      },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    setItems((previous) => previous.filter((_, itemIndex) => itemIndex !== index));
  };

  const handleLaundryItemChange = (index: number, value: string | null) => {
    setItems((previous) =>
      previous.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          laundryItemId: value ?? "",
        };
      }),
    );
  };

  const handleQuantityChange = (index: number, value: string | number) => {
    const quantity = typeof value === "number" ? value : Number(value);

    setItems((previous) =>
      previous.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return {
          ...item,
          quantity: Number.isInteger(quantity) && quantity > 0 ? quantity : 1,
        };
      }),
    );
  };

  const getLaundryItemOptions = (currentItemId: string) => {
    const selectedItemIds = items
      .filter((item) => item.laundryItemId !== "" && item.laundryItemId !== currentItemId)
      .map((item) => item.laundryItemId);

    return (
      laundryItems?.data
        .filter((item) => !selectedItemIds.includes(item.id))
        .map((item) => ({
          value: item.id,
          label: item.name,
        })) ?? []
    );
  };

  const handleSubmit = async () => {
    if (!order) {
      return;
    }

    if (typeof weightKg !== "number" || weightKg <= 0) {
      return;
    }

    const hasInvalidItem = items.some((item) => item.laundryItemId === "" || !Number.isInteger(item.quantity) || item.quantity <= 0);

    if (hasInvalidItem) {
      return;
    }

    const payload: CreateOrderPayload = {
      weightKg,
      items: items.map((item) => ({
        laundryItemId: item.laundryItemId,
        quantity: item.quantity,
      })),
    };

    await onSubmit(order.id, payload);
    resetForm(); 
  };

  return {
    handleClose,
    weightKg,
    setWeightKg,
    handleAddItem,
    isLaundryItemsLoading,
    items,
    getLaundryItemOptions,
    handleLaundryItemChange,
    handleQuantityChange,
    handleRemoveItem,
    handleSubmit,
  };
}

type ReceptionStage = "WAITING_RECEIPT" | "READY_TO_CREATE";
type ReceptionTableMode = "RECEIVE" | "CREATE_ORDER";
const STAGE_STATUS: Record<ReceptionStage, CustomerStatus> = {
  WAITING_RECEIPT: "ON_THE_WAY_TO_OUTLET",
  READY_TO_CREATE: "ARRIVED_AT_OUTLET",
};

export function useReceiveOrderHooks() {
  const router = useRouter();
  const [stage, setStage] = useState<ReceptionStage>("WAITING_RECEIPT");
  const [selectedOrderToReceive, setSelectedOrderToReceive] = useState<OrderListItem | null>(null);
  const [selectedOrderToCreate, setSelectedOrderToCreate] = useState<OrderListItem | null>(null);
  const tableMode: ReceptionTableMode = stage === "WAITING_RECEIPT" ? "RECEIVE" : "CREATE_ORDER";
  const [query, setQuery] = useState<OrderQuery>({
    page: 1,
    pageSize: 10,
    customerStatus: STAGE_STATUS.WAITING_RECEIPT,
    sortBy: "pickupScheduledAt",
    sortOrder: "asc",
  });

  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useOrderList({ ...query, search: debouncedSearch });
  const receiveOrderMutation = useReceiveOrder();
  const createOrderMutation = useCreateOrderAdmin();

  const handleStageChange = (value: string | null) => {
    if (value !== "WAITING_RECEIPT" && value !== "READY_TO_CREATE") {
      return;
    }

    setStage(value);

    setQuery((previous) => ({
      ...previous,
      page: 1,
      customerStatus: STAGE_STATUS[value],
    }));
  };

  const handleQueryChange = <Key extends keyof OrderQuery>(key: Key, value: OrderQuery[Key]) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: 10,
      customerStatus: STAGE_STATUS[stage],
      sortBy: "pickupScheduledAt",
      sortOrder: "asc",
    });
  };

  const handleReceive = (order: OrderListItem) => {
    setSelectedOrderToReceive(order);
  };

  const handleReceiveConfirm = async () => {
    if (!selectedOrderToReceive) {
      return;
    }

    await receiveOrderMutation.mutateAsync(selectedOrderToReceive.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Pesanan berhasil diterima.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message: err instanceof Error ? err.message : "Gagal menerima pesanan.",
          color: "red",
        });
      },
    });

    setSelectedOrderToReceive(null);
  };

  const handleCreateOrder = (order: OrderListItem) => {
    setSelectedOrderToCreate(order);
  };

  const handleCreateOrderSubmit = async (orderId: string, payload: CreateOrderPayload) => {
    await createOrderMutation.mutateAsync(
      {
        orderId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Order berhasil dibuat.",
            color: "green",
          });
        },
        onError: (err) => {
          notifications.show({
            title: "Gagal",
            message: err instanceof Error ? err.message : "Gagal membuat order.",
            color: "red",
          });
        },
      },
    );

    setSelectedOrderToCreate(null);
  };

  const handleView = (orderId: string) => {
    router.push(`/internal/outlet-admin/pesanan/${orderId}`);
  };

  return {
    stage,
    handleStageChange,
    query,
    handleQueryChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    tableMode,
    handlePageChange,
    handlePageSizeChange,
    handleReceive,
    handleCreateOrder,
    handleView,
    selectedOrderToReceive,
    receiveOrderMutation,
    setSelectedOrderToReceive,
    handleReceiveConfirm,
    selectedOrderToCreate,
    createOrderMutation,
    setSelectedOrderToCreate,
    handleCreateOrderSubmit,
  };
}
````

## File: src/lib/api/auth.api.ts
````typescript
import {
  GoogleLoginPayload,
  LoginCustomerResponse,
  MeResponse,
  MessageResponse,
  RegisterCustomerResponse,
  ResetPasswordCustomerPayload,
  VerificationPayload,
  VerifyEmailPayload,
} from "@/types/api";
import { api } from "./axios";
import {
  LoginCustomerSchema,
  RegisterCustomerSchema,
} from "../validation/auth.validation";

export class AuthApi {
  async registerCustomer(payload: RegisterCustomerSchema) {
    const { data } = await api.post<{ data: RegisterCustomerResponse }>(
      "/auth/register",
      payload,
    );
    return data.data;
  }

  async loginCustomer(payload: LoginCustomerSchema) {
    const { data } = await api.post<{
      data: LoginCustomerResponse;
    }>("/auth/login", payload);

    return data.data;
  }

  async loginWithGoogle(payload: GoogleLoginPayload) {
    const { data } = await api.post<{ data: LoginCustomerResponse }>(
      "/auth/login/google",
      payload,
    );
    return data.data;
  }

  async verifyCustomerEmail(payload: VerifyEmailPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/verify-email",
      payload,
    );
    return data.data;
  }

  async resendCustomerVerification(payload: VerificationPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/resend-verification",
      payload,
    );
    return data.data;
  }

  async forgotPasswordCustomer(payload: VerificationPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/forgot-password",
      payload,
    );
    return data.data;
  }

  async resetPasswordCustomer(payload: ResetPasswordCustomerPayload) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/auth/reset-password",
      payload,
    );
    return data.data;
  }

  async me() {
    const {data}= await api.get<MeResponse>("/auth/me");
    return data.data;
  }

  async logout() {
    const {data} = await api.post<{ data: MessageResponse }>("/auth/logout");
    return data.data;
  }
}
````

## File: src/lib/api/bypass.api.ts
````typescript
import { ApiResponse, PaginatedResponse } from "@/types/api";
import type {
  ApproveBypassPayload,
  BypassDetail,
  BypassItem,
  BypassListItem,
  BypassQuery,
} from "@/types/api/bypass.types";
import { api } from "./axios";

export class BypassApi {
  async getBypassRequests(
    query: BypassQuery,
  ) {
    const response =
      await api.get<PaginatedResponse<BypassListItem>>(
        "/internal/bypass-requests",
        {
          params: query,
        },
      );

    return response.data;
  }

  async getBypassRequestById(
    bypassId: string,
  ) {
    const response =
      await api.get<ApiResponse<BypassDetail>>(
        `/internal/bypass-requests/${bypassId}`,
      );

    return response.data;
  }

  async approveBypassRequest(
    bypassId: string,
    payload: ApproveBypassPayload,
  ) {
    const response =
      await api.post<ApiResponse<BypassItem>>(
        `/internal/bypass-requests/${bypassId}/approve`,
        payload,
      );

    return response.data;
  }

  async rejectBypassRequest(
    bypassId: string,
  ) {
    const response =
      await api.post<ApiResponse<BypassItem>>(
        `/internal/bypass-requests/${bypassId}/reject`,
      );

    return response.data;
  }
};
````

## File: src/lib/api/complaint.api.ts
````typescript
import type {
  ApiResponse,
  PaginatedResponse,
} from "@/types/api";

import { api } from "./axios";

import type {
  ComplaintDetail,
  ComplaintListItem,
  ComplaintQuery,
  DecideComplaintPayload,
} from "@/types/api/complaint.types";

const BASE_URL = "/internal/complaints";

export class ComplaintApi {
  async getComplaints(
    params?: ComplaintQuery,
  ): Promise<
    PaginatedResponse<ComplaintListItem>
  > {
    const response = await api.get<
      PaginatedResponse<ComplaintListItem>
    >(
      BASE_URL,
      {
        params,
      },
    );

    return response.data;
  }

  async getComplaintById(
    complaintId: string,
  ): Promise<ComplaintDetail> {
    const response = await api.get<
      ApiResponse<ComplaintDetail>
    >(
      `${BASE_URL}/${complaintId}`,
    );

    return response.data.data;
  }

  async decideComplaint(
    complaintId: string,
    payload: DecideComplaintPayload,
  ): Promise<ComplaintDetail> {
    const response = await api.patch<
      ApiResponse<ComplaintDetail>
    >(
      `${BASE_URL}/${complaintId}/decision`,
      payload,
    );

    return response.data.data;
  }
}
````

## File: src/lib/api/fieldOpsProfile.api.ts
````typescript
import type { ApiResponse } from "@/types/api";
import type { FieldOpsProfile, UpdateFieldOpsProfilePayload, UpdateFieldOpsProfilePhotoResponse } from "@/types/api/fieldOpsProfile.types";

import { api } from "./axios";

const BASE_PATH = "/internal/profile";

export class FieldOpsProfileApi {
  async getProfile() {
    const { data } = await api.get<ApiResponse<FieldOpsProfile>>(`${BASE_PATH}/me`);

    return data.data;
  }

  async updateProfile(payload: UpdateFieldOpsProfilePayload) {
    const { data } = await api.patch<ApiResponse<FieldOpsProfile>>(`${BASE_PATH}/me`, payload);

    return data.data;
  }

  async updateProfilePhoto(file: File) {
    const formData = new FormData();
    formData.append("PROFILE_PHOTO", file);
    const { data } = await api.patch<ApiResponse<UpdateFieldOpsProfilePhotoResponse>>(`${BASE_PATH}/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  }
}
````

## File: src/lib/api/orderCustomer.api.ts
````typescript
import {
  Complaint,
  ConfirmResponse,
  CreateOrderResponse,
  CreatePaymentResponse,
  ListOrderQuery,
  ListOrderResponse,
  OrderDetail,
  PaymentAttempt,
} from "@/types/api/orders.types";
import { CreateOrderSchema } from "../validation/order.validation";
import { api } from "./axios";

export class OrderApi {
  async createOrder(payload: CreateOrderSchema) {
    const { data } = await api.post<{ data: CreateOrderResponse }>(
      "/order",
      payload,
    );
    return data.data;
  }

  async listOrders(params: ListOrderQuery) {
    const { data } = await api.get<{
      success: boolean;
      data: ListOrderResponse["orders"];
      meta: ListOrderResponse["meta"];
    }>("/order", { params });
    return data;
  }

  async getOrderDetail(id: string) {
    const { data } = await api.get<{ data: OrderDetail }>(`/order/${id}`);
    return data.data;
  }

  async paymentAttempt(id: string) {
    const { data } = await api.post<{ data: CreatePaymentResponse }>(
      `/order/${id}/payment`,
    );
    return data.data;
  }

  async getLastestPayment(id: string) {
    const { data } = await api.get<{ data: PaymentAttempt }>(
      `/order/${id}/payment`,
    );
    return data.data;
  }

  async confirm(id: string) {
    const { data } = await api.patch<ConfirmResponse>(`/order/${id}/confirm`);
    return data;
  }

  async complaint(id: string, formData: FormData) {
    const { data } = await api.post<{ data: Complaint }>(
      `/order/${id}/complaint`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data.data;
  }
}
````

## File: src/lib/api/pricing.api.ts
````typescript
import type { ApiResponse, PaginatedResponse } from "@/types/api";

import { api } from "./axios";

import type {
  CreateLaundryPricingPayload,
  CreateShippingRatePayload,
  LaundryPricing,
  ShippingRate,
  ShippingRateQuery,
  UpdateLaundryPricingPayload,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";

const BASE_URL = "/internal/pricing";

export class PricingApi {
  async getLaundryPricing(): Promise<LaundryPricing> {
    const response = await api.get<ApiResponse<LaundryPricing>>(
      `${BASE_URL}/laundry`,
    );

    return response.data.data;
  }

  async createLaundryPricing(
    payload: CreateLaundryPricingPayload,
  ): Promise<LaundryPricing> {
    const response = await api.post<ApiResponse<LaundryPricing>>(
      `${BASE_URL}/laundry`,
      payload,
    );

    return response.data.data;
  }

  async updateLaundryPricing(
    id: string,
    payload: UpdateLaundryPricingPayload,
  ): Promise<LaundryPricing> {
    const response = await api.patch<ApiResponse<LaundryPricing>>(
      `${BASE_URL}/laundry/${id}`,
      payload,
    );

    return response.data.data;
  }

  async getShippingRates(
    params?: ShippingRateQuery,
  ): Promise<PaginatedResponse<ShippingRate>> {
    const response = await api.get<PaginatedResponse<ShippingRate>>(
      `${BASE_URL}/shipping`,
      {
        params,
      },
    );

    return response.data;
  }

  async getShippingRateById(id: string): Promise<ShippingRate> {
    const response = await api.get<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping/${id}`,
    );

    return response.data.data;
  }

  async createShippingRate(
    payload: CreateShippingRatePayload,
  ): Promise<ShippingRate> {
    const response = await api.post<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping`,
      payload,
    );

    return response.data.data;
  }

  async updateShippingRate(
    id: string,
    payload: UpdateShippingRatePayload,
  ): Promise<ShippingRate> {
    const response = await api.patch<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping/${id}`,
      payload,
    );

    return response.data.data;
  }

  async deactivateShippingRate(id: string): Promise<ShippingRate> {
    const response = await api.patch<ApiResponse<ShippingRate>>(
      `${BASE_URL}/shipping/${id}/deactivate`,
    );

    return response.data.data;
  }
}
````

## File: src/lib/constants/customer-status.ts
````typescript
import { CustomerStatus } from "@/types/api";

export const CUSTOMER_STATUS: Record<
  CustomerStatus,
  {
    label: string;
    color: string;
  }
> = {
  SCHEDULED: {
    label: "Terjadwal",
    color: "blue",
  },
  WAITING_DRIVER_PICKUP: {
    label: "Menunggu Driver",
    color: "yellow",
  },
  ON_THE_WAY_TO_OUTLET: {
    label: "Menuju Outlet",
    color: "cyan",
  },
  ARRIVED_AT_OUTLET: {
    label: "Tiba di Outlet",
    color: "indigo",
  },
  WASHING: {
    label: "Pencucian",
    color: "blue",
  },
  IRONING: {
    label: "Penyetrikaan",
    color: "violet",
  },
  PACKING: {
    label: "Pengemasan",
    color: "grape",
  },
  WAITING_PAYMENT: {
    label: "Menunggu Pembayaran",
    color: "orange",
  },
  READY_FOR_DELIVERY: {
    label: "Siap Diantar",
    color: "teal",
  },
  ON_THE_WAY_TO_CUSTOMER: {
    label: "Dalam Pengantaran",
    color: "cyan",
  },
  RECEIVED_BY_CUSTOMER: {
    label: "Diterima Pelanggan",
    color: "green",
  },
  OVERDUE: {
    label: "Jatuh Tempo",
    color: "red",
  },
  WAITING_CUSTOMER_CONFIRMATION: {
    label: "Menunggu Konfirmasi Pelanggan",
    color: "orange",
  },
};
````

## File: src/lib/utils/order-error.util.ts
````typescript
import { ApiError } from "@/lib/api/axios";

export function getCreateOrderErrorMessage(error: unknown) {
  if (!(error instanceof ApiError)) {
    return null;
  }

  switch (error.code) {
    case "OUTLET_OUT_OF_RANGE":
      return "Alamat ini berada di luar jangkauan 10 km dari outlet manapun.";

    case "NO_ACTIVE_OUTLET":
      return "Tidak ada outlet aktif yang bisa melayani saat ini.";

    case "PRICING_NOT_AVAILABLE":
      return "Layanan sedang tidak tersedia. Coba lagi nanti.";

    case "OUTSIDE_OPERATIONAL_HOURS":
      return "Request pickup hanya bisa dibuat pada jam operasional.";

    default:
      return error.message;
  }
}
````

## File: src/lib/validation/fieldOpsProfile.validation.ts
````typescript
import { z } from "zod";

const ALLOWED_PHOTO_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

export const MAX_PROFILE_PHOTO_SIZE = 1 * 1024 * 1024;

export const fieldOpsProfilePhotoSchema = z
  .custom<File>((value) => typeof File !== "undefined" && value instanceof File, {
    message: "File foto tidak valid",
  })
  .refine((file) => ALLOWED_PHOTO_TYPES.includes(file.type), {
    message: "Foto harus berformat JPG, JPEG, PNG, atau GIF",
  })
  .refine((file) => file.size <= MAX_PROFILE_PHOTO_SIZE, {
    message: "Ukuran foto maksimal 1 MB",
  });

export const fieldOpsProfileSchema = z.object({
  name: z.string().trim().min(1, "Nama tidak boleh kosong").max(100, "Nama maksimal 100 karakter"),

  email: z.string().trim().email("Format email tidak valid"),

  phone: z
    .string()
    .trim()
    .refine((value) => value === "" || (value.length >= 8 && value.length <= 20), {
      message: "Nomor telepon harus 8-20 karakter",
    }),

  photo: fieldOpsProfilePhotoSchema.nullable(),
});

export type FieldOpsProfileFormValues = z.infer<typeof fieldOpsProfileSchema>;
````

## File: src/types/api/bypass.types.ts
````typescript
import { BypassStatus, SortOrder, StationType, WorkerAssignmentStatus } from ".";


export type BypassSortBy = "createdAt" | "decidedAt";

export type BypassQuery = {
  page?: number;

  pageSize?: number;

  search?: string;

  status?: BypassStatus;

  stationType?: StationType;

  sortBy?: BypassSortBy;

  sortOrder?: SortOrder;
};

export type BypassListItem = {
  order: {
    id: string;
    outlet: {
      id: string;
      name: string;
    };
    outletId: string;
    orderCode: string;
  };
  workerAssignment: {
    id: string;
    worker?: {
      id: string;
      name: string;
    } 
    status: WorkerAssignmentStatus;
    stationType: StationType;
  };
  requestedByUser: {
    id: string;
    name: string;
  };
  decidedByUser?: {
    id: string;
    name: string;
  };
  id: string;
  createdAt: string;
  orderId: string;
  status: BypassStatus;
  stationType: StationType;
  decidedAt: string | null;
  workerAssignmentId: string;
  requestedBy: string;
  quantityDiffJson: string | null;
  decidedBy: string | null;
  approvalNote: string | null;
};

export type QuantityDifference = {
  orderItemId: string;

  itemName: string;

  officialQuantity: number;

  submittedQuantity: number;

  difference: number;
};

export type BypassItem = {
  id: string;
  createdAt: string;
  orderId: string;
  status: BypassStatus;
  stationType: StationType;
  decidedAt: string | null;
  workerAssignmentId: string;
  requestedBy: string;
  quantityDiffJson: string | null;
  decidedBy: string | null;
  approvalNote: string | null;
};

export type BypassDetail = {
  id: string;

  order: {
    id: string;

    orderCode: string;
  };

  stationType: StationType;

  worker: {
    id: string;

    name: string;
  };

  status: BypassStatus;

  differences: QuantityDifference[];

  createdAt: string;

  decidedAt: string | null;

  decidedBy: {
    id: string;

    name: string;
  } | null;
};

export type ApproveBypassPayload = {
  password: string;
  problemNote: string;
};
````

## File: src/types/api/fieldOpsProfile.types.ts
````typescript
export type FieldOpsProfile = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profilePhotoUrl: string | null;

  role: "WORKER" | "DRIVER";
  workStatus: "OFF_DUTY" | "AVAILABLE" | "BUSY" | null;

  currentOutletId: string | null;
  currentOutlet: {
    id: string;
    name: string;
    address: string;
  } | null;
};

export type UpdateFieldOpsProfilePayload = {
  name?: string;
  email?: string;
  phone?: string;
};

export type UpdateFieldOpsProfilePhotoResponse = {
  profilePhotoUrl: string;
};
````

## File: src/types/api/profile.type.ts
````typescript
export type UpdateProfileResponse = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profilePhotoUrl: string | null;
};

export type UpdatePhotoResponse = { profilePhotoUrl: string };
export type MessageResponse = { message: string };
````

## File: src/types/api/profile.types.ts
````typescript
export type UpdateProfileResponse = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profilePhotoUrl: string | null;
};

export type UpdatePhotoResponse = { profilePhotoUrl: string };
export type MessageResponse = { message: string };
````

## File: src/utils/dateFormatter.ts
````typescript
export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
````

## File: src/utils/fieldops.date.ts
````typescript
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

const FIELD_OPS_TIMEZONE = "Asia/Jakarta";

type DateValue = string | Date | null | undefined;

export function formatFieldOpsDate(value: DateValue) {
  if (!value) return "—";

  const date = dayjs(value);

  if (!date.isValid()) return "—";

  return date
    .tz(FIELD_OPS_TIMEZONE)
    .format("D MMMM YYYY");
}

export function formatFieldOpsTime(value: DateValue) {
  if (!value) return "—";

  const date = dayjs(value);

  if (!date.isValid()) return "—";

  return date
    .tz(FIELD_OPS_TIMEZONE)
    .format("HH:mm");
}
````

## File: src/utils/index.ts
````typescript
export { getEmployeeHome } from "./redirect";
````

## File: src/utils/redirect.ts
````typescript
export function getEmployeeHome(role: string): string {
  switch (role) {
    case "OUTLET_ADMIN":
      return "/internal/outlet-admin/dashboard";
    case "SUPER_ADMIN":
      return "/internal/super-admin/dashboard";
    case "WORKER":
      return "/internal/worker";
    case "DRIVER":
      return "/internal/driver";
    default:
      return "/internal/login";
  }
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
, "src/components/field-ops/worker/active/WorkerCompleted"  ],
  "exclude": ["node_modules"]
}
````

## File: src/app/(auth)/internal/(auth)/login/page.tsx
````typescript
"use client";

import { Paper, Stack } from "@mantine/core";
import { EmployeeLoginForm } from "@/components/internalAuth/EmployeeLoginForm";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const backOfficeRole = ["OUTLET_ADMIN", "SUPER_ADMIN"];

export default function EmployeeLoginPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user || !backOfficeRole.includes(user.role)) {
      return;
    }

    router.replace(
      user.role === "OUTLET_ADMIN"
        ? "/internal/outlet-admin/dashboard"
        : "/internal/super-admin/dashboard"
    );
  }, [user, router]);

  return (
    <Paper maw={420} mx="auto" mt={64} p={32} radius="md" withBorder>
      <Stack gap="md">
        <EmployeeLoginForm />
      </Stack>
    </Paper>
  );
}
````

## File: src/app/(auth)/register/page.tsx
````typescript
"use client";

import {
  Paper,
  Title,
  Text,
  Stack,
  Anchor,
  Group,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import { RegisterCustomerForm } from "@/components/authCustomer/RegisterCustomerForm";

export default function RegisterPage() {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>

      <Paper
        maw={420}
        mx="auto"
        mt={64}
        p={32}
        radius="md"
        withBorder
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <Stack gap="md">
          <div>
            <Title
              order={3}
              style={{ color: "var(--color-text-primary)" }}
            >
              Daftar Popo Laundry
            </Title>

            <Text size="sm" c="var(--color-text-secondary)">
              Masukkan email kamu, kami kirim link verifikasi.
            </Text>
          </div>

          <RegisterCustomerForm />
        </Stack>
      </Paper>
    </>
  );
}
````

## File: src/app/(auth)/verify-email/page.tsx
````typescript
import { Suspense } from "react";
import VerifyEmailContent from "@/components/authCustomer/VerifyEmailForm";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailContent />
    </Suspense>
  );
}
````

## File: src/app/(customer)/pesanan/page.tsx
````typescript
"use client";

import { Title, Text, Stack, Anchor, Group } from "@mantine/core";
import { OrderList } from "@/components/customer/order/orderList";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function OrdersPage({
  fallbackHref = "/",
}: {
  fallbackHref?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  function handleBack() {
    if (from) {
      router.replace(from);
      return;
    }

    router.back();
  }
  return (
    <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>
      <div>
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Pesanan Saya
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Riwayat dan status pesanan laundry kamu.
        </Text>
      </div>

      <OrderList />
    </Stack>
  );
}
````

## File: src/app/(customer)/profil/confirm-email/page.tsx
````typescript
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
````

## File: src/app/internal/(back-office)/outlet-admin/dashboard/page.tsx
````typescript
"use client";

import { DashboardContent } from "@/components/back-office/dashboard/DashboardContent";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Page() {
  const user = useAuthStore((state) => state.user);
  return <DashboardContent role={user?.role!} title="Dashboard Outlet" description="Ringkasan operasional outlet." />;
}
````

## File: src/app/internal/(back-office)/outlet-admin/komplain/page.tsx
````typescript
import { ComplaintContent } from "@/components/back-office/komplain/ComplaintContent";
export default function Page() {
  return (
    <ComplaintContent role="OUTLET_ADMIN" />
  );
}
````

## File: src/app/internal/(back-office)/outlet-admin/penerimaan/page.tsx
````typescript
import { ReceptionContent } from '@/components/back-office/penerimaan/ReceptionContent';

export default function Page(){return <ReceptionContent />}
````

## File: src/app/internal/(back-office)/outlet-admin/layout.tsx
````typescript
import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGateEmployee allowedRoles={["OUTLET_ADMIN"]}>
      <BackOfficeAppShell role="OUTLET_ADMIN">{children}</BackOfficeAppShell>
    </AuthGateEmployee>
  );
}
````

## File: src/app/internal/(back-office)/super-admin/dashboard/page.tsx
````typescript
"use client";

import { DashboardContent } from "@/components/back-office/dashboard/DashboardContent";
import { useAuthStore } from "@/stores/useAuthStore";

export default function Page() {
  const user = useAuthStore(state => state.user)
  return (
    <DashboardContent
    role={user?.role!}
      title="Dashboard Super Admin"
      description="Ringkasan operasional seluruh outlet."
    />
  );
}
````

## File: src/app/internal/(back-office)/super-admin/harga/laundry/page.tsx
````typescript
import { LaundryPricingContent } from "@/components/back-office/pricing/laundry/LaundryPricingContent";

export default function Page() {
  return <LaundryPricingContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/komplain/page.tsx
````typescript
import { ComplaintContent } from "@/components/back-office/komplain/ComplaintContent";

export default function Page() {
  return (
    <ComplaintContent role="SUPER_ADMIN" />
  );
}
````

## File: src/app/internal/(back-office)/super-admin/laporan/kinerja-karyawan/page.tsx
````typescript
import { EmployeePerformanceContent } from "@/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceContent";
export default function Page() {
  return <EmployeePerformanceContent role="SUPER_ADMIN" />;
}
````

## File: src/app/internal/(field-ops)/driver/riwayat/page.tsx
````typescript
"use client";
import { DriverHistory } from "@/components/field-ops/driver/DriverHistory";

export default function Page() {
  return <DriverHistory />;
}
````

## File: src/app/internal/(field-ops)/driver/page.tsx
````typescript
"use client";
import { DriverActiveSummary } from "@/components/field-ops/driver/DriverActiveSummary";
import { FieldOpsHome } from "@/components/field-ops/shared/FieldOpsHome";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useActive } from "@/hooks/driver.hooks";
import { Button, Card, Skeleton, Stack } from "@mantine/core";
import Link from "next/link";
export default function Page() {
  const activeQuery = useActive();
  return (
    <FieldOpsHome>
      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tersedia terlebih dahulu."
        skeleton={
          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Skeleton height={24} width="45%" />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Stack>
          </Card>
        }
      >
        {(assignment) => (
          <Stack gap="sm">
            <DriverActiveSummary assignment={assignment} />

            <Button component={Link} href="/internal/driver/tugas/aktif" variant="light">
              Lihat Tugas Aktif
            </Button>
          </Stack>
        )}
      </AsyncStateView>
    </FieldOpsHome>
  );
}
````

## File: src/app/globals.css
````css
@import "tailwindcss";

:root { color-scheme: light; }
html, body { margin: 0; min-height: 100%; background: #f8fafc; }
body { font-family: var(--font-body), sans-serif; }
a { color: inherit; text-decoration: none; }
* { box-sizing: border-box; }

/* ============================================================
   Popo Laundry — Brand Colors (Fresh Line-Dry)
   Taruh di src/app/globals.css, atau import terpisah lalu
   panggil di layout.tsx paling atas.
   ============================================================ */
 
:root {
  /* Primary */
  --color-primary: #30afff;;         /* Rinse Blue — nav, header, elemen struktural */
  --color-primary-dark: #3e83e2;    /* hover/active state tombol/link primary */
  --color-primary-light: #eaf4fb;   /* background lembut, badge, highlight ringan */
 
  /* Accent / CTA */
  --color-accent: #f2a93b;          /* Sundry Yellow — tombol aksi utama */
  --color-accent-dark: #d6900f;     /* hover/active state tombol accent */
  --color-accent-light: #fdf1de;    /* background lembut untuk badge/alert info */
 
  /* Base */
  --color-background: #eaf4fb;      /* Chalk Linen — background utama */
  --color-background-dark: #4d6270;
  --color-surface: #ffffff;         /* kartu/panel di atas background */
  --color-border: #e2e3de;          /* garis pembatas halus */
 
  /* Text */
  --color-text-primary: #26313a;    /* Wet Slate — teks utama */
  --color-text-secondary: #5f6b72;  /* teks sekunder/caption */
  --color-text-on-primary: #ffffff; /* teks di atas background Rinse Blue */
  --color-text-on-accent: #412402;  /* teks di atas background Sundry Yellow */
 
  /* Status */
  --color-success: #6b9e78;         /* Fresh Sage — status selesai/berhasil */
  --color-success-light: #eaf3ec;
  --color-error: #c4483b;           /* Stain Red — alert, komplain, error */
  --color-error-light: #fbeae8;
  --color-warning: var(--color-accent);
  --color-warning-light: var(--color-accent-light);
 
  /* Radius & elevation (opsional, mengikuti gaya flat design brand) */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --shadow-sm: 0 1px 2px rgba(38, 49, 58, 0.06);
  --shadow-md: 0 4px 12px rgba(38, 49, 58, 0.08);
}
 
.button-primary {
  background: var(--color-accent);
  color: var(--color-text-on-accent);
  border-radius: var(--radius-sm);
}

.page {
  --bg: #eaf4fb;
  --surface: #ffffff;
  --ink: #10304f;
  --primary: #2f7fc1;
  --accent: #f5b942;
  --teal: #4fa895;
  --ink-soft: #4c6884;
}
/* Dark mode belum dirancang untuk brand ini — override di sini nanti kalau dibutuhkan. */
````

## File: src/components/authCustomer/GoogleLoginButton.tsx
````typescript
"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;

          renderButton: (
            parent: HTMLElement,
            options: {
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              width?: number;
              text?: "signin_with" | "signup_with" | "continue_with";
            },
          ) => void;
        };
      };
    };
  }
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GSI_SCRIPT_SRC = "https://accounts.google.com/gsi/client";

type GoogleSignInButtonProps = {
  onIdToken: (idToken: string) => void;
  text?: "signin_with" | "signup_with";
};

export function GoogleSignInButton({
  onIdToken,
  text = "signin_with",
}: GoogleSignInButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(onIdToken);

  useEffect(() => {
    callbackRef.current = onIdToken;
  }, [onIdToken]);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || !buttonRef.current) {
      return;
    }

    let cancelled = false;

    const renderButton = () => {
      if (
        cancelled ||
        !window.google?.accounts?.id ||
        !buttonRef.current
      ) {
        return;
      }

      const container = buttonRef.current;

      // Hapus button sebelumnya agar tidak duplicate
      container.innerHTML = "";

      // Lebar mengikuti container, maksimal 356px
      const width = Math.min(container.clientWidth, 356);

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (response) => {
          callbackRef.current(response.credential);
        },
      });

      window.google.accounts.id.renderButton(container, {
        theme: "outline",
        size: "large",
        width,
        text,
      });
    };

    // Google GSI sudah tersedia
    if (window.google?.accounts?.id) {
      // Tunggu layout selesai supaya clientWidth sudah benar
      requestAnimationFrame(renderButton);

      return () => {
        cancelled = true;
      };
    }

    // Cek apakah script sedang dimuat oleh component lain
    const existingScript =
      document.querySelector<HTMLScriptElement>(
        `script[src="${GSI_SCRIPT_SRC}"]`,
      );

    if (existingScript) {
      existingScript.addEventListener("load", renderButton);

      return () => {
        cancelled = true;
        existingScript.removeEventListener(
          "load",
          renderButton,
        );
      };
    }

    // Load Google Identity Services
    const script = document.createElement("script");

    script.src = GSI_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = renderButton;

    document.head.appendChild(script);

    return () => {
      cancelled = true;
    };
  }, [text]);

  return (
    <div
      ref={buttonRef}
      style={{
        width: "100%",
        maxWidth: 356,
        margin: "0 auto",
        overflow: "hidden",
      }}
    />
  );
}
````

## File: src/components/authCustomer/LoginCustomerForm.tsx
````typescript
"use client";

import {
  Anchor,
  Button,
  Divider,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm, schemaResolver } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginCustomerSchema } from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import {
  useLoginCustomer,
  useLoginWithGoogle,
} from "@/hooks/authCustomer.hooks";
import { getSafeRedirectPath } from "@/lib/safe-redirect";
import { GoogleSignInButton } from "./GoogleLoginButton";

type LoginCustomerFormProps = {
  intendedUrl?: string;
};

export function LoginCustomerForm({ intendedUrl }: LoginCustomerFormProps) {
  const router = useRouter();

  const { mutate, isPending } = useLoginCustomer();
  const { mutate: mutateGoogle, isPending: isGooglePending } =
    useLoginWithGoogle();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: schemaResolver(loginCustomerSchema),
  });

  const redirectAfterLogin = (homeUrl: string) => {
    const safePath = getSafeRedirectPath(intendedUrl ?? null);

    router.replace(safePath !== "/beranda" ? safePath : homeUrl);
  };

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: (data) => {
        notifications.show({
          title: "Berhasil",
          message: "Login berhasil.",
          color: "green",
        });

        redirectAfterLogin(data.homeUrl);
      },

      onError: (error) => {
        const message =
          error instanceof ApiError
            ? error.code === "INVALID_CREDENTIALS"
              ? "Email atau password salah."
              : error.code === "EMAIL_NOT_VERIFIED"
                ? "Email kamu belum diverifikasi."
                : error.message
            : "Gagal masuk. Silakan coba lagi.";

        notifications.show({
          title: "Login gagal",
          message,
          color: "red",
        });
      },
    });
  });

  function handleGoogleIdToken(idToken: string) {
    mutateGoogle(
      { idToken },
      {
        onSuccess: (data) => {
          notifications.show({
            title: "Berhasil",
            message: "Login dengan Google berhasil.",
            color: "green",
          });

          redirectAfterLogin(data.homeUrl);
        },

        onError: (error) => {
          const message =
            error instanceof ApiError
              ? error.message
              : "Gagal login dengan Google. Silakan coba lagi.";

          notifications.show({
            title: "Login Google gagal",
            message,
            color: "red",
          });
        },
      },
    );
  }

  return (
    <Stack gap="md">
      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="nama@email.com"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Masukkan password"
            {...form.getInputProps("password")}
          />

          <Anchor
            component={Link}
            href="/lupa-password"
            size="sm"
            ta="right"
            c="var(--color-primary-dark)"
          >
            Lupa password?
          </Anchor>

          <Button
            type="submit"
            loading={isPending}
            fullWidth
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            Masuk
          </Button>
        </Stack>
      </form>

      <Divider label="atau" labelPosition="center" />

      <GoogleSignInButton
        onIdToken={handleGoogleIdToken}
        text="signin_with"
      />

      <Anchor
        component={Link}
        href="/register"
        ta="center"
        c="var(--color-primary-dark)"
      >
        Daftar sebagai customer
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/back-office/bypass/BypassDetailHeader.tsx
````typescript
"use client";

import { ActionIcon, Badge, Group, Stack, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { BypassDetail } from "@/types/api/bypass.types";
import { BypassStatus } from "@/types/api";

type Props = {
  bypass: BypassDetail;
};

const STATUS_LABEL: Record<BypassStatus, string> = {
  PENDING: "Menunggu",
  APPROVED: "Disetujui",
  REJECTED: "Ditolak",
};

const STATUS_COLOR: Record<BypassStatus, string> = {
  PENDING: "yellow",
  APPROVED: "green",
  REJECTED: "red",
};

export function BypassDetailHeader({ bypass }: Props) {
  const router = useRouter();
  return (
    <Group justify="space-between" align="center">
      <Group gap="md"> 
        <ActionIcon variant="default" onClick={() => router.back()} aria-label="Kembali">
          <IconArrowLeft size={18} />
        </ActionIcon>

        <Stack gap={2}>
          <Text fw={700} size="xl" c="var(--color-text-primary)">
            {bypass.order.orderCode}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Pengajuan bypass oleh {bypass.worker.name}
          </Text>
        </Stack>
      </Group>

      <Badge color={STATUS_COLOR[bypass.status]} variant="light">
        {STATUS_LABEL[bypass.status]}
      </Badge>
    </Group>
  );
}
````

## File: src/components/back-office/employee/EmployeeActions.tsx
````typescript
"use client";

import { Button, Group, Modal, Paper, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconMailForward, IconPlayerPlay, IconUserOff } from "@tabler/icons-react";
import { useActivateEmployee, useDeactivateEmployee, useResendInvitation } from "@/hooks/employee.hooks";
import { Employee } from "@/types/api/employee.types";

type Props = {
  employee: Employee;
};

export function EmployeeActions({ employee }: Props) {
  const [confirmOpened, { open: openConfirm, close: closeConfirm }] = useDisclosure(false);
  const resendInvitation = useResendInvitation();
  const activateEmployee = useActivateEmployee();
  const deactivateEmployee = useDeactivateEmployee();
  const isActive = employee.accountStatus === "ACTIVE";
  const isInactive = employee.accountStatus === "INACTIVE";
  const isInvited = employee.accountStatus === "INVITED";

  const handleResendInvitation = () => {
    resendInvitation.mutate(employee.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Undangan berhasil dikirim ulang.",
          color: "green",
        });
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal mengirim ulang undangan.",
          color: "red",
        });
      },
    });
  };

  const handleStatusAction = () => {
    const mutation = isActive ? deactivateEmployee : activateEmployee;

    mutation.mutate(employee.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: isActive ? "Karyawan berhasil dinonaktifkan." : "Karyawan berhasil diaktifkan.",
          color: "green",
        });

        closeConfirm();
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Terjadi kesalahan.",
          color: "red",
        });
      },
    });
  };

  if (!isInvited && !isActive && !isInactive) {
    return null;
  }

  const statusLoading = activateEmployee.isPending || deactivateEmployee.isPending;

  return (
    <>
      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <div>
            <Text fw={600}>Tindakan Karyawan</Text>

            <Text size="sm" c="var(--color-text-secondary)">
              Kelola status akun dan undangan karyawan.
            </Text>
          </div>

          <Group>
            {isInvited && (
              <Button
                variant="light"
                leftSection={<IconMailForward size={18} />}
                loading={resendInvitation.isPending}
                onClick={handleResendInvitation}
              >
                Kirim Ulang Undangan
              </Button>
            )}

            {isActive && (
              <Button color="red" variant="light" leftSection={<IconUserOff size={18} />} onClick={openConfirm}>
                Nonaktifkan Karyawan
              </Button>
            )}

            {isInactive && (
              <Button color="green" variant="light" leftSection={<IconPlayerPlay size={18} />} onClick={openConfirm}>
                Aktifkan Karyawan
              </Button>
            )}
          </Group>
        </Stack>
      </Paper>

      <Modal opened={confirmOpened} onClose={closeConfirm} title={isActive ? "Nonaktifkan Karyawan" : "Aktifkan Karyawan"} centered>
        <Stack gap="md">
          <Text size="sm">
            {isActive ? `Apakah kamu yakin ingin menonaktifkan ${employee.name}?` : `Apakah kamu yakin ingin mengaktifkan ${employee.name}?`}
          </Text>

          {isActive && (
            <Text size="sm" c="var(--color-text-secondary)">
              Karyawan tidak akan dapat login, clock in, atau mengambil pekerjaan baru.
            </Text>
          )}

          <Group justify="flex-end">
            <Button variant="default" onClick={closeConfirm} disabled={statusLoading}>
              Batal
            </Button>

            <Button color={isActive ? "red" : "green"} loading={statusLoading} onClick={handleStatusAction}>
              {isActive ? "Ya, Nonaktifkan" : "Ya, Aktifkan"}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
````

## File: src/components/back-office/employee/EmployeeDetailHeader.tsx
````typescript
"use client";

import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Employee } from "@/types/api/employee.types";

const ROLE_LABEL: Record<Employee["role"], string> = {
  OUTLET_ADMIN: "Outlet Admin",
  WORKER: "Worker",
  DRIVER: "Driver",
};

type Props = {
  employee: Employee;
};

export function EmployeeDetailHeader({ employee }: Props) {
  const router = useRouter();

  return (
    <Group gap="md">
      <ActionIcon variant="default" onClick={() => router.back()}>
        <IconArrowLeft size={18} />
      </ActionIcon>

      <Stack gap={2}>
        <Text fw={700} size="xl">
          {employee.name}
        </Text>

        <Text size="sm" c="var(--color-text-secondary)">
          {ROLE_LABEL[employee.role]}
        </Text>
      </Stack>
    </Group>
  );
}
````

## File: src/components/back-office/employee/InviteEmployeeContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { useInviteEmployee } from "@/hooks/employee.hooks";
import { InviteEmployeeFormValues } from "@/lib/validation/employee.validation";
import { InviteEmployeeForm } from "./InviteEmployeeForm";

export function InviteEmployeeContent() {
  const router = useRouter();
  const inviteEmployee = useInviteEmployee();

  const handleSubmit = async (values: InviteEmployeeFormValues) => {
    inviteEmployee.mutate(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Undangan karyawan berhasil dikirim.",
          color: "green",
        });

        router.push("/internal/super-admin/karyawan");
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal mengirim undangan.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Undang Karyawan" description="Kirim undangan untuk membuat akun karyawan baru." />

      <InviteEmployeeForm onSubmit={handleSubmit} isSubmitting={inviteEmployee.isPending} />
    </Stack>
  );
}
````

## File: src/components/back-office/employee/InviteEmployeeForm.tsx
````typescript
"use client";

import { Button, Group, Paper, Select, Stack, TextInput } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { inviteEmployeeSchema, type InviteEmployeeFormValues } from "@/lib/validation/employee.validation";

type Props = {
  onSubmit: (values: InviteEmployeeFormValues) => void;
  isSubmitting?: boolean;
};

export function InviteEmployeeForm({ onSubmit, isSubmitting = false }: Props) {
  const router = useRouter();

  const form = useForm<InviteEmployeeFormValues>({
    initialValues: {
      name: "",
      email: "",
      role: "WORKER",
    },

    validate: schemaResolver(inviteEmployeeSchema),
  });

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      maw={600}
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput label="Nama Karyawan" placeholder="Masukkan nama karyawan" withAsterisk {...form.getInputProps("name")} />

          <TextInput label="Email" placeholder="nama@email.com" type="email" withAsterisk {...form.getInputProps("email")} />

          <Select
            label="Role"
            withAsterisk
            data={[
              {
                value: "OUTLET_ADMIN",
                label: "Outlet Admin",
              },
              {
                value: "WORKER",
                label: "Worker",
              },
              {
                value: "DRIVER",
                label: "Driver",
              },
            ]}
            {...form.getInputProps("role")}
          />

          <Group justify="flex-end" mt="sm">
            <Button variant="default" onClick={() => router.back()} disabled={isSubmitting}>
              Batal
            </Button>

            <Button type="submit" loading={isSubmitting}>
              Kirim Undangan
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
````

## File: src/components/back-office/komplain/ComplaintDecisionModal.tsx
````typescript
"use client";

import { Badge, Button, Group, Modal, Radio, Stack, Text, Textarea } from "@mantine/core";
import { useState } from "react";
import { ComplaintListItem, DecideComplaintPayload } from "@/types/api/complaint.types";
import { IconExternalLink } from "@tabler/icons-react";

type Decision = "APPROVED" | "REJECTED";

type Props = {
  opened: boolean;
  complaint: ComplaintListItem | null;
  isSubmitting: boolean;
  onOpenedProof: () => void;
  onClose: () => void;
  onSubmit: (payload: DecideComplaintPayload) => Promise<void>;
};

function getCategoryLabel(category: ComplaintListItem["category"]) {
  const categoryMap: Record<ComplaintListItem["category"], string> = {
    TIDAK_SESUAI: "Tidak Sesuai",
    RUSAK: "Barang Rusak",
    HILANG: "Barang Hilang",
  };

  return categoryMap[category];
}

export function ComplaintDecisionModal({ opened, complaint, isSubmitting, onClose, onSubmit, onOpenedProof }: Props) {
  const [decision, setDecision] = useState<Decision | null>(null);
  const [responseNote, setResponseNote] = useState("");

  const resetForm = () => {
    setDecision(null);
    setResponseNote("");
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    if (!decision || responseNote.trim().length === 0) {
      return;
    }

    await onSubmit({
      decision,
      responseNote: responseNote.trim(),
    });

    resetForm();
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Tangani Komplain" centered>
      <Stack gap="md">
        {complaint && (
          <Stack
            gap={4}
            p="sm"
            style={{
              border: "1px solid var(--mantine-color-gray-3)",
              borderRadius: "var(--mantine-radius-sm)",
            }}
          >
            <Text size="sm" fw={600}>
              {complaint.order.orderCode}
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              {complaint.customer.name}
            </Text>

            <Group gap="xs">
              <Badge variant="light">{getCategoryLabel(complaint.category)}</Badge>
            </Group>

            <Text size="sm" mt="xs">
              {complaint.description}
            </Text>
          </Stack>
        )}

        <Stack gap={4}>
          <Text size="sm" fw={600}>
            Bukti Foto
          </Text>

          <Button variant="light" rightSection={<IconExternalLink size={16} />} w="fit-content" onClick={onOpenedProof}>
            Lihat Bukti
          </Button>
        </Stack>
        <Radio.Group label="Keputusan" value={decision} onChange={(value) => setDecision(value as Decision)} required>
          <Stack gap="xs" mt="xs">
            <Radio value="APPROVED" label="Terima komplain" />

            <Radio value="REJECTED" label="Tolak komplain" />
          </Stack>
        </Radio.Group>

        <Textarea
          label="Catatan Tanggapan"
          placeholder="Masukkan tanggapan untuk pelanggan"
          minRows={4}
          value={responseNote}
          onChange={(event) => setResponseNote(event.currentTarget.value)}
          disabled={isSubmitting}
          required
        />

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button onClick={handleSubmit} loading={isSubmitting} disabled={!decision || responseNote.trim().length === 0}>
            Simpan Keputusan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmployeePerformanceFilters } from "./EmployeePerformanceFilters";
import { EmployeePerformanceTable } from "./EmployeePerformanceTable";
import { EmployeePerformanceSummary } from "./EmployeePerformanceSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { useEmployeePerformanceHooks } from "@/hooks/report.hooks";
import { EmployeePerformanceSkeleton } from "./EmployeePerformanceSkeleton";

export function EmployeePerformanceContent({role}: {role: string}) {
  const {
    query,
    outletsData,
    handleFilterChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
  } = useEmployeePerformanceHooks();
  const isSuperAdmin = role === "SUPER_ADMIN"
  return (
    <Stack gap="md">
      <PageHeader title="Kinerja Karyawan" description="Monitor kinerja karyawan dalam sistem." />

      <EmployeePerformanceFilters
        filters={{
          search: query.search,
          role: query.role,
          stationType: query.stationType,
          outletId: query.outletId,
          startDate: query.startDate,
          endDate: query.endDate,
        }}
        isSuperAdmin={isSuperAdmin}
        sortBy={query.sortBy ?? "completedJobs"}
        sortOrder={query.sortOrder ?? "desc"}
        outlets={outletsData?.data ?? []}
        onChange={handleFilterChange}
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
        onReset={handleReset}
      />

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        onRetry={refetch}
        isEmpty={(result) => result.data.data.length === 0}
        skeleton={<EmployeePerformanceSkeleton />}
      >
        {(result) => (
          <Stack gap="md">
            <EmployeePerformanceSummary summary={result.data.summary} />

            <EmployeePerformanceTable
              data={result.data.data}
              meta={result.meta}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/back-office/laporan/kinerja-karyawan/EmployeePerformanceFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Paper, Select, Stack, TextInput, Tooltip } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { EmployeePerformanceQuery, EmployeePerformanceSortBy } from "@/types/api/report.types";
import { SortOrder } from "@/types/api";

type EmployeePerformanceFiltersState = Pick<EmployeePerformanceQuery, "search" | "role" | "stationType" | "outletId" | "startDate" | "endDate">;

type Props = {
  filters: EmployeePerformanceFiltersState;
  sortBy: NonNullable<EmployeePerformanceQuery["sortBy"]>;
  isSuperAdmin: boolean;
  sortOrder: NonNullable<EmployeePerformanceQuery["sortOrder"]>;
  outlets?: {
    id: string;
    name: string;
  }[];
  onChange: (key: keyof EmployeePerformanceFiltersState, value: string | null) => void;
  onSortByChange: (value: EmployeePerformanceSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const ROLE_OPTIONS = [
  {
    value: "DRIVER",
    label: "Driver",
  },
  {
    value: "WORKER",
    label: "Worker",
  },
];

const STATION_TYPE_OPTIONS = [
  {
    value: "WASHING",
    label: "Washing",
  },
  {
    value: "IRONING",
    label: "Ironing",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

const SORT_OPTIONS = [
  {
    value: "completedJobs",
    label: "Pekerjaan selesai",
  },
  {
    value: "name",
    label: "Nama karyawan",
  },
];

export function EmployeePerformanceFilters({ filters, sortBy, isSuperAdmin, sortOrder, outlets = [], onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <Paper
      p="md"
      withBorder
      radius="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Group align="end" wrap="wrap" gap="sm">
          <TextInput
            label="Cari"
            placeholder="Cari nama karyawan"
            leftSection={<IconSearch size={16} />}
            value={filters.search ?? ""}
            onChange={(event) => onChange("search", event.currentTarget.value || null)}
            style={{
              flex: 1,
              minWidth: 220,
            }}
          />

          <Select
            label="Urutkan"
            value={sortBy}
            data={SORT_OPTIONS}
            onChange={(value) => {
              if (value === "completedJobs" || value === "name") {
                onSortByChange(value);
              }
            }}
            w={180}
          />

          <Select
            label="Urutan"
            value={sortOrder}
            data={[
              {
                value: "desc",
                label: "Menurun",
              },
              {
                value: "asc",
                label: "Menaik",
              },
            ]}
            onChange={(value) => {
              if (value === "asc" || value === "desc") {
                onSortOrderChange(value);
              }
            }}
            w={180}
          />

          <Tooltip label="Reset filter">
            <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
              <IconRefresh size={16} />
            </ActionIcon>
          </Tooltip>
        </Group>

        <Group align="flex-end" grow>
          <Select label="Role" placeholder="Semua role" clearable data={ROLE_OPTIONS} value={filters.role ?? null} onChange={(value) => onChange("role", value)} />

          <Select
            label="Station"
            placeholder="Semua station"
            clearable
            data={STATION_TYPE_OPTIONS}
            value={filters.stationType ?? null}
            onChange={(value) => onChange("stationType", value)}
            disabled={filters.role === "DRIVER"}
          />

          {isSuperAdmin && <Select
            label="Outlet"
            placeholder="Semua outlet"
            clearable
            searchable
            data={outlets.map((outlet) => ({
              value: outlet.id,
              label: outlet.name,
            }))}
            value={filters.outletId ?? null}
            onChange={(value) => onChange("outletId", value)}
          />}

          <DatePickerInput
            label="Dari Tanggal"
            placeholder="Pilih tanggal"
            clearable
            value={filters.startDate ?? null}
            valueFormat="DD MMM YYYY"
            onChange={(value) => onChange("startDate", value)}
          />

          <DatePickerInput
            label="Sampai Tanggal"
            placeholder="Pilih tanggal"
            clearable
            value={filters.endDate ?? null}
            valueFormat="DD MMM YYYY"
            onChange={(value) => onChange("endDate", value)}
          />
        </Group>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/laporan/penjualan/SalesReportBreakdown.tsx
````typescript
"use client";

import { Paper, Progress, Stack, Table, Text } from "@mantine/core";
import { SalesBreakdownItem } from "@/types/api/report.types";

type Props = { data: SalesBreakdownItem[] };

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(value);

export function SalesReportBreakdown({ data }: Props) {
  return (
    <Paper withBorder radius="md" p="md" style={{ backgroundColor: "var(--color-surface)" }}>
      <Stack gap="md">
        <div>
          <Text fw={600}>Penjualan per Outlet</Text>
          <Text size="sm" c="var(--color-text-secondary)">
            Perbandingan kontribusi dan performa setiap outlet pada periode terpilih.
          </Text>
        </div>

        <Table.ScrollContainer minWidth={950}>
          <Table highlightOnHover verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Outlet</Table.Th>
                <Table.Th ta="right">Pesanan</Table.Th>
                <Table.Th ta="right">Pendapatan</Table.Th>
                <Table.Th ta="right">Rata-rata Pesanan</Table.Th>
                <Table.Th ta="right">Berat</Table.Th>
                <Table.Th>Kontribusi Pendapatan</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((item) => (
                <Table.Tr key={item.outletId}>
                  <Table.Td>
                    <Text size="sm" fw={600}>
                      {item.outletName}
                    </Text>
                    <Text size="xs" c="var(--color-text-secondary)">
                      {formatNumber(item.uniqueCustomers)} pelanggan unik
                    </Text>
                  </Table.Td>
                  <Table.Td ta="right">{formatNumber(item.orders)}</Table.Td>
                  <Table.Td ta="right">
                    <Text size="sm" fw={600}>
                      {formatCurrency(item.revenue)}
                    </Text>
                  </Table.Td>
                  <Table.Td ta="right">{formatCurrency(item.averageOrderValue)}</Table.Td>
                  <Table.Td ta="right">{formatNumber(item.totalWeightKg)} kg</Table.Td>
                  <Table.Td>
                    <Stack gap={4}>
                      <Text size="xs" ta="right">
                        {item.revenueSharePercent.toFixed(1)}%
                      </Text>
                      <Progress value={item.revenueSharePercent} size="sm" radius="xl" />
                    </Stack>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/laporan/penjualan/SalesTrend.tsx
````typescript
"use client";

import { Paper, Stack, Text } from "@mantine/core";
import { BarChart } from "@mantine/charts";
import { SalesPeriod, SalesTrendItem } from "@/types/api/report.types";

type Props = { data: SalesTrendItem[]; period: SalesPeriod };

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 1 }).format(value);

const formatCompactCurrency = (value: number) => {
  if (value >= 1_000_000) return `Rp${value / 1_000_000} jt`;
  if (value >= 1_000) return `Rp${value / 1_000} rb`;
  return `Rp${value}`;
};

function getPeriodDescription(period: SalesPeriod) {
  switch (period) {
    case "DAY":
      return "Pendapatan per jam pada tanggal terpilih";
    case "MONTH":
      return "Pendapatan harian selama bulan terpilih";
    case "YEAR":
      return "Pendapatan bulanan selama tahun terpilih";
  }
}

export function SalesTrend({ data, period }: Props) {
  const highestRevenue = Math.max(...data.map((item) => item.revenue), 0);

  return (
    <Paper withBorder radius="md" p="md" style={{ backgroundColor: "var(--color-surface)" }}>
      <Stack gap="sm">
        <div>
          <Text fw={600}>Tren Pendapatan</Text>
          <Text size="sm" c="var(--color-text-secondary)">
            {getPeriodDescription(period)}
          </Text>
        </div>

        <BarChart
          h={300}
          data={data}
          dataKey="label"
          series={[{ name: "revenue", label: "Pendapatan", color: "rinseBlue" }]}
          valueFormatter={formatCurrency}
          withLegend={false}
          withTooltip
          yAxisProps={{ width: 70, tickFormatter: formatCompactCurrency }}
          tooltipProps={{
            content: ({ label, payload }) => {
              if (!payload?.length) return null;
              const item = data.find((entry) => entry.label === label);
              if (!item) return null;

              return (
                <Paper withBorder shadow="sm" radius="md" p="sm">
                  <Text size="sm" fw={600}>
                    {label}
                  </Text>
                  <Text size="xs" c="var(--color-text-secondary)">
                    Pendapatan
                  </Text>
                  <Text fw={700}>{formatCurrency(item.revenue)}</Text>
                  <Text size="xs" c="var(--color-text-secondary)" mt="xs">
                    {formatNumber(item.orders)} pesanan · {formatNumber(item.totalWeightKg)} kg
                  </Text>
                </Paper>
              );
            },
          }}
        />

        <Text size="sm" c="var(--color-text-secondary)">
          Pendapatan tertinggi: {formatCurrency(highestRevenue)}
        </Text>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/laundry-item/CreateLaundryItemContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { useCreateLaundryItem } from "@/hooks/laundry-item.hooks";
import { CreateLaundryItemPayload } from "@/types/api/laundry-item.types";
import { LaundryItemForm } from "./LaundryItemForm";

export function CreateLaundryItemContent() {
  const router = useRouter();
  const createLaundryItem = useCreateLaundryItem();

  const handleSubmit = async (values: CreateLaundryItemPayload) => {
    await createLaundryItem.mutateAsync(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Item laundry berhasil ditambahkan.",
          color: "green",
        });

        router.push("/internal/super-admin/item-laundry");
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal menambahkan item laundry.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Tambah Item Laundry" description="Tambahkan jenis item laundry baru ke dalam sistem." />

      <LaundryItemForm onSubmit={handleSubmit} isSubmitting={createLaundryItem.isPending} />
    </Stack>
  );
}
````

## File: src/components/back-office/laundry-item/LaundryItemForm.tsx
````typescript
"use client";

import { useRouter } from "next/navigation";
import { Button, Group, Paper, Stack, TextInput } from "@mantine/core";
import { schemaResolver, useForm } from "@mantine/form";
import { laundryItemSchema, type LaundryItemFormValues } from "@/lib/validation/laundry-item.validation";

type Props = {
  initialValues?: LaundryItemFormValues;
  onSubmit: (values: LaundryItemFormValues) => void;
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

  const form = useForm<LaundryItemFormValues>({
    initialValues,

    validate: schemaResolver(laundryItemSchema),
  });

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Stack gap="md">
          <TextInput label="Nama Item Laundry" placeholder="Contoh: Pakaian, Sepatu, Karpet" withAsterisk {...form.getInputProps("name")} />

          <Group justify="flex-end" mt="sm">
            <Button variant="default" onClick={() => router.back()} disabled={isSubmitting}>
              Batal
            </Button>

            <Button type="submit" loading={isSubmitting}>
              {submitLabel}
            </Button>
          </Group>
        </Stack>
      </form>
    </Paper>
  );
}
````

## File: src/components/back-office/order/OrderContent.tsx
````typescript
"use client";

import { Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useOrderHooks } from "@/hooks/order.hooks";
import { OrderFilters } from "./OrderFilters";
import { OrderTable } from "./OrderTable";
import { Role } from "@/types/api";
import TableSkeleton from "../shared/TableSkeleton";

type Props = {
  role: Extract<Role, "OUTLET_ADMIN" | "SUPER_ADMIN">;
};

export function OrderContent({ role }: Props) {
  const { filters, sortBy, sortOrder, outlets, handleFilterChange, setSortBy, setPage, setSortOrder, orders, setPageSize, handleView, handleReset } =
    useOrderHooks(role);

  return (
    <Stack gap="lg">
      <PageHeader
        title={role === "SUPER_ADMIN" ? "Seluruh Pesanan" : "Pesanan Outlet"}
        description={role === "SUPER_ADMIN" ? "Monitoring pesanan dari seluruh outlet." : "Pantau seluruh pesanan pada outlet Anda."}
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <OrderFilters
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
            outlets={role === "SUPER_ADMIN" ? (outlets.data?.data ?? []) : []}
            showOutletFilter={role === "SUPER_ADMIN"}
            onChange={handleFilterChange}
            onSortByChange={(value) => {
              setSortBy(value);

              setPage(1);
            }}
            onSortOrderChange={(value) => {
              setSortOrder(value);

              setPage(1);
            }}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={orders.isLoading}
            isError={orders.isError}
            error={orders.error}
            data={orders.data}
            onRetry={() => orders.refetch()}
            isEmpty={(response) => response.data.length === 0}
            emptyTitle="Pesanan tidak ditemukan"
            emptyDescription="Tidak ada pesanan yang sesuai dengan filter yang dipilih."
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <OrderTable
                data={response.data}
                meta={response.meta}
                showOutlet={role === "SUPER_ADMIN"}
                onPageChange={setPage}
                onPageSizeChange={(value) => {
                  setPageSize(value);

                  setPage(1);
                }}
                onView={handleView}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
````

## File: src/components/back-office/order/OrderDetailContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useOrder } from "@/hooks/order.hooks";
import { OrderDetailHeader } from "./OrderDetailHeader";
import { OrderInformationSection } from "./OrderInformationSection";
import { OrderCustomerSection } from "./OrderCustomerSection";
import { OrderPickupSection } from "./OrderPickupSection";
import { OrderItemsSection } from "./OrderItemsSection";
import { OrderBillSection } from "./OrderBillSection";
import { DriverAssignmentsSection } from "./DriverAssignmentsSection";
import { WorkerAssignmentsSection } from "./WorkerAssignmentsSection";
import { OrderComplaintSection } from "./OrderComplaintSection";

type Props = {
  orderId: string;
};

export function OrderDetailContent({ orderId }: Props) {
  const { data, isLoading, isError, error, refetch } = useOrder(orderId);

  return (
    <AsyncStateView data={data} isLoading={isLoading} isError={isError} error={error} onRetry={refetch}>
      {(order) => (
        <Stack gap="lg">
          <OrderDetailHeader order={order} />

          <OrderInformationSection order={order} />

          <OrderCustomerSection customer={order.customer} />

          <OrderPickupSection order={order} />

          <OrderItemsSection orderItems={order.orderItems} />

          <OrderBillSection bill={order.bill} />

          <DriverAssignmentsSection assignments={order.driverAssignments} />

          <WorkerAssignmentsSection assignments={order.workerAssignments} />

          <OrderComplaintSection complaint={order.complaint} />
        </Stack>
      )}
    </AsyncStateView>
  );
}
````

## File: src/components/back-office/order/OrderInformationSection.tsx
````typescript
import { Badge, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  order: OrderDetail;
};

const CUSTOMER_STATUS = {
  SCHEDULED: {
    label: "Terjadwal",
    color: "blue",
  },
  WAITING_DRIVER_PICKUP: {
    label: "Menunggu Driver",
    color: "yellow",
  },
  ON_THE_WAY_TO_OUTLET: {
    label: "Menuju Outlet",
    color: "cyan",
  },
  ARRIVED_AT_OUTLET: {
    label: "Tiba di Outlet",
    color: "indigo",
  },
  WASHING: {
    label: "Pencucian",
    color: "blue",
  },
  IRONING: {
    label: "Penyetrikaan",
    color: "violet",
  },
  PACKING: {
    label: "Pengemasan",
    color: "grape",
  },
  WAITING_PAYMENT: {
    label: "Menunggu Pembayaran",
    color: "orange",
  },
  READY_FOR_DELIVERY: {
    label: "Siap Diantar",
    color: "teal",
  },
  ON_THE_WAY_TO_CUSTOMER: {
    label: "Dalam Pengantaran",
    color: "cyan",
  },
  RECEIVED_BY_CUSTOMER: {
    label: "Diterima Pelanggan",
    color: "green",
  },
  OVERDUE: {
    label: "Jatuh Tempo",
    color: "red",
  },
  WAITING_CUSTOMER_CONFIRMATION: {
    label: "Menunggu Konfirmasi Pelanggan",
    color: "yellow",
  },
} as const;

function formatDateTime(value?: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderInformationSection({ order }: Props) {
  const status = CUSTOMER_STATUS[order.customerStatus];

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>Informasi Pesanan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 3,
          }}
          spacing="lg"
          verticalSpacing="md"
        >
          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Kode Pesanan
            </Text>

            <Text size="sm" fw={500}>
              {order.orderCode}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Outlet
            </Text>

            <Text size="sm" fw={500}>
              {order.outlet.name}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Status Pesanan
            </Text>

            <Badge w="fit-content" variant="light" color={status.color}>
              {status.label}
            </Badge>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Dibuat Pada
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.createdAt)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Terakhir Diperbarui
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.updatedAt)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Diterima Pada
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.receivedAt)}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/order/OrderPickupSection.tsx
````typescript
import { Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  order: OrderDetail;
};

function formatDateTime(value?: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatDistance(distanceMeters?: number | string | null) {
  if (distanceMeters == null) {
    return "-";
  }

  return `${(Number(distanceMeters) / 1000).toFixed(2)} km`;
}

export function OrderPickupSection({ order }: Props) {
  const coordinates = order.addressLatitude != null && order.addressLongitude != null ? `${order.addressLatitude}, ${order.addressLongitude}` : "-";

  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>Informasi Pickup</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 4,
          }}
          spacing="lg"
        >
          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Jadwal Pickup
            </Text>

            <Text size="sm" fw={500}>
              {formatDateTime(order.pickupScheduledAt)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Jarak ke Outlet
            </Text>

            <Text size="sm" fw={500}>
              {formatDistance(order.distanceMeters)}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Nomor Kontak Pickup
            </Text>

            <Text size="sm" fw={500}>
              {order.addressPhoneSnapshot ?? "-"}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Koordinat
            </Text>

            <Text size="sm" fw={500}>
              {coordinates}
            </Text>
          </Stack>
        </SimpleGrid>

        <Stack gap={2}>
          <Text size="xs" c="var(--color-text-secondary)">
            Alamat Pickup
          </Text>

          <Text size="sm" fw={500}>
            {order.addressSnapshot ?? "-"}
          </Text>
        </Stack>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/outlet/CreateOutletContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { OutletForm } from "./OutletForm";
import { useCreateOutlet } from "@/hooks/outlet.hooks";
import type { CreateOutletPayload } from "@/types/api/outlet.types";
import type { OutletFormValues } from "@/lib/validation/outlet.validation";

import { notifications } from "@mantine/notifications";

function buildAddress(values: OutletFormValues) {
  return [
    values.streetDetail,
    values.subDistrictName,
    values.districtName,
    values.cityName,
    values.provinceName,
    values.zipCode,
  ]
    .filter(Boolean)
    .join(", ");
}

export function CreateOutletContent() {
  const router = useRouter();
  const createOutlet = useCreateOutlet();

  const handleSubmit = async (
    values: OutletFormValues,
  ) => {
    const payload: CreateOutletPayload = {
      name: values.name,
      address: buildAddress(values),
      latitude: values.latitude!,
      longitude: values.longitude!,
    };

    await createOutlet.mutateAsync(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Outlet berhasil dibuat.",
          color: "green",
        });

        router.push(
          "/internal/super-admin/outlet",
        );
      },

      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Gagal membuat outlet.",
          color: "red",
        });
      },
    });
  };

  return (
    <Stack gap="lg">
      <PageHeader
        title="Tambah Outlet"
        description="Tambahkan outlet baru ke dalam sistem."
      />

      <OutletForm
        key="create-outlet"
        onSubmit={handleSubmit}
        isSubmitting={
          createOutlet.isPending
        }
      />
    </Stack>
  );
}
````

## File: src/components/back-office/outlet/EditOutletContent.tsx
````typescript
"use client";

import { Center, Loader, Stack, Text } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import { PageHeader } from "@/components/ui/PageHeader";
import { OutletForm } from "./OutletForm";
import { useOutlet, useUpdateOutlet } from "@/hooks/outlet.hooks";
import type { UpdateOutletPayload } from "@/types/api/outlet.types";
import type { OutletFormValues } from "@/lib/validation/outlet.validation";

export function EditOutletContent() {
  const router = useRouter();

  const params = useParams<{
    outletId: string;
  }>();

  const outletId = params.outletId;

  const { data: outlet, isLoading, isError } = useOutlet(outletId);

  const updateOutlet = useUpdateOutlet();

  const handleSubmit = async (values: OutletFormValues) => {
    const payload: UpdateOutletPayload = {
      name: values.name,
      address: values.streetDetail,
      latitude: values.latitude,
      longitude: values.longitude,
    };

    await updateOutlet.mutateAsync(
      {
        outletId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Outlet berhasil diperbarui.",
            color: "green",
          });

          router.push("/internal/super-admin/outlet");
        },

        onError: (error) => {
          notifications.show({
            title: "Gagal",
            message: error instanceof Error ? error.message : "Gagal memperbarui outlet.",
            color: "red",
          });
        },
      },
    );
  };

  if (isLoading) {
    return (
      <Center h={300}>
        <Loader />
      </Center>
    );
  }

  if (isError || !outlet) {
    return (
      <Center h={300}>
        <Text c="red">Gagal memuat data outlet.</Text>
      </Center>
    );
  }
  console.log("OUTLET FROM BE:", outlet);
  console.log("LAT:", outlet.latitude, typeof outlet.latitude);
  console.log("LNG:", outlet.longitude, typeof outlet.longitude);
  const initialValues: OutletFormValues = {
    name: outlet.name,

    provinceId: "",
    provinceName: "",

    cityId: "",
    cityName: "",

    districtId: "",
    districtName: "",

    subDistrictId: "",
    subDistrictName: "",

    zipCode: "",

    streetDetail: outlet.address,

    latitude: outlet.latitude !== null && outlet.latitude !== undefined ? Number(outlet.latitude) : undefined,

    longitude: outlet.longitude !== null && outlet.longitude !== undefined ? Number(outlet.longitude) : undefined,
  };

  return (
    <Stack gap="lg">
      <PageHeader title="Edit Outlet" description="Perbarui informasi outlet." />

      <OutletForm key={initialValues.cityId || 'edit'} mode="edit" initialValues={initialValues} onSubmit={handleSubmit} isSubmitting={updateOutlet.isPending} submitLabel="Simpan Perubahan" />
    </Stack>
  );
}
````

## File: src/components/back-office/outlet/OutletForm.tsx
````typescript
"use client";

import { Alert, Button, Group, Paper, Select, Stack, Text, TextInput, Textarea } from "@mantine/core";
import { type OutletFormValues } from "@/lib/validation/outlet.validation";
import { LocationPicker } from "@/components/shared/Location/LocationPicker";
import { useOutletFormHooks } from "@/hooks/outletForm.hooks";

type Props = {
  initialValues?: OutletFormValues;
  onSubmit: (values: OutletFormValues) => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  mode?: "create" | "edit";
};

const EMPTY_VALUES: OutletFormValues = {
  name: "",
  provinceId: "",
  provinceName: "",
  cityId: "",
  cityName: "",
  districtId: "",
  districtName: "",
  subDistrictId: "",
  subDistrictName: "",
  zipCode: "",
  streetDetail: "",
  latitude: undefined,
  longitude: undefined,
};

export function OutletForm({ initialValues = EMPTY_VALUES, onSubmit, isSubmitting = false, submitLabel = "Simpan", mode = "create" }: Props) {
  const {
    form,
    isEditingLocation,
    hasPosition,
    setIsEditingLocation,
    provinces,
    handleProvinceChange,
    isLoadingProvinces,
    cities,
    handleCityChange,
    isLoadingCities,
    districts,
    handleDistrictChange,
    isLoadingDistricts,
    subDistricts,
    handleSubDistrictChange,
    isLoadingSubDistricts,
    previewLocation,
    handlePreviewLocation,
    handleCancelEditLocation,
    locationError,
    handleLocationChange,
    router,
  } = useOutletFormHooks({ initialValues, mode });
  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <Stack gap="lg">
        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <TextInput label="Nama Outlet" placeholder="Masukkan nama outlet" required {...form.getInputProps("name")} />

            <Stack gap="sm">
              <Text fw={600}>Alamat Outlet</Text>

              {mode === "edit" && !isEditingLocation ? (
                <>
                  <Textarea label="Alamat" value={form.values.streetDetail} readOnly autosize minRows={4} />

                  {hasPosition && (
                    <Stack gap="xs">
                      <LocationPicker initialLat={form.values.latitude!} initialLng={form.values.longitude!} onChange={handleLocationChange} />

                      <Text size="sm" c="var(--color-text-secondary)">
                        Koordinat: {form.values.latitude!.toFixed(6)}, {form.values.longitude!.toFixed(6)}
                      </Text>
                    </Stack>
                  )}

                  <Group justify="flex-end">
                    <Button type="button" variant="light" onClick={() => setIsEditingLocation(true)}>
                      Ubah Alamat & Lokasi
                    </Button>
                  </Group>
                </>
              ) : (
                <>
                  <Select
                    label="Provinsi"
                    placeholder="Pilih provinsi"
                    searchable
                    clearable
                    required
                    data={
                      provinces?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.provinceId || null}
                    onChange={handleProvinceChange}
                    disabled={isLoadingProvinces}
                    error={form.errors.provinceId}
                  />

                  <Select
                    label="Kota/Kabupaten"
                    placeholder="Pilih kota/kabupaten"
                    searchable
                    clearable
                    required
                    data={
                      cities?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.cityId || null}
                    onChange={handleCityChange}
                    disabled={!form.values.provinceId || isLoadingCities}
                    error={form.errors.cityId}
                  />

                  <Select
                    label="Kecamatan"
                    placeholder="Pilih kecamatan"
                    searchable
                    clearable
                    required
                    data={
                      districts?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.districtId || null}
                    onChange={handleDistrictChange}
                    disabled={!form.values.cityId || isLoadingDistricts}
                    error={form.errors.districtId}
                  />

                  <Select
                    label="Kelurahan"
                    placeholder="Pilih kelurahan"
                    searchable
                    clearable
                    required
                    data={
                      subDistricts?.map((item) => ({
                        value: String(item.id),
                        label: item.name,
                      })) ?? []
                    }
                    value={form.values.subDistrictId || null}
                    onChange={handleSubDistrictChange}
                    disabled={!form.values.districtId || isLoadingSubDistricts}
                    error={form.errors.subDistrictId}
                  />

                  <TextInput label="Kode Pos" placeholder="Kode pos" {...form.getInputProps("zipCode")} />

                  <Textarea
                    label="Detail Alamat"
                    placeholder="Nama jalan, nomor rumah, blok, dan detail lainnya"
                    required
                    autosize
                    minRows={4}
                    {...form.getInputProps("streetDetail")}
                  />

                  <Group justify="flex-end">
                    <Button type="button" variant="light" loading={previewLocation.isPending} disabled={isSubmitting} onClick={handlePreviewLocation}>
                      Cek Lokasi
                    </Button>

                    {mode === "edit" && (
                      <Button type="button" variant="subtle" disabled={previewLocation.isPending} onClick={handleCancelEditLocation}>
                        Batal Ubah
                      </Button>
                    )}
                  </Group>

                  {locationError && <Alert color="red">{locationError}</Alert>}

                  {hasPosition && (
                    <Stack gap="xs">
                      <LocationPicker initialLat={form.values.latitude!} initialLng={form.values.longitude!} onChange={handleLocationChange} />

                      <Text size="sm" c="var(--color-text-secondary)">
                        Koordinat: {form.values.latitude!.toFixed(6)}, {form.values.longitude!.toFixed(6)}
                      </Text>
                    </Stack>
                  )}
                </>
              )}
            </Stack>
          </Stack>
        </Paper>

        <Group justify="flex-end">
          <Button type="button" variant="default" disabled={isSubmitting} onClick={() => router.back()}>
            Batal
          </Button>

          <Button type="submit" loading={isSubmitting}>
            {submitLabel}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
````

## File: src/components/back-office/pricing/laundry/LaundryPricingContent.tsx
````typescript
"use client";

import { useState } from "react";
import { Button, Group, Paper, Stack, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconEdit, IconPlus } from "@tabler/icons-react";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useCreateLaundryPricing, useLaundryPricing, useUpdateLaundryPricing } from "@/hooks/pricing.hooks";
import { LaundryPricingModal } from "./LaundryPricingModal";
import type { LaundryPricing } from "@/types/api/pricing.types";

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

export function LaundryPricingContent() {
  const [opened, setOpened] = useState(false);
  const laundryPricing = useLaundryPricing();
  const createLaundryPricing = useCreateLaundryPricing();
  const updateLaundryPricing = useUpdateLaundryPricing();

  const handleSubmit = async (pricePerKg: number, pricing: LaundryPricing | null) => {
    try {
      if (pricing) {
        await updateLaundryPricing.mutateAsync({
          pricingId: pricing.id,
          payload: {
            pricePerKg,
          },
        });

        notifications.show({
          title: "Berhasil",
          message: "Harga laundry berhasil diperbarui.",
          color: "green",
        });
      } else {
        await createLaundryPricing.mutateAsync({
          pricePerKg,
        });

        notifications.show({
          title: "Berhasil",
          message: "Harga laundry berhasil dibuat.",
          color: "green",
        });
      }

      setOpened(false);
    } catch (error) {
      notifications.show({
        title: "Gagal",
        message: error instanceof Error ? error.message : "Gagal menyimpan harga laundry.",
        color: "red",
      });
    }
  };

  const isSubmitting = createLaundryPricing.isPending || updateLaundryPricing.isPending;

  return (
    <>
      <Stack gap="lg">
        <PageHeader
          title="Harga Laundry"
          description="Kelola harga laundry per kilogram yang digunakan dalam sistem."
          action={
            <Button
              leftSection={laundryPricing.data ? <IconEdit size={16} /> : <IconPlus size={16} />}
              onClick={() => setOpened(true)}
              disabled={laundryPricing.isLoading || laundryPricing.isError}
            >
              {laundryPricing.data ? "Ubah Harga" : "Buat Harga"}
            </Button>
          }
        />

        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <AsyncStateView
            isLoading={laundryPricing.isLoading}
            isError={laundryPricing.isError}
            error={laundryPricing.error}
            data={laundryPricing.data}
            onRetry={() => laundryPricing.refetch()}
          >
            {(pricing) => (
              <Stack gap="xs">
                <Text size="sm" c="var(--color-text-secondary)">
                  Harga per kilogram
                </Text>

                <Group justify="space-between" align="center">
                  <Text size="xl" fw={700} c="var(--color-text-primary)">
                    {formatCurrency(pricing.pricePerKg)}
                    <Text component="span" size="sm" fw={400} c="var(--color-text-secondary)">
                      {" "}
                      / kg
                    </Text>
                  </Text>

                  <Button variant="light" leftSection={<IconEdit size={16} />} onClick={() => setOpened(true)}>
                    Ubah Harga
                  </Button>
                </Group>
              </Stack>
            )}
          </AsyncStateView>
        </Paper>
      </Stack>

      <LaundryPricingModal
        key={laundryPricing ? laundryPricing.data?.id : "new-pricing"}
        opened={opened}
        pricing={laundryPricing.data ?? null}
        isSubmitting={isSubmitting}
        onClose={() => setOpened(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}
````

## File: src/components/back-office/pricing/laundry/LaundryPricingModal.tsx
````typescript
"use client";

import { useState } from "react";
import { Button, Group, Modal, NumberInput, Stack } from "@mantine/core";
import type { LaundryPricing } from "@/types/api/pricing.types";

type Props = {
  opened: boolean;
  pricing: LaundryPricing | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (pricePerKg: number, pricing: LaundryPricing | null) => Promise<void>;
};

export function LaundryPricingModal({ opened, pricing, isSubmitting, onClose, onSubmit }: Props) {
  const [pricePerKg, setPricePerKg] = useState<number | string>(
    pricing ? Number(pricing.pricePerKg) : ""
  );

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
  };

  const handleSubmit = async () => {
    if (typeof pricePerKg !== "number" || pricePerKg <= 0) return;
    await onSubmit(pricePerKg, pricing);
  };

  return (
    <Modal opened={opened} onClose={handleClose} title={pricing ? "Ubah Harga Laundry" : "Buat Harga Laundry"} centered>
      <Stack gap="md">
        <NumberInput
          label="Harga per Kilogram"
          description="Masukkan harga laundry untuk setiap kilogram."
          placeholder="Contoh: 7000"
          prefix="Rp "
          min={1}
          thousandSeparator="."
          decimalSeparator=","
          value={pricePerKg}
          onChange={setPricePerKg}
          disabled={isSubmitting}
          required
        />

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button onClick={handleSubmit} loading={isSubmitting}>
            {pricing ? "Simpan Perubahan" : "Buat Harga"}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/pricing/shipping/DeactivateShippingRateModal.tsx
````typescript
"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import type { ShippingRate } from "@/types/api/pricing.types";

type Props = {
  opened: boolean;
  shippingRate: ShippingRate | null;
  isSubmitting: boolean;
  onClose: () => void;
  onConfirm: (shippingRate: ShippingRate) => void;
};

function formatDistance(value: number) {
  return `≤ ${value / 1000} km`;
}

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

export function DeactivateShippingRateModal({ opened, shippingRate, isSubmitting, onClose, onConfirm }: Props) {
  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  const handleConfirm = () => {
    if (!shippingRate) {
      return;
    }

    onConfirm(shippingRate);
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Nonaktifkan Tarif" centered>
      <Stack gap="md">
        <Text size="sm">Apakah Anda yakin ingin menonaktifkan tarif shipping ini?</Text>

        {shippingRate && (
          <Stack
            gap={4}
            p="sm"
            style={{
              border: "1px solid var(--mantine-color-gray-3)",
              borderRadius: "var(--mantine-radius-sm)",
            }}
          >
            <Text size="sm" fw={600}>
              {formatDistance(shippingRate.maxDistanceMeters)}
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              {formatCurrency(shippingRate.price)}
            </Text>
          </Stack>
        )}

        <Text size="xs" c="dimmed">
          Tarif yang sudah dinonaktifkan tidak dapat digunakan untuk perhitungan biaya pengiriman baru.
        </Text>

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button color="red" onClick={handleConfirm} loading={isSubmitting}>
            Nonaktifkan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/pricing/shipping/ShippingRateFilters.tsx
````typescript
"use client";

import { ActionIcon, Grid, Select, TextInput } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { SortOrder } from "@/types/api";
import type { ShippingRateQuery, ShippingRateSortBy } from "@/types/api/pricing.types";

type FiltersState = Pick<ShippingRateQuery, "search">;

type Props = {
  filters: FiltersState;
  sortBy: ShippingRateSortBy;
  sortOrder: SortOrder;
  onChange: (key: keyof FiltersState, value: ShippingRateQuery[keyof FiltersState]) => void;
  onSortByChange: (value: ShippingRateSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onReset: () => void;
};

const SORT_BY_OPTIONS: {
  value: ShippingRateSortBy;
  label: string;
}[] = [
  {
    value: "maxDistanceMeters",
    label: "Batas Jarak",
  },
  {
    value: "price",
    label: "Harga",
  },
  {
    value: "createdAt",
    label: "Tanggal Dibuat",
  },
];

const SORT_ORDER_OPTIONS: {
  value: SortOrder;
  label: string;
}[] = [
  {
    value: "asc",
    label: "Menaik",
  },
  {
    value: "desc",
    label: "Menurun",
  },
];

export function ShippingRateFilters({ filters, sortBy, sortOrder, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <Grid align="flex-end">
      <Grid.Col
        span={{
          base: 12,
          md: 4,
        }}
      >
        <TextInput
          label="Cari"
          placeholder="Cari berdasarkan harga atau jarak"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value)}
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 12,
          md: 3,
        }}
      >
        <Select
          label="Urutkan Berdasarkan"
          data={SORT_BY_OPTIONS}
          value={sortBy}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortByChange(value as ShippingRateSortBy);
          }}
          allowDeselect={false}
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 10,
          md: 3,
        }}
      >
        <Select
          label="Urutan"
          data={SORT_ORDER_OPTIONS}
          value={sortOrder}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortOrderChange(value as SortOrder);
          }}
          allowDeselect={false}
        />
      </Grid.Col>

      <Grid.Col
        span={{
          base: 2,
          md: 2,
        }}
      >
        <ActionIcon variant="default" size="lg" aria-label="Reset filter" onClick={onReset}>
          <IconRefresh size={18} />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
}
````

## File: src/components/customer/alamat/AddressCard.tsx
````typescript
"use client";

import {
  Paper,
  Group,
  Stack,
  Text,
  Badge,
  Menu,
  ActionIcon,
} from "@mantine/core";
import type { Address } from "@/types/api/address.types";

type AddressCardProps = {
  address: Address;
  onEdit: () => void;
  onDelete: () => void;
  onSetPrimary: () => void;
  isSettingPrimary: boolean;
};

export function AddressCard({
  address,
  onEdit,
  onDelete,
  onSetPrimary,
  isSettingPrimary,
}: AddressCardProps) {
  return (
    <Paper
      withBorder
      p="md"
      radius="md"
      style={{
        borderColor: address.isPrimary
          ? "var(--color-primary)"
          : "color-mix(in srgb, var(--color-primary) 20%, transparent)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Group justify="space-between" align="flex-start" wrap="nowrap">
        <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
          <Group gap="xs">
            <Text fw={600} style={{ color: "var(--color-text-primary)" }}>
              {address.label || "Alamat"}
            </Text>
            {address.isPrimary && (
              <Badge
                size="sm"
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary)",
                }}
              >
                Utama
              </Badge>
            )}
          </Group>
          <Text size="sm" c="var(--color-text-secondary)">
            {address.formattedAddress}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
            {address.phone}
          </Text>
        </Stack>

        <Menu position="bottom-end">
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray">
              ⋮
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            {!address.isPrimary && (
              <Menu.Item onClick={onSetPrimary} disabled={isSettingPrimary}>
                Jadikan alamat utama
              </Menu.Item>
            )}
            <Menu.Item onClick={onEdit}>Edit</Menu.Item>
            <Menu.Item onClick={onDelete} c="var(--color-error)">
              Hapus
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Paper>
  );
}
````

## File: src/components/customer/order/complaint/complaintDetail.tsx
````typescript
"use client";

import { useState } from "react";
import {
  Paper,
  Stack,
  Text,
  Badge,
  Image,
  Group,
  Modal,
} from "@mantine/core";
import {
  COMPLAINT_CATEGORY_LABELS,
  type Complaint,
} from "@/types/api/orders.types";

const STATUS_CONFIG: Record<
  Complaint["status"],
  {
    label: string;
    bg: string;
    text: string;
  }
> = {
  OPEN: {
    label: "Menunggu Ditinjau",
    bg: "var(--color-primary-light)",
    text: "var(--color-primary)",
  },
  IN_REVIEW: {
    label: "Sedang Ditinjau",
    bg: "var(--color-primary-light)",
    text: "var(--color-primary)",
  },
  RESOLVED: {
    label: "Selesai",
    bg: "var(--color-success-light, #e6f4ea)",
    text: "var(--color-success, #1a7f37)",
  },
  REJECTED: {
    label: "Ditolak",
    bg: "var(--color-error-light)",
    text: "var(--color-error)",
  },
};

const DEFAULT_STATUS_CONFIG = {
  label: "Status Tidak Diketahui",
  bg: "var(--color-surface)",
  text: "var(--color-text-secondary)",
};

export function ComplaintDetail({
  complaint,
}: {
  complaint: Complaint;
}) {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  const statusConfig =
    STATUS_CONFIG[complaint.status] ?? DEFAULT_STATUS_CONFIG;

  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="xs">
        <Group justify="space-between">
          <Text
            fw={600}
            style={{ color: "var(--color-text-primary)" }}
          >
            Komplain Kamu
          </Text>

          <Badge
            style={{
              backgroundColor: statusConfig.bg,
              color: statusConfig.text,
            }}
          >
            {statusConfig.label}
          </Badge>
        </Group>

        <Text size="sm" c="var(--color-text-secondary)">
          Kategori:{" "}
          {COMPLAINT_CATEGORY_LABELS[complaint.category]}
        </Text>

        <Text size="sm" c="var(--color-text-secondary)">
          {complaint.description}
        </Text>

        <div>
          <Image
            src={complaint.proofPhotoUrl}
            alt="Bukti komplain"
            radius="md"
            mah={200}
            w="auto"
            fit="contain"
            onClick={() => setIsPhotoOpen(true)}
            style={{ cursor: "pointer" }}
          />

          <Text
            size="xs"
            c="var(--color-text-secondary)"
            mt={4}
          >
            Klik foto untuk memperbesar.
          </Text>
        </div>

        {complaint.responseNote && (
          <Paper
            withBorder
            p="sm"
            radius="md"
            style={{
              backgroundColor: "var(--color-surface)",
            }}
          >
            <Text
              size="xs"
              fw={600}
              c="var(--color-text-secondary)"
              mb={4}
            >
              Tanggapan Tim Kami
            </Text>

            <Text size="sm">
              {complaint.responseNote}
            </Text>
          </Paper>
        )}
      </Stack>

      <Modal
        opened={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        size="auto"
        centered
        padding={0}
        withCloseButton
      >
        <Image
          src={complaint.proofPhotoUrl}
          alt="Bukti komplain (ukuran penuh)"
          fit="contain"
          mah="85vh"
          w="auto"
        />
      </Modal>
    </Paper>
  );
}
````

## File: src/components/customer/order/orderTimeLine.tsx
````typescript
"use client";

import { Accordion, Stack, Group, Text, ThemeIcon, Badge } from "@mantine/core";
import type { Complaint, TimelineEntry } from "@/types/api/orders.types";

const COMPLAINT_STATUS_LABELS: Record<Complaint["status"], string> = {
  OPEN: "Komplain Diajukan — Menunggu Ditinjau",
  IN_REVIEW: "Komplain Sedang Ditinjau",
  RESOLVED: "Komplain Selesai Ditangani",
  REJECTED: "Komplain Ditolak",
};

const COMPLAINT_COLORS: Record<Complaint["status"], string> = {
  OPEN: "var(--color-warning, #f59f00)",
  IN_REVIEW: "var(--color-warning, #f59f00)",
  RESOLVED: "var(--color-success, #1a7f37)",
  REJECTED: "var(--color-error)",
};

// Pengelompokan tampilan timeline jadi 3 kategori (beda dari statusGroup
// filter list order) — murni untuk keperluan UI accordion di halaman detail.
const TIMELINE_CATEGORIES = [
  {
    key: "PICKUP",
    label: "Pickup",
    statuses: [
      "SCHEDULED",
      "WAITING_DRIVER_PICKUP",
      "ON_THE_WAY_TO_OUTLET",
      "ARRIVED_AT_OUTLET",
    ],
  },
  {
    key: "PROSES",
    label: "Proses Laundry",
    statuses: ["WASHING", "IRONING", "PACKING", "WAITING_PAYMENT"],
  },
  {
    key: "PENGIRIMAN",
    label: "Pengiriman",
    statuses: [
      "READY_FOR_DELIVERY",
      "ON_THE_WAY_TO_CUSTOMER",
      "WAITING_CUSTOMER_CONFIRMATION",
      "RECEIVED_BY_CUSTOMER",
    ],
  },
] as const;

type OrderTimelineProps = {
  timeline: TimelineEntry[];
  complaint?: Complaint | null;
};

function TimelineEntries({ entries }: { entries: TimelineEntry[] }) {
  return (
    <Stack gap="md">
      {entries.map((entry, index) => {
        const isDone = entry.isCompleted || entry.isCurrent;
        return (
          <Group key={entry.status} align="flex-start" gap="sm" wrap="nowrap">
            <Stack gap={0} align="center">
              <ThemeIcon
                size={20}
                radius="xl"
                style={{
                  backgroundColor: isDone ? "var(--color-primary)" : "var(--color-border)",
                }}
              >
                {entry.isCurrent ? "●" : isDone ? "✓" : ""}
              </ThemeIcon>
              {index < entries.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 28,
                    backgroundColor: entry.isCompleted ? "var(--color-primary)" : "var(--color-border)",
                  }}
                />
              )}
            </Stack>
            <Stack gap={0} pb="sm">
              <Text
                size="sm"
                fw={entry.isCurrent ? 700 : 500}
                c={isDone ? "var(--color-text-primary)" : "var(--color-text-secondary)"}
              >
                {entry.label}
              </Text>
              {entry.timestamp && (
                <Text size="xs" c="var(--color-text-secondary)">
                  {new Date(entry.timestamp).toLocaleString("id-ID")}
                </Text>
              )}
            </Stack>
          </Group>
        );
      })}
    </Stack>
  );
}

export function OrderTimeline({ timeline, complaint }: OrderTimelineProps) {
  // Status paling akhir (RECEIVED_BY_CUSTOMER) tetap ditandai isCurrent saat
  // itu jadi status akhir order — tidak ada langkah berikutnya lagi. Kalau
  // entry terakhir sudah completed ATAU current, anggap seluruh order tuntas,
  // supaya semua kategori ikut ditandai "Selesai", bukan macet di "Berlangsung".
  const lastEntry = timeline[timeline.length - 1];
  const isOrderFullyDone = Boolean(lastEntry?.isCompleted || lastEntry?.isCurrent);

  const groups = TIMELINE_CATEGORIES.map((category) => {
    const entries = category.statuses
      .map((status) => timeline.find((t) => t.status === status))
      .filter((t): t is TimelineEntry => Boolean(t));

    const isCompleted = isOrderFullyDone || entries.every((e) => e.isCompleted);
    const isCurrent = !isOrderFullyDone && entries.some((e) => e.isCurrent);

    return { ...category, entries, isCompleted, isCurrent };
  });

  const defaultOpenKey =
    groups.find((g) => g.isCurrent)?.key ??
    (isOrderFullyDone ? groups[groups.length - 1]?.key : groups[0]?.key);

  return (
    <Stack gap="md">
      <Accordion
        defaultValue={defaultOpenKey}
        variant="separated"
        radius="md"
        styles={{
          item: {
            border: "1px solid color-mix(in srgb, var(--color-primary) 20%, transparent)",
            backgroundColor: "var(--color-surface)",
          },
        }}
      >
        {groups.map((group) => (
          <Accordion.Item key={group.key} value={group.key}>
            <Accordion.Control>
              <Group justify="space-between" pr="sm">
                <Text
                  fw={600}
                  style={{
                    color: group.isCurrent
                      ? "var(--color-primary)"
                      : "var(--color-text-primary)",
                  }}
                >
                  {group.label}
                </Text>
                <Badge
                  style={{
                    backgroundColor: group.isCompleted
                      ? "var(--color-success-light, #e6f4ea)"
                      : group.isCurrent
                        ? "var(--color-primary-light)"
                        : "var(--color-border)",
                    color: group.isCompleted
                      ? "var(--color-success, #1a7f37)"
                      : group.isCurrent
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                  }}
                >
                  {group.isCompleted ? "Selesai" : group.isCurrent ? "Berlangsung" : "Menunggu"}
                </Badge>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <TimelineEntries entries={group.entries} />
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      {complaint && (
        <Group align="flex-start" gap="sm" wrap="nowrap" pt="xs">
          <ThemeIcon
            size={20}
            radius="xl"
            style={{ backgroundColor: COMPLAINT_COLORS[complaint.status] }}
          >
            ●
          </ThemeIcon>
          <Stack gap={0}>
            <Text size="sm" fw={700} style={{ color: COMPLAINT_COLORS[complaint.status] }}>
              {COMPLAINT_STATUS_LABELS[complaint.status]}
            </Text>
            <Text size="xs" c="var(--color-text-secondary)">
              {new Date(complaint.createdAt).toLocaleString("id-ID")}
            </Text>
          </Stack>
        </Group>
      )}
    </Stack>
  );
}
````

## File: src/components/field-ops/shared/AttendanceStatusCard.tsx
````typescript
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useAttendanceStatus, useClockIn, useClockOut } from "@/hooks/attendance.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { Button, Card, Group, Paper, SimpleGrid, Skeleton, Stack, Text } from "@mantine/core";

import { IconAlertTriangle, IconCalendar, IconFingerprint } from "@tabler/icons-react";

export function AttendanceStatusCard() {
  const statusQuery = useAttendanceStatus();
  const clockIn = useClockIn();
  const clockOut = useClockOut();

  return (
    <AsyncStateView
      isLoading={statusQuery.isPending}
      isError={statusQuery.isError}
      error={statusQuery.error}
      data={statusQuery.data}
      onRetry={() => statusQuery.refetch()}
      isEmpty={() => false}
      skeleton={
        <Card withBorder radius="md" p="md">
          <Stack>
            <Skeleton height={20} width="40%" />
            <Skeleton height={60} />
            <Skeleton height={40} />
          </Stack>
        </Card>
      }
    >
      {(data) => (
        <Card withBorder radius="md" p="md">
          <Stack gap="md">
            <Text fw={600} size="lg">
              Status Absensi
            </Text>

            {data.isCarryOver && (
              <Paper
                withBorder
                p="sm"
                radius="md"
                bg="yellow.0"
                style={{
                  borderColor: "var(--mantine-color-yellow-4)",
                }}
              >
                <Group align="flex-start">
                  <IconAlertTriangle size={18} color="var(--mantine-color-yellow-7)" />

                  <Stack gap={2}>
                    <Text size="sm" fw={600}>
                      Absen pulang kemarin belum tercatat
                    </Text>

                    <Text size="xs" c="dimmed">
                      Selesaikan absen pulang terlebih dahulu.
                    </Text>
                  </Stack>
                </Group>
              </Paper>
            )}

            {/* Tanggal selalu ditampilkan */}
            <Group gap="xs">
              <IconCalendar size={18} />

              <Stack gap={0}>
                <Text size="sm" c="dimmed">
                  {data.isCarryOver ? "Absensi terakhir" : "Tanggal Absensi"}
                </Text>

                <Text size="sm" fw={500}>
                  {formatFieldOpsDate(data.attendanceDate)}
                </Text>
              </Stack>
            </Group>

            <SimpleGrid cols={2}>
              <Paper withBorder p="sm" radius="md">
                <Text size="xs" c="dimmed">
                  Jam Masuk
                </Text>

                <Text fw={500}>{formatFieldOpsTime(data.clockInAt)}</Text>
              </Paper>

              <Paper withBorder p="sm" radius="md">
                <Text size="xs" c="dimmed">
                  Jam Pulang
                </Text>

                <Text fw={500}>{formatFieldOpsTime(data.clockOutAt)}</Text>
              </Paper>
            </SimpleGrid>

            {/* Action hanya berdasarkan canClockIn */}
            {data.canClockIn && (
              <Button
                fullWidth
                leftSection={<IconFingerprint size={18} />}
                loading={clockIn.isPending}
                disabled={clockOut.isPending}
                onClick={() => clockIn.mutate()}
                color="var(--color-accent)"
              >
                Absen Masuk
              </Button>
            )}

            {/* Action hanya berdasarkan canClockOut */}
            {data.canClockOut && (
              <Button
                fullWidth
                leftSection={<IconFingerprint size={18} />}
                loading={clockOut.isPending}
                disabled={clockIn.isPending}
                onClick={() => clockOut.mutate()}
                color="var(--color-accent)"
              >
                Absen Pulang
              </Button>
            )}

            {/* Tidak ada action yang tersedia */}
            {!data.canClockIn && !data.canClockOut && (
              <Text size="sm" c="dimmed" ta="center" py="xs">
                Tidak ada aksi absensi yang tersedia saat ini.
              </Text>
            )}
          </Stack>
        </Card>
      )}
    </AsyncStateView>
  );
}
````

## File: src/components/field-ops/shared/OpenActionConfirmModal.tsx
````typescript
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
````

## File: src/components/field-ops/worker/active/WorkerAssignedTask.tsx
````typescript
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
````

## File: src/components/field-ops/worker/WorkerActiveTaskView.tsx
````typescript
import type { WorkerActiveAssignment, WorkerBypassPayload, WorkerValidatePayload } from "@/types/api/worker.types";
import { WorkerAssignedTask } from "./active/WorkerAssignedTask";
import { WorkerInProgressTask } from "./active/WorkerInProgressTask";
import { WorkerOnHoldBypassTask } from "./active/WorkerOnHoldBypassTask";

type WorkerActiveTaskViewProps = {
  assignment: WorkerActiveAssignment;
  isValidating: boolean;
  isRequestingBypass: boolean;
  isCompleting: boolean;

  validationErrorCode?: string | null;

  onValidate: (payload: WorkerValidatePayload) => void;
  onRequestBypass: (payload: WorkerBypassPayload) => void;
  onComplete: () => void;
};

export function WorkerActiveTaskView({
  assignment,
  isValidating,
  isRequestingBypass,
  isCompleting,
  validationErrorCode,
  onValidate,
  onRequestBypass,
  onComplete,
}: WorkerActiveTaskViewProps) {
  switch (assignment.status) {
    case "ASSIGNED":
      return (
        <WorkerAssignedTask
          assignment={assignment}
          isValidating={isValidating}
          isRequestingBypass={isRequestingBypass}
          validationErrorCode={validationErrorCode}
          onValidate={onValidate}
          onRequestBypass={onRequestBypass}
        />
      );
    case "IN_PROGRESS":
      return <WorkerInProgressTask stationType={assignment.stationType} isCompleting={isCompleting} onComplete={onComplete} />;
    case "ON_HOLD_BYPASS":
      return <WorkerOnHoldBypassTask />;
  }
}
````

## File: src/components/landing-page/CarouselSection.tsx
````typescript
import {
  Paper,
  Title,
  Text,
  Stack,
  Group,
  Button,
  Box,
  SimpleGrid,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/../public/images/request-pickup.png";
import img2 from "@/../public/images/menunggu-cucian.png";
import img3 from "@/../public/images/delivery.png";
import classes from "./css/CarouselSection.module.css";
import { useLocationPermission } from "../shared/Location/LocationPermission/hooks/useLocationPermission";

const HERO_SLIDES = [
  {
    title: "Cucian Menumpuk? Kami Jemput.",
    description:
      "Ucapkan selamat tinggal pada pekerjaan mencuci yang melelahkan. Pesan layanan pickup dari smarthphone dan nikmati kemudahan laundry tanpa harus meninggalkan rumah.",
    src: img1,
  },
  {
    title: "Laundry Berjalan, Aktivitas Tetap Lancar",
    description:
      "Nikmati kemudahan memantau progres laundry tanpa harus menghubungi outlet. Semua update dikirim langsung ke aplikasi Anda.",
    src: img2,
  },
  {
    title: "Laundry Bersih, Diantar Sampai Depan Pintu",
    description:
      "Nikmati kemudahan layanan antar langsung ke rumah. Pakaian yang telah dicuci, dikeringkan, dan dirapikan akan kami kirim kembali dengan aman, tepat waktu, dan siap digunakan.",
    src: img3,
  },
];

export default function CarouselSection() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const { requestPermission } = useLocationPermission();
  return (
    <Carousel
      withIndicators
      emblaOptions={{ loop: true }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={{ indicator: classes.indicator }}
    >
      {HERO_SLIDES.map((slide, i) => (
        <Carousel.Slide key={slide.title}>
          <Paper
            p={40}
            radius="md"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <SimpleGrid
              cols={{ base: 1, md: 2 }}
              spacing="xl"
              verticalSpacing="lg"
            >
              {/* Kolom gambar */}
              <Box
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  borderRadius: 24,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={slide.src}
                  alt="ilustrasi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
              {/* Kolom konten */}
              <Stack justify="center" gap="md">
                <Title
                  order={1}
                  c="var(--color-background-dark)"
                  fz={{ base: 28, sm: 40 }}
                >
                  {slide.title}
                </Title>
                <Text c="var(--color-background-dark)" opacity={0.85}>
                  {slide.description}
                </Text>
                <Group>
                  <Button
                    component={Link}
                    href="/request-pickup"
                    onClick={() => requestPermission()}
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-text-on-accent)",
                    }}
                  >
                    Request Pickup
                  </Button>
                  <Button component={Link} href="/pesanan" variant="outline">
                    Lacak Pesanan
                  </Button>
                </Group>
              </Stack>
            </SimpleGrid>
          </Paper>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
````

## File: src/components/landing-page/HeroSection.tsx
````typescript
"use client";

import { Button, Group, Text, Title } from "@mantine/core";
import Image from "next/image";
import heroImage from "@/../public/images/popoTeam.png";
import Link from "next/link";

const STATS = [
  { num: "4.9/5", label: "rating pengguna" },
  { num: "12rb+", label: "cucian selesai" },
];

export default function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40,
        flexWrap: "wrap",
      }}
    >
      {/* Kolom kiri — konten teks */}
      <div
        style={{
          flex: "1 1 480px",
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <Title
          style={{
            fontSize: "clamp(36px, 5vw, 52px)",
            lineHeight: 1.08,
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: "var(--color-text-primary)",
          }}
        >
          Cucian numpuk?
          <br />
          Tinggal jemput,{" "}
          <span
            style={{
              position: "relative",
              color: "var(--color-primary-dark)",
              backgroundImage:
                "linear-gradient(var(--color-accent), var(--color-accent))",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 10px",
              backgroundPosition: "0 88%",
              opacity: 1,
            }}
          >
            beres.
          </span>
        </Title>

        <Text
          style={{
            fontSize: 18,
            color: "var(--color-text-secondary)",
            maxWidth: 460,
            lineHeight: 1.6,
          }}
        >
          Jadwalkan penjemputan laundry dari HP. Kami cuci, setrika, lipat rapi,
          lalu antar balik ke rumahmu. Gak perlu keluar rumah sama sekali.
        </Text>

        <Button
          radius="md"
          size="md"
          component={Link}
          href="/request-pickup"
          style={{
            backgroundColor: "var(--color-primary-dark)",
            color: "var(--color-text-on-primary)",
            alignSelf: "flex-start",
          }}
        >
          Pesan Sekarang
        </Button>

        <Group
          gap={28}
          style={{
            paddingTop: 30,
            marginBottom: 40,
            maxWidth: "100%",
            borderTop: "2px solid rgba(16, 48, 79, 0.1)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{ display: "flex", alignItems: "center", gap: 28 }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 22,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {stat.label}
                </div>
              </div>

              {i < STATS.length - 1 && (
                <div
                  style={{
                    width: 2,
                    height: 32,
                    background: "rgba(16, 48, 79, 0.15)",
                  }}
                />
              )}
            </div>
          ))}
        </Group>
      </div>

      {/* Kolom kanan — gambar */}
      <div
        style={{
          flex: "1 1 400px",
          position: "relative",
          aspectRatio: "1 / 1",
          minWidth: 300,
        }}
      >
        <Image
          src={heroImage}
          alt="Ilustrasi layanan laundry"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          priority
          style={{
            objectFit: "contain",
            borderRadius: "24px",
          }}
        />
      </div>
    </div>
  );
}
````

## File: src/components/shared/Headers/nav-links.ts
````typescript
import {IconMapPin, IconPackage, IconTruck, IconUser } from "@tabler/icons-react";

export const NAV_LINKS = [
  {
    label: "Profil Saya",
    href: "/profil",
    icon: IconUser,
  },
  {
    label: "Request Pickup",
    href: "/request-pickup",
    icon: IconTruck,
  },
  {
    label: "Pesanan Saya",
    href: "/pesanan",
    icon: IconPackage,
  },
  {
    label: "Alamat",
    href: "/alamat",
    icon: IconMapPin,
  },
] as const;
````

## File: src/components/shared/Location/LocationPermission/hooks/useLocationPermission.tsx
````typescript
"use client";

import { useCallback, useEffect, useState } from "react";

type LocationPermissionStatus =
  | "unknown"
  | "granted"
  | "denied"
  | "unsupported";

export function useLocationPermission() {
  const [status, setStatus] = useState<LocationPermissionStatus>("unknown");

  const requestPermission = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setStatus("granted");
      },
      (err) => {
        setStatus("denied");
      },
      { timeout: 8000 },
    );
  }, []);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setStatus("unsupported");
      return;
    }

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" as PermissionName })
        .then((result) => {
          const apply = () =>
            setStatus(
              result.state === "granted"
                ? "granted"
                : result.state === "denied"
                  ? "denied"
                  : "unknown",
            );
          apply();
          result.onchange = apply;

          if (result.state === "prompt") requestPermission();
        })
        .catch(requestPermission);
    } else {
      requestPermission();
    }
  }, [requestPermission]);

  return { status, requestPermission };
}
````

## File: src/components/shared/AuthBootstrap.tsx
````typescript
"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/useAuthStore";
import { AuthApi } from "@/lib/api/auth.api";

const authApi = new AuthApi();

export function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  // queryKey WAJIB sama persis dengan yang dipakai useCurrentUser (auth.hooks.ts)
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: authApi.me,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess && data) setUser(data);
    if (isError) clearUser();
  }, [isSuccess, isError, data, setUser, clearUser]);

  return <>{children}</>;
}
````

## File: src/hooks/order/request-pickup.hooks.ts
````typescript
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import { useForm, schemaResolver } from "@mantine/form";

import { createOrderSchema } from "@/lib/validation/order.validation";
import { useAddresses } from "../addressCustomer/address.hooks";
import { useCreateOrder } from "./order.hooks";
import { useLocationPermission } from "@/components/shared/Location/LocationPermission/hooks/useLocationPermission";

import { getPickupTimeOptions } from "@/components/customer/order/RequestPickup/pickupTimeHelper";
import { notifications } from "@mantine/notifications";

const TODAY = dayjs().format("YYYY-MM-DD");

export type FormValues = {
  addressId: string;
  pickupDate: string;
  pickupTime: string;
};

export function useRequestPickup() {
  const router = useRouter();

  const locationStatus = useLocationPermission();
  const {
    data: addresses,
    isLoading: isLoadingAddresses,
    isError: isErrorAddresses,
    error: addressesError,
    refetch: refetchAddresses,
  } = useAddresses();
  const { mutate, isPending, error } = useCreateOrder();

  const [isReviewing, setIsReviewing] = useState(false);
  const [isChangingAddress, setIsChangingAddress] = useState(false);

  const form = useForm<FormValues>({
    initialValues: {
      addressId: "",
      pickupDate: TODAY,
      pickupTime: "",
    },
    validate: schemaResolver(createOrderSchema),
  });

  useEffect(() => {
    if (!addresses?.length || form.values.addressId) return;

    const primaryAddress =
      addresses.find((address) => address.isPrimary) ?? addresses[0];

    form.setFieldValue("addressId", primaryAddress.id);
  }, [addresses, form]);

  const selectedAddress = addresses?.find(
    (address) => address.id === form.values.addressId,
  );

  const isLocationBlocked = locationStatus.status !== "granted";

  const pickupTimeOptions = getPickupTimeOptions(form.values.pickupDate);

  async function handleReview() {
    const result = await form.validate();

    if (result.hasErrors) return;

    setIsReviewing(true);
  }

  function handleConfirm() {
    const values = form.values;

    mutate(
      {
        addressId: values.addressId,
        pickupDate: values.pickupDate,
        pickupTime: values.pickupTime,
      },
      {
        onSuccess: (result) => {
          notifications.show({
            title: "Berhasil",
            message: "Request pickup berhasil dibuat.",
            color: "green",
          });

          router.push(`/pesanan/${result.id}`);
        },
      },
    );
  }

  return {
    form,

    addresses,
    selectedAddress,

    isLoadingAddresses,
    isErrorAddresses,
    addressesError,
    refetchAddresses,
    isLocationBlocked,
    locationStatus,

    isReviewing,
    setIsReviewing,

    isChangingAddress,
    setIsChangingAddress,

    pickupTimeOptions,

    isPending,
    error,

    handleReview,
    handleConfirm,

    pickupDate: TODAY,
  };
}
````

## File: src/hooks/bypass.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type {
  ApproveBypassPayload,
  BypassListItem,
  BypassQuery,
  BypassSortBy,
} from "@/types/api/bypass.types";
import { BypassApi } from "@/lib/api/bypass.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { SortOrder } from "@/types/api";

export const bypassKeys = {
  all: ["bypass"] as const,

  lists: () => [...bypassKeys.all, "list"] as const,

  list: (query: BypassQuery) => [...bypassKeys.lists(), query] as const,

  details: () => [...bypassKeys.all, "detail"] as const,

  detail: (bypassId: string) => [...bypassKeys.details(), bypassId] as const,
};

const bypassApi = new BypassApi();

export function useBypassRequests(query: BypassQuery) {
  return useQuery({
    queryKey: bypassKeys.list(query),
    queryFn: () => bypassApi.getBypassRequests(query),
    refetchInterval: 15_000,
    refetchOnWindowFocus: true
  });
}

export function useBypassRequest(bypassId: string) {
  return useQuery({
    queryKey: bypassKeys.detail(bypassId),

    queryFn: () => bypassApi.getBypassRequestById(bypassId),

    enabled: Boolean(bypassId),
  });
}

export function useApproveBypassRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      bypassId,
      payload,
    }: {
      bypassId: string;
      payload: ApproveBypassPayload;
    }) => bypassApi.approveBypassRequest(bypassId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bypassKeys.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: bypassKeys.detail(variables.bypassId),
      });
    },
  });
}

export function useRejectBypassRequest() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bypassId: string) => bypassApi.rejectBypassRequest(bypassId),

    onSuccess: (_, bypassId) => {
      queryClient.invalidateQueries({
        queryKey: bypassKeys.lists(),
      });

      queryClient.invalidateQueries({
        queryKey: bypassKeys.detail(bypassId),
      });
    },
  });
}

type BypassFilterKey = "search" | "status" | "stationType";
export function useBypassHooks() {
  const router = useRouter();
  const [query, setQuery] = useState<BypassQuery>({
    page: 1,
    pageSize: 10,
    sortBy: "createdAt",
    sortOrder: "desc",
  });
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useBypassRequests({
    ...query,
    search: debouncedSearch,
  });

  const handleFilterChange = (key: BypassFilterKey, value: string | null) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value ?? undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (sortBy: BypassSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy,
      page: 1,
    }));
  };

  const handleSortOrderChange = (sortOrder: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: 10,
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const handleSelectBypass = (bypass: BypassListItem) => {
    router.push(`/internal/outlet-admin/bypass/${bypass.id}`);
  };

  return {
    query,
    handleFilterChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    data,
    error,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleSelectBypass,
  };
}

export function useBypassDetailHooks(bypassId: string) {
  const [approveModalOpened, setApproveModalOpened] = useState(false);

  const [rejectModalOpened, setRejectModalOpened] = useState(false);

  const bypassQuery = useBypassRequest(bypassId);

  const approveBypass = useApproveBypassRequest();

  const rejectBypass = useRejectBypassRequest();

  const handleApproveModalClose = () => {
    if (approveBypass.isPending) {
      return;
    }

    setApproveModalOpened(false);
  };

  const handleRejectModalClose = () => {
    if (rejectBypass.isPending) {
      return;
    }

    setRejectModalOpened(false);
  };

  const handleApprove = async (payload: ApproveBypassPayload) => {
    await approveBypass.mutateAsync({
      bypassId,
      payload,
    });

    setApproveModalOpened(false);
  };

  const handleReject = async () => {
    await rejectBypass.mutateAsync(bypassId);

    setRejectModalOpened(false);
  };

  return {
    bypassQuery,
    approveBypass,
    rejectBypass,
    setApproveModalOpened,
    setRejectModalOpened,
    approveModalOpened,
    handleApproveModalClose,
    handleApprove,
    rejectModalOpened,
    handleRejectModalClose,
    handleReject,
  };
}
````

## File: src/hooks/complaint.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { ComplaintApi } from "@/lib/api/complaint.api";

import type {
  ComplaintListItem,
  ComplaintQuery,
  ComplaintSortBy,
  DecideComplaintPayload,
} from "@/types/api/complaint.types";
import {
  ComplaintCategory,
  ComplaintStatus,
  SortOrder,
} from "@/types/api";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";

const complaintApi = new ComplaintApi();

export const COMPLAINTS_QUERY_KEY = ["complaints"];

export function useComplaints(params?: ComplaintQuery) {
  return useQuery({
    queryKey: [...COMPLAINTS_QUERY_KEY, params],

    queryFn: () => complaintApi.getComplaints(params),
  });
}

export function useComplaint(complaintId: string) {
  return useQuery({
    queryKey: [...COMPLAINTS_QUERY_KEY, "detail", complaintId],

    queryFn: () => complaintApi.getComplaintById(complaintId),

    enabled: Boolean(complaintId),
  });
}

export function useDecideComplaint() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      complaintId,
      payload,
    }: {
      complaintId: string;
      payload: DecideComplaintPayload;
    }) => complaintApi.decideComplaint(complaintId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: COMPLAINTS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...COMPLAINTS_QUERY_KEY, "detail", variables.complaintId],
      });
    },
  });
}

export function useComplaintHooks(role: string) {
  const canDecideComplaint = role === "OUTLET_ADMIN";
  const [query, setQuery] = useState<ComplaintQuery>({
    page: 1,
    pageSize: 10,
    sortBy: "createdAt",
    sortOrder: "desc",
  });
  const [selectedComplaint, setSelectedComplaint] =
    useState<ComplaintListItem | null>(null);
  const [decisionModalOpened, setDecisionModalOpened] = useState(false);
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useComplaints({
    ...query,
    search: debouncedSearch,
  });
  const decideComplaint = useDecideComplaint();

  const handleQueryChange = <Key extends keyof ComplaintQuery>(
    key: Key,
    value: ComplaintQuery[Key],
  ) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value,
      page: 1,
    }));
  };

  const handleStatusChange = (value: ComplaintStatus | null) => {
    setQuery((previous) => ({
      ...previous,
      status: value ?? undefined,
      page: 1,
    }));
  };

  const handleCategoryChange = (value: ComplaintCategory | null) => {
    setQuery((previous) => ({
      ...previous,
      category: value ?? undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (value: ComplaintSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy: value,
      page: 1,
    }));
  };

  const handleSortOrderChange = (value: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: 10,
      sortBy: "createdAt",
      sortOrder: "desc",
    });
  };

  const handleDecide = (complaint: ComplaintListItem) => {
    setSelectedComplaint(complaint);
    setDecisionModalOpened(true);
  };

  const handleDecisionModalClose = () => {
    if (decideComplaint.isPending) {
      return;
    }

    setDecisionModalOpened(false);
    setSelectedComplaint(null);
  };

  const handleDecisionSubmit = async (payload: DecideComplaintPayload) => {
    if (!selectedComplaint) {
      return;
    }

    await decideComplaint.mutateAsync({
      complaintId: selectedComplaint.id,
      payload,
    });

    handleDecisionModalClose();
  };
  return {
    query,
    canDecideComplaint,
    decisionModalOpened,
    data,
    isLoading,
    isError,
    error,
    selectedComplaint,
    decideComplaint,
    handleDecisionModalClose,
    refetch,
    handleQueryChange,
    handleCategoryChange,
    handleStatusChange,
    handleSortByChange,
    handleSortOrderChange,
    handlePageChange,
    handlePageSizeChange,
    handleReset,
    handleDecide,
    handleDecisionSubmit,
  };
}
````

## File: src/hooks/fieldOpsTaskNotification.hooks.ts
````typescript
"use client";

import { DriverApi } from "@/lib/api/driver.api";
import { WorkerApi } from "@/lib/api/worker.api";

import { DRIVER_AVAILABLE_QUERY_KEY } from "@/hooks/driver.hooks";
import { WORKER_AVAILABLE_QUERY_KEY } from "@/hooks/worker.hooks";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

type FieldOpsRole = "Driver" | "Worker";

type UseFieldOpsTaskNotificationProps = {
  role: FieldOpsRole;
  onNewTask: () => void;
};

const driverApi = new DriverApi();
const workerApi = new WorkerApi();

const POLLING_INTERVAL = 30_000;

export function useFieldOpsTaskNotification({ role, onNewTask }: UseFieldOpsTaskNotificationProps) {
  // Menyimpan createdAt terbaru yang sudah pernah difetch simpan sebelumnya.
  const knownTaskTimeRef = useRef<string | null>(null);

  // Menandai bahwa response pertama sudah pernah dijadikan baseline.
  const hasBaselineRef = useRef(false);

  const notificationQueryKey = role === "Driver" ? [...DRIVER_AVAILABLE_QUERY_KEY, "notification"] : [...WORKER_AVAILABLE_QUERY_KEY, "notification"];

  const notificationQuery = useQuery({
    queryKey: notificationQueryKey,

    queryFn: async () => {
      const requestParams = {
        page: 1,
        pageSize: 1,
        sortOrder: "desc" as const,
      };

      if (role === "Driver") {
        return driverApi.getAvailable(requestParams);
      }

      return workerApi.getAvailable(requestParams);
    },

    refetchInterval: POLLING_INTERVAL,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    // Query belum selesai fetch.
    // Jangan buat baseline dulu.
    if (!notificationQuery.data) {
      return;
    }

    // Karena pageSize = 1,
    // index 0 adalah task paling baru.
    const newestTask = notificationQuery.data.data[0];

    const incomingCreatedAt = newestTask?.createdAt ?? null;

    // RESPONSE PERTAMA
    // Response pertama hanya dijadikan baseline.
    // Task yang sudah ada sebelum user membuka aplikasi tidak dianggap sebagai task baru.
    if (!hasBaselineRef.current) {
      knownTaskTimeRef.current = incomingCreatedAt;
      hasBaselineRef.current = true;

      return;
    }

    // RESPONSE BERIKUTNYA
    // Kalau sekarang tidak ada available task,
    // tidak ada yang perlu dibandingkan.
    if (!incomingCreatedAt) {
      return;
    }

    // Sebelumnya belum ada task,
    // sekarang sudah ada task.
    // Berarti task tersebut memang muncul setelah baseline.
    if (!knownTaskTimeRef.current) {
      knownTaskTimeRef.current = incomingCreatedAt;

      onNewTask();

      return;
    }

    // Ubah tanggal string menjadi timestamp number
    // supaya bisa dibandingkan.
    const knownTimestamp = new Date(knownTaskTimeRef.current).getTime();

    const incomingTimestamp = new Date(incomingCreatedAt).getTime();

    // Kalau waktu task dari API sekarang
    // lebih baru daripada waktu task yang sudah dikenal,
    // berarti ada task baru.
    if (incomingTimestamp > knownTimestamp) {
      knownTaskTimeRef.current = incomingCreatedAt;

      onNewTask();
    }
  }, [notificationQuery.data, onNewTask]);

  return notificationQuery;
}
````

## File: src/hooks/pricing.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { PricingApi } from "@/lib/api/pricing.api";

import type {
  CreateLaundryPricingPayload,
  CreateShippingRatePayload,
  ShippingRate,
  ShippingRateQuery,
  ShippingRateSortBy,
  UpdateLaundryPricingPayload,
  UpdateShippingRatePayload,
} from "@/types/api/pricing.types";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { SortOrder } from "@/types/api";
import { notifications } from "@mantine/notifications";

const pricingApi = new PricingApi();

export const LAUNDRY_PRICING_QUERY_KEY = ["laundry-pricing"];
export const SHIPPING_RATES_QUERY_KEY = ["shipping-rates"];

export function useLaundryPricing() {
  return useQuery({
    queryKey: LAUNDRY_PRICING_QUERY_KEY,

    queryFn: () => pricingApi.getLaundryPricing(),
  });
}

export function useCreateLaundryPricing() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateLaundryPricingPayload) => pricingApi.createLaundryPricing(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_PRICING_QUERY_KEY,
      });
    },
  });
}

export function useUpdateLaundryPricing() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ pricingId, payload }: { pricingId: string; payload: UpdateLaundryPricingPayload }) => pricingApi.updateLaundryPricing(pricingId, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_PRICING_QUERY_KEY,
      });
    },
  });
}

export function useShippingRates(params?: ShippingRateQuery) {
  return useQuery({
    queryKey: [...SHIPPING_RATES_QUERY_KEY, params],

    queryFn: () => pricingApi.getShippingRates(params),
  });
}

export function useShippingRate(shippingRateId: string) {
  return useQuery({
    queryKey: [...SHIPPING_RATES_QUERY_KEY, "detail", shippingRateId],

    queryFn: () => pricingApi.getShippingRateById(shippingRateId),

    enabled: Boolean(shippingRateId),
  });
}

export function useCreateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateShippingRatePayload) => pricingApi.createShippingRate(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });
    },
  });
}

export function useUpdateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ shippingRateId, payload }: { shippingRateId: string; payload: UpdateShippingRatePayload }) => pricingApi.updateShippingRate(shippingRateId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...SHIPPING_RATES_QUERY_KEY, "detail", variables.shippingRateId],
      });
    },
  });
}

export function useDeactivateShippingRate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (shippingRateId: string) => pricingApi.deactivateShippingRate(shippingRateId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SHIPPING_RATES_QUERY_KEY,
      });
    },
  });
}

export function useShippingRateHooks() {
  const [query, setQuery] = useState<ShippingRateQuery>({
    page: 1,
    pageSize: 10,
    sortBy: "maxDistanceMeters",
    sortOrder: "asc",
  });
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedShippingRate, setSelectedShippingRate] = useState<ShippingRate | null>(null);
  const [deactivateModalOpened, setDeactivateModalOpened] = useState(false);
  const [shippingRateToDeactivate, setShippingRateToDeactivate] = useState<ShippingRate | null>(null);
  const { data, isLoading, isError, error, refetch } = useShippingRates({ ...query, search: debouncedSearch });
  const createShippingRate = useCreateShippingRate();
  const updateShippingRate = useUpdateShippingRate();
  const deactivateShippingRate = useDeactivateShippingRate();
  const isSubmitting = createShippingRate.isPending || updateShippingRate.isPending;

  const handleQueryChange = <Key extends keyof ShippingRateQuery>(key: Key, value: ShippingRateQuery[Key]) => {
    setQuery((previous) => ({
      ...previous,
      [key]: value || undefined,
      page: 1,
    }));
  };

  const handleSortByChange = (value: ShippingRateSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy: value,
      page: 1,
    }));
  };

  const handleSortOrderChange = (value: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder: value,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery({
      page: 1,
      pageSize: 10,
      sortBy: "maxDistanceMeters",
      sortOrder: "asc",
    });
  };

  const handleCreateClick = () => {
    setSelectedShippingRate(null);
    setModalOpened(true);
  };

  const handleEdit = (shippingRate: ShippingRate) => {
    setSelectedShippingRate(shippingRate);
    setModalOpened(true);
  };

  const handleModalClose = () => {
    if (isSubmitting) {
      return;
    }

    setModalOpened(false);
    setSelectedShippingRate(null);
  };

  const handleCreate = async (payload: CreateShippingRatePayload) => {
    await createShippingRate.mutateAsync(payload, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Tarif shipping berhasil dibuat.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message: err instanceof Error ? err.message : "Gagal membuat tarif shipping baru.",
          color: "red",
        });
      },
    });

    handleModalClose();
  };

  const handleUpdate = async (shippingRateId: string, payload: UpdateShippingRatePayload) => {
    await updateShippingRate.mutateAsync(
      {
        shippingRateId,
        payload,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Tarif shipping diupdate.",
            color: "green",
          });
        },
        onError: (err) => {
          notifications.show({
            title: "Gagal",
            message: err instanceof Error ? err.message : "Gagal update tarif shipping.",
            color: "red",
          });
        },
      },
    );

    handleModalClose();
  };

  const handleDeactivateClick = (shippingRate: ShippingRate) => {
    setShippingRateToDeactivate(shippingRate);

    setDeactivateModalOpened(true);
  };

  const handleDeactivateConfirm = async (shippingRate: ShippingRate) => {
    await deactivateShippingRate.mutateAsync(shippingRate.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Berhasil menonaktifkan tarif shipping.",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: "Gagal",
          message: err instanceof Error ? err.message : "Gagal menonaktifkan tarif shipping",
          color: "red",
        });
      },
    });

    setDeactivateModalOpened(false);

    setShippingRateToDeactivate(null);
  };

  const handleDeactivateModalClose = () => {
    if (deactivateShippingRate.isPending) {
      return;
    }

    setDeactivateModalOpened(false);

    setShippingRateToDeactivate(null);
  };
  return {
    handleCreateClick,
    query,
    handleQueryChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleEdit,
    handleDeactivateClick,
    modalOpened,
    selectedShippingRate,
    isSubmitting,
    handleModalClose,
    handleCreate,
    handleUpdate,
    deactivateModalOpened,
    shippingRateToDeactivate,
    deactivateShippingRate,
    handleDeactivateModalClose,
    handleDeactivateConfirm,
  };
}
````

## File: src/hooks/report.hooks.ts
````typescript
import { useQuery } from "@tanstack/react-query";
import type {
  EmployeePerformanceQuery,
  EmployeePerformanceSortBy,
  SalesPeriod,
  SalesQuery,
} from "@/types/api/report.types";
import { ReportApi } from "@/lib/api/report.api";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useOutlets } from "./outlet.hooks";
import { SortOrder } from "@/types/api";

const reportApi = new ReportApi();

export const SALES_REPORT_QUERY_KEY = ["sales-report"];

export const EMPLOYEE_PERFORMANCE_QUERY_KEY = ["employee-performance-report"];

export function useSalesReport(params: SalesQuery) {
  return useQuery({
    queryKey: [...SALES_REPORT_QUERY_KEY, params],

    queryFn: () => reportApi.getSalesReport(params),

    enabled: Boolean(params.period),
  });
}

export function useEmployeePerformance(params?: EmployeePerformanceQuery) {
  return useQuery({
    queryKey: [...EMPLOYEE_PERFORMANCE_QUERY_KEY, params],

    queryFn: () => reportApi.getEmployeePerformance(params),
  });
}
const getInitialQuery = (): EmployeePerformanceQuery => ({
  page: 1,
  pageSize: 10,
  sortBy: "completedJobs",
  sortOrder: "desc",
});

type EmployeePerformanceFilterKey =
  | "search"
  | "role"
  | "stationType"
  | "outletId"
  | "startDate"
  | "endDate";

export function useEmployeePerformanceHooks() {
  const [query, setQuery] = useState<EmployeePerformanceQuery>(getInitialQuery);
  const [debouncedSearch] = useDebouncedValue(query.search ?? "", 400);
  const { data, isLoading, isError, error, refetch } = useEmployeePerformance({
    ...query,
    search: debouncedSearch || undefined,
  });

  const { data: outletsData } = useOutlets({
    page: 1,
    pageSize: 100,
  });

  const handleFilterChange = (
    key: EmployeePerformanceFilterKey,
    value: string | null,
  ) => {
    setQuery((previous) => {
      if (key === "role" && value === "DRIVER") {
        return {
          ...previous,
          role: "DRIVER",
          stationType: undefined,
          page: 1,
        };
      }

      if (key === "role") {
        return {
          ...previous,
          role: value === "WORKER" ? "WORKER" : undefined,
          page: 1,
        };
      }

      if (key === "stationType") {
        return {
          ...previous,
          stationType:
            value === "WASHING" || value === "IRONING" || value === "PACKING"
              ? value
              : undefined,
          page: 1,
        };
      }

      return {
        ...previous,
        [key]: value ?? undefined,
        page: 1,
      };
    });
  };

  const handleSortByChange = (sortBy: EmployeePerformanceSortBy) => {
    setQuery((previous) => ({
      ...previous,
      sortBy,
      page: 1,
    }));
  };

  const handleSortOrderChange = (sortOrder: SortOrder) => {
    setQuery((previous) => ({
      ...previous,
      sortOrder,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setQuery((previous) => ({
      ...previous,
      page,
    }));
  };

  const handlePageSizeChange = (pageSize: 10 | 20 | 50 | 100) => {
    setQuery((previous) => ({
      ...previous,
      page: 1,
      pageSize,
    }));
  };

  const handleReset = () => {
    setQuery(getInitialQuery());
  };
  return {
    query,
    outletsData,
    handleFilterChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
  };
}

function getInitialSalesQuery(): SalesQuery {
  const now = new Date();

  return {
    period: "MONTH",
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
}

function formatLocalDate(date: Date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export function useSalesHooks() {
  const [query, setQuery] = useState<SalesQuery>(getInitialSalesQuery);

  const { data, isLoading, isError, error, refetch } = useSalesReport(query);

  const { data: outletsData } = useOutlets({
    page: 1,
    pageSize: 100,
  });

  const outletOptions =
    outletsData?.data.map((outlet) => ({
      value: outlet.id,
      label: outlet.name,
    })) ?? [];

  const handlePeriodChange = (period: SalesPeriod) => {
    const now = new Date();

    setQuery((previous) => {
      const outletId = previous.outletId;

      switch (period) {
        case "DAY":
          return {
            period,
            date: formatLocalDate(now),
            outletId,
          };

        case "MONTH":
          return {
            period,
            month: now.getMonth() + 1,
            year: now.getFullYear(),
            outletId,
          };

        case "YEAR":
          return {
            period,
            year: now.getFullYear(),
            outletId,
          };
      }
    });
  };

  const handleDateChange = (date: string | null) => {
    setQuery((previous) => ({
      ...previous,
      date: date ?? undefined,
    }));
  };

  const handleMonthChange = (month: number | null) => {
    setQuery((previous) => ({
      ...previous,
      month: month ?? undefined,
    }));
  };

  const handleYearChange = (year: number | null) => {
    setQuery((previous) => ({
      ...previous,
      year: year ?? undefined,
    }));
  };

  const handleOutletChange = (outletId: string | null) => {
    setQuery((previous) => ({
      ...previous,
      outletId: outletId ?? undefined,
    }));
  };
  return {
    query,
    outletOptions,
    handlePeriodChange,
    handleDateChange,
    handleMonthChange,
    handleYearChange,
    handleOutletChange,
    isLoading,
    isError,
    error,
    data,
    refetch,
  };
}
````

## File: src/lib/api/laundry-item.api.ts
````typescript
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { api } from "./axios";

import type {
  CreateLaundryItemPayload,
  LaundryItem,
  LaundryItemQuery,
  UpdateLaundryItemPayload,
} from "@/types/api/laundry-item.types";

const BASE_URL = "/internal/laundry-items";

export class LaundryItemApi {
  async getLaundryItems(
    params?: LaundryItemQuery,
  ): Promise<PaginatedResponse<LaundryItem>> {
    const response = await api.get<PaginatedResponse<LaundryItem>>(BASE_URL, {
      params,
    });

    return response.data;
  }

  async getLaundryItemById(id: string): Promise<LaundryItem> {
    const response = await api.get<ApiResponse<LaundryItem>>(`${BASE_URL}/${id}`);

    return response.data.data;
  }

  async createLaundryItem(
    payload: CreateLaundryItemPayload,
  ): Promise<LaundryItem> {
    const response = await api.post<ApiResponse<LaundryItem>>(BASE_URL, payload);

    return response.data.data;
  }

  async updateLaundryItem(
    id: string,
    payload: UpdateLaundryItemPayload,
  ): Promise<LaundryItem> {
    const response = await api.patch(
      `${BASE_URL}/${id}`,
      payload,
    );

    return response.data.data;
  }

  async deactivateLaundryItem(id: string): Promise<LaundryItem> {
    const response = await api.patch<ApiResponse<LaundryItem>>(
      `${BASE_URL}/${id}/deactivate`,
    );

    return response.data.data;
  }
}
````

## File: src/lib/api/order.api.ts
````typescript
import { api } from "./axios";
import { CreateOrderSchema } from "../validation/order.validation";
import { CreateOrderResponse } from "@/types/api/orders.types";
import { CreatePaymentResponse, ListOrderQuery, ListOrderResponse, PaymentAttempt } from "@/types/api/orders.types";
import type { ApiResponse, PaginatedResponse } from "@/types/api";
import type { CreateOrderPayload, OrderDetail, OrderListItem, OrderQuery } from "@/types/api/order.types";

export class OrderApi {
  async getOrders(params?: OrderQuery): Promise<PaginatedResponse<OrderListItem>> {
    const res = await api.get<PaginatedResponse<OrderListItem>>("/internal/orders", {
      params,
    });

    return res.data;
  }

  async getOrderById(orderId: string): Promise<OrderDetail> {
    const res = await api.get<ApiResponse<OrderDetail>>(`/internal/orders/${orderId}`);

    return res.data.data;
  }

  async receiveOrder(orderId: string): Promise<OrderDetail> {
    const res = await api.post<ApiResponse<OrderDetail>>(`/internal/orders/${orderId}/receive`);

    return res.data.data;
  }

  async createOrderAdmin(orderId: string, payload: CreateOrderPayload): Promise<OrderDetail> {
    const res = await api.post<ApiResponse<OrderDetail>>(`/internal/orders/${orderId}/create-order`, payload);

    return res.data.data;
  }
  async createOrder(payload: CreateOrderSchema) {
    const { data } = await api.post<{ data: CreateOrderResponse }>("/order", payload);
    return data.data;
  }

  async listOrders(params: ListOrderQuery) {
    const { data } = await api.get<{
      success: boolean;
      data: ListOrderResponse["orders"];
      meta: ListOrderResponse["meta"];
    }>("/order", { params });
    return data;
  }

  async getOrderDetail(id: string) {
    const { data } = await api.get<{ data: OrderDetail }>(`/order/${id}`);
    return data.data;
  }

  async paymentAttempt(id: string) {
    const { data } = await api.post<{ data: CreatePaymentResponse }>(`/order/${id}/payment`);
    return data.data;
  }

  async getLastestPayment(id: string) {
    const { data } = await api.get<{ data: PaymentAttempt }>(`/order/${id}/payment`);
    return data.data;
  }
}
````

## File: src/lib/api/outlet.api.ts
````typescript
import { ApiResponse, PaginatedResponse } from "@/types/api";
import { api } from "./axios";
import {
  CreateOutletPayload,
  Outlet,
  OutletQuery,
  UpdateOutletPayload,
} from "@/types/api/outlet.types";

export class OutletApi {
  async getOutlets(params?: OutletQuery): Promise<PaginatedResponse<Outlet>>{
    const response = await api.get<PaginatedResponse<Outlet>>("/internal/outlets", {
      params,
    });

    return response.data;
  }
  async getOutlet(outletId: string): Promise<Outlet> {
    const response = await api.get<ApiResponse<Outlet>>(`/internal/outlets/${outletId}`);

    return response.data.data;
  }

  async createOutlet(payload: CreateOutletPayload): Promise<Outlet> {
    const response = await api.post<ApiResponse<Outlet>>("/internal/outlets", payload);

    return response.data.data;
  }
  async updateOutlet(
    outletId: string,
    payload: UpdateOutletPayload,
  ): Promise<Outlet> {
    const response = await api.patch<ApiResponse<Outlet>>(`/internal/outlets/${outletId}`, payload);

    return response.data.data;
  }
  async deleteOutlet(outletId: string): Promise<void> {
    await api.delete<ApiResponse<Outlet>>(`/internal/outlets/${outletId}/deactivate`);
  }
}
````

## File: src/lib/api/report.api.ts
````typescript
import type { ApiResponse } from "@/types/api";

import { api } from "./axios";

import type {
  EmployeePerformanceQuery,
  PaginatedEmployeePerformanceResponse,
  SalesQuery,
  SalesReport,
} from "@/types/api/report.types";

const BASE_URL = "/internal/reports";

export class ReportApi {
  async getSalesReport(params: SalesQuery): Promise<SalesReport> {
    const response = await api.get<ApiResponse<SalesReport>>(
      `${BASE_URL}/sales`,
      {
        params,
      },
    );

    return response.data.data;
  }

  async getEmployeePerformance(
    params?: EmployeePerformanceQuery,
  ): Promise<PaginatedEmployeePerformanceResponse> {
    const response = await api.get<
      PaginatedEmployeePerformanceResponse
    >(`${BASE_URL}/employee-performance`, {
      params,
    });

    return response.data;
  }
}
````

## File: src/lib/constants/order.ts
````typescript
export const ORDER_STATUS_GROUPS = {
  BELUM_BAYAR: ["WAITING_PAYMENT", "OVERDUE"],
  SEDANG_DIPROSES: [
    "SCHEDULED",
    "WAITING_DRIVER_PICKUP",
    "ON_THE_WAY_TO_OUTLET",
    "ARRIVED_AT_OUTLET",
    "WASHING",
    "IRONING",
    "PACKING",
  ],
  DIKIRIM: [
    "READY_FOR_DELIVERY",
    "ON_THE_WAY_TO_CUSTOMER",
    "WAITING_CUSTOMER_CONFIRMATION",
  ],
  SELESAI: ["RECEIVED_BY_CUSTOMER"],
} as const;

export type OrderStatusGroupKey = keyof typeof ORDER_STATUS_GROUPS;

export const ORDER_STATUS_GROUP_LABELS: Record<OrderStatusGroupKey, string> = {
  BELUM_BAYAR: "Belum Bayar",
  SEDANG_DIPROSES: "Sedang Diproses",
  DIKIRIM: "Dikirim",
  SELESAI: "Selesai",
};

export const STATUS_LABELS: Record<string, string> = {
  SCHEDULED: "Dijadwalkan",
  WAITING_DRIVER_PICKUP: "Menunggu Driver",
  ON_THE_WAY_TO_OUTLET: "Menuju Outlet",
  ARRIVED_AT_OUTLET: "Tiba di Outlet",
  WASHING: "Dicuci",
  IRONING: "Disetrika",
  PACKING: "Dikemas",
  WAITING_PAYMENT: "Menunggu Pembayaran",
  OVERDUE: "Pembayaran Terlambat",
  READY_FOR_DELIVERY: "Siap Dikirim",
  ON_THE_WAY_TO_CUSTOMER: "Dalam Perjalanan",
  WAITING_CUSTOMER_CONFIRMATION: "Menunggu Konfirmasi",
  RECEIVED_BY_CUSTOMER: "Diterima",
};
````

## File: src/lib/validation/employee.validation.ts
````typescript
import { z } from "zod";

export const inviteEmployeeSchema = z.object({
  name: z.string().trim().min(3, "Nama minimal 3 karakter").max(100, "Nama maksimal 100 karakter"),

  email: z.string().trim().email("Format email tidak valid"),

  role: z.enum(["OUTLET_ADMIN", "WORKER", "DRIVER"]),
});

export const filterOutletAttendanceSchema = z.object({
  search: z.string().trim().default(""),
  role: z.enum(["WORKER", "DRIVER"]).nullable().optional(),
  date: z.coerce.date().nullable().optional(),
  status: z.enum(["NOT_CLOCKED_IN", "CLOCKED_IN", "CLOCKED_OUT"]).nullable().optional()
});

export type InviteEmployeeFormValues = z.infer<typeof inviteEmployeeSchema>;
export type FilterOutletAttendanceValues = z.infer<typeof filterOutletAttendanceSchema>;
````

## File: src/lib/validation/laundry-item.validation.ts
````typescript
import { z } from "zod";

export const laundryItemSchema = z.object({
  name: z.string().trim().min(2, "Nama item minimal 2 karakter").max(100, "Nama item maksimal 100 karakter"),
});

export const filterLaundryItemSchema = z.object({
  search: z.string().trim().default(''),
  sortBy: z.enum(["name", "createdAt"]).default('createdAt'),
  sortOrder: z.enum(["asc", "desc"]).default('desc'),
});

export type LaundryItemFormValues = z.infer<typeof laundryItemSchema>;
export type FilterLaundryItemValues = z.infer<typeof filterLaundryItemSchema>
````

## File: src/lib/validation/order.validation.ts
````typescript
import { COMPLAINT_CATEGORIES } from "@/types/api/orders.types";
import * as z from "zod"

 
const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
  
export const createOrderSchema = z.object({
  addressId: z.string().uuid("Pilih alamat pickup"),
  pickupDate: z.string().min(1, "Pilih tanggal pickup"),
  pickupTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Pilih jam pickup"),
});


export const createComplaintSchema = z.object({
  category: z.enum(COMPLAINT_CATEGORIES, {
    message: "Kategori komplain wajib dipilih",
  }),
  description: z
    .string()
    .min(10, "Jelaskan lebih detail (minimal 10 karakter)")
    .max(500, "Deskripsi maksimal 500 karakter"),
  photo: z
    .instanceof(File, { message: "Foto bukti wajib diunggah" })
    .refine((file) => ACCEPTED_TYPES.includes(file.type), {
      message: "Format foto harus JPG, PNG, atau WEBP",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE_MB * 1024 * 1024, {
      message: `Ukuran foto maksimal ${MAX_FILE_SIZE_MB}MB`,
    }),
});

export type CreateOrderSchema = z.infer<typeof createOrderSchema>;
export type CreateComplaintSchema = z.infer<typeof createComplaintSchema>;
````

## File: src/lib/validation/outlet.validation.ts
````typescript
import { z } from "zod";

export const outletSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nama outlet wajib diisi"),

  provinceId: z
    .string()
    .min(1, "Provinsi wajib dipilih"),

  provinceName: z
    .string()
    .min(1, "Provinsi wajib dipilih"),

  cityId: z
    .string()
    .min(1, "Kota/Kabupaten wajib dipilih"),

  cityName: z
    .string()
    .min(1, "Kota/Kabupaten wajib dipilih"),

  districtId: z
    .string()
    .min(1, "Kecamatan wajib dipilih"),

  districtName: z
    .string()
    .min(1, "Kecamatan wajib dipilih"),

  subDistrictId: z
    .string()
    .min(1, "Kelurahan wajib dipilih"),

  subDistrictName: z
    .string()
    .min(1, "Kelurahan wajib dipilih"),

  zipCode: z
    .string()
    .regex(
      /^\d{5}$/,
      "Kode pos harus 5 digit angka",
    ),

  streetDetail: z
    .string()
    .trim()
    .min(
      10,
      "Detail alamat terlalu pendek",
    ),

  latitude: z
    .number()
    .min(-90)
    .max(90)
    .optional(),

  longitude: z
    .number()
    .min(-180)
    .max(180)
    .optional(),
});

export const editOutletSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Nama outlet wajib diisi"),

  streetDetail: z
    .string()
    .trim()
    .min(1, "Alamat outlet wajib tersedia"),

  latitude: z
    .number()
    .min(-90)
    .max(90),

  longitude: z
    .number()
    .min(-180)
    .max(180),
});

export const previewLocationSchema = z.object({
  provinceName: z.string().min(1),
  cityName: z.string().min(1),
  districtName: z.string().min(1),
  subDistrictName: z.string().min(1),
  zipCode: z.string().regex(/^\d{5}$/),
  streetDetail: z
    .string()
    .trim()
    .min(10),
});

export const filterOutletSchema = z.object({
  search: z.string().trim().default(""),
  sortBy: z.enum(["name", "createdAt"]).default("createdAt"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

export type OutletFormValues = z.infer<typeof outletSchema>;

export type FilterOutletValues = z.infer<
  typeof filterOutletSchema
>;
````

## File: src/lib/validation/worker.validation.ts
````typescript
import zod from "zod/v4";

export const workerQuantitySchema = zod.object({
  items: zod
    .array(
      zod.object({
        orderItemId: zod.uuid("ID item tidak valid!"),

        submittedQuantity: zod
          .number({
            error: "Jumlah wajib diisi",
          })
          .int({
            error: "Input harus berupa bilangan bulat!",
          })
          .nonnegative({
            error: "Input tidak boleh negatif!",
          }),
      }),
    )
    .min(1, "Minimal input 1 items!")
    .refine((items) => new Set(items.map((item) => item.orderItemId)).size === items.length, {
      message: "Order item tidak boleh duplikat!",
    }),
});
````

## File: src/lib/safe-redirect.ts
````typescript
import * as z from "zod"

const FALLBACK_PATH = "/beranda";

export const safeRedirectPathSchema = z
  .string()
  .max(500)
  .refine((val) => val.startsWith("/"), { message: "URL harus path relatif" })
  .refine((val) => !val.startsWith("//") && !val.startsWith("/\\"), {
    message: "URL tidak boleh protocol-relative",
  })
  .refine((val) => !/^\/[a-z][a-z0-9+.-]*:/i.test(val) && !val.includes("://"), {
    message: "URL tidak boleh mengandung skema lain",
  });

export function getSafeRedirectPath(intendedUrl: string | null): string {
  if (!intendedUrl) return FALLBACK_PATH;
  const result = safeRedirectPathSchema.safeParse(intendedUrl);
  return result.success ? result.data : FALLBACK_PATH;
}
````

## File: src/types/api/complaint.types.ts
````typescript
import { ComplaintCategory, ComplaintStatus, SortOrder } from ".";

export type ComplaintSortBy =
  | "createdAt"
  | "decidedAt";

export type ComplaintQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: ComplaintStatus;
  category?: ComplaintCategory;
  startDate?: string;
  endDate?: string;
  sortBy?: ComplaintSortBy;
  sortOrder?: SortOrder;
};

export type ComplaintListCustomer = {
  id: string;
  name: string;
  email: string;
};

export type ComplaintListOrder = {
  id: string;
  orderCode: string;
  outletId: string;
};

export type ComplaintHandledBy = {
  id: string;
  name: string;
};

export type ComplaintListItem = {
  id: string;
  orderId: string;
  customerId: string;
  category: ComplaintCategory;
  description: string;
  proofPhotoUrl: string;
  status: ComplaintStatus;
  handledBy: string | null;
  responseNote: string | null;
  decidedAt: string | null;
  createdAt: string;

  customer: ComplaintListCustomer;
  order: ComplaintListOrder;
  handledByUser: ComplaintHandledBy | null;
};

export type ComplaintDetailCustomer = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
};

export type ComplaintDetailOutlet = {
  id: string;
  name: string;
};

export type ComplaintDetailLaundryItem = {
  id: string;
  name: string;
};

export type ComplaintDetailOrderItem = {
  id: string;
  laundryItemId: string;
  quantity: number;
  laundryItem: ComplaintDetailLaundryItem;
};

export type ComplaintDetailBill = {
  id: string;
  weightKg: string;
  totalAmount: string;
  paymentStatus: "UNPAID" | "PAID";
};

export type ComplaintDetailOrder = {
  id: string;
  orderCode: string;
  outlet: ComplaintDetailOutlet;
  orderItems: ComplaintDetailOrderItem[];
  bill: ComplaintDetailBill | null;
};

export type ComplaintDetail = {
  id: string;
  orderId: string;
  customerId: string;
  category: ComplaintCategory;
  description: string;
  proofPhotoUrl: string;
  status: ComplaintStatus;
  handledBy: string | null;
  responseNote: string | null;
  decidedAt: string | null;
  createdAt: string;

  customer: ComplaintDetailCustomer;
  order: ComplaintDetailOrder;
  handledByUser: ComplaintHandledBy | null;
};

export type DecideComplaintPayload = {
  decision: "APPROVED" | "REJECTED";
  responseNote: string;
};
````

## File: src/types/api/dashboard.types.ts
````typescript
import { CustomerStatus, StationType } from ".";

export type DashboardSummary = {
  totalOrders: number;
  activeOrders: number;
  completedOrders: number;
  totalRevenue: number;
};

export type RevenueTrendItem = {
  date: string;
  revenue: number;
};

export type OrderOverviewItem = {
  status: CustomerStatus;
  total: number;
};

export type RecentOrderItem = {
  id: string;
  orderCode: string;
  customerName: string;
  status: CustomerStatus;
  createdAt: string;
};

export type PendingReceiveItem = {
  id: string;
  orderCode: string;
  customerName: string;
  createdAt: string;
};

export type PendingBypassItem = {
  id: string;
  orderId: string;
  orderCode: string;
  workerName: string;
  stationType: StationType;
  createdAt: string;
};

export type DashboardResponse = {
  summary: DashboardSummary;
  revenueTrend: RevenueTrendItem[];
  orderOverview: OrderOverviewItem[];
  recentOrders: RecentOrderItem[];

  pendingReceive: {
    total: number;
    items: PendingReceiveItem[];
  };

  pendingBypass: {
    total: number;
    items: PendingBypassItem[];
  };
};

export type DashboardQuery = {
  outletId?: string;
};
````

## File: src/types/api/outlet.types.ts
````typescript
export type Outlet = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export type OutletQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};
export type CreateOutletPayload = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type UpdateOutletPayload = {
  name?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
};
````

## File: src/types/api/pricing.types.ts
````typescript
import { SortOrder } from ".";

export type DecimalString = string;

export type LaundryPricing = {
  id: string;
  pricePerKg: DecimalString;
  deletedAt: string | null;
  createdAt: string;
};

export type CreateLaundryPricingPayload = {
  pricePerKg: number;
};

export type UpdateLaundryPricingPayload = {
  pricePerKg: number;
};

export type ShippingRateSortBy =
  | "price"
  | "maxDistanceMeters"
  | "createdAt";

export type ShippingRateQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: ShippingRateSortBy;
  sortOrder?: SortOrder;
};

export type ShippingRate = {
  id: string;
  maxDistanceMeters: number;
  price: DecimalString;
  deletedAt: string | null;
  createdAt: string;
};

export type CreateShippingRatePayload = {
  maxDistanceMeters: number;
  price: number;
};

export type UpdateShippingRatePayload = {
  maxDistanceMeters?: number;
  price?: number;
};
````

## File: src/types/api/report.types.ts
````typescript
import { EmployeeRole, PaginatedResponse, SortOrder, StationType } from ".";

export type SalesPeriod = "DAY" | "MONTH" | "YEAR";
export type SalesQuery = {
  period: SalesPeriod;
  date?: string;
  month?: number;
  year?: number;
  outletId?: string;
};

export type SalesSummary = {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  totalWeightKg: number;
  uniqueCustomers: number;
};

export type SalesComparison = {
  previousPeriod: {
    startDate: string;
    endDate: string;
    totalRevenue: number;
    totalOrders: number;
    averageOrderValue: number;
  };
  revenueChangePercent: number | null;
  orderChangePercent: number | null;
  averageOrderValueChangePercent: number | null;
};

export type SalesTrendItem = {
  label: string;
  revenue: number;
  orders: number;
  totalWeightKg: number;
};

export type SalesBreakdownItem = {
  outletId: string;
  outletName: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
  totalWeightKg: number;
  uniqueCustomers: number;
  revenueSharePercent: number;
};

export type SalesHighlight = {
  outletId: string;
  outletName: string;
  revenue: number;
  orders: number;
} | null;

export type SalesReport = {
  period: { type: SalesPeriod; startDate: string; endDate: string };
  summary: SalesSummary;
  comparison: SalesComparison;
  trend: SalesTrendItem[];
  breakdown: SalesBreakdownItem[];
  highlights: { topOutlet: SalesHighlight; peak: SalesTrendItem | null };
};
export type EmployeePerformanceSortBy = "completedJobs" | "name";


export type EmployeePerformanceQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: EmployeeRole;
  stationType?: StationType;
  startDate?: string;
  endDate?: string;
  outletId?: string;
  sortBy?: EmployeePerformanceSortBy;
  sortOrder?: SortOrder;
};

export type EmployeePerformanceItem = {
  employeeId: string;
  employeeName: string;
  role: EmployeeRole;
  completedJobs: number;
  pickupJobs: number;
  deliveryJobs: number;
  washingJobs: number;
  ironingJobs: number;
  packingJobs: number;
  averageCompletionMinutes: number | null;
};

export type EmployeePerformanceSummary = {
  totalEmployees: number;
  totalCompletedJobs: number;
  averageJobsPerEmployee: number;
  workerCompletedJobs: number;
  driverCompletedJobs: number;
  topPerformer: {
    employeeId: string;
    employeeName: string;
    role: EmployeeRole;
    completedJobs: number;
  } | null;
};

export type EmployeePerformanceData = {
  summary: EmployeePerformanceSummary;
  data: EmployeePerformanceItem[];
};

export type PaginatedEmployeePerformanceResponse = {
  success: boolean;
  message: string;
  data: EmployeePerformanceData;
  meta: PaginatedResponse<null>["meta"];
};
````

## File: src/app/(auth)/lupa-password/page.tsx
````typescript
"use client";

import { ForgotPasswordForm } from "@/components/authCustomer/ForgotPasswordForm";
import {
  Anchor,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();

  function handleBack() {
    router.push("/login");
  }

  return (
    <Center
      mih="100vh"
      px={{ base: 16, sm: 24 }}
      py={{ base: 24, sm: 40 }}
    >
      <Stack
        w="100%"
        maw={420}
        gap="sm"
      >
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--color-text-primary)"
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Group gap={4}>
            <IconChevronLeft size={16} stroke={2} />
            Kembali
          </Group>
        </Anchor>

        <Paper
          w="100%"
          p={{ base: 24, sm: 32 }}
          radius="md"
          withBorder
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <div>
              <Title
                order={3}
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                Lupa Kata Sandi?
              </Title>

              <Text
                size="sm"
                c="var(--color-text-secondary)"
              >
                Jangan khawatir! Masukkan email kamu di bawah untuk mengatur
                ulang kata sandi.
              </Text>
            </div>

            <ForgotPasswordForm />
          </Stack>
        </Paper>
      </Stack>
    </Center>
  );
}
````

## File: src/app/(customer)/pesanan/[id]/invoice/page.tsx
````typescript
import { Box} from "@mantine/core";
import { BillDetailView } from "@/components/customer/order/billDetailView";

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  
  return (
    <Box mx="auto" py={{ base: 16, sm: 32 }}>
      <BillDetailView id={id} />
    </Box>
  );
}
````

## File: src/app/(customer)/pesanan/[id]/page.tsx
````typescript
import { Box } from "@mantine/core";
import { OrderDetailView } from "@/components/customer/order/orderDetail";


export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  
  
  return (
    <Box mx="auto" py={{ base: 16, sm: 32 }}>
      <OrderDetailView id={id} />
    </Box>
  );
}
````

## File: src/app/(customer)/profil/page.tsx
````typescript
"use client";

import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Divider,
  Flex,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconCheck,
  IconPencil,
  IconX,
  IconUser,
  IconMail,
  IconPhone,
  IconChevronLeft,
} from "@tabler/icons-react";
import Link from "next/link";
import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter, useSearchParams } from "next/navigation";



export default function ProfilPage({
  fallbackHref = "/",
}: {
  fallbackHref?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  const { user } = useAuthStore();

  if (!user) return null;

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";


  function handleBack() {
    if (from) {
      router.replace(from);
      return;
    }

    router.back();
  }

  return (
    <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>
      <Flex direction="column" align="center" ta="center">
        <Title order={2} style={{ color: "var(--color-text-primary)" }}>
          Profil Saya
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Data personal dan informasi akun kamu.
        </Text>
      </Flex>
      {/* Card ringkasan — banner + avatar + aksi */}
      <Paper withBorder radius="md" style={{ overflow: "hidden" }}>
        <div
          style={{
            height: 88,
            backgroundImage:
              "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
          }}
        />

        <Stack align="center" gap={6} px="xl" pb="xl" mt={-44}>
          <Avatar size={88} radius="xl" src={user.profilePhotoUrl || undefined}>
            {initials}
          </Avatar>

          <Text fw={600} size="lg" mt={4}>
            {user.name}
          </Text>
          <Text size="sm" c="var(--color-text-secondary)">
            {user.email}
          </Text>

          {user.isEmailVerified ? (
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconCheck size={12} />}
              style={{
                backgroundColor: "var(--color-success-light)",
                color: "var(--color-success)",
              }}
              mt={4}
            >
              Email terverifikasi
            </Badge>
          ) : (
            <Badge
              size="sm"
              variant="light"
              leftSection={<IconX size={12} />}
              style={{
                backgroundColor: "var(--color-error-light)",
                color: "var(--color-error)",
              }}
              mt={4}
            >
              Belum terverifikasi
            </Badge>
          )}

          <Group grow w="100%" gap="sm" mt="lg">
            <Button
              component={Link}
              href="/profil/edit"
              leftSection={<IconPencil size={16} />}
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-text-on-accent)",
              }}
            >
              Edit Profil
            </Button>
          </Group>
        </Stack>
      </Paper>

      {/* Card info akun */}
      <Paper withBorder radius="md" p="lg">
        <Title order={4} mb="lg">
          Informasi Akun
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          <ProfileField
            icon={IconUser}
            label="Nama Lengkap"
            value={user.name}
          />
          <ProfileField icon={IconMail} label="Email" value={user.email} />
          <ProfileField
            icon={IconPhone}
            label="Nomor Telepon"
            value={user.phone || "Belum diisi"}
          />
        </SimpleGrid>

        <Divider my="lg" />

        <Text fw={500} size="sm">
          Keamanan Akun
        </Text>
        <Text size="xs" c="var(--color-text-secondary)" mt={2}>
          Terakhir diperbarui melalui halaman edit profil.
        </Text>
      </Paper>
    </Stack>
  );
}

function ProfileField({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  value: string;
}) {
  return (
    <Group gap="sm" align="flex-start" wrap="nowrap">
      <ThemeIcon
        size={36}
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
        <Text size="xs" c="var(--color-text-secondary)">
          {label}
        </Text>
        <Text size="sm" fw={500} truncate>
          {value}
        </Text>
      </div>
    </Group>
  );
}
````

## File: src/app/internal/(back-office)/super-admin/item-laundry/page.tsx
````typescript
import { LaundryItemContent } from "@/components/back-office/laundry-item/LaundryItemContent";

export default function Page() {
  return <LaundryItemContent />;
}
````

## File: src/app/internal/(back-office)/super-admin/laporan/penjualan/page.tsx
````typescript
import { SalesReportContent } from "@/components/back-office/laporan/penjualan/SalesReportContent";
export default function Page() {
  return <SalesReportContent role="SUPER_ADMIN" />;
}
````

## File: src/app/internal/(back-office)/super-admin/layout.tsx
````typescript
import { BackOfficeAppShell } from "@/components/back-office/shared/BackOfficeAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
// import { requireRole } from "@/lib/auth/AuthGateCustomer";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // await requireRole(["SUPER_ADMIN"]);
  return (
    <AuthGateEmployee allowedRoles={["SUPER_ADMIN"]}>
      <BackOfficeAppShell role="SUPER_ADMIN">{children}</BackOfficeAppShell>
    </AuthGateEmployee>
  );
}
````

## File: src/app/internal/(field-ops)/driver/tugas/aktif/page.tsx
````typescript
"use client";

import { DriverActiveSummary } from "@/components/field-ops/driver/DriverActiveSummary";
import { DriverActiveTaskView } from "@/components/field-ops/driver/DriverActiveTaskView";
import { AsyncStateView } from "@/components/ui/AsyncStateView";

import { useActive, useCompleteDelivery, usePickup, useStart } from "@/hooks/driver.hooks";

import { Button, Card, Skeleton, Stack } from "@mantine/core";

import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  const activeQuery = useActive();

  const startMutation = useStart();
  const pickupMutation = usePickup();
  const completeMutation = useCompleteDelivery();

  return (
    <Stack gap="md">
      <Button component={Link} href="/internal/driver/tugas" variant="subtle" leftSection={<IconArrowLeft size={16} />} w="fit-content">
        Kembali ke Daftar Tugas
      </Button>

      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tugas tersedia terlebih dahulu."
        skeleton={
          <Stack gap="md">
            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={24} width="45%" />
                <Skeleton height={1} />
                <Skeleton height={20} />
              </Stack>
            </Card>

            <Card withBorder radius="lg" p="lg">
              <Stack gap="md">
                <Skeleton height={24} width="40%" />
                <Skeleton height={20} width="60%" />
                <Skeleton height={20} />
                <Skeleton height={40} />
              </Stack>
            </Card>
          </Stack>
        }
      >
        {(assignment) => (
          <Stack gap="md">
            <DriverActiveSummary assignment={assignment} />

            <DriverActiveTaskView
              assignment={assignment}
              isStarting={startMutation.isPending}
              isPickingUp={pickupMutation.isPending}
              onStart={() => {
                startMutation.mutate(assignment.id);
              }}
              onPickup={() => {
                pickupMutation.mutate(assignment.id);
              }}
              isCompleting={completeMutation.isPending}
              onComplete={() => {
                completeMutation.mutate(assignment.id);
              }}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/app/internal/(field-ops)/driver/tugas/page.tsx
````typescript
"use client";

import { DriverAvailableAssignments } from "@/components/field-ops/driver/DriverAvailableAssignment";
import { Stack, Title } from "@mantine/core";

export default function Page() {
  return (
    <Stack gap="md">
      <Title order={3}>Tugas Tersedia</Title>
      <DriverAvailableAssignments />
    </Stack>
  );
}
````

## File: src/app/internal/(field-ops)/worker/riwayat/page.tsx
````typescript
import { WorkerHistory } from "@/components/field-ops/worker/WorkerHistory";

export default function Page() {
  return <WorkerHistory />;
}
````

## File: src/app/internal/(field-ops)/worker/tugas/aktif/page.tsx
````typescript
"use client";

import { WorkerActiveSummary } from "@/components/field-ops/worker/WorkerActiveSummary";
import { WorkerActiveTaskView } from "@/components/field-ops/worker/WorkerActiveTaskView";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useActive, useComplete, useRequestBypass, useValidateQuantities } from "@/hooks/worker.hooks";
import { ApiError } from "@/lib/api/axios";
import { Button, Card, Skeleton, Stack } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Page() {
  const activeQuery = useActive();

  const validateMutation = useValidateQuantities();
  const bypassMutation = useRequestBypass();
  const completeMutation = useComplete();

  const validationErrorCode = validateMutation.error instanceof ApiError ? validateMutation.error.code : null;

  return (
    <Stack>
      <Button component={Link} href="/internal/worker/tugas" variant="subtle" leftSection={<IconArrowLeft size={16} />} w="fit-content">
        Kembali ke Daftar Tugas
      </Button>
      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tersedia terlebih dahulu."
        skeleton={
          <Card withBorder shadow="sm" radius="lg" p="lg">
            <Stack gap="md">
              <Skeleton height={24} width="45%" />
              <Skeleton height={1} />
              <Skeleton height={20} />
              <Skeleton height={20} />
              <Skeleton height={120} />
            </Stack>
          </Card>
        }
      >
        {(assignment) => (
          <Stack gap={"md"}>
            <WorkerActiveSummary assignment={assignment} />
            <WorkerActiveTaskView
              assignment={assignment}
              isValidating={validateMutation.isPending}
              isRequestingBypass={bypassMutation.isPending}
              isCompleting={completeMutation.isPending}
              validationErrorCode={validationErrorCode}
              onValidate={(payload) => {
                validateMutation.mutate({
                  assignmentId: assignment.id,
                  payload,
                });
              }}
              onRequestBypass={(payload) => {
                bypassMutation.mutate(
                  {
                    assignmentId: assignment.id,
                    payload,
                  },
                  {
                    onSuccess: () => {
                      validateMutation.reset();
                    },
                  },
                );
              }}
              onComplete={() => {
                completeMutation.mutate(assignment.id);
              }}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/app/internal/(field-ops)/worker/tugas/page.tsx
````typescript
"use client";

import { WorkerAvailableAssignments } from "@/components/field-ops/worker/WorkerAvailableAssignment";
import { Stack, Title } from "@mantine/core";

export default function Page() {
  return (
    <Stack gap="md">
      <Title order={3}>Tugas Tersedia</Title>
      <WorkerAvailableAssignments />
    </Stack>
  );
}
````

## File: src/app/internal/(field-ops)/worker/page.tsx
````typescript
"use client";
import { FieldOpsHome } from "@/components/field-ops/shared/FieldOpsHome";
import { WorkerActiveSummary } from "@/components/field-ops/worker/WorkerActiveSummary";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useActive } from "@/hooks/worker.hooks";
import { Button, Card, Skeleton, Stack } from "@mantine/core";
import Link from "next/link";

export default function Page() {
  const activeQuery = useActive();
  return (
    <FieldOpsHome>
      <AsyncStateView
        isLoading={activeQuery.isPending}
        isError={activeQuery.isError}
        error={activeQuery.error}
        data={activeQuery.data}
        onRetry={() => activeQuery.refetch()}
        emptyTitle="Belum ada tugas aktif"
        emptyDescription="Ambil tugas dari daftar tersedia terlebih dahulu."
        skeleton={
          <Card withBorder radius="lg" p="lg">
            <Stack gap="md">
              <Skeleton height={24} width="45%" />
              <Skeleton height={20} />
              <Skeleton height={20} />
            </Stack>
          </Card>
        }
      >
        {(assignment) => (
          <Stack gap="sm">
            <WorkerActiveSummary assignment={assignment} />

            <Button component={Link} href="/internal/worker/tugas/aktif" variant="light">
              Lihat Tugas Aktif
            </Button>
          </Stack>
        )}
      </AsyncStateView>
    </FieldOpsHome>
  );
}
````

## File: src/app/internal/layout.tsx
````typescript
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthGateEmployee allowedRoles={["DRIVER", "OUTLET_ADMIN", "SUPER_ADMIN", "WORKER"]}>{children}</AuthGateEmployee>;
}
````

## File: src/components/back-office/dashboard/DashboardContent.tsx
````typescript
"use client";

import { Grid, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useDashboard } from "@/hooks/dashboard.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { DashboardSummary } from "./DashboardSummary";
import { RevenueTrendChart } from "./RevenueTrendChart";
import { OrderOverview } from "./OrderOverview";
import { RecentOrders } from "./RecentOrders";
import { PendingReceive } from "./PendingReceive";
import { PendingBypass } from "./PendingBypass";
import DashboardSkeleton from "./DashboardSkeleton";

type Props = {
  title: string;
  description: string;
  role: string;
};

export function DashboardContent({
  title,
  description,
  role,
}: Props) {
  const dashboard = useDashboard();
  const router = useRouter();

  const isOutletAdmin = role === "OUTLET_ADMIN";

  const handleOrderClick = (orderId: string) => {
    router.push(
      `${isOutletAdmin ? "/internal/outlet-admin" : "/internal/super-admin"}/pesanan/${orderId}`,
    );
  };

  const handlePendingReceiveClick = (orderId: string) => {
    if (isOutletAdmin) {
      router.push("/internal/outlet-admin/penerimaan");
      return;
    }

    router.push(`/internal/super-admin/pesanan/${orderId}`);
  };

  const handleBypassClick = (bypassId: string, orderId: string) => {
    if (isOutletAdmin) {
      router.push(`/internal/outlet-admin/bypass/${bypassId}`);
      return;
    }

    router.push(`/internal/super-admin/pesanan/${orderId}`);
  };

  const handleOrdersClick = () => {
    router.push(
      isOutletAdmin
        ? "/internal/outlet-admin/pesanan"
        : "/internal/super-admin/pesanan",
    );
  };

  const handleReceiveClick = () => {
    if (isOutletAdmin) {
      router.push("/internal/outlet-admin/penerimaan");
    }
  };

  const handleBypassListClick = () => {
    if (isOutletAdmin) {
      router.push("/internal/outlet-admin/bypass");
    }
  };

  return (
    <Stack gap="md">
      <PageHeader title={title} description={description} />

      <AsyncStateView
        isLoading={dashboard.isLoading}
        isError={dashboard.isError}
        error={dashboard.error}
        data={dashboard.data}
        onRetry={() => dashboard.refetch()}
        skeleton={<DashboardSkeleton />}
      >
        {(data) => (
          <Stack gap="md">
            <DashboardSummary summary={data.summary} />

            <Grid gap="md">
              <Grid.Col span={{ base: 12, lg: 8 }}>
                <RevenueTrendChart data={data.revenueTrend} />
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 4 }}>
                <OrderOverview data={data.orderOverview} />
              </Grid.Col>
            </Grid>

            <Grid gap="md">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <RecentOrders
                  data={data.recentOrders}
                  onSelect={handleOrderClick}
                  onViewAll={handleOrdersClick}
                />
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Stack gap="md">
                  <PendingReceive
                    data={data.pendingReceive}
                    onSelect={handlePendingReceiveClick}
                    onViewAll={handleReceiveClick}
                  />

                  <PendingBypass
                    data={data.pendingBypass}
                    onSelect={handleBypassClick}
                    onViewAll={handleBypassListClick}
                  />
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/back-office/employee/EmployeeContent.tsx
````typescript
"use client";

import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useEmployeeHooks } from "@/hooks/employee.hooks";
import { EmployeeFilters } from "./EmployeeFilters";
import { EmployeeTable } from "./EmployeeTable";
import TableSkeleton from "../shared/TableSkeleton";

export function EmployeeContent() {
  const { router, filters, sortBy, sortOrder, outlets, handleFilterChange, setSortBy, setPage, setSortOrder, handleReset, employees, setPageSize } =
    useEmployeeHooks();
  return (
    <Stack gap="lg">
      <PageHeader
        title="Karyawan"
        description="Kelola akun internal dan penempatan karyawan."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={() => router.push("/internal/super-admin/karyawan/undang")}>
            Undang Karyawan
          </Button>
        }
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <EmployeeFilters
            filters={filters}
            sortBy={sortBy}
            sortOrder={sortOrder}
            outlets={outlets.data?.data ?? []}
            onChange={handleFilterChange}
            onSortByChange={(value) => {
              setSortBy(value);
              setPage(1);
            }}
            onSortOrderChange={(value) => {
              setSortOrder(value);
              setPage(1);
            }}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={employees.isLoading}
            isError={employees.isError}
            error={employees.error}
            data={employees.data}
            onRetry={() => employees.refetch()}
            isEmpty={(response) => response.data.length === 0}
            emptyTitle="Karyawan tidak ditemukan"
            emptyDescription="Tidak ada karyawan yang sesuai dengan filter yang dipilih."
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <EmployeeTable
                data={response.data}
                meta={response.meta}
                onPageChange={setPage}
                onPageSizeChange={(value) => {
                  setPageSize(value);
                  setPage(1);
                }}
                onView={(employeeId) => router.push(`/internal/super-admin/karyawan/${employeeId}`)}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
    </Stack>
  );
}
````

## File: src/components/back-office/employee/EmployeeDetailContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useEmployee } from "@/hooks/employee.hooks";
import { EmployeeActions } from "./EmployeeActions";
import { EmployeeDetailHeader } from "./EmployeeDetailHeader";
import { EmployeeInformation } from "./EmployeeInformation";
import { EmployeeOutlet } from "./EmployeeOutlet";
import { EmployeeStatus } from "./EmployeeStatus";

type Props = {
  userId: string;
};

export function EmployeeDetailContent({ userId }: Props) {
  const employeeQuery = useEmployee(userId);

  return (
    <AsyncStateView
      isLoading={employeeQuery.isLoading}
      isError={employeeQuery.isError}
      error={employeeQuery.error}
      data={employeeQuery.data}
      onRetry={() => employeeQuery.refetch()}
      emptyTitle="Karyawan tidak ditemukan"
      emptyDescription="Data karyawan yang kamu cari tidak tersedia atau mungkin sudah dihapus."
    >
      {(employee) => (
        <Stack gap="lg">
          <EmployeeDetailHeader employee={employee} />

          <EmployeeInformation employee={employee} />

          <EmployeeStatus employee={employee} />

          <EmployeeOutlet employee={employee} />

          <EmployeeActions employee={employee} />
        </Stack>
      )}
    </AsyncStateView>
  );
}
````

## File: src/components/back-office/employee/EmployeeOutlet.tsx
````typescript
"use client";

import { useState } from "react";
import { ActionIcon, Button, Group, Modal, Paper, Select, Stack, Text, Tooltip } from "@mantine/core";
import { IconBuildingStore, IconEdit } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useAssignEmployee } from "@/hooks/employee.hooks";
import { Employee } from "@/types/api/employee.types";
import { useOutlets } from "@/hooks/outlet.hooks";

type Props = {
  employee: Employee;
};

export function EmployeeOutlet({ employee }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [outletId, setOutletId] = useState<string | null>(employee.currentOutlet?.id ?? null);
  const { data: outletsResponse } = useOutlets({
    page: 1,
    pageSize: 50,
    sortBy: "name",
    sortOrder: "asc",
  });

  const assignEmployee = useAssignEmployee();
  const outlets = outletsResponse?.data ?? [];

  const outletOptions = outlets.map((outlet) => ({
    value: outlet.id,
    label: outlet.name,
  }));

  const canManageOutlet = employee.accountStatus === "ACTIVE" && employee.workStatus !== "BUSY";

  const getDisabledReason = () => {
    if (employee.accountStatus === "INVITED") {
      return "Karyawan harus mengaktifkan akun terlebih dahulu.";
    }

    if (employee.accountStatus === "INACTIVE") {
      return "Aktifkan akun karyawan terlebih dahulu.";
    }

    if (employee.workStatus === "BUSY") {
      return "Karyawan sedang memiliki pekerjaan aktif.";
    }

    return null;
  };

  const disabledReason = getDisabledReason();

  const handleOpen = () => {
    if (!canManageOutlet) return;

    setOutletId(employee.currentOutlet?.id ?? null);

    open();
  };

  const handleAssign = () => {
    if (!outletId) return;

    assignEmployee.mutate(
      {
        employeeId: employee.id,
        outletId,
      },
      {
        onSuccess: () => {
          close();
        },
      },
    );
  };

  return (
    <>
      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <Group justify="space-between">
            <Group gap="sm">
              <IconBuildingStore size={20} />

              <div>
                <Text fw={600}>Penempatan Outlet</Text>

                <Text size="sm" c="var(--color-text-secondary)">
                  Outlet tempat karyawan ditempatkan saat ini
                </Text>
              </div>
            </Group>

            <Tooltip label={disabledReason} disabled={!disabledReason}>
              <ActionIcon variant="subtle" color="rinseBlue" onClick={handleOpen} disabled={!canManageOutlet} aria-label="Kelola penempatan outlet">
                <IconEdit size={18} />
              </ActionIcon>
            </Tooltip>
          </Group>

          <div>
            <Text size="xs" c="var(--color-text-secondary)">
              Outlet Saat Ini
            </Text>

            <Text fw={500}>{employee.currentOutlet?.name ?? "Belum ditempatkan"}</Text>
          </div>

          {!canManageOutlet && disabledReason && (
            <Text size="sm" c="var(--color-text-secondary)">
              {disabledReason}
            </Text>
          )}
        </Stack>
      </Paper>

      <Modal
        opened={opened}
        onClose={() => {
          if (!assignEmployee.isPending) {
            close();
          }
        }}
        title={employee.currentOutlet ? "Pindahkan Outlet" : "Tempatkan ke Outlet"}
        centered
        closeOnClickOutside={!assignEmployee.isPending}
        closeOnEscape={!assignEmployee.isPending}
      >
        <Stack gap="md">
          <Text size="sm">{employee.currentOutlet ? "Pilih outlet baru untuk karyawan ini." : "Pilih outlet tempat karyawan akan ditempatkan."}</Text>

          <Select
            label="Outlet"
            placeholder="Pilih outlet"
            searchable
            data={outletOptions}
            value={outletId}
            onChange={setOutletId}
            disabled={assignEmployee.isPending}
            nothingFoundMessage="Outlet tidak ditemukan"
          />

          <Group justify="flex-end" mt="sm">
            <Button variant="default" onClick={close} disabled={assignEmployee.isPending}>
              Batal
            </Button>

            <Button onClick={handleAssign} loading={assignEmployee.isPending} disabled={!outletId}>
              {employee.currentOutlet ? "Pindahkan" : "Tempatkan"}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
````

## File: src/components/back-office/employee/EmployeeStatus.tsx
````typescript
import { Badge, Group, Paper, Stack, Text } from "@mantine/core";
import { Employee } from "@/types/api/employee.types";

type Props = {
  employee: Employee;
};

const ACCOUNT_STATUS = {
  INVITED: {
    label: "Diundang",
    color: "yellow",
  },
  ACTIVE: {
    label: "Aktif",
    color: "green",
  },
  INACTIVE: {
    label: "Tidak Aktif",
    color: "gray",
  },
} as const;

const WORK_STATUS = {
  OFF_DUTY: {
    label: "Off Duty",
    color: "gray",
  },
  AVAILABLE: {
    label: "Tersedia",
    color: "blue",
  },
  BUSY: {
    label: "Sibuk",
    color: "orange",
  },
} as const;

export function EmployeeStatus({ employee }: Props) {
  const account = ACCOUNT_STATUS[employee.accountStatus] ?? {
    label: employee.accountStatus ?? "-",
    color: "gray",
  };

  const work =
    employee.workStatus && WORK_STATUS[employee.workStatus]
      ? WORK_STATUS[employee.workStatus]
      : {
          label: "-",
          color: "gray",
        };

  return (
    <Group grow align="stretch">
      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="xs">
          <Text size="sm" c="var(--color-text-secondary)">
            Status Akun
          </Text>

          <Badge w="fit-content" color={account.color} variant="light">
            {account.label}
          </Badge>
        </Stack>
      </Paper>

      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="xs">
          <Text size="sm" c="var(--color-text-secondary)">
            Status Kerja
          </Text>

          <Badge w="fit-content" color={work.color} variant="light">
            {work.label}
          </Badge>
        </Stack>
      </Paper>
    </Group>
  );
}
````

## File: src/components/back-office/employee/EmployeeTable.tsx
````typescript
"use client";

import { ActionIcon, Badge, Group, Table, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { Employee } from "@/types/api/employee.types";
import { PaginatedResponse } from "@/types/api";

type Props = {
  data: Employee[];
  meta: PaginatedResponse<Employee>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onView: (employeeId: string) => void;
};

const ROLE_LABEL: Record<Employee["role"], string> = {
  OUTLET_ADMIN: "Outlet Admin",
  WORKER: "Worker",
  DRIVER: "Driver",
};

const ACCOUNT_STATUS: Record<Employee["accountStatus"], { label: string; color: string }> = {
  INVITED: {
    label: "Diundang",
    color: "yellow",
  },
  ACTIVE: {
    label: "Aktif",
    color: "green",
  },
  INACTIVE: {
    label: "Tidak Aktif",
    color: "gray",
  },
};

const WORK_STATUS = {
  OFF_DUTY: {
    label: "Off Duty",
    color: "gray",
  },
  AVAILABLE: {
    label: "Tersedia",
    color: "blue",
  },
  BUSY: {
    label: "Sibuk",
    color: "orange",
  },
} as const;

export function EmployeeTable({ data, meta, onPageChange, onPageSizeChange, onView }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Role</Table.Th>
              <Table.Th>Outlet</Table.Th>
              <Table.Th>Status Akun</Table.Th>
              <Table.Th>Status Kerja</Table.Th>
              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((employee) => {
              const account = ACCOUNT_STATUS[employee.accountStatus];

              const work = employee.workStatus ? WORK_STATUS[employee.workStatus] : null;

              return (
                <Table.Tr key={employee.id}>
                  <Table.Td w={250}>
                    <Text size="sm" fw={600} c="var(--color-text-primary)">
                      {employee.name}
                    </Text>
                  </Table.Td>

                  <Table.Td w={300}>
                    <Text size="sm" c="var(--color-text-secondary)">
                      {employee.email}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{ROLE_LABEL[employee.role]}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm">{employee.currentOutlet?.name ?? "-"}</Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="light" color={account.color}>
                      {account.label}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {work ? (
                      <Badge variant="light" color={work.color}>
                        {work.label}
                      </Badge>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        -
                      </Text>
                    )}
                  </Table.Td>

                  <Table.Td ta="right">
                    <Group gap={4} justify="flex-end">
                      <ActionIcon variant="subtle" color="rinseBlue" aria-label={`Lihat ${employee.name}`} onClick={() => onView(employee.id)}>
                        <IconChevronRight size={18} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/laporan/penjualan/SalesReportContent.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useSalesHooks } from "@/hooks/report.hooks";
import { SalesReportFilters } from "./SalesReportFilters";
import { SalesReportSummary } from "./SalesReportSummary";
import { PageHeader } from "@/components/ui/PageHeader";
import { SalesReportBreakdown } from "./SalesReportBreakdown";
import { SalesTrend } from "./SalesTrend";
import { SalesReportSkeleton } from "./SalesReportSkeleton";

export function SalesReportContent({role}: {role: string}) {
  const {
    query,
    outletOptions,
    handlePeriodChange,
    handleDateChange,
    handleMonthChange,
    handleYearChange,
    handleOutletChange,
    isLoading,
    isError,
    error,
    data,
    refetch,
  } = useSalesHooks();
  const isSuperAdmin = role === "SUPER_ADMIN"
  return (
    <Stack gap="lg">
      <PageHeader title="Laporan Penjualan" description="Monitor laporan penjualan dalam sistem." />

      <SalesReportFilters
        query={query}
        outletOptions={outletOptions}
        isSuperAdmin={isSuperAdmin}
        onPeriodChange={handlePeriodChange}
        onDateChange={handleDateChange}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
        onOutletChange={handleOutletChange}
      />

      <AsyncStateView isLoading={isLoading} isError={isError} error={error} data={data} onRetry={refetch} skeleton={<SalesReportSkeleton />}>
        {(report) => (
          <Stack gap="lg">
            <SalesReportSummary report={report} />
            <SalesTrend data={report.trend} period={report.period.type} />
            {isSuperAdmin && <SalesReportBreakdown data={report.breakdown} />}
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/back-office/laporan/penjualan/SalesReportFilters.tsx
````typescript
"use client";

import { Group, Paper, Select, Stack } from "@mantine/core";
import { SalesPeriod, SalesQuery } from "@/types/api/report.types";
import { DatePickerInput, MonthPickerInput, YearPickerInput } from "@mantine/dates";

type OutletOption = {
  value: string;
  label: string;
};

type Props = {
  query: SalesQuery;
  outletOptions: OutletOption[];
  isSuperAdmin: boolean;
  onPeriodChange: (period: SalesPeriod) => void;
  onDateChange: (date: string | null) => void;
  onMonthChange: (month: number | null) => void;
  onYearChange: (year: number | null) => void;
  onOutletChange: (outletId: string | null) => void;
};

const periodOptions = [
  {
    value: "DAY",
    label: "Harian",
  },
  {
    value: "MONTH",
    label: "Bulanan",
  },
  {
    value: "YEAR",
    label: "Tahunan",
  },
];

export function SalesReportFilters({ query, outletOptions, isSuperAdmin, onPeriodChange, onDateChange, onMonthChange, onYearChange, onOutletChange }: Props) {
  const initialDate = query.year && query.month ? new Date(Number(query.year), Number(query.month) - 1, 1) : new Date();
  return (
    <Paper
      p="md"
      withBorder
      radius="md"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Group align="flex-end" grow>
          <Select
            label="Periode"
            data={periodOptions}
            value={query.period}
            onChange={(value) => {
              if (!value) {
                return;
              }

              onPeriodChange(value as SalesPeriod);
            }}
          />

          {query.period === "DAY" && (
            <DatePickerInput label="Tanggal" placeholder="Pilih tanggal" clearable={false} value={query.date ?? null} valueFormat="DD MMM YYYY" onChange={onDateChange} />
          )}

          {query.period === "MONTH" && (
            <MonthPickerInput
              label="Pilih Bulan & Tahun"
              value={initialDate}
              onChange={(value) => {
                onMonthChange(value ? new Date(value).getMonth() + 1 : null);
                onYearChange(value ? new Date(value).getFullYear() : null);
              }}
            />
          )}

          {query.period === "YEAR" && (
            <YearPickerInput
              label="Tahun"
              minDate={new Date(2025, 0, 1)}
              value={query.year ? new Date(query.year, 0, 1) : new Date()}
              onChange={(value) => onYearChange(value ? new Date(value).getFullYear() : null)}
            />
          )}

          {isSuperAdmin && <Select label="Outlet" placeholder="Semua outlet" data={outletOptions} value={query.outletId ?? null} onChange={onOutletChange} clearable />}
        </Group>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/laporan/penjualan/SalesReportSummary.tsx
````typescript
"use client";

import { Card, SimpleGrid, Stack, Text } from "@mantine/core";
import { SalesReport } from "@/types/api/report.types";

type Props = { report: SalesReport };

const formatCurrency = (value: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

const formatNumber = (value: number) => new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(value);

function formatPercent(value: number | null) {
  if (value === null) return "Tidak ada pembanding";
  return `${value > 0 ? "+" : ""}${value.toFixed(1)}% vs periode sebelumnya`;
}

function SummaryCard({ label, value, comparison }: { label: string; value: string; comparison?: number | null }) {
  return (
    <Card withBorder radius="md" padding="lg" style={{ backgroundColor: "var(--color-surface)" }}>
      <Stack gap={4}>
        <Text size="sm" c="var(--color-text-secondary)">
          {label}
        </Text>
        <Text size="xl" fw={700} c="var(--color-text-primary)">
          {value}
        </Text>
        {comparison !== undefined && (
          <Text size="xs" c={comparison !== null && comparison < 0 ? "red" : comparison !== null && comparison > 0 ? "green" : "var(--color-text-secondary)"}>
            {formatPercent(comparison)}
          </Text>
        )}
      </Stack>
    </Card>
  );
}

export function SalesReportSummary({ report }: Props) {
  const { summary, comparison } = report;

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3, xl: 5 }}>
      <SummaryCard label="Total Pendapatan" value={formatCurrency(summary.totalRevenue)} comparison={comparison.revenueChangePercent} />
      <SummaryCard label="Total Pesanan" value={formatNumber(summary.totalOrders)} comparison={comparison.orderChangePercent} />
      <SummaryCard label="Rata-rata Nilai Pesanan" value={formatCurrency(summary.averageOrderValue)} comparison={comparison.averageOrderValueChangePercent} />
      <SummaryCard label="Total Berat Cucian" value={`${formatNumber(summary.totalWeightKg)} kg`} />
      <SummaryCard label="Pelanggan Unik" value={formatNumber(summary.uniqueCustomers)} />
    </SimpleGrid>
  );
}
````

## File: src/components/back-office/laundry-item/EditLaundryItemContent.tsx
````typescript
"use client";

import { Center, Loader, Stack, Text } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import { notifications } from "@mantine/notifications";
import { PageHeader } from "@/components/ui/PageHeader";
import { useLaundryItem, useUpdateLaundryItem } from "@/hooks/laundry-item.hooks";
import { LaundryItemForm } from "./LaundryItemForm";
import type { UpdateLaundryItemPayload } from "@/types/api/laundry-item.types";

export function EditLaundryItemContent() {
  const router = useRouter();
  const params = useParams<{
    laundryItemId: string;
  }>();
  const laundryItemId = params.laundryItemId;
  const { data: laundryItem, isLoading, isError } = useLaundryItem(laundryItemId);
  const updateLaundryItem = useUpdateLaundryItem();
  
  const handleSubmit = async (values: UpdateLaundryItemPayload) => {
    await updateLaundryItem.mutateAsync(
      {
        laundryItemId,
        payload: values,
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Item laundry berhasil diperbarui.",
            color: "green",
          });

          router.push("/internal/super-admin/item-laundry");
        },

        onError: (error) => {
          notifications.show({
            title: "Gagal",
            message: error instanceof Error ? error.message : "Gagal memperbarui item laundry.",
            color: "red",
          });
        },
      },
    );
  };

  if (isLoading) {
    return (
      <Center h={300}>
        <Loader />
      </Center>
    );
  }

  if (isError || !laundryItem) {
    return (
      <Center h={300}>
        <Text c="red">Gagal memuat data item laundry.</Text>
      </Center>
    );
  }

  return (
    <Stack gap="lg">
      <PageHeader title="Edit Item Laundry" description="Perbarui informasi item laundry." />

      <LaundryItemForm
        initialValues={{
          name: laundryItem.name,
        }}
        onSubmit={handleSubmit}
        isSubmitting={updateLaundryItem.isPending}
        submitLabel="Simpan Perubahan"
      />
    </Stack>
  );
}
````

## File: src/components/back-office/laundry-item/LaundryItemContent.tsx
````typescript
"use client";

import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { LaundryItemFilters } from "./LaundryItemFilters";
import { LaundryItemTable } from "./LaundryItemTable";
import { useLaundryItemHooks } from "@/hooks/laundry-item.hooks";
import TableSkeleton from "../shared/TableSkeleton";

export function LaundryItemContent() {
  const {
    router,
    form,
    setPage,
    handleReset,
    laundryItems,
    setPageSize,
    setSelectedItem,
    selectedItem,
    deactivateLaundryItem,
    handleDeactivate,
  } = useLaundryItemHooks();
  return (
    <>
      <Stack gap="lg">
        <PageHeader
          title="Laundry Item"
          description="Kelola jenis item laundry yang tersedia dalam sistem."
          action={
            <Button leftSection={<IconPlus size={16} />} onClick={() => router.push("/internal/super-admin/item-laundry/baru")}>
              Tambah Item
            </Button>
          }
        />

        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <LaundryItemFilters
              form={form}
              onReset={handleReset}
            />

            <AsyncStateView
              isLoading={laundryItems.isLoading}
              isError={laundryItems.isError}
              error={laundryItems.error}
              data={laundryItems.data}
              onRetry={() => laundryItems.refetch()}
              isEmpty={(response) => response.data.length === 0}
              emptyTitle="Laundry item tidak ditemukan"
              emptyDescription="Tidak ada laundry item yang sesuai dengan pencarian."
              skeleton={<TableSkeleton />}
            >
              {(response) => (
                <LaundryItemTable
                  data={response.data}
                  meta={response.meta}
                  onPageChange={setPage}
                  onPageSizeChange={(value) => {
                    setPageSize(value as 10 | 20 | 50);

                    setPage(1);
                  }}
                  onEdit={(item) => router.push(`/internal/super-admin/item-laundry/${item.id}`)}
                  onDeactivate={(item) => setSelectedItem(item)}
                />
              )}
            </AsyncStateView>
          </Stack>
        </Paper>
      </Stack>

      <ConfirmDialog
        opened={Boolean(selectedItem)}
        title="Nonaktifkan Item Laundry"
        message={
          selectedItem
            ? `Apakah kamu yakin ingin menonaktifkan item "${selectedItem.name}"? Item yang dinonaktifkan tidak dapat digunakan untuk data baru.`
            : ""
        }
        confirmLabel="Nonaktifkan"
        loading={deactivateLaundryItem.isPending}
        onClose={() => setSelectedItem(null)}
        onConfirm={handleDeactivate}
      />
    </>
  );
}
````

## File: src/components/back-office/order/DriverAssignmentsSection.tsx
````typescript
"use client";

import { Badge, Paper, Stack, Text, Timeline } from "@mantine/core";
import { IconCheck, IconCircle } from "@tabler/icons-react";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  assignments: OrderDetail["driverAssignments"];
};

const TASK_TYPE: Record<"PICKUP" | "DELIVERY", string> = {
  PICKUP: "Pickup",
  DELIVERY: "Pengantaran",
};

const ASSIGNMENT_STATUS: Record<
  "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED",
  {
    label: string;
    color: string;
  }
> = {
  QUEUED: {
    label: "Menunggu Diambil",
    color: "gray",
  },
  ASSIGNED: {
    label: "Sudah Diambil",
    color: "blue",
  },
  IN_PROGRESS: {
    label: "Dalam Proses",
    color: "cyan",
  },
  COMPLETED: {
    label: "Selesai",
    color: "green",
  },
};

function formatDateTime(value: string | null) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function DriverAssignmentsSection({ assignments }: Props) {
  return (
    <Paper withBorder p="lg" radius="md">
      <Stack gap="md">
        <Text fw={600}>Riwayat Driver</Text>

        {assignments.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Belum ada assignment driver.
          </Text>
        ) : (
          <Timeline active={assignments.length} bulletSize={28} lineWidth={2}>
            {assignments.map((assignment) => {
              const status = ASSIGNMENT_STATUS[assignment.status];

              const completed = assignment.status === "COMPLETED";

              return (
                <Timeline.Item
                  key={assignment.id}
                  bullet={completed ? <IconCheck size={14} /> : <IconCircle size={10} />}
                  title={
                    <Text size="sm" fw={600}>
                      {TASK_TYPE[assignment.taskType]}
                    </Text>
                  }
                >
                  <Stack gap={6} mt={6}>
                    <Badge variant="light" color={status.color} w="fit-content">
                      {status.label}
                    </Badge>

                    <Text size="sm" c="var(--color-text-primary)">
                      Driver: {assignment.driver?.name ?? "Belum diambil"}
                    </Text>

                    {assignment.assignedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Diambil: {formatDateTime(assignment.assignedAt)}
                      </Text>
                    )}

                    {assignment.taskType === "PICKUP" && assignment.pickedUpAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Pickup: {formatDateTime(assignment.pickedUpAt)}
                      </Text>
                    )}

                    {assignment.taskType === "DELIVERY" && assignment.deliveredAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Dikirim: {formatDateTime(assignment.deliveredAt)}
                      </Text>
                    )}

                    {assignment.completedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Selesai: {formatDateTime(assignment.completedAt)}
                      </Text>
                    )}
                  </Stack>
                </Timeline.Item>
              );
            })}
          </Timeline>
        )}
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/order/OrderComplaintSection.tsx
````typescript
"use client";

import { useState } from "react";
import { Badge, Button, Group, Image, Modal, Paper, Stack, Text } from "@mantine/core";
import { ComplaintCategory, ComplaintStatus } from "@/types/api";
import { IconExternalLink } from "@tabler/icons-react";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  complaint: OrderDetail["complaint"];
};

const COMPLAINT_CATEGORY: Record<
  ComplaintCategory,
  {
    label: string;
    color: string;
  }
> = {
  TIDAK_SESUAI: {
    label: "Tidak Sesuai",
    color: "orange",
  },
  RUSAK: {
    label: "Barang Rusak",
    color: "red",
  },
  HILANG: {
    label: "Barang Hilang",
    color: "grape",
  },
};

const COMPLAINT_STATUS: Record<
  ComplaintStatus,
  {
    label: string;
    color: string;
  }
> = {
  OPEN: {
    label: "Menunggu Penanganan",
    color: "yellow",
  },
  APPROVED: {
    label: "Disetujui",
    color: "green",
  },
  REJECTED: {
    label: "Ditolak",
    color: "red",
  },
};

function formatDateTime(value: string | null) {
  if (!value) {
    return "-";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderComplaintSection({ complaint }: Props) {
  const [proofOpened, setProofOpened] = useState(false);

  if (!complaint) {
    return (
      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Text fw={600}>Komplain</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Tidak ada komplain untuk pesanan ini.
          </Text>
        </Stack>
      </Paper>
    );
  }

  const category = COMPLAINT_CATEGORY[complaint.category];

  const status = COMPLAINT_STATUS[complaint.status];

  return (
    <>
      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Group justify="space-between" align="flex-start" wrap="wrap">
            <Stack gap={2}>
              <Text fw={600}>Komplain</Text>

              <Text size="xs" c="var(--color-text-secondary)">
                Dibuat {formatDateTime(complaint.createdAt)}
              </Text>
            </Stack>

            <Group gap="xs">
              <Badge variant="light" color={category.color}>
                {category.label}
              </Badge>

              <Badge variant="light" color={status.color}>
                {status.label}
              </Badge>
            </Group>
          </Group>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Deskripsi Komplain
            </Text>

            <Text size="sm">{complaint.description}</Text>
          </Stack>

          <Stack gap={4}>
            <Text size="xs" c="var(--color-text-secondary)">
              Bukti Foto
            </Text>

            <Button variant="light" rightSection={<IconExternalLink size={16} />} w="fit-content" onClick={() => setProofOpened(true)}>
              Lihat Bukti
            </Button>
          </Stack>

          {complaint.responseNote && (
            <Stack gap={4}>
              <Text size="xs" c="var(--color-text-secondary)">
                Tanggapan
              </Text>

              <Text size="sm">{complaint.responseNote}</Text>
            </Stack>
          )}

          {complaint.decidedAt && (
            <Text size="xs" c="var(--color-text-secondary)">
              Diputuskan pada {formatDateTime(complaint.decidedAt)}
            </Text>
          )}
        </Stack>
      </Paper>

      <Modal opened={proofOpened} onClose={() => setProofOpened(false)} title="Bukti Komplain" centered size="lg">
        <Image src={complaint.proofPhotoUrl} alt="Bukti komplain" radius="md" />
      </Modal>
    </>
  );
}
````

## File: src/components/back-office/order/OrderCustomerSection.tsx
````typescript
import { Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  customer: OrderDetail["customer"];
};

export function OrderCustomerSection({ customer }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="lg"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="md">
        <Text fw={600}>Informasi Pelanggan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 3,
          }}
          spacing="lg"
        >
          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Nama
            </Text>

            <Text size="sm" fw={500}>
              {customer.name}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Email
            </Text>

            <Text size="sm" fw={500}>
              {customer.email}
            </Text>
          </Stack>

          <Stack gap={2}>
            <Text size="xs" c="var(--color-text-secondary)">
              Nomor Telepon
            </Text>

            <Text size="sm" fw={500}>
              {customer.phone ?? "-"}
            </Text>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/order/OrderDetailHeader.tsx
````typescript
"use client";

import { useRouter } from "next/navigation";
import { ActionIcon, Badge, Group, Stack, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import type { OrderDetail } from "@/types/api/order.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  order: OrderDetail;
};

export function OrderDetailHeader({ order }: Props) {
  const router = useRouter();

  const status = CUSTOMER_STATUS[order.customerStatus];

  return (
    <Group justify="space-between" align="center" wrap="wrap">
      <Group gap="md">
        <ActionIcon variant="default" onClick={() => router.back()} aria-label="Kembali">
          <IconArrowLeft size={18} />
        </ActionIcon>

        <Stack gap={2}>
          <Text fw={700} size="xl" c="var(--color-text-primary)">
            {order.orderCode}
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Pesanan oleh {order.customer.name}
          </Text>
        </Stack>
      </Group>

      <Badge variant="light" color={status.color}>
        {status.label}
      </Badge>
    </Group>
  );
}
````

## File: src/components/back-office/order/OrderFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import type { OrderQuery } from "@/types/api/order.types";

type OrderFiltersState = Pick<OrderQuery, "search" | "customerStatus" | "paymentStatus" | "outletId" | "startDate" | "endDate">;

type Props = {
  filters: OrderFiltersState;
  sortBy: NonNullable<OrderQuery["sortBy"]>;
  sortOrder: NonNullable<OrderQuery["sortOrder"]>;
  outlets?: {
    id: string;
    name: string;
  }[];
  showOutletFilter: boolean;
  onChange: (key: keyof OrderFiltersState, value: string | null) => void;
  onSortByChange: (value: NonNullable<OrderQuery["sortBy"]>) => void;
  onSortOrderChange: (value: NonNullable<OrderQuery["sortOrder"]>) => void;
  onReset: () => void;
};

const CUSTOMER_STATUS_OPTIONS = [
  {
    value: "SCHEDULED",
    label: "Terjadwal",
  },
  {
    value: "WAITING_DRIVER_PICKUP",
    label: "Menunggu Driver",
  },
  {
    value: "ON_THE_WAY_TO_OUTLET",
    label: "Menuju Outlet",
  },
  {
    value: "ARRIVED_AT_OUTLET",
    label: "Tiba di Outlet",
  },
  {
    value: "WASHING",
    label: "Pencucian",
  },
  {
    value: "IRONING",
    label: "Penyetrikaan",
  },
  {
    value: "PACKING",
    label: "Pengemasan",
  },
  {
    value: "WAITING_PAYMENT",
    label: "Menunggu Pembayaran",
  },
  {
    value: "OVERDUE",
    label: "Jatuh Tempo",
  },
  {
    value: "READY_FOR_DELIVERY",
    label: "Siap Diantar",
  },
  {
    value: "ON_THE_WAY_TO_CUSTOMER",
    label: "Dalam Pengantaran",
  },
  {
    value: "WAITING_CUSTOMER_CONFIRMATION",
    label: "Menunggu Konfirmasi Pelanggan",
  },
  {
    value: "RECEIVED_BY_CUSTOMER",
    label: "Diterima Pelanggan",
  },
];

const PAYMENT_STATUS_OPTIONS = [
  {
    value: "UNPAID",
    label: "Belum Dibayar",
  },
  {
    value: "PAID",
    label: "Sudah Dibayar",
  },
];

const SORT_OPTIONS = [
  {
    value: "createdAt",
    label: "Tanggal dibuat",
  },
  {
    value: "pickupScheduledAt",
    label: "Jadwal pickup",
  },
  {
    value: "orderCode",
    label: "Kode pesanan",
  },
];

export function OrderFilters({
  filters,
  sortBy,
  sortOrder,
  outlets = [],
  showOutletFilter,
  onChange,
  onSortByChange,
  onSortOrderChange,
  onReset,
}: Props) {
  return (
    <>
      <Group align="end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Kode pesanan atau pelanggan"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || null)}
          style={{ flex: 1, minWidth: 220 }}
        />

        <Select
          label="Urutkan"
          value={sortBy}
          data={SORT_OPTIONS}
          onChange={(value) => {
            if (value === "createdAt" || value === "pickupScheduledAt" || value === "orderCode") {
              onSortByChange(value);
            }
          }}
          w={180}
        />

        <Select
          label="Urutan"
          value={sortOrder}
          data={[
            {
              value: "desc",
              label: "Menurun",
            },
            {
              value: "asc",
              label: "Menaik",
            },
          ]}
          onChange={(value) => {
            if (value === "asc" || value === "desc") {
              onSortOrderChange(value);
            }
          }}
          w={180}
        />

        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>

      <Group align="flex-end" wrap="wrap" grow>
        <Select
          label="Status Pesanan"
          placeholder="Semua status"
          clearable
          data={CUSTOMER_STATUS_OPTIONS}
          value={filters.customerStatus ?? null}
          onChange={(value) => onChange("customerStatus", value)}
        />

        <Select
          label="Status Pembayaran"
          placeholder="Semua status"
          clearable
          data={PAYMENT_STATUS_OPTIONS}
          value={filters.paymentStatus ?? null}
          onChange={(value) => onChange("paymentStatus", value)}
        />

        {showOutletFilter && (
          <Select
            label="Outlet"
            placeholder="Semua outlet"
            clearable
            searchable
            data={outlets.map((outlet) => ({
              value: outlet.id,
              label: outlet.name,
            }))}
            value={filters.outletId ?? null}
            onChange={(value) => onChange("outletId", value)}
          />
        )}

        <DatePickerInput
          label="Dari Tanggal"
          placeholder="Pilih tanggal"
          clearable
          value={filters.startDate ?? null}
          valueFormat="DD MMM YYYY"
          onChange={(value) => onChange("startDate", value)}
        />

        <DatePickerInput
          label="Sampai Tanggal"
          placeholder="Pilih tanggal"
          clearable
          value={filters.endDate ?? null}
          valueFormat="DD MMM YYYY"
          onChange={(value) => onChange("endDate", value)}
        />
      </Group>
    </>
  );
}
````

## File: src/components/back-office/order/OrderItemsSection.tsx
````typescript
"use client";

import { Paper, Stack, Table, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  orderItems: OrderDetail["orderItems"];
};

export function OrderItemsSection({ orderItems }: Props) {
  return (
    <Paper withBorder p="lg" radius="md">
      <Stack gap="md">
        <Text fw={600}>Item Laundry</Text>

        {orderItems.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Pesanan belum dibuat.
          </Text>
        ) : (
          <Table verticalSpacing="sm" highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Item</Table.Th>

                <Table.Th ta="right">Jumlah</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {orderItems.map((item) => (
                <Table.Tr key={item.id}>
                  <Table.Td>
                    <Text size="sm" fw={500} c="var(--color-text-primary)">
                      {item.laundryItem.name}
                    </Text>
                  </Table.Td>

                  <Table.Td ta="right">
                    <Text size="sm" c="var(--color-text-secondary)">
                      {item.quantity}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        )}
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/order/OrderTable.tsx
````typescript
"use client";

import { ActionIcon, Badge, Group, Table, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { PaginatedResponse } from "@/types/api";
import type { OrderListItem } from "@/types/api/order.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  data: OrderListItem[];
  meta: PaginatedResponse<OrderListItem>["meta"];
  showOutlet: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onView: (orderId: string) => void;
};



const PAYMENT_STATUS = {
  UNPAID: {
    label: "Belum Dibayar",
    color: "red",
  },
  PAID: {
    label: "Sudah Dibayar",
    color: "green",
  },
} as const;

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderTable({ data, meta, showOutlet, onPageChange, onPageSizeChange, onView }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={showOutlet ? 1200 : 1050}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Kode Pesanan</Table.Th>
              <Table.Th>Pelanggan</Table.Th>

              {showOutlet && <Table.Th>Outlet</Table.Th>}

              <Table.Th>Jadwal Pickup</Table.Th>
              <Table.Th>Status Pesanan</Table.Th>
              <Table.Th>Status Pembayaran</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((order) => {
              const customerStatus = CUSTOMER_STATUS[order.customerStatus];

              const paymentStatus = order.bill ? PAYMENT_STATUS[order.bill.paymentStatus] : null;

              return (
                <Table.Tr key={order.id}>
                  <Table.Td>
                    <Text size="sm" fw={600} c="var(--color-text-primary)">
                      {order.orderCode}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Text size="sm" fw={600} c="var(--color-text-primary)">
                      {order.customer.name}
                    </Text>

                    <Text size="xs" c="var(--color-text-secondary)">
                      {order.customer.email}
                    </Text>
                  </Table.Td>

                  {showOutlet && (
                    <Table.Td>
                      <Text size="sm">{order.outlet.name}</Text>
                    </Table.Td>
                  )}

                  <Table.Td>
                    <Text size="sm" c="var(--color-text-secondary)">
                      {formatDateTime(order.pickupScheduledAt)}
                    </Text>
                  </Table.Td>

                  <Table.Td>
                    <Badge variant="light" color={customerStatus.color}>
                      {customerStatus.label}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    {paymentStatus ? (
                      <Badge variant="light" color={paymentStatus.color}>
                        {paymentStatus.label}
                      </Badge>
                    ) : (
                      <Text size="sm" c="var(--color-text-secondary)">
                        -
                      </Text>
                    )}
                  </Table.Td>

                  <Table.Td ta="right">
                    <Group gap={4} justify="flex-end">
                      <ActionIcon variant="subtle" color="rinseBlue" aria-label={`Lihat pesanan ${order.orderCode}`} onClick={() => onView(order.id)}>
                        <IconChevronRight size={18} />
                      </ActionIcon>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/order/WorkerAssignmentsSection.tsx
````typescript
"use client";

import { Badge, Paper, Stack, Text, Timeline } from "@mantine/core";
import { IconCheck, IconCircle } from "@tabler/icons-react";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  assignments: OrderDetail["workerAssignments"];
};

const STATION_TYPE: Record<"WASHING" | "IRONING" | "PACKING", string> = {
  WASHING: "Pencucian",
  IRONING: "Penyetrikaan",
  PACKING: "Pengemasan",
};

const ASSIGNMENT_STATUS: Record<
  "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "ON_HOLD_BYPASS" | "COMPLETED",
  {
    label: string;
    color: string;
  }
> = {
  QUEUED: {
    label: "Menunggu Diambil",
    color: "gray",
  },
  ASSIGNED: {
    label: "Sudah Diambil",
    color: "blue",
  },
  IN_PROGRESS: {
    label: "Sedang Dikerjakan",
    color: "cyan",
  },
  ON_HOLD_BYPASS: {
    label: "Menunggu Bypass",
    color: "orange",
  },
  COMPLETED: {
    label: "Selesai",
    color: "green",
  },
};

function formatDateTime(value: string | null) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function WorkerAssignmentsSection({ assignments }: Props) {
  return (
    <Paper withBorder p="lg" radius="md">
      <Stack gap="md">
        <Text fw={600}>Proses Laundry</Text>

        {assignments.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Proses laundry belum dibuat.
          </Text>
        ) : (
          <Timeline active={assignments.length} bulletSize={28} lineWidth={2}>
            {assignments.map((assignment) => {
              const status = ASSIGNMENT_STATUS[assignment.status];

              const completed = assignment.status === "COMPLETED";

              return (
                <Timeline.Item
                  key={assignment.id}
                  bullet={completed ? <IconCheck size={14} /> : <IconCircle size={10} />}
                  title={
                    <Text size="sm" fw={600}>
                      {STATION_TYPE[assignment.stationType]}
                    </Text>
                  }
                >
                  <Stack gap={6} mt={6}>
                    <Badge variant="light" color={status.color} w="fit-content">
                      {status.label}
                    </Badge>

                    <Text size="sm" c="var(--color-text-primary)">
                      Worker: {assignment.worker?.name ?? "Belum diambil"}
                    </Text>

                    {assignment.assignedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Diambil: {formatDateTime(assignment.assignedAt)}
                      </Text>
                    )}

                    {assignment.startedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Mulai dikerjakan: {formatDateTime(assignment.startedAt)}
                      </Text>
                    )}

                    {assignment.completedAt && (
                      <Text size="xs" c="var(--color-text-secondary)">
                        Selesai: {formatDateTime(assignment.completedAt)}
                      </Text>
                    )}
                  </Stack>
                </Timeline.Item>
              );
            })}
          </Timeline>
        )}
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/penerimaan/CreateOrderModal.tsx
````typescript
"use client";

import { ActionIcon, Button, Group, Modal, NumberInput, Select, Stack, Text } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import type { CreateOrderPayload, OrderListItem } from "@/types/api/order.types";
import { useCreateOrderHooks } from "@/hooks/reception.hooks";

type Props = {
  opened: boolean;
  order: OrderListItem | null;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (orderId: string, payload: CreateOrderPayload) => Promise<void>;
};

export function CreateOrderModal({ opened, order, isSubmitting, onClose, onSubmit }: Props) {
  const {
    handleClose,
    weightKg,
    setWeightKg,
    handleAddItem,
    isLaundryItemsLoading,
    items,
    getLaundryItemOptions,
    handleLaundryItemChange,
    handleQuantityChange,
    handleRemoveItem,
    handleSubmit,
  } = useCreateOrderHooks({ opened, order, isSubmitting, onClose, onSubmit });
  return (
    <Modal opened={opened} onClose={handleClose} title="Buat Order" centered>
      <Stack gap="md">
        {order && (
          <Stack gap={2}>
            <Text size="sm" fw={600}>
              {order.orderCode}
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              {order.customer.name}
            </Text>
          </Stack>
        )}

        <NumberInput
          label="Berat Laundry"
          description="Masukkan total berat laundry dalam kilogram."
          placeholder="Contoh: 3"
          min={0.1}
          step={0.1}
          decimalScale={2}
          suffix=" kg"
          value={weightKg}
          onChange={setWeightKg}
          disabled={isSubmitting}
          required
        />

        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" fw={600}>
              Item Laundry
            </Text>

            <Button
              variant="subtle"
              size="xs"
              leftSection={<IconPlus size={16} />}
              onClick={handleAddItem}
              disabled={isLaundryItemsLoading || isSubmitting}
            >
              Tambah Item
            </Button>
          </Group>

          {items.map((item, index) => (
            <Group key={index} align="flex-end" wrap="nowrap">
              <Select
                label={index === 0 ? "Layanan" : undefined}
                placeholder="Pilih item laundry"
                data={getLaundryItemOptions(item.laundryItemId)}
                value={item.laundryItemId}
                onChange={(value) => handleLaundryItemChange(index, value)}
                searchable
                disabled={isLaundryItemsLoading || isSubmitting}
                style={{
                  flex: 1,
                }}
                required
              />

              <NumberInput
                label={index === 0 ? "Jumlah" : undefined}
                min={1}
                step={1}
                allowDecimal={false}
                value={item.quantity}
                onChange={(value) => handleQuantityChange(index, value)}
                disabled={isSubmitting}
                w={100}
                required
              />

              {items.length > 1 && (
                <ActionIcon variant="subtle" color="red" aria-label="Hapus item" onClick={() => handleRemoveItem(index)} disabled={isSubmitting}>
                  <IconTrash size={18} />
                </ActionIcon>
              )}
            </Group>
          ))}
        </Stack>

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button onClick={handleSubmit} loading={isSubmitting}>
            Buat Order
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/pricing/shipping/ShippingRateModal.tsx
````typescript
"use client";

import { Button, Group, Modal, NumberInput, Stack } from "@mantine/core";
import { useState } from "react";
import type { CreateShippingRatePayload, ShippingRate, UpdateShippingRatePayload } from "@/types/api/pricing.types";

type Props = {
  opened: boolean;
  shippingRate: ShippingRate | null;
  isSubmitting: boolean;
  onClose: () => void;
  onCreate: (payload: CreateShippingRatePayload) => Promise<void>;
  onUpdate: (shippingRateId: string, payload: UpdateShippingRatePayload) => Promise<void>;
};

export function ShippingRateModal({ opened, shippingRate, isSubmitting, onClose, onCreate, onUpdate }: Props) {
  const isEditMode = shippingRate !== null;

  // Inisialisasi state langsung dari prop shippingRate
  const [maxDistanceMeters, setMaxDistanceMeters] = useState<number | string>(shippingRate ? shippingRate.maxDistanceMeters : "");
  const [price, setPrice] = useState<number | string>(shippingRate ? Number(shippingRate.price) : "");

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
  };

  const handleSubmit = async () => {
    if (typeof maxDistanceMeters !== "number" || maxDistanceMeters <= 0) return;
    if (typeof price !== "number" || price <= 0) return;

    if (isEditMode) {
      await onUpdate(shippingRate.id, {
        maxDistanceMeters,
        price,
      });
      return;
    }

    await onCreate({
      maxDistanceMeters,
      price,
    });
  };

  return (
    <Modal opened={opened} onClose={handleClose} title={isEditMode ? "Ubah Tarif Pengiriman" : "Tambah Tarif Pengiriman"} centered>
      <Stack gap="md">
        <NumberInput
          label="Batas Jarak"
          description="Masukkan batas maksimal jarak dalam meter."
          placeholder="Contoh: 5000"
          suffix=" m"
          min={1}
          step={100}
          value={maxDistanceMeters}
          onChange={setMaxDistanceMeters}
          disabled={isSubmitting}
          required
        />

        <NumberInput
          label="Tarif"
          description="Masukkan tarif pengiriman dalam Rupiah."
          placeholder="Contoh: 10000"
          prefix="Rp "
          min={1}
          step={1000}
          thousandSeparator="."
          decimalSeparator=","
          value={price}
          onChange={setPrice}
          disabled={isSubmitting}
          required
        />

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isSubmitting}>
            Batal
          </Button>

          <Button onClick={handleSubmit} loading={isSubmitting}>
            {isEditMode ? "Simpan Perubahan" : "Tambah Tarif"}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/pricing/shipping/ShippingRateTable.tsx
````typescript
"use client";

import { ActionIcon, Group, Menu, Table, Text } from "@mantine/core";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { PaginatedResponse } from "@/types/api";
import type { ShippingRate } from "@/types/api/pricing.types";

type Props = {
  data: ShippingRate[];
  meta: PaginatedResponse<ShippingRate>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onEdit: (shippingRate: ShippingRate) => void;
  onDeactivate: (shippingRate: ShippingRate) => void;
};

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

function formatDistance(value: number) {
  const kilometers = value / 1000;

  return `≤ ${kilometers} km`;
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function ShippingRateTable({ data, meta, onPageChange, onPageSizeChange, onEdit, onDeactivate }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={700}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Batas Jarak</Table.Th>

              <Table.Th>Harga</Table.Th>

              <Table.Th>Dibuat Pada</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((shippingRate) => (
              <Table.Tr key={shippingRate.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {formatDistance(shippingRate.maxDistanceMeters)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {formatCurrency(shippingRate.price)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(shippingRate.createdAt)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Group justify="flex-end" gap={4}>
                    <Menu shadow="md" width={160} position="bottom-end">
                      <Menu.Target>
                        <ActionIcon variant="subtle" aria-label="Aksi item">
                          <IconDotsVertical size={18} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item leftSection={<IconEdit size={16} />} onClick={() => onEdit(shippingRate)}>
                          Edit
                        </Menu.Item>

                        <Menu.Item color="red" leftSection={<IconTrash size={16} />} onClick={() => onDeactivate(shippingRate)}>
                          Nonaktifkan
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/shared/BackOfficeAppShell.tsx
````typescript
"use client";

import { AppShell, Burger, Group, NavLink, ScrollArea, Text, ThemeIcon, Box, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBuildingStore,
  IconCash,
  IconClipboardList,
  IconFileAnalytics,
  IconLayoutDashboard,
  IconPackage,
  IconRefresh,
  IconReportAnalytics,
  IconRoute,
  IconShieldCheck,
  IconUsers,
  IconUserCheck,
  IconAlertCircle,
  IconReceipt,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Role } from "@/types/api";
import { BackOfficeProfileMenu } from "./BackOfficeProfileMenu";

type MenuItem = {
  label: string;
  href: string;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const outlet: MenuGroup[] = [
  {
    label: "UTAMA",
    items: [
      {
        label: "Dashboard",
        href: "/internal/outlet-admin/dashboard",
      },
    ],
  },
  {
    label: "OPERASIONAL",
    items: [
      {
        label: "Penerimaan",
        href: "/internal/outlet-admin/penerimaan",
      },
      {
        label: "Pesanan",
        href: "/internal/outlet-admin/pesanan",
      },
      {
        label: "Bypass",
        href: "/internal/outlet-admin/bypass",
      },
      {
        label: "Komplain",
        href: "/internal/outlet-admin/komplain",
      },
    ],
  },
  {
    label: "MANAJEMEN OUTLET",
    items: [
      {
        label: "Tim Outlet",
        href: "/internal/outlet-admin/tim-outlet",
      },
      {
        label: "Absensi",
        href: "/internal/outlet-admin/absensi",
      },
    ],
  },
  {
    label: "LAPORAN",
    items: [
      {
        label: "Laporan",
        href: "/internal/outlet-admin/laporan/penjualan",
      },
      {
        label: "Kinerja Karyawan",
        href: "/internal/outlet-admin/laporan/kinerja-karyawan",
      },
    ],
  },
];

const superAdmin: MenuGroup[] = [
  {
    label: "UTAMA",
    items: [
      {
        label: "Dashboard",
        href: "/internal/super-admin/dashboard",
      },
    ],
  },
  {
    label: "MANAJEMEN",
    items: [
      {
        label: "Outlet",
        href: "/internal/super-admin/outlet",
      },
      {
        label: "Karyawan",
        href: "/internal/super-admin/karyawan",
      },
      {
        label: "Item Laundry",
        href: "/internal/super-admin/item-laundry",
      },
    ],
  },
  {
    label: "HARGA & TARIF",
    items: [
      {
        label: "Harga Laundry",
        href: "/internal/super-admin/harga/laundry",
      },
      {
        label: "Harga Shipping",
        href: "/internal/super-admin/harga/shipping",
      },
    ],
  },
  {
    label: "OPERASIONAL",
    items: [
      {
        label: "Pesanan",
        href: "/internal/super-admin/pesanan",
      },
      {
        label: "Komplain",
        href: "/internal/super-admin/komplain",
      },
    ],
  },
  {
    label: "LAPORAN",
    items: [
      {
        label: "Laporan Penjualan",
        href: "/internal/super-admin/laporan/penjualan",
      },
      {
        label: "Kinerja Karyawan",
        href: "/internal/super-admin/laporan/kinerja-karyawan",
      },
    ],
  },
];

const menuIcons: Record<string, React.ReactNode> = {
  Dashboard: <IconLayoutDashboard size={18} />,
  Outlet: <IconBuildingStore size={18} />,
  Karyawan: <IconUsers size={18} />,
  "Item Laundry": <IconPackage size={18} />,
  "Harga Laundry": <IconCash size={18} />,
  "Harga Shipping": <IconRoute size={18} />,
  Pesanan: <IconClipboardList size={18} />,
  Komplain: <IconAlertCircle size={18} />,
  "Laporan Penjualan": <IconReportAnalytics size={18} />,
  "Kinerja Karyawan": <IconUserCheck size={18} />,
  "Audit Log": <IconShieldCheck size={18} />,

  Penerimaan: <IconReceipt size={18} />,
  Bypass: <IconRefresh size={18} />,
  "Tim Outlet": <IconUsers size={18} />,
  Absensi: <IconUserCheck size={18} />,
  Laporan: <IconFileAnalytics size={18} />,
};

export function BackOfficeAppShell({ children, role }: { children: React.ReactNode; role: Extract<Role, "OUTLET_ADMIN" | "SUPER_ADMIN"> }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();

  const links = role === "SUPER_ADMIN" ? superAdmin : outlet;

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 280,
        breakpoint: "md",
        collapsed: { mobile: !opened },
      }}
      padding="lg"
      styles={{
        main: {
          backgroundColor: "var(--color-background)",
          minHeight: "100vh",
        },
      }}
    >
      <AppShell.Header
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <Group h="100%" px="lg" gap="sm">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />

          <ThemeIcon size={36} radius="md" variant="light" color="rinseBlue">
            <IconBuildingStore size={20} />
          </ThemeIcon>

          <Box>
            <Title fw={800} size="lg" style={{ color: "var(--color-primary-dark)", letterSpacing: -0.5 }} order={3}>
              Popo Laundry
            </Title>
            <Text size="xs" c="dimmed">
              Back Office
            </Text>
          </Box>
          <Box ml="auto">
            <BackOfficeProfileMenu role={role} />
          </Box>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <ScrollArea h="100%" type="never">
          {links.map((group, index) => (
            <div
              key={group.label}
              style={{
                marginBottom: index === links.length - 1 ? 0 : 20,
              }}
            >
              <Text size="xs" fw={700} c="dimmed" px="sm" mb={6}>
                {group.label}
              </Text>

              {group.items.map(({ label, href }) => {
                const isDashboard = href.endsWith("/dashboard");

                const isActive = isDashboard ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

                return (
                  <NavLink
                    key={href}
                    component={Link}
                    href={href}
                    label={label}
                    leftSection={menuIcons[label]}
                    active={isActive}
                    variant="light"
                    style={{
                      borderRadius: "var(--mantine-radius-md)",
                    }}
                  />
                );
              })}
            </div>
          ))}
        </ScrollArea>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
````

## File: src/components/customer/order/orderList.tsx
````typescript
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stack,
  TextInput,
  Select,
  Table,
  Badge,
  Pagination,
  Group,
  Anchor,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useOrders } from "@/hooks/order/order.hooks";
import {
  ORDER_STATUS_GROUP_LABELS,
  type OrderStatusGroupKey,
} from "@/lib/constants/order";

const SORT_OPTIONS = [
  {
    value: "createdAt:desc",
    label: "Terbaru",
  },
  {
    value: "createdAt:asc",
    label: "Terlama",
  },
  {
    value: "pickupDate:desc",
    label: "Tanggal pickup (terbaru)",
  },
  {
    value: "pickupDate:asc",
    label: "Tanggal pickup (terlama)",
  },
];

const STATUS_GROUP_OPTIONS = Object.entries(ORDER_STATUS_GROUP_LABELS).map(
  ([value, label]) => ({
    value,
    label,
  }),
);

export function OrderList() {
  const [page, setPage] = useState(1);

  const [searchInput, setSearchInput] = useState("");
  const [search] = useDebouncedValue(searchInput, 400);

  const [statusGroup, setStatusGroup] = useState<OrderStatusGroupKey | null>(
    null,
  );

  const [sort, setSort] = useState("createdAt:desc");

  const [sortBy, sortOrder] = sort.split(":") as [
    "createdAt" | "pickupDate",
    "asc" | "desc",
  ];

  const { data, isLoading, isError, error, refetch } = useOrders({
    page,
    limit: 10,
    ...(search ? { search } : {}),
    ...(statusGroup ? { statusGroup } : {}),
    sortBy,
    sortOrder,
  });

  function handleSearchChange(value: string) {
    setSearchInput(value);
    setPage(1);
  }

  function handleStatusGroupChange(value: string | null) {
    setStatusGroup(value as OrderStatusGroupKey | null);
    setPage(1);
  }

  function handleSortChange(value: string | null) {
    if (!value) return;

    setSort(value);
    setPage(1);
  }

  return (
    <Stack gap="md">
      <Group grow>
        <TextInput
          placeholder="Cari nomor order..."
          value={searchInput}
          onChange={(e) => handleSearchChange(e.currentTarget.value)}
        />

        <Select
          placeholder="Semua status"
          data={STATUS_GROUP_OPTIONS}
          value={statusGroup}
          onChange={handleStatusGroupChange}
          clearable
        />

        <Select
          data={SORT_OPTIONS}
          value={sort}
          onChange={handleSortChange}
          allowDeselect={false}
        />
      </Group>

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        onRetry={() => refetch()}
        isEmpty={(res) => res.data.length === 0}
        emptyTitle="Belum ada order"
        emptyDescription="Order yang kamu buat akan muncul di sini."
      >
        {(res) => (
          <>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>No. Order</Table.Th>
                  <Table.Th>Tanggal Pickup</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Total</Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {res.data.map((order) => (
                  <Table.Tr key={order.id}>
                    <Table.Td>
                      <Anchor
                        component={Link}
                        href={`/pesanan/${order.id}`}
                        size="sm"
                        c="var(--color-primary)"
                      >
                        {order.orderCode}
                      </Anchor>
                    </Table.Td>

                    <Table.Td>
                      {new Date(order.pickupDate).toLocaleDateString("id-ID")}
                    </Table.Td>

                    <Table.Td>
                      <Badge
                        style={{
                          backgroundColor: "var(--color-primary-light)",
                          color: "var(--color-primary)",
                        }}
                      >
                        {order.customerStatusLabel}
                      </Badge>
                    </Table.Td>

                    <Table.Td>
                      {order.totalAmount !== null
                        ? `Rp${order.totalAmount.toLocaleString("id-ID")}`
                        : "-"}
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>

            {res.meta.totalPage > 1 && (
              <Group justify="center">
                <Pagination
                  value={page}
                  onChange={setPage}
                  total={res.meta.totalPage}
                />
              </Group>
            )}
          </>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/customer/profil/emailChangeForm.tsx
````typescript
"use client";

import { useState } from "react";
import {
  Stack,
  TextInput,
  Button,
  Text,
  Badge,
  Group,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm, schemaResolver } from "@mantine/form";

import { updateEmailSchema } from "@/lib/validation/profile.validation";
import { ApiError } from "@/lib/api/axios";
import { useRequestEmailChange } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

export function EmailChangeForm() {
  const { user } = useAuthStore();
  const [requestedEmail, setRequestedEmail] = useState<string | null>(null);

  const { mutate, isPending } = useRequestEmailChange();

  const form = useForm({
    initialValues: {
      newEmail: "",
    },
    validate: schemaResolver(updateEmailSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: () => {
        setRequestedEmail(values.newEmail);
        form.reset();

        notifications.show({
          title: "Berhasil",
          message: `Link konfirmasi telah dikirim ke ${values.newEmail}.`,
          color: "green",
        });
      },

      onError: (error) => {
        const message =
          error instanceof ApiError
            ? error.code === "EMAIL_ALREADY_REGISTERED"
              ? "Email ini sudah dipakai akun lain."
              : error.code === "GOOGLE_ACCOUNT_EMAIL_LOCKED"
                ? "Email akun Google tidak dapat diganti dari sini."
                : error.message
            : "Gagal mengirim link konfirmasi email.";

        notifications.show({
          title: "Gagal",
          message,
          color: "red",
        });
      },
    });
  });

  return (
    <Stack gap="sm">
      <Group gap="xs">
        <Text size="sm" c="var(--color-text-secondary)">
          Email saat ini: <strong>{user?.email}</strong>
        </Text>

        <Badge
          size="sm"
          style={
            user?.isEmailVerified
              ? {
                  backgroundColor: "var(--color-success-light)",
                  color: "var(--color-success)",
                }
              : {
                  backgroundColor: "var(--color-error-light)",
                  color: "var(--color-error)",
                }
          }
        >
          {user?.isEmailVerified ? "Terverifikasi" : "Belum terverifikasi"}
        </Badge>
      </Group>

      {requestedEmail && (
        <Text
          size="sm"
          style={{
            backgroundColor: "var(--color-primary-light)",
            color: "var(--color-primary)",
            padding: "var(--mantine-spacing-sm)",
            borderRadius: "var(--mantine-radius-sm)",
          }}
        >
          Link konfirmasi sudah dikirim ke{" "}
          <strong>{requestedEmail}</strong>. Email saat ini tetap aktif sampai
          kamu konfirmasi lewat link tersebut.
        </Text>
      )}

      {user?.authProvider === "GOOGLE" ? (
        <Text size="sm" c="var(--color-text-secondary)">
          Email akun Google terkunci ke akun Google kamu, tidak bisa diganti
          dari sini.
        </Text>
      ) : (
        <form onSubmit={submit}>
          <Stack gap="sm">
            <TextInput
              label="Email Baru"
              placeholder="email-baru@email.com"
              {...form.getInputProps("newEmail")}
            />

            <Button
              type="submit"
              loading={isPending}
              variant="outline"
              style={{ alignSelf: "flex-start" }}
            >
              Kirim Link Konfirmasi
            </Button>
          </Stack>
        </form>
      )}
    </Stack>
  );
}
````

## File: src/components/customer/profil/profileForm.tsx
````typescript
"use client";

import { useState } from "react";
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Divider,
  Text,
  Anchor,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useForm, schemaResolver } from "@mantine/form";

import { updateProfileSchema } from "@/lib/validation/profile.validation";
import { ApiError } from "@/lib/api/axios";
import { useUpdateProfile } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

export function ProfileForm() {
  const { user } = useAuthStore();
  const [showPasswordFields, setShowPasswordFields] = useState(false);

  const { mutate, isPending } = useUpdateProfile();

  const form = useForm({
    initialValues: {
      name: user?.name ?? "",
      phone: user?.phone ?? "",
      currentPassword: "",
      newPassword: "",
    },
    validate: schemaResolver(updateProfileSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Profil berhasil diperbarui.",
          color: "green",
        });

        form.setFieldValue("currentPassword", "");
        form.setFieldValue("newPassword", "");
        setShowPasswordFields(false);
      },

      onError: (error) => {
        const message =
          error instanceof ApiError
            ? error.code === "CURRENT_PASSWORD_INVALID"
              ? "Password saat ini salah."
              : error.code === "GOOGLE_ACCOUNT_NO_PASSWORD"
                ? "Akun Google tidak memiliki password lokal."
                : error.message
            : "Gagal memperbarui profil.";

        notifications.show({
          title: "Gagal",
          message,
          color: "red",
        });
      },
    });
  });

  return (
    <form onSubmit={submit}>
      <Stack gap="md">
        <TextInput
          label="Nama Lengkap"
          required
          placeholder={user?.name}
          {...form.getInputProps("name")}
        />

        <TextInput
          label="Nomor Telepon"
          placeholder={user?.phone || "08xxxxxxxxxx"}
          {...form.getInputProps("phone")}
        />

        <Divider />

        {showPasswordFields ? (
          <Stack gap="md">
            <Text
              size="sm"
              fw={600}
              style={{ color: "var(--color-text-primary)" }}
            >
              Ganti Password
            </Text>

            <PasswordInput
              label="Password Saat Ini"
              {...form.getInputProps("currentPassword")}
            />

            <PasswordInput
              label="Password Baru"
              placeholder="Minimal 8 karakter"
              {...form.getInputProps("newPassword")}
            />

            <Anchor
              size="sm"
              c="var(--color-text-secondary)"
              onClick={() => {
                setShowPasswordFields(false);
                form.setFieldValue("currentPassword", "");
                form.setFieldValue("newPassword", "");
              }}
            >
              Batal ganti password
            </Anchor>
          </Stack>
        ) : (
          <Anchor
            size="sm"
            c="var(--color-primary)"
            onClick={() => setShowPasswordFields(true)}
          >
            Ganti password
          </Anchor>
        )}

        <Button
          type="submit"
          loading={isPending}
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Simpan Perubahan
        </Button>
      </Stack>
    </form>
  );
}
````

## File: src/components/customer/profil/profilePhotoUpload.tsx
````typescript
"use client";

import { useRef, useState } from "react";
import { Avatar, Button, Stack } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { ApiError } from "@/lib/api/axios";
import { useUpdateProfilePhoto } from "@/hooks/profile.hooks";
import { useAuthStore } from "@/stores/useAuthStore";

export function ProfilePhotoUpload() {
  const { user } = useAuthStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { mutate, isPending } = useUpdateProfilePhoto();

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    mutate(file, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Foto profil berhasil diperbarui.",
          color: "green",
        });

        URL.revokeObjectURL(preview);
        setPreviewUrl(null);
      },

      onError: (error) => {
        setPreviewUrl(null);
        URL.revokeObjectURL(preview);

        const message =
          error instanceof ApiError
            ? error.code === "FILE_TOO_LARGE"
              ? "Ukuran file maksimal 1 MB."
              : error.code === "FILE_TYPE_INVALID"
                ? "Format file tidak didukung."
                : error.message
            : "Gagal memperbarui foto profil.";

        notifications.show({
          title: "Gagal",
          message,
          color: "red",
        });
      },
    });
    e.target.value = "";
  }

  return (
    <Stack gap="sm" align="center">
      <Avatar
        src={previewUrl ?? user?.profilePhotoUrl}
        size={96}
        radius="50%"
        style={{
          backgroundColor: "var(--color-primary-light)",
        }}
      >
        {user?.name?.charAt(0).toUpperCase()}
      </Avatar>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/gif"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <Button
        variant="outline"
        size="xs"
        loading={isPending}
        onClick={() => inputRef.current?.click()}
      >
        Ganti Foto
      </Button>
    </Stack>
  );
}
````

## File: src/components/field-ops/shared/BottomNav.tsx
````typescript
"use client";

import { Box, Indicator, Stack, Text, UnstyledButton } from "@mantine/core";

import { IconCalendarCheck, IconClipboardList, IconHistory, IconHome, IconUser } from "@tabler/icons-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    stroke?: number;
  }>;
  isTask?: boolean;
};

type BottomNavProps = {
  basePath: string;
  tugasNew?: boolean;
  onTaskOpen?: () => void;
};

function buildNavItems(basePath: string): NavItem[] {
  return [
    {
      label: "Beranda",
      href: basePath,
      icon: IconHome,
    },
    {
      label: "Tugas",
      href: `${basePath}/tugas`,
      icon: IconClipboardList,
      isTask: true,
    },
    {
      label: "Riwayat",
      href: `${basePath}/riwayat`,
      icon: IconHistory,
    },
    {
      label: "Absensi",
      href: `${basePath}/absensi`,
      icon: IconCalendarCheck,
    },
    {
      label: "Profil",
      href: `${basePath}/profil`,
      icon: IconUser,
    },
  ];
}

export function BottomNav({ basePath, tugasNew = false, onTaskOpen }: BottomNavProps) {
  const pathname = usePathname();

  const items = buildNavItems(basePath);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-around",
        borderTop: "1px solid var(--mantine-color-gray-3)",
        background: "var(--mantine-color-body)",
        paddingTop: 6,
        paddingBottom: 6,
      }}
    >
      {items.map((item) => {
        const active = item.href === basePath ? pathname === basePath : pathname.startsWith(item.href);

        const Icon = item.icon;

        return (
          <UnstyledButton
            key={item.href}
            component={Link}
            href={item.href}
            onClick={item.isTask ? onTaskOpen : undefined}
            style={{
              minWidth: 64,
              minHeight: 44,
            }}
          >
            <Stack gap={2} align="center">
              {item.isTask ? (
                <Indicator inline label="New" size={16} disabled={!tugasNew}>
                  <Icon size={22} stroke={active ? 2.2 : 1.6} />
                </Indicator>
              ) : (
                <Icon size={22} stroke={active ? 2.2 : 1.6} />
              )}

              <Text size="10px" fw={active ? 700 : 400} c={active ? "blue.7" : "dimmed"}>
                {item.label}
              </Text>
            </Stack>
          </UnstyledButton>
        );
      })}
    </Box>
  );
}
````

## File: src/components/field-ops/shared/FieldOpsProfile.tsx
````typescript
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
````

## File: src/components/internalAuth/EmployeeLoginForm.tsx
````typescript
"use client";

import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { schemaResolver, useForm } from "@mantine/form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  employeeLoginSchema,
  EmployeeLoginSchema,
} from "@/lib/validation/auth.validation";
import { ApiError } from "@/lib/api/axios";
import { getEmployeeHome } from "@/utils";

import { useLoginEmployee } from "@/hooks/authEmployee.hooks";

export function EmployeeLoginForm() {
  const router = useRouter();
  const { mutate, isPending } = useLoginEmployee();

  const form = useForm<EmployeeLoginSchema>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: schemaResolver(employeeLoginSchema),
  });

  const submit = form.onSubmit((values) => {
    mutate(values, {
      onSuccess: (employee) => {
        notifications.show({
            title: "Berhasil",
            message: "Login berhasil.",
            color: "green"
        })
        router.push(getEmployeeHome(employee.role));
      },

      onError: (error) => {
        const message =
          error instanceof ApiError
            ? error.message
            : "Gagal login. Silakan coba lagi.";

        notifications.show({
          title: "Login gagal",
          message,
          color: "red",
        });
      },
    });
  });

  return (
    <Stack gap="md">
      <div>
        <Title order={3}>Login Internal</Title>

        <Text size="sm" c="dimmed">
          Masuk untuk mengakses portal operasional Popo Laundry.
        </Text>
      </div>

      <form onSubmit={submit}>
        <Stack gap="md">
          <TextInput
            label="Email"
            placeholder="Masukkan email"
            type="email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Masukkan password"
            {...form.getInputProps("password")}
          />

          <Button type="submit" fullWidth loading={isPending}>
            Login
          </Button>
        </Stack>
      </form>

      <Anchor component={Link} href="/internal/forgot-password" ta="center">
        Lupa password?
      </Anchor>
    </Stack>
  );
}
````

## File: src/components/shared/Footer.tsx
````typescript
import { Box, Container, Flex, Stack, Text, Title } from "@mantine/core";

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "var(--color-text-primary)",
        color: "var(--color-background)",
      }}
    >
      <Container size="lg" py={40} px={{ base: 20}}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          gap={{ base: 32, sm: 0 }}
        >
          <Stack gap={6}>
            <Title order={4} c="var(--color-background)">
              Popo Laundry
            </Title>
            <Text size="sm" opacity={0.75}>
              Laundry dijemput, diproses, dan diantar kembali bersih, rapi,
              tepat waktu.
            </Text>
          </Stack>

          <Stack gap={6} ta={{ base: "left", sm: "right" }}>
            <Text fw={600} size="md">
              Kontak
            </Text>
            <Text size="sm" opacity={0.75}>
              halo@popolaundry.id
            </Text>
            <Text size="sm" opacity={0.75}>
              +62 812-0000-0000
            </Text>
          </Stack>
        </Flex>

        <Text size="xs" opacity={0.5} mt={40}>
          © {new Date().getFullYear()} Popo Laundry. Seluruh hak cipta
          dilindungi.
        </Text>
      </Container>
    </Box>
  );
}
````

## File: src/hooks/dashboard.hooks.ts
````typescript
import { useQuery } from "@tanstack/react-query";
import { DashboardQuery } from "@/types/api/dashboard.types";
import { DashboardApi } from "@/lib/api/dashboard.api";

const dashboardApi = new DashboardApi();

export function useDashboard(params?: DashboardQuery) {
  return useQuery({
    queryKey: ["dashboard", params],
    queryFn: () => dashboardApi.getDashboard(params),
    refetchInterval: 30_000,
    refetchOnWindowFocus: true
  });
}
````

## File: src/hooks/driver.hooks.ts
````typescript
import { DriverApi } from "@/lib/api/driver.api";
import type { DriverAvailableQuery, DriverHistoryQuery, TaskType } from "@/types/api/driver.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

export const DRIVER_QUERY_KEY = ["driver"] as const;
export const DRIVER_AVAILABLE_QUERY_KEY = [...DRIVER_QUERY_KEY, "available"] as const;
export const DRIVER_ACTIVE_QUERY_KEY = [...DRIVER_QUERY_KEY, "active"] as const;
export const DRIVER_HISTORY_QUERY_KEY = [...DRIVER_QUERY_KEY, "history"] as const;

type TaskTypeFilter = TaskType | "ALL";
const driverApi = new DriverApi();

export function useAvailable() {
  const AVAILABLE_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [taskType, setTaskType] = useState<TaskTypeFilter>("ALL");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: DriverAvailableQuery = {
    page: page,
    pageSize: AVAILABLE_PAGE_SIZE,
    ...(taskType !== "ALL" && { taskType }),
    sortOrder: sortOrder,
  };

  const availableQuery = useQuery({
    queryKey: [...DRIVER_AVAILABLE_QUERY_KEY, query],
    queryFn: () => driverApi.getAvailable(query),
  });

  function handlerTaskTypeFilter(value: string | null) {
    if (!value) return;
    setTaskType(value as TaskTypeFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }

  return {
    availableQuery,
    page,
    taskType,
    sortOrder,
    setPage,
    handlerTaskTypeFilter,
    handleSortChange,
  };
}

export function useClaim() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.claim(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil diambil",
        message: "Tugas telah menjadi tugas aktif Anda",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal mengambil tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useActive() {
  return useQuery({
    queryKey: DRIVER_ACTIVE_QUERY_KEY,
    queryFn: () => driverApi.getActive(),
  });
}

export function useStart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.startAssignment(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil dimulai",
        message: "Silakan mengerjakan tugas dengan aman!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_ACTIVE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal memulai tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function usePickup() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.pickupCollected(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Pickup berhasil!",
        message: "Silakan antar laundry ke outlet.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_ACTIVE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal melakukan pickup",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useCompleteDelivery() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => driverApi.completeDelivery(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Pengantaran selesai",
        message: "Tugas telah berhasil diselesaikan.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: DRIVER_QUERY_KEY }); // invalidatenya ke key utama karena setelah complete otomatis trigger cache historylist.
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal menyelesaikan pengantaran",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useHistoryList() {
  const HISTORY_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [taskType, setTaskType] = useState<TaskTypeFilter>("ALL");
  const [period, setPeriod] = useState<string>(() => dayjs().format("YYYY-MM"));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // query params
  const query: DriverHistoryQuery = {
    page: page,
    pageSize: HISTORY_PAGE_SIZE,
    period,
    ...(taskType !== "ALL" && { taskType }),
    sortOrder,
  };
  const historyQuery = useQuery({
    queryKey: [...DRIVER_HISTORY_QUERY_KEY, query],
    queryFn: () => driverApi.getHistoryList(query),
  });

  function handlePeriodChange(value: string) {
    setPeriod(value);
    setPage(1);
  }

  function handleTaskTypeFilter(value: string | null) {
    if (!value) return;
    setTaskType(value as TaskTypeFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }

  return {
    historyQuery,

    page,
    period,
    taskType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleTaskTypeFilter,
    handleSortChange,
  };
}

export function useHistoryDetail(assignmentId: string) {
  return useQuery({
    queryKey: [...DRIVER_HISTORY_QUERY_KEY, "detail", assignmentId],
    queryFn: () => driverApi.getHistoryDetail(assignmentId),
  });
}
````

## File: src/hooks/laundry-item.hooks.ts
````typescript
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { LaundryItemApi } from "@/lib/api/laundry-item.api";
import type { CreateLaundryItemPayload, LaundryItem, LaundryItemQuery, UpdateLaundryItemPayload } from "@/types/api/laundry-item.types";
import { schemaResolver, useForm } from "@mantine/form";
import { filterLaundryItemSchema, FilterLaundryItemValues } from "@/lib/validation/laundry-item.validation";

const laundryItemApi = new LaundryItemApi();

export const LAUNDRY_ITEMS_QUERY_KEY = ["laundry-items"];

export function useLaundryItems(params?: LaundryItemQuery, options?: {enabled?: boolean}) {
  return useQuery({
    queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, params],
    queryFn: () => laundryItemApi.getLaundryItems(params),
    enabled: options?.enabled,
  });
}

export function useLaundryItem(laundryItemId: string) {
  return useQuery({
    queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, "detail", laundryItemId],
    queryFn: () => laundryItemApi.getLaundryItemById(laundryItemId),
    enabled: Boolean(laundryItemId),
  });
}

export function useCreateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateLaundryItemPayload) => laundryItemApi.createLaundryItem(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_ITEMS_QUERY_KEY,
      });
    },
  });
}

export function useUpdateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ laundryItemId, payload }: { laundryItemId: string; payload: UpdateLaundryItemPayload }) => laundryItemApi.updateLaundryItem(laundryItemId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_ITEMS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...LAUNDRY_ITEMS_QUERY_KEY, "detail", variables.laundryItemId],
      });
    },
  });
}

export function useDeactivateLaundryItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (laundryItemId: string) => laundryItemApi.deactivateLaundryItem(laundryItemId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: LAUNDRY_ITEMS_QUERY_KEY,
      });
    },
  });
}


export function useLaundryItemHooks() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [selectedItem, setSelectedItem] = useState<LaundryItem | null>(null);
  const form = useForm<FilterLaundryItemValues>({
    mode: "controlled",
    initialValues: {
      search: "",
      sortBy: "createdAt",
      sortOrder: "desc",
    },
    validate: schemaResolver(filterLaundryItemSchema),
    validateInputOnChange: true,
    onValuesChange: () => setPage(1),
  });
  const [debouncedSearch] = useDebouncedValue(form.values.search, 400);
  const laundryItems = useLaundryItems(
    {
      ...form.values,
      page,
      pageSize,
      search: debouncedSearch,
    },
    { enabled: !form.errors.search },
  );

  const deactivateLaundryItem = useDeactivateLaundryItem();

  const handleReset = () => {
    form.reset();
    setPage(1);
  };

  const handleDeactivate = async () => {
    if (!selectedItem) return;

    await deactivateLaundryItem.mutateAsync(selectedItem.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Item laundry berhasil dinonaktifkan.",
          color: "green",
        });

        setSelectedItem(null);
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal menonaktifkan item laundry.",
          color: "red",
        });
      },
    });
  };

  return {
    router,
    form,
    setPage,
    handleReset,
    laundryItems,
    setPageSize,
    setSelectedItem,
    selectedItem,
    deactivateLaundryItem,
    handleDeactivate,
  };
}
````

## File: src/hooks/outlet.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OutletApi } from "@/lib/api/outlet.api";
import { CreateOutletPayload, Outlet, OutletQuery, UpdateOutletPayload } from "@/types/api/outlet.types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { schemaResolver, useForm } from "@mantine/form";
import { filterOutletSchema, FilterOutletValues } from "@/lib/validation/outlet.validation";

const outletApi = new OutletApi();
const OUTLETS_QUERY_KEY = ["outlets"];

export function useOutlets(query?: OutletQuery) {
  return useQuery({
    queryKey: [...OUTLETS_QUERY_KEY, query],
    queryFn: () => outletApi.getOutlets(query),
  });
}

export function useOutlet(outletId: string) {
  return useQuery({
    queryKey: [...OUTLETS_QUERY_KEY, "detail", outletId],
    queryFn: () => outletApi.getOutlet(outletId),
    enabled: Boolean(outletId),
  });
}

export function useCreateOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateOutletPayload) => outletApi.createOutlet(payload),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      }),
  });
}

export function useUpdateOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ outletId, payload }: { outletId: string; payload: UpdateOutletPayload }) => outletApi.updateOutlet(outletId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...OUTLETS_QUERY_KEY, "detail", variables.outletId],
      });
    },
  });
}

export function useDeleteOutlet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (outletId: string) => outletApi.deleteOutlet(outletId),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: OUTLETS_QUERY_KEY,
      }),
  });
}

export function useOutletHooks() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const form = useForm<FilterOutletValues>({
    mode: "controlled",
    initialValues: {
      search: "",
      sortBy: "createdAt",
      sortOrder: "desc",
    },
    validate: schemaResolver(filterOutletSchema),
    validateInputOnChange: true,
    onValuesChange: () => setPage(1),
  });

  const [debouncedSearch] = useDebouncedValue(form.values.search, 400);

  const outlets = useOutlets({
    ...form.values,
    page,
    pageSize,
    search: debouncedSearch,
  });
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(null);

  const deleteOutlet = useDeleteOutlet();

  const handleReset = () => {
    form.reset();
    setPage(1);
  };

  const handleDeactivate = async () => {
    if (!selectedOutlet) return null;
    await deleteOutlet.mutateAsync(selectedOutlet.id, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Outlet berhasil dinonaktifkan.",
          color: "green",
        });

        setSelectedOutlet(null);
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message: error instanceof Error ? error.message : "Gagal menonaktifkan outlet.",
          color: "red",
        });
      },
    });
  };
  return {
    router,
    form,
    setPage,
    handleReset,
    outlets,
    setPageSize,
    setSelectedOutlet,
    selectedOutlet,
    deleteOutlet,
    handleDeactivate,
  };
}
````

## File: src/hooks/profile.hooks.ts
````typescript
"use client";

import { ProfileApi } from "@/lib/api/profileCustomer.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AUTH_ME_QUERY_KEY } from "./authCustomer.hooks";

const profileApi = new ProfileApi();

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.updateProfile,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY }),
  });
}

export function useUpdateProfilePhoto() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.updateProfilePhoto,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY }),
  });
}

export function useRequestEmailChange() {
  return useMutation({ mutationFn: profileApi.requestEmailChange });
}

export function useConfirmEmailChange() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.confirmEmailChange,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: AUTH_ME_QUERY_KEY }),
  });
}
````

## File: src/lib/api/attendance.api.ts
````typescript
import type {
  AttendanceHistoryPaginated,
  AttendanceHistoryQuery,
  AttendanceStatusResponse,
  ClockInResponse,
  ClockOutResponse,
} from "@/types/api/attendance.types";
import { api } from "./axios";
import { ApiResponse } from "@/types/api";

// BASE_PATH ini mengarah ke endpoint di BE
const BASE_PATH = "/internal/attendance";

export class AttendanceApi {
  async clockIn() {
    const { data } = await api.post<ApiResponse<ClockInResponse>>(`${BASE_PATH}/clock-in`, {});
    return data.data;
  }

  async clockOut() {
    const { data } = await api.post<ApiResponse<ClockOutResponse>>(`${BASE_PATH}/clock-out`, {});
    return data.data;
  }

  async getStatus() {
    const { data } = await api.get<ApiResponse<AttendanceStatusResponse>>(`${BASE_PATH}/status`);
    return data.data;
  }

  async getHistory(query: AttendanceHistoryQuery) {
    const { data } = await api.get<AttendanceHistoryPaginated>(`${BASE_PATH}/history`, {
      params: query,
    });
    return { data: data.data, meta: data.meta };
  }
}
````

## File: src/lib/api/dashboard.api.ts
````typescript
import { ApiResponse } from "@/types/api";
import { api } from "./axios";
import { DashboardQuery, DashboardResponse } from "@/types/api/dashboard.types";

export class DashboardApi {
  async getDashboard(params?: DashboardQuery): Promise<DashboardResponse> {
    const response = await api.get<ApiResponse<DashboardResponse>>("/internal/dashboard", {
      params,
    });

    return response.data.data;
  }
}
````

## File: src/lib/api/profileCustomer.api.ts
````typescript
import {
  UpdatePhotoResponse,
  UpdateProfileResponse,
} from "@/types/api/profile.type";
import {
  MAX_PHOTO_SIZE_BYTES,
  profilePhotoSchema,
  UpdateEmailSchema,
  UpdateProfileSchema,
} from "../validation/profile.validation";
import { api, ApiError } from "./axios";
import { MessageResponse } from "@/types/api";

export class ProfileApi {
  async updateProfile(payload: UpdateProfileSchema) {
    const body: Record<string, string> = { name: payload.name! };
    if (payload.phone) body.phone = payload.phone;
    if (payload.newPassword) {
      body.newPassword = payload.newPassword;
      body.currentPassword = payload.currentPassword!;
    }
    const { data } = await api.patch<{ data: UpdateProfileResponse }>(
      "/profile/me",
      body,
    );
    return data.data;
  }

  async updateProfilePhoto(file: File) {
    const parsed = profilePhotoSchema.safeParse(file);
    if (!parsed.success) {
      const isTooLarge = file.size > MAX_PHOTO_SIZE_BYTES;
      const code = isTooLarge ? "FILE_TOO_LARGE" : "FILE_TYPE_INVALID";
      throw new ApiError(code, parsed.error.issues[0].message);
    }
    const formData = new FormData();
    formData.append("PROFILE_PHOTO", file);
    const { data } = await api.patch<{ data: UpdatePhotoResponse }>(
      "/profile/photo",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    return data.data;
  }

  async requestEmailChange(payload: UpdateEmailSchema) {
    const { data } = await api.patch<{ data: MessageResponse }>(
      "/profile/email",
      payload,
    );
    return data.data;
  }

  async confirmEmailChange(token: string) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/profile/email/confirm",
      { token },
    );
    return data.data;
  }
}
````

## File: src/lib/validation/auth.validation.ts
````typescript
import * as z from "zod"

export const loginCustomerSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Minimal 8 karakter"),
});

export const registerCustomerSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
});

export const emailVerificationSchema = z.object({
  name: z
    .string()
    .min(5, "Nama minimal 5 karakter")
    .max(150, "Nama maksimal 150 karakter"),
  password: z.string().min(8, "Kata sandi minimal 8 karakter"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Format email tidak valid"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  });

export const acceptInvitationSchema = z
  .object({
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string().min(1, "Konfirmasi password wajib diisi"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  });

export const employeeLoginSchema = z.object({
  email: z.string().email("Format email tidak valid."),
  password: z.string().min(1, "Password wajib diisi."),
});

export type LoginCustomerSchema = z.infer<typeof loginCustomerSchema>;
export type EmployeeLoginSchema = z.infer<typeof employeeLoginSchema>;
export type RegisterCustomerSchema = z.infer<typeof registerCustomerSchema>;
export type EmailVerificationSchema = z.infer<typeof emailVerificationSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
export type AcceptInvitationSchema = z.infer<typeof acceptInvitationSchema>;
````

## File: src/lib/validation/profile.validation.ts
````typescript
import * as z from "zod"

export const updateProfileSchema = z
  .object({
    name: z.string().min(1, "Nama tidak boleh kosong").max(100).optional(),
    phone: z
      .string()
      .min(8, "Nomor telepon tidak valid")
      .max(20)
      .optional()
      .or(z.literal("")),
    currentPassword: z.string().optional().or(z.literal("")),
    newPassword: z.string().optional().or(z.literal("")),
  })
  .refine((v) => (v.newPassword ? v.newPassword.length >= 8 : true), {
    message: "Password baru minimal 8 karakter",
    path: ["newPassword"],
  })
  .refine((v) => (v.newPassword ? !!v.currentPassword : true), {
    message: "Password saat ini wajib diisi untuk mengganti password",
    path: ["currentPassword"],
  });

export const updateEmailSchema = z.object({
  newEmail: z.string().email("Format email tidak valid"),
});

const ALLOWED_PHOTO_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];
export const MAX_PHOTO_SIZE_BYTES = 1 * 1024 * 1024;

export const profilePhotoSchema = z
  .instanceof(File, { message: "File wajib diunggah" })
  .refine((file) => ALLOWED_PHOTO_TYPES.includes(file.type), {
    message: "Hanya menerima file .jpg, .jpeg, .png, atau .gif.",
  })
  .refine((file) => file.size <= MAX_PHOTO_SIZE_BYTES, {
    message: "Ukuran file maksimal 1 MB.",
  });

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;
export type UpdateEmailSchema = z.infer<typeof updateEmailSchema>;
````

## File: src/types/api/laundry-item.types.ts
````typescript
export type LaundryItem = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type LaundryItemQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};

export type CreateLaundryItemPayload = {
  name: string;
};

export type UpdateLaundryItemPayload = {
  name: string;
};
````

## File: src/app/(customer)/alamat/page.tsx
````typescript
"use client";


import { Title, Text, Stack, Anchor, Group } from "@mantine/core";
import { AddressList } from "@/components/customer/alamat/AddressList";
import { useRouter, useSearchParams } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function AddressesPage() {
  const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
  
    function handleBack() {
      if (from) {
        router.replace(from);
        return;
      }
  
      router.back();
    }
  return (
    <Stack gap="xl" mx="auto" p={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>
      <div>
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Alamat Saya
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Kelola alamat pickup dan delivery kamu, maksimal 5 alamat tersimpan.
        </Text>
      </div>

      <AddressList />
    </Stack>
  );
}
````

## File: src/app/(customer)/pesanan/[id]/komplain/page.tsx
````typescript
"use client";

import { useParams, useRouter } from "next/navigation";
import { Stack, Title, Anchor, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { ComplaintForm } from "@/components/customer/order/complaint/complaintForm";
import { ComplaintDetail } from "@/components/customer/order/complaint/complaintDetail";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useOrderDetail } from "@/hooks/order/order.hooks";

export default function ComplaintPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderDetail(params.id);

  function handleBack() {
    router.replace(`/pesanan/${params.id}`);
  }

  return (
    <Stack gap="xl" mx="auto" p={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft stroke={2} />
          Kembali ke Detail Pesanan
        </Group>
      </Anchor>

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={order}
        onRetry={() => refetch()}
        emptyTitle="Order tidak ditemukan"
        emptyDescription="Order ini mungkin sudah dihapus atau bukan milik akun kamu."
      >
        {(order) =>
          order.complaint ? (
            <>
              <Title order={3} style={{ color: "var(--color-text-primary)" }}>
                Status Komplain
              </Title>
              <ComplaintDetail complaint={order.complaint} />
            </>
          ) : (
            <>
              <Title order={3} style={{ color: "var(--color-text-primary)" }}>
                Ajukan Komplain
              </Title>
              <ComplaintForm
                id={params.id}
                onSuccess={() => router.replace(`/pesanan/${params.id}/komplain`)}
                onCancel={handleBack}
              />
            </>
          )
        }
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/app/(customer)/profil/edit/page.tsx
````typescript
"use client";

import { EmailChangeForm } from "@/components/customer/profil/emailChangeForm";
import { ProfileForm } from "@/components/customer/profil/profileForm";
import { ProfilePhotoUpload } from "@/components/customer/profil/profilePhotoUpload";
import { Paper, Stack, Divider, Anchor, Group } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from");

  function handleBack() {
    router.replace(
      from ? `/profil?from=${encodeURIComponent(from)}` : "/profil",
    );
  }
  
  return (
    <Paper
      maw={480}
      mx="auto"
      p={32}
      radius="md"
      withBorder
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Stack gap="xl">
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--c-text-primary"
        >
          <Group gap={2}>
            <IconChevronLeft stroke={2} />
            Profil Saya
          </Group>
        </Anchor>

        <ProfilePhotoUpload />

        <Divider />

        <ProfileForm />

        <Divider />

        <EmailChangeForm />
      </Stack>
    </Paper>
  );
}
````

## File: src/app/(customer)/request-pickup/page.tsx
````typescript
"use client";

import { Title, Text, Stack, Anchor, Group } from "@mantine/core";
import { RequestPickupForm } from "@/components/customer/order/RequestPickup/requestPickupForm ";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";

export default function RequestPickupPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  function handleBack() {
    if (from) {
      router.replace(from);
      return;
    }

    router.back();
  }
  return (
    <Stack gap="xl" mx="auto" py={{ base: 16, sm: 32 }}>
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--color-text-primary)"
      >
        <Group gap={2}>
          <IconChevronLeft size={16} stroke={2} />
          Kembali
        </Group>
      </Anchor>
      <div>
        <Title order={3} style={{ color: "var(--color-text-primary)" }}>
          Request Pickup
        </Title>
        <Text size="sm" c="var(--color-text-secondary)">
          Pilih alamat dan jadwal, tim kami akan menjemput laundry kamu.
        </Text>
      </div>
      <RequestPickupForm />
    </Stack>
  );
}
````

## File: src/app/internal/(back-office)/layout.tsx
````typescript
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";
import { BackOfficeNotificationWatcher } from "@/components/back-office/shared/BackOfficeNotificationWatcher";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["OUTLET_ADMIN", "SUPER_ADMIN"]}>
      <BackOfficeNotificationWatcher />

      {children}
    </AuthGateEmployee>
  );
}
````

## File: src/app/internal/(field-ops)/driver/absensi/page.tsx
````typescript
"use client";
import {  Stack  } from "@mantine/core";
import { AttendanceStatusCard } from "@/components/field-ops/shared/AttendanceStatusCard";
import { AttendanceHistory } from "@/components/field-ops/shared/AttendanceHistory";

export default function Page() {
  return (
    <Stack gap="md">
      <AttendanceStatusCard />

      <AttendanceHistory/>
    </Stack>
  );
}
````

## File: src/app/internal/(field-ops)/driver/layout.tsx
````typescript
import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGateEmployee allowedRoles={["DRIVER"]}>
      <FieldOpsAppShell role="Driver" basePath="/internal/driver">
        {children}
      </FieldOpsAppShell>
    </AuthGateEmployee>
  );
}
````

## File: src/app/internal/(field-ops)/worker/absensi/page.tsx
````typescript
"use client";
import {  Stack  } from "@mantine/core";
import { AttendanceStatusCard } from "@/components/field-ops/shared/AttendanceStatusCard";
import { AttendanceHistory } from "@/components/field-ops/shared/AttendanceHistory";

export default function Page() {
  return (
    <Stack gap="md">
      <AttendanceStatusCard />

      <AttendanceHistory/>
    </Stack>
  );
}
````

## File: src/app/internal/(field-ops)/worker/layout.tsx
````typescript
import { FieldOpsAppShell } from "@/components/field-ops/shared/FieldOpsAppShell";
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["WORKER"]}>
      <FieldOpsAppShell role="Worker" basePath="/internal/worker">
        {children}
      </FieldOpsAppShell>
    </AuthGateEmployee>
  );
}
````

## File: src/app/internal/(field-ops)/layout.tsx
````typescript
import { AuthGateEmployee } from "@/lib/auth/AuthGateEmployee";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateEmployee allowedRoles={["DRIVER", "WORKER"]}>
      {children}
    </AuthGateEmployee>
  );
}
````

## File: src/components/back-office/dashboard/DashboardSummary.tsx
````typescript
import { Grid, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCash, IconCircleCheck, IconClipboardList, IconClock } from "@tabler/icons-react";
import type { DashboardSummary as DashboardSummaryType } from "@/types/api/dashboard.types";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export function DashboardSummary({ summary }: { summary: DashboardSummaryType }) {
  const items = [
    {
      label: "Total Pesanan",
      value: summary.totalOrders.toLocaleString("id-ID"),
      icon: IconClipboardList,
      color: "rinseBlue",
    },
    {
      label: "Pesanan Aktif",
      value: summary.activeOrders.toLocaleString("id-ID"),
      icon: IconClock,
      color: "orange",
    },
    {
      label: "Pesanan Selesai",
      value: summary.completedOrders.toLocaleString("id-ID"),
      icon: IconCircleCheck,
      color: "green",
    },
    {
      label: "Total Pendapatan",
      value: formatCurrency(summary.totalRevenue),
      icon: IconCash,
      color: "teal",
    },
  ];

  return (
    <Grid gap={"md"}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Grid.Col key={item.label} span={{ base: 12, sm: 6, lg: 3 }}>
            <Paper
              withBorder
              radius="md"
              p="md"
              h="100%"
              style={{
                backgroundColor: "var(--color-surface)",
              }}
            >
              <Group justify="space-between" align="flex-start" wrap="nowrap">
                <Stack gap={4} style={{ minWidth: 0 }}>
                  <Text size="sm" fw={500} c="var(--color-text-secondary)">
                    {item.label}
                  </Text>

                  <Text
                    size="xl"
                    fw={700}
                    c="var(--color-text-primary)"
                    style={{
                      lineHeight: 1.25,
                      overflowWrap: "anywhere",
                    }}
                  >
                    {item.value}
                  </Text>
                </Stack>

                <ThemeIcon
                  size={40}
                  radius="md"
                  variant="light"
                  color={item.color}
                  style={{
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} stroke={1.8} />
                </ThemeIcon>
              </Group>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
````

## File: src/components/back-office/dashboard/OrderOverview.tsx
````typescript
import { Group, Paper, Progress, Stack, Text } from "@mantine/core";
import { OrderOverviewItem } from "@/types/api/dashboard.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

export function OrderOverview({ data }: { data: OrderOverviewItem[] }) {
  const total = data.reduce((sum, item) => sum + item.total, 0);
  const sortedData = [...data].sort((a, b) => b.total - a.total);

  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="lg">
        <div>
          <Text fw={600} c="var(--color-text-primary)">
            Status Pesanan
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Distribusi pesanan saat ini
          </Text>
        </div>

        <Stack gap="sm">
          {sortedData.map((item) => {
            const percentage = total > 0 ? (item.total / total) * 100 : 0;

            return (
              <Stack key={item.status} gap={5}>
                <Group justify="space-between" wrap="nowrap">
                  <Text size="sm" c="var(--color-text-primary)">
                    {CUSTOMER_STATUS[item.status].label}
                  </Text>

                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {item.total}
                  </Text>
                </Group>

                <Progress value={percentage} size={4} radius="xl" color={CUSTOMER_STATUS[item.status].color} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/dashboard/PendingReceive.tsx
````typescript
import { Badge, Button, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconTruckDelivery } from "@tabler/icons-react";
import { DashboardResponse } from "@/types/api/dashboard.types";

type Props = {
  data: DashboardResponse["pendingReceive"];
  onSelect: (orderId: string) => void;
  onViewAll: () => void;
};

export function PendingReceive({ data, onSelect, onViewAll }: Props) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon size={40} radius="md" variant="light" color="orange" style={{ flexShrink: 0 }}>
              <IconTruckDelivery size={20} />
            </ThemeIcon>

            <div>
              <Text fw={600} c="var(--color-text-primary)">
                Menunggu Penerimaan
              </Text>

              <Text size="sm" c="var(--color-text-secondary)">
                Laundry sedang menuju outlet
              </Text>
            </div>
          </Group>

          <Group gap="xs">
            <Badge color="orange" variant="light" radius="sm">
              {data.total}
            </Badge>
            <Button variant="subtle" size="xs" onClick={onViewAll}>
              Lihat
            </Button>
          </Group>
        </Group>

        {data.items.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Tidak ada pesanan yang perlu diterima.
          </Text>
        ) : (
          <Stack gap="sm">
            {data.items.map((item) => (
              <Paper
                key={item.id}
                p="sm"
                radius="sm"
                withBorder
                onClick={() => onSelect(item.id)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <Text size="sm" fw={600} c="var(--color-text-primary)">
                  {item.orderCode}
                </Text>

                <Text size="sm" c="var(--color-text-secondary)">
                  {item.customerName}
                </Text>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/dashboard/RevenueTrendChart.tsx
````typescript
"use client";

import { Paper, Stack, Text } from "@mantine/core";
import { AreaChart } from "@mantine/charts";
import type { RevenueTrendItem } from "@/types/api/dashboard.types";

interface RevenueTrendChartProps {
  data: RevenueTrendItem[];
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

const formatCompactCurrency = (value: number) => {
  if (value >= 1_000_000) {
    return `Rp${value / 1_000_000} jt`;
  }

  if (value >= 1_000) {
    return `Rp${value / 1_000} rb`;
  }

  return `Rp${value}`;
};

export function RevenueTrendChart({ data }: RevenueTrendChartProps) {
  const chartData = data.map((item) => ({
    ...item,
    date: new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    }).format(new Date(`${item.date}T00:00:00`)),
  }));

  const highestRevenue = Math.max(...data.map((item) => item.revenue), 0);

  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="sm">
        <div>
          <Text fw={600} c="var(--color-text-primary)">
            Tren Pendapatan
          </Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Pendapatan 7 hari terakhir
          </Text>
        </div>

        <AreaChart
          h={300}
          data={chartData}
          dataKey="date"
          series={[
            {
              name: "revenue",
              label: "Pendapatan",
              color: "rinseBlue",
            },
          ]}
          curveType="linear"
          valueFormatter={formatCurrency}
          withLegend={false}
          withTooltip
          yAxisProps={{
            width: 70,
            tickFormatter: formatCompactCurrency,
          }}
          tooltipProps={{
            content: ({ label, payload }) => {
              if (!payload?.length) {
                return null;
              }

              const revenue = payload[0]?.value;

              return (
                <Paper withBorder shadow="sm" radius="md" p="sm">
                  <Text size="sm" fw={600}>
                    {label}
                  </Text>

                  <Text size="xs" c="var(--color-text-secondary)">
                    Pendapatan
                  </Text>

                  <Text fw={700}>{formatCurrency(Number(revenue ?? 0))}</Text>
                </Paper>
              );
            },
          }}
        />

        <Text size="sm" c="var(--color-text-secondary)">
          Pendapatan tertinggi:{" "}
          <Text span fw={600} c="var(--color-text-primary)">
            {formatCurrency(highestRevenue)}
          </Text>
        </Text>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/employee/EmployeeInformation.tsx
````typescript
"use client";

import { ActionIcon, Button, Group, Modal, Paper, Select, Stack, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useUpdateEmployee } from "@/hooks/employee.hooks";
import { Employee } from "@/types/api/employee.types";
import { useState } from "react";
import { EmployeeRole } from "@/types/api";

type Props = {
  employee: Employee;
};

const ROLE_LABEL: Record<EmployeeRole, string> = {
  OUTLET_ADMIN: "Outlet Admin",
  WORKER: "Worker",
  DRIVER: "Driver",
};

export function EmployeeInformation({ employee }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const [name, setName] = useState(employee.name);
  const [role, setRole] = useState<EmployeeRole>(employee.role);
  const updateEmployee = useUpdateEmployee();

  const handleSubmit = () => {
    updateEmployee.mutate(
      {
        employeeId: employee.id,
        payload: {
          name,
          role,
        },
      },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Informasi karyawan berhasil diperbarui.",
            color: "green",
          });

          close();
        },

        onError: (error) => {
          notifications.show({
            title: "Gagal memperbarui karyawan",
            message: error instanceof Error ? error.message : "Terjadi kesalahan.",
            color: "red",
          });
        },
      },
    );
  };

  return (
    <>
      <Paper
        withBorder
        radius="md"
        p="lg"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <Group justify="space-between">
            <Text fw={600}>Informasi Karyawan</Text>

            <ActionIcon variant="subtle" onClick={open} aria-label="Edit informasi">
              <IconEdit size={18} />
            </ActionIcon>
          </Group>

          <Group grow>
            <Stack gap={2}>
              <Text size="xs" c="var(--color-text-secondary)">
                Nama
              </Text>

              <Text size="sm" fw={500}>
                {employee.name}
              </Text>
            </Stack>

            <Stack gap={2}>
              <Text size="xs" c="var(--color-text-secondary)">
                Email
              </Text>

              <Text size="sm" fw={500}>
                {employee.email}
              </Text>
            </Stack>

            <Stack gap={2}>
              <Text size="xs" c="var(--color-text-secondary)">
                Role
              </Text>

              <Text size="sm" fw={500}>
                {ROLE_LABEL[employee.role]}
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Paper>

      <Modal opened={opened} onClose={close} title="Edit Informasi Karyawan" centered>
        <Stack gap="md">
          <TextInput label="Nama" value={name} onChange={(event) => setName(event.currentTarget.value)} />

          <Select
            label="Role"
            value={role}
            onChange={(value) => value && setRole(value as EmployeeRole)}
            data={[
              {
                value: "OUTLET_ADMIN",
                label: "Outlet Admin",
              },
              {
                value: "WORKER",
                label: "Worker",
              },
              {
                value: "DRIVER",
                label: "Driver",
              },
            ]}
          />

          <Group justify="flex-end">
            <Button variant="default" onClick={close} disabled={updateEmployee.isPending}>
              Batal
            </Button>

            <Button onClick={handleSubmit} loading={updateEmployee.isPending}>
              Simpan Perubahan
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
}
````

## File: src/components/back-office/laundry-item/LaundryItemFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { UseFormReturnType } from "@mantine/form";
import { FilterLaundryItemValues } from "@/lib/validation/laundry-item.validation";

type Props = {
  form: UseFormReturnType<FilterLaundryItemValues>;
  onReset: () => void;
};

export function LaundryItemFilters({ form, onReset }: Props) {
  return (
    <Group align="flex-end" wrap="wrap">
      <TextInput label="Cari" placeholder="Cari nama item..." leftSection={<IconSearch size={16} />} {...form.getInputProps("search")} style={{ flex: 1, minWidth: 220 }} />

      <Select
        label="Urutkan"
        data={[
          {
            value: "createdAt",
            label: "Tanggal dibuat",
          },
          {
            value: "name",
            label: "Nama",
          },
        ]}
        w={180}
        {...form.getInputProps("sortBy")}
      />

      <Select
        label="Urutan"
        data={[
          {
            value: "desc",
            label: "Menurun",
          },
          {
            value: "asc",
            label: "Menaik",
          },
        ]}
        w={180}
        {...form.getInputProps("sortOrder")}
      />

      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
````

## File: src/components/back-office/laundry-item/LaundryItemTable.tsx
````typescript
"use client";

import { ActionIcon, Group, Menu, Table, Text } from "@mantine/core";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { formatDate } from "@/utils/dateFormatter";
import { PaginatedResponse } from "@/types/api";
import type { LaundryItem } from "@/types/api/laundry-item.types";

type Props = {
  data: LaundryItem[];
  meta: PaginatedResponse<LaundryItem>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onEdit: (item: LaundryItem) => void;
  onDeactivate: (item: LaundryItem) => void;
};

export function LaundryItemTable({ data, meta, onPageChange, onPageSizeChange, onEdit, onDeactivate }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={700}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama Item</Table.Th>
              <Table.Th>Dibuat</Table.Th>
              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((item) => (
              <Table.Tr key={item.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {item.name}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDate(item.createdAt)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Group justify="flex-end" gap={4}>
                    <Menu shadow="md" width={160} position="bottom-end">
                      <Menu.Target>
                        <ActionIcon variant="subtle" aria-label="Aksi item">
                          <IconDotsVertical size={18} />
                        </ActionIcon>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Item leftSection={<IconEdit size={16} />} onClick={() => onEdit(item)}>
                          Edit
                        </Menu.Item>

                        <Menu.Item color="red" leftSection={<IconTrash size={16} />} onClick={() => onDeactivate(item)}>
                          Nonaktifkan
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/outlet/OutletFilters.tsx
````typescript
import { FilterOutletValues } from "@/lib/validation/outlet.validation";
import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { IconRefresh, IconSearch } from "@tabler/icons-react";

interface OutletFiltersProps {
  form: UseFormReturnType<FilterOutletValues>;
  onReset: () => void;
}

export function OutletFilters({ form, onReset }: OutletFiltersProps) {
  return (
    <Group align="end" wrap="wrap" gap="sm">
      <TextInput
        label="Cari Outlet"
        placeholder="Cari nama outlet"
        leftSection={<IconSearch size={16} />}
        {...form.getInputProps('search')}
        style={{ flex: 1, minWidth: 280 }}
      />

      <Select
        label="Urutkan"
        data={[
          {
            value: "createdAt",
            label: "Tanggal dibuat",
          },
          {
            value: "name",
            label: "Nama outlet",
          },
        ]}
        w={180}
        {...form.getInputProps('sortBy')}
      />

      <Select
        label="Urutan"
        data={[
          {
            value: "desc",
            label: "Menurun",
          },
          {
            value: "asc",
            label: "Menaik",
          },
        ]}
        w={180}
        {...form.getInputProps('sortOrder')}
      />

      <Tooltip label="Reset filter">
        <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
          <IconRefresh size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
````

## File: src/components/back-office/outlet/OutletTable.tsx
````typescript
import { ActionIcon, Badge, Table, Text, Group, Menu } from "@mantine/core";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { ServerPagination } from "@/components/ui/ServerPagination";
import type { Outlet } from "@/types/api/outlet.types";
import { PaginatedResponse } from "@/types/api";
import { formatDate } from "@/utils/dateFormatter";

interface OutletTableProps {
  data: Outlet[];
  meta: PaginatedResponse<Outlet>["meta"];
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: 10 | 20 | 50) => void;
  onEdit: (id: string) => void;
  onDelete: (outlet: Outlet) => void;
}

export function OutletTable({ data, meta, onPageChange, onPageSizeChange, onEdit, onDelete }: OutletTableProps) {
  return (
    <>
      <Table.ScrollContainer minWidth={700}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama Outlet</Table.Th>
              <Table.Th>Alamat</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Dibuat</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((outlet) => (
              <Table.Tr key={outlet.id}>
                <Table.Td style={{ maxWidth: 180 }}>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {outlet.name}
                  </Text>
                </Table.Td>

                <Table.Td style={{ maxWidth: 280 }}>
                  <Text size="sm" c="var(--color-text-secondary)" lineClamp={1}>
                    {outlet.address}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge color={outlet.isActive ? "green" : "gray"} variant="light">
                    {outlet.isActive ? "Aktif" : "Tidak Aktif"}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDate(outlet.createdAt)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Group gap={4} justify="flex-end">
                    <Menu shadow="md" width={160} position="bottom-end">
                      <Menu.Target>
                        <ActionIcon variant="subtle" aria-label="Aksi item">
                          <IconDotsVertical size={18} />
                        </ActionIcon>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item leftSection={<IconEdit size={16} />} onClick={() => onEdit(outlet.id)}>
                          Edit
                        </Menu.Item>
                        {outlet.isActive && (
                          <Menu.Item color="red" leftSection={<IconTrash size={16} />} onClick={() => onDelete(outlet)}>
                            Nonaktifkan
                          </Menu.Item>
                        )}
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {data.length === 0 && <EmptyState />}

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/penerimaan/ReceptionFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import type { OrderQuery } from "@/types/api/order.types";

type ReceptionFiltersState = Pick<OrderQuery, "search" | "startDate" | "endDate">;

type Props = {
  query: OrderQuery;
  onChange: <Key extends keyof ReceptionFiltersState>(key: Key, value: ReceptionFiltersState[Key]) => void;
  onSortByChange: (value: NonNullable<OrderQuery["sortBy"]>) => void;
  onSortOrderChange: (value: NonNullable<OrderQuery["sortOrder"]>) => void;
  onReset: () => void;
};

const SORT_OPTIONS = [
  {
    value: "pickupScheduledAt",
    label: "Jadwal pickup",
  },
  {
    value: "createdAt",
    label: "Tanggal dibuat",
  },
  {
    value: "orderCode",
    label: "Kode pesanan",
  },
];

export function ReceptionFilters({ query, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <>
      <Group align="end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Kode pesanan atau pelanggan"
          leftSection={<IconSearch size={16} />}
          value={query.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || undefined)}
          style={{ flex: 1, minWidth: 280 }}
        />
        <Select
          label="Urutkan"
          value={query.sortBy ?? "pickupScheduledAt"}
          data={SORT_OPTIONS}
          onChange={(value) => {
            if (value === "createdAt" || value === "pickupScheduledAt" || value === "orderCode") {
              onSortByChange(value);
            }
          }}
          w={180}
        />

        <Select
          label="Urutan"
          value={query.sortOrder ?? "asc"}
          data={[
            {
              value: "asc",
              label: "Menaik",
            },
            {
              value: "desc",
              label: "Menurun",
            },
          ]}
          onChange={(value) => {
            if (value === "asc" || value === "desc") {
              onSortOrderChange(value);
            }
          }}
          w={180}
        />

        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Group align="flex-end">
        <DatePickerInput
          label="Dari Tanggal"
          placeholder="Pilih tanggal"
          clearable
          value={query.startDate ?? null}
          valueFormat="DD MMM YYYY"
          onChange={(value) => onChange("startDate", value ?? undefined)}
          w={180}
        />

        <DatePickerInput
          label="Sampai Tanggal"
          placeholder="Pilih tanggal"
          clearable
          value={query.endDate ?? null}
          valueFormat="DD MMM YYYY"
          onChange={(value) => onChange("endDate", value ?? undefined)}
          w={180}
        />
      </Group>
    </>
  );
}
````

## File: src/components/customer/CustomerAppShell.tsx
````typescript
"use client";
import {Box} from "@mantine/core";
import Header from "../shared/Headers/Header";
import Footer from "../shared/Footer";

export function CustomerAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Box
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Box component="main" style={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
}
````

## File: src/components/field-ops/driver/DriverAvailableAssignment.tsx
````typescript
"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { useAvailable, useClaim } from "@/hooks/driver.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";

import { ActionIcon, Badge, Button, Card, Group, Pagination, Paper, Select, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";

import { IconArrowNarrowDown, IconArrowNarrowUp, IconClock, IconMapPin } from "@tabler/icons-react";

import { useRouter } from "next/navigation";

import { openActionConfirmModal } from "../shared/OpenActionConfirmModal";

const TASK_OPTION = [
  { value: "ALL", label: "Semua" },
  { value: "PICKUP", label: "Jemput" },
  { value: "DELIVERY", label: "Antar" },
];

function getTaskLabel(taskType: string) {
  if (taskType === "PICKUP") return "Jemput";
  if (taskType === "DELIVERY") return "Antar";

  return taskType;
}

export function DriverAvailableAssignments() {
  const router = useRouter();

  const { availableQuery, taskType, sortOrder, setPage, handlerTaskTypeFilter, handleSortChange } = useAvailable();

  const claim = useClaim();

  return (
    <Stack gap="md">
      {/* Filter */}
      <Group justify="space-between" align="flex-end">
        <Select label="Tipe Tugas" data={TASK_OPTION} value={taskType} onChange={handlerTaskTypeFilter} w={180} />

        <Group gap="xs">
          <ActionIcon
            variant={sortOrder === "asc" ? "filled" : "light"}
            size="lg"
            aria-label="Urutkan terlama"
            onClick={() => handleSortChange("asc")}
          >
            <IconArrowNarrowUp size={18} />
          </ActionIcon>

          <ActionIcon
            variant={sortOrder === "desc" ? "filled" : "light"}
            size="lg"
            aria-label="Urutkan terbaru"
            onClick={() => handleSortChange("desc")}
          >
            <IconArrowNarrowDown size={18} />
          </ActionIcon>
        </Group>
      </Group>

      {/* Query state */}
      <AsyncStateView
        isLoading={availableQuery.isPending}
        isError={availableQuery.isError}
        error={availableQuery.error}
        data={availableQuery.data}
        onRetry={() => availableQuery.refetch()}
        skeleton={
          <Stack gap="sm">
            <Skeleton height={180} radius="lg" />
            <Skeleton height={180} radius="lg" />
            <Skeleton height={180} radius="lg" />
          </Stack>
        }
      >
        {(response) => (
          <Stack gap="md">
            {response.data.length === 0 ? (
              <EmptyState title="Belum ada tugas" description="Belum ada tugas yang tersedia untuk diambil." />
            ) : (
              response.data.map((assignment) => (
                <Card key={assignment.id} withBorder radius="lg" padding="lg" shadow="xs">
                  <Stack gap="md">
                    {/* Jenis tugas */}

                    <Badge variant="light" color={assignment.taskType === "PICKUP" ? "orange" : "blue"} size="lg">
                      {getTaskLabel(assignment.taskType)}
                    </Badge>

                    {/* Alamat */}
                    <Group align="flex-start" wrap="nowrap" gap="sm">
                      <ThemeIcon variant="light" color="blue" radius="xl" size="lg">
                        <IconMapPin size={18} />
                      </ThemeIcon>

                      <Stack gap={2}>
                        <Text size="xs" c="dimmed">
                          Alamat Tujuan
                        </Text>

                        <Text
                          size="sm"
                          fw={600}
                          style={{
                            lineHeight: 1.5,
                          }}
                        >
                          {assignment.order.addressSnapshot}
                        </Text>
                      </Stack>
                    </Group>

                    {assignment.taskType === "PICKUP" &&
                      assignment.order.pickupScheduledAt && ( //jadwal jemput hanya untuk pickup
                        <Paper withBorder radius="md" p="sm" bg="var(--color-primary-light)">
                          <Group gap="sm" wrap="nowrap">
                            <ThemeIcon variant="light" color="blue" radius="xl" size="md">
                              <IconClock size={16} />
                            </ThemeIcon>

                            <Stack gap={1}>
                              <Text size="xs" c="dimmed">
                                Jadwal Jemput
                              </Text>

                              <Text size="sm" fw={600}>
                                {formatFieldOpsDate(assignment.order.pickupScheduledAt)}, {formatFieldOpsTime(assignment.order.pickupScheduledAt)}
                              </Text>
                            </Stack>
                          </Group>
                        </Paper>
                      )}

                    {/* Action */}
                    <Button
                      fullWidth
                      radius="md"
                      loading={claim.isPending}
                      style={{
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-text-on-accent)",
                      }}
                      onClick={() =>
                        openActionConfirmModal({
                          title: "Ambil tugas?",
                          message: `Ambil tugas ${assignment.order.orderCode}?`,
                          confirmLabel: "Ambil Tugas",
                          onConfirm: () =>
                            claim.mutate(assignment.id, {
                              onSuccess: () => {
                                router.push("/internal/driver/tugas/aktif");
                              },
                            }),
                        })
                      }
                    >
                      Ambil Tugas
                    </Button>
                  </Stack>
                </Card>
              ))
            )}

            {/* Pagination */}
            {response.meta.totalPages > 1 && (
              <Group justify="center">
                <Pagination value={response.meta.page} total={response.meta.totalPages} onChange={setPage} />
              </Group>
            )}

            <Text size="xs" c="dimmed" ta="center">
              Total {response.meta.totalItems} tugas tersedia
            </Text>
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/field-ops/worker/WorkerAvailableAssignment.tsx
````typescript
"use client";

import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { openActionConfirmModal } from "../shared/OpenActionConfirmModal";
import { useAvailable, useClaim } from "@/hooks/worker.hooks";
import { ActionIcon, Badge, Button, Group, Pagination, Paper, Select, Skeleton, Stack, Text } from "@mantine/core";
import { IconArrowNarrowDown, IconArrowNarrowUp } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const STATION_OPTIONS = [
  {
    value: "ALL",
    label: "Semua",
  },
  {
    value: "WASHING",
    label: "Cuci",
  },
  {
    value: "IRONING",
    label: "Setrika",
  },
  {
    value: "PACKING",
    label: "Packing",
  },
];

function getStationLabel(stationType: string) {
  if (stationType === "WASHING") {
    return "Cuci";
  }

  if (stationType === "IRONING") {
    return "Setrika";
  }

  if (stationType === "PACKING") {
    return "Packing";
  }

  return stationType;
}

export function WorkerAvailableAssignments() {
  const router = useRouter();

  const { availableQuery, stationType, sortOrder, setPage, handleStationFilter, handleSortChange } = useAvailable();

  const claim = useClaim();

  return (
    <Stack gap="md">
      {/* filter */}
      <Group justify="space-between" align="flex-end">
        <Select label="Stasiun" data={STATION_OPTIONS} value={stationType} onChange={handleStationFilter} w={180} />

        <Group>
          <ActionIcon
            variant={sortOrder === "asc" ? "filled" : "light"}
            size={"lg"}
            aria-label="Urutkan terlama"
            onClick={() => handleSortChange("asc")}
          >
            <IconArrowNarrowUp size={18} />
          </ActionIcon>
          <ActionIcon
            variant={sortOrder === "desc" ? "filled" : "light"}
            size={"lg"}
            aria-label="Urutkan terbaru"
            onClick={() => handleSortChange("desc")}
          >
            <IconArrowNarrowDown size={18} />
          </ActionIcon>
        </Group>
      </Group>

      {/* query state */}
      <AsyncStateView
        isLoading={availableQuery.isPending}
        isError={availableQuery.isError}
        error={availableQuery.error}
        data={availableQuery.data}
        onRetry={() => availableQuery.refetch()}
        skeleton={
          <Stack gap="sm">
            <Skeleton height={70} radius="md" />
            <Skeleton height={70} radius="md" />
            <Skeleton height={70} radius="md" />
          </Stack>
        }
      >
        {(response) => (
          <Stack gap="md">
            {/* assignment list */}
            {response.data.length === 0 ? (
              <EmptyState title="Belum ada tugas" description="Belum ada tugas yang tersedia untuk diambil." />
            ) : (
              response.data.map((assignment) => (
                <Paper key={assignment.id} withBorder radius="md" p="md">
                  <Group justify="space-between">
                    <Stack gap={4}>
                      <Badge color={"orange"} variant="light" w={"100"} h={25}>
                        {getStationLabel(assignment.stationType)}
                      </Badge>

                      <Text size="sm" fw={600}>
                        {assignment.order.orderCode}
                      </Text>
                    </Stack>

                    <Button
                      size="xs"
                      color="blue"
                      loading={claim.isPending}
                      loaderProps={{ type: "dots" }}
                      onClick={() =>
                        openActionConfirmModal({
                          title: "Ambil tugas?",
                          message: `Ambil tugas ${assignment.order.orderCode}?`,
                          confirmLabel: "Ambil Tugas",
                          onConfirm: () =>
                            claim.mutate(assignment.id, {
                              onSuccess: () => {
                                router.push("/internal/worker/tugas/aktif");
                              },
                            }),
                        })
                      }
                    >
                      Ambil Tugas
                    </Button>
                  </Group>
                </Paper>
              ))
            )}

            {/* pagination */}
            {response.meta.totalPages > 1 && (
              <Group justify="center">
                <Pagination value={response.meta.page} total={response.meta.totalPages} onChange={setPage} />
              </Group>
            )}

            <Text size="xs" c="dimmed" ta="center">
              Total {response.meta.totalItems} tugas tersedia
            </Text>
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/hooks/attendance.hooks.ts
````typescript
import { AttendanceApi } from "@/lib/api/attendance.api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import dayjs from "dayjs";
import type { AttendanceHistoryQuery } from "@/types/api/attendance.types";


export const ATTENDANCE_QUERY_KEY = ["attendance"] as const;
export const ATTENDANCE_STATUS_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "status"] as const;
export const ATTENDANCE_HISTORY_QUERY_KEY = [...ATTENDANCE_QUERY_KEY, "history"] as const;

// attendanceapi configuration
const attendanceApi = new AttendanceApi();

// attendance status
export function useAttendanceStatus() {
  return useQuery({
    queryKey: ATTENDANCE_STATUS_QUERY_KEY,
    queryFn: () => attendanceApi.getStatus(),
  });
}

// clock-in
export function useClockIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => attendanceApi.clockIn(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi Berhasil!",
        message: "Absensi Masuk Berhasil! Selamat bekerja!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absensi Gagal!",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useClockOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => attendanceApi.clockOut(),
    onSuccess: async () => {
      notifications.show({
        title: "Absensi Berhasil!",
        message: "Absensi Pulang berhasil! Selamat Melanjutkan Kegiatan!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: ATTENDANCE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Absensi Gagal!",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useAttendanceHistory() {
  const HISTORY_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [period, setPeriod] = useState<string>(() => dayjs().format("YYYY-MM"));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // query params
  const query: AttendanceHistoryQuery = {
    page: page,
    pageSize: HISTORY_PAGE_SIZE,
    period: period,
    sortOrder: sortOrder,
  };

  // fetching endpoint history
  const historyQuery = useQuery({
    queryKey: [...ATTENDANCE_HISTORY_QUERY_KEY, query],
    queryFn: () => attendanceApi.getHistory(query),
  });

  // handlers

  function handlePeriodChange(value: string | null) {
    if (!value) return;
    setPeriod(dayjs(value).format("YYYY-MM"));
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value); //kalo diclick pertama, akan ganti ke asc.
    setPage(1);
  }

  return {
    historyQuery,

    period,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleSortChange,
  };
}
````

## File: src/lib/api/addressCustomer.api.ts
````typescript
import {
  Address,
  PreviewLocationResult,
  Region,
} from "@/types/api/address.types";
import {
  CreateAddressSchema,
  PreviewLocationInput,
  UpdateAddressSchema,
} from "../validation/address.validation";
import { api } from "./axios";

export class AddressApi {
  async createAddress(payload: CreateAddressSchema) {
    const { data } = await api.post<{ data: Address }>("/address", payload);
    return data.data;
  }

  async getAddresses() {
    const { data } = await api.get<{ data: Address[] }>("/address");
    return data.data;
  }

  async updateAddress(id: string, payload: UpdateAddressSchema) {
    const { data } = await api.patch<{ data: Address }>(
      `/address/${id}`,
      payload,
    );
    return data.data;
  }

  async deleteAddress(id: string) {
    const { data } = await api.delete<{ data: string }>(`/address/${id}`);
    return data.data;
  }

  async setPrimaryAddress(id: string) {
    const { data } = await api.patch<{ data: string }>(
      `/address/${id}/set-primary`,
    );
    return data.data;
  }

  async getProvince() {
    const { data } = await api.get<{ data: Region[] }>("/regions/provinces");
    return data.data;
  }

  async getCities(provinceId: string | null) {
    const { data } = await api.get<{ data: Region[] }>(
      `regions/cities/${provinceId}`,
    );
    return data.data;
  }

  async getDistrict(cityId: string | null) {
    const { data } = await api.get<{ data: Region[] }>(
      `regions/districts/${cityId}`,
    );
    return data.data;
  }

  async getSubDistricts(districtsId: string | null) {
    const { data } = await api.get<{ data: Region[] }>(
      `regions/sub-districts/${districtsId}`,
    );
    return data.data;
  }

  async getPreviewLocation(payload: PreviewLocationInput) {
    const { data } = await api.post<{
      data: PreviewLocationResult;
    }>("/regions/preview-location", payload);
    return data.data;
  }
}
````

## File: src/lib/api/driver.api.ts
````typescript
import type {
  DriverHistoryPaginated,
  DriverActiveResponse,
  DriverAvailablePaginated,
  DriverAvailableQuery,
  DriverClaimResponse,
  DriverCompleteResponse,
  DriverHistoryDetailResponse,
  DriverHistoryQuery,
  DriverPickupCollectedResponse,
  DriverStartResponse,
} from "@/types/api/driver.types";
import { api } from "./axios";
import { ApiResponse } from "@/types/api";

const BASE_PATH = "/internal/driver/task";

export class DriverApi {
  async getAvailable(query: DriverAvailableQuery) {
    const { data } = await api.get<DriverAvailablePaginated>(`${BASE_PATH}/available`, {
      params: query,
    });
    return { data: data.data, meta: data.meta };
  }

  async claim(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverClaimResponse>>(`${BASE_PATH}/${assignmentId}/claim`, {});
    return data.data;
  }

  async getActive() {
    const { data } = await api.get<ApiResponse<DriverActiveResponse>>(`${BASE_PATH}/active`);
    return data.data;
  }

  async startAssignment(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverStartResponse>>(`${BASE_PATH}/${assignmentId}/start`, {});
    return data.data;
  }

  async pickupCollected(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverPickupCollectedResponse>>(`${BASE_PATH}/${assignmentId}/pickup-collected`, {});
    return data.data;
  }

  async completeDelivery(assignmentId: string) {
    const { data } = await api.post<ApiResponse<DriverCompleteResponse>>(`${BASE_PATH}/${assignmentId}/complete-delivery`, {});
    return data.data;
  }
  async getHistoryList(query: DriverHistoryQuery) {
    const { data } = await api.get<DriverHistoryPaginated>(`${BASE_PATH}/history`, { params: query });
    return { data: data.data, meta: data.meta };
  }

  async getHistoryDetail(assignmentId: string) {
    const { data } = await api.get<ApiResponse<DriverHistoryDetailResponse>>(`${BASE_PATH}/history/${assignmentId}`);
    return data.data;
  }
}
````

## File: src/lib/api/employee.api.ts
````typescript
import { PaginatedResponse } from "@/types/api";
import { api } from "./axios";
import type {
  AssignEmployeePayload,
  Employee,
  EmployeeQuery,
  InviteEmployeePayload,
  OutletAttendanceQuery,
  OutletAttendanceResponse,
  OutletTeamItem,
  OutletTeamQuery,
  UpdateEmployeePayload,
} from "@/types/api/employee.types";

export class EmployeeApi {
  async getEmployees(
    params?: EmployeeQuery,
  ): Promise<PaginatedResponse<Employee>> {
    const response = await api.get<PaginatedResponse<Employee>>(
      "/internal/employees",
      {
        params,
      },
    );

    return response.data;
  }

  async getEmployee(employeeId: string): Promise<Employee> {
    const response = await api.get(`/internal/employees/${employeeId}`);

    return response.data.data;
  }

  async inviteEmployee(payload: InviteEmployeePayload): Promise<Employee> {
    const response = await api.post("/internal/employees/invite", payload);

    return response.data.data;
  }

  async updateEmployee(
    employeeId: string,
    payload: UpdateEmployeePayload,
  ): Promise<Employee> {
    const response = await api.patch(
      `/internal/employees/${employeeId}`,
      payload,
    );

    return response.data.data;
  }

  async activateEmployee(employeeId: string): Promise<Employee> {
    const response = await api.patch(
      `/internal/employees/${employeeId}/activate`,
    );

    return response.data.data;
  }

  async deactivateEmployee(employeeId: string): Promise<Employee> {
    const response = await api.patch(
      `/internal/employees/${employeeId}/deactivate`,
    );

    return response.data.data;
  }

  async resendInvitation(employeeId: string): Promise<void> {
    await api.post(`/internal/employees/${employeeId}/resend-invitation`);
  }

  async assignEmployee(payload: AssignEmployeePayload): Promise<Employee> {
    const response = await api.post("/internal/employees/assignments", payload);

    return response.data.data;
  }

  async getCurrentOutletTeam(query: OutletTeamQuery): Promise<PaginatedResponse<OutletTeamItem>> {
    const response = await api.get<PaginatedResponse<OutletTeamItem>>(
      "/internal/employees/team",
      {
        params: query,
      },
    );

    return response.data;
  }

  async getCurrentOutletAttendance(query: OutletAttendanceQuery): Promise<OutletAttendanceResponse> {
    const response = await api.get<OutletAttendanceResponse>("/internal/employees/attendance", {params: query})

    return response.data
  }
}
````

## File: src/lib/auth/AuthGateCustomer.tsx
````typescript
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Center, Loader } from "@mantine/core";
import { useCurrentUser } from "@/hooks/authCustomer.hooks";

export type AuthGateCustomerProps = {
  children: React.ReactNode;
};

export function AuthGateCustomer({ children }: AuthGateCustomerProps) {
  const router = useRouter();

  const { data: user, isLoading, isError } = useCurrentUser();

  useEffect(() => {
    if (isLoading) return;

    if (isError || !user) {
      const currentPath = window.location.pathname + window.location.search;
      router.replace(`/login?intended_url=${encodeURIComponent(currentPath)}`);
      return;
    }

    if (!user.isEmailVerified) {
      router.replace("/login?reason=email-not-verified");
      return;
    }

    if (user.accountType !== "customer") {
      router.replace("/login");
      return;
    }
  }, [user, isLoading, isError, router]);

  if (isLoading || !user) {
    return (
      <Center mih="100vh">
        <Loader size="md" />
      </Center>
    );
  }

  if (
    !user ||
    isError ||
    !user.isEmailVerified ||
    user.accountType !== "customer"
  ) {
    return null;
  }

  return <>{children}</>;
}
````

## File: src/providers/Providers.tsx
````typescript
"use client";

import { useState } from "react";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { theme } from "@/lib/theme/theme";
import { AuthBootstrap } from "@/components/shared/AuthBootstrap";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <ModalsProvider>
          <Notifications position="top-right" />
          <AuthBootstrap>{children}</AuthBootstrap>
        </ModalsProvider>
      </MantineProvider>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
````

## File: src/stores/useAuthStore.ts
````typescript
"use client";

import { create } from "zustand";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  accountType: "customer" | "employee";
  isEmailVerified: boolean;
  profilePhotoUrl?: string | null;
  phone?: string | null;
  authProvider: string;
  currentOutletId?: string | null;
};

type AuthState = {
  user: AuthUser | null;
  isInitializing: boolean;
};

type AuthActions = {
  setUser: (user: AuthUser) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  user: null,
  isInitializing: true,

  setUser: (user) => set({ user, isInitializing: false }),
  clearUser: () => set({ user: null, isInitializing: false }),
}));
````

## File: src/types/api/orders.types.ts
````typescript
import type { OrderStatusGroupKey } from "@/lib/constants/order";

export type CreateOrderResponse = {
  id: string;
  orderCode: string;
  customerStatus: string;
  outletId: string;
  distanceMeters: number;
  pickupDate: string;
  pickupScheduledAt: string;
};

export type OrderListItem = {
  id: string;
  orderCode: string;
  customerStatus: string;
  customerStatusLabel: string;
  pickupDate: string;
  totalAmount: number | null;
  paymentStatus: string | null;
};

export type ListOrderQuery = {
  page: number;
  limit: number;
  search?: string;
  statusGroup?: OrderStatusGroupKey;
  startDate?: string;
  endDate?: string;
  sortBy: "createdAt" | "pickupDate";
  sortOrder: "asc" | "desc";
};

export type ListOrderResponse = {
  orders: OrderListItem[];
  meta: {
    page: number;
    limit: number;
    totalData: number;
    totalPage: number;
  };
};

export type TimelineEntry = {
  status: string;
  label: string;
  timestamp: string | null;
  isCompleted: boolean;
  isCurrent: boolean;
};

export type OrderDetail = {
  id: string;
  orderCode: string;
  customerStatus: string;
  customerStatusLabel: string;
  addressSnapshot: string;
  addressPhoneSnapshot: string;
  pickupDate: string;
  pickupScheduledAt: string;
  bill: {
    weightKg: number | null;
    totalAmount: number | null;
    paymentStatus: string;
    pricePerKgSnapshot: number;
    shippingFeeSnapshot: number;
  } | null;
  orderItems: { id: string; quantity: number; laundryItem: { name: string } }[];
  complaint: Complaint | null;
  timeline: TimelineEntry[];
  allowedActions: {
    canPay: boolean;
    canConfirmReceived: boolean;
    canFileComplaint: boolean;
  };
};

export type CreatePaymentResponse = {
  paymentId: string;
  gatewayOrderId: string;
  snapToken: string;
  redirectUrl: string;
};

export type PaymentAttempt = {
  id: string;
  status: string;
  amount: number;
  redirectUrl: string;
  isFinal: boolean;
  paidAt: string | null;
  billPaymentStatus: "PAID" | "UNPAID";
};

export type ConfirmResponse = {
  success: true;
  message: string;
};



export const COMPLAINT_CATEGORIES = ["TIDAK_SESUAI", "RUSAK", "HILANG"] as const;
 
export type ComplaintCategory = (typeof COMPLAINT_CATEGORIES)[number];
 
export const COMPLAINT_CATEGORY_LABELS: Record<ComplaintCategory, string> = {
  TIDAK_SESUAI: "Tidak Sesuai Pesanan",
  RUSAK: "Barang Rusak",
  HILANG: "Barang Hilang",
};
 
export type ComplaintStatus = "OPEN" | "IN_REVIEW" | "RESOLVED" | "REJECTED";
 
export type Complaint = {
  id: string;
  orderId: string;
  customerId: string;
  category: ComplaintCategory;
  description: string;
  proofPhotoUrl: string;
  status: ComplaintStatus;
  handledBy: string | null;
  responseNote: string | null;
  decidedAt: string | null;
  createdAt: string;
};
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
.DS_Store

*.zip
Archive.zip
FE.md
````

## File: src/app/(auth)/reset-password/page.tsx
````typescript
"use client";

import { ResetPasswordForm } from "@/components/authCustomer/ResetPasswordForm";
import {
  Anchor,
  Center,
  Group,
  Loader,
  Paper,
  Stack,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();

  function handleBack() {
    router.push("/login");
  }

  return (
    <Center
      mih="100vh"
      px={{ base: 16, sm: 24 }}
      py={{ base: 24, sm: 40 }}
    >
      <Stack
        w="100%"
        maw={420}
        gap="sm"
      >
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--color-text-primary)"
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Group gap={4}>
            <IconChevronLeft size={16} stroke={2} />
            Kembali
          </Group>
        </Anchor>

        <Suspense
          fallback={
            <Paper
              p={{ base: 24, sm: 32 }}
              radius="md"
              withBorder
              style={{
                backgroundColor: "var(--color-surface)",
              }}
            >
              <Center mih={200}>
                <Loader size="md" />
              </Center>
            </Paper>
          }
        >
          <Paper
            w="100%"
            p={{ base: 24, sm: 32 }}
            radius="md"
            withBorder
            style={{
              backgroundColor: "var(--color-surface)",
            }}
          >
            <Stack gap="md">
              <ResetPasswordForm />
            </Stack>
          </Paper>
        </Suspense>
      </Stack>
    </Center>
  );
}
````

## File: src/app/(customer)/layout.tsx
````typescript
import { CustomerAppShell } from "@/components/customer/CustomerAppShell";
import { AuthGateCustomer } from "@/lib/auth/AuthGateCustomer";
import { Container } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGateCustomer>
      <CustomerAppShell>
        <Container size="lg">{children}</Container>
      </CustomerAppShell>
    </AuthGateCustomer>
  );
}
````

## File: src/app/layout.tsx
````typescript
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "leaflet/dist/leaflet.css";
import "@mantine/dates/styles.css";
import '@mantine/charts/styles.css';
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  title: "Popo Laundry",
  description: "Laundry pickup, tracking, payment, dan delivery.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
````

## File: src/app/page.tsx
````typescript
"use client";

import { Box, Container, SimpleGrid, Stack, Title } from "@mantine/core";
import Footer from "@/components/shared/Footer";
import FeatureCard, {
  FEATURES,
} from "@/components/landing-page/FeatureSection";
import Header from "@/components/shared/Headers/Header";
import CaraKerja from "@/components/landing-page/CaraKerjaSection";
import CarouselSection from "@/components/landing-page/CarouselSection";
import HeroSection from "@/components/landing-page/HeroSection";
import { LocationPermissionGate } from "@/components/shared/Location/LocationPermission/LocationPermissionGate";

export default function Page() {
  return (
    <Box
      style={{ backgroundColor: "var(--color-background)", minHeight: "100vh" }}
    >
      {/* Header */}

      <Header />

      <Container size="lg" pt={40}>
        <Stack gap="xl">
          {/* Hero section — carousel */}
          <HeroSection />

          <CarouselSection />

          {/* Cara Kerja - section */}
          <CaraKerja />

          <LocationPermissionGate />

          {/* Layanan / features */}
          <Box component="section" py={20}>
            <Stack gap="md">
              <Title
                id="layanan-heading"
                order={2}
                py={20}
                style={{ color: "var(--color-text-primary)" }}
              >
                Layanan kami
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 3 }}>
                {FEATURES.map((f) => (
                  <FeatureCard key={f.title} {...f} />
                ))}
              </SimpleGrid>
            </Stack>
          </Box>
        </Stack>
      </Container>
      {/* Footer */}
      <Footer />
    </Box>
  );
}
````

## File: src/components/back-office/dashboard/PendingBypass.tsx
````typescript
import { Badge, Group, Paper, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons-react";
import { DashboardResponse } from "@/types/api/dashboard.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  data: DashboardResponse["pendingBypass"];
  onSelect: (bypassId: string, orderId: string) => void;
  onViewAll: () => void;
};

export function PendingBypass({ data, onSelect, onViewAll }: Props) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="lg">
        <Group justify="space-between" align="flex-start" wrap="nowrap">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon size={40} radius="md" variant="light" color="red" style={{ flexShrink: 0 }}>
              <IconAlertTriangle size={20} />
            </ThemeIcon>

            <div>
              <Text fw={600} c="var(--color-text-primary)">
                Request Bypass
              </Text>

              <Text size="sm" c="var(--color-text-secondary)">
                Request yang membutuhkan keputusan
              </Text>
            </div>
          </Group>

          <Badge color="red" variant="light" radius="sm">
            {data.total}
          </Badge>
        </Group>

        {data.items.length === 0 ? (
          <Text size="sm" c="var(--color-text-secondary)">
            Tidak ada request bypass pending.
          </Text>
        ) : (
          <Stack gap="sm">
            {data.items.map((item) => (
              <Paper
                key={item.id}
                p="sm"
                radius="sm"
                withBorder
                onClick={() => onSelect(item.id, item.orderId)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <Text size="sm" fw={600} c="var(--color-text-primary)">
                  {item.orderCode}
                </Text>

                <Text size="sm" c="var(--color-text-secondary)">
                  {item.workerName}
                </Text>

                <Text size="xs" c="var(--color-text-secondary)">
                  Station: {CUSTOMER_STATUS[item.stationType].label}
                </Text>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/dashboard/RecentOrders.tsx
````typescript
import { Badge, Button, Group, Paper, ScrollArea, Stack, Table, Text } from "@mantine/core";
import { DashboardResponse } from "@/types/api/dashboard.types";
import { CUSTOMER_STATUS } from "@/lib/constants/customer-status";

type Props = {
  data: DashboardResponse["recentOrders"];
  onSelect: (orderId: string) => void;
  onViewAll: () => void;
};
const formatDate = (date: string) =>
  new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

export function RecentOrders({ data, onSelect, onViewAll }: Props) {
  return (
    <Paper
      withBorder
      p="lg"
      radius="md"
      h="100%"
      style={{
        backgroundColor: "var(--color-surface)",
      }}
    >
      <Stack gap="lg">
        <Group justify="space-between" align="center">
          <div>
            <Text fw={600} c="var(--color-text-primary)">
              Pesanan Terbaru
            </Text>

            <Text size="sm" c="var(--color-text-secondary)">
              Pesanan yang baru masuk
            </Text>
          </div>

          <Button variant="subtle" size="xs" onClick={onViewAll}>
            Lihat semua
          </Button>
        </Group>

        <ScrollArea>
          <Table highlightOnHover miw={650} verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Kode</Table.Th>
                <Table.Th>Customer</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Dibuat</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {data.map((order) => {
                const customerStatus = CUSTOMER_STATUS[order.status];
                return (
                  <Table.Tr
                    key={order.id}
                    onClick={() => onSelect(order.id)}
                    style={{
                      cursor: "pointer",
                      transition: "background-color 120ms ease",
                    }}
                  >
                    <Table.Td>
                      <Text size="sm" fw={600}>
                        {order.orderCode}
                      </Text>
                    </Table.Td>

                    <Table.Td>
                      <Text size="sm">{order.customerName}</Text>
                    </Table.Td>

                    <Table.Td>
                      <Badge variant="light" color={customerStatus.color} radius="sm">
                        {customerStatus.label}
                      </Badge>
                    </Table.Td>

                    <Table.Td>
                      <Text size="sm" c="var(--color-text-secondary)">
                        {formatDate(order.createdAt)}
                      </Text>
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/employee/EmployeeFilters.tsx
````typescript
"use client";

import { EmployeeQuery } from "@/types/api/employee.types";
import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";

type EmployeeFiltersState = Pick<EmployeeQuery, "search" | "role" | "accountStatus" | "workStatus" | "outletId">;

type Props = {
  filters: EmployeeFiltersState;
  sortBy: NonNullable<EmployeeQuery["sortBy"]>;
  sortOrder: NonNullable<EmployeeQuery["sortOrder"]>;
  outlets: {
    id: string;
    name: string;
  }[];
  onChange: (key: keyof EmployeeFiltersState, value: string | null) => void;
  onSortByChange: (value: NonNullable<EmployeeQuery["sortBy"]>) => void;
  onSortOrderChange: (value: NonNullable<EmployeeQuery["sortOrder"]>) => void;
  onReset: () => void;
};

export function EmployeeFilters({ filters, sortBy, sortOrder, outlets, onChange, onSortByChange, onSortOrderChange, onReset }: Props) {
  return (
    <>
      <Group align="end" wrap="wrap" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Nama atau email"
          leftSection={<IconSearch size={16} />}
          value={filters.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value || null)}
          style={{ flex: 1, minWidth: 280 }}
        />
        <Select
          label="Urutkan"
          value={sortBy}
          data={[
            {
              value: "createdAt",
              label: "Tanggal dibuat",
            },
            {
              value: "name",
              label: "Nama",
            },
            {
              value: "email",
              label: "Email",
            },
            {
              value: "role",
              label: "Role",
            },
            {
              value: "accountStatus",
              label: "Status akun",
            },
          ]}
          onChange={(value) => {
            if (value === "name" || value === "email" || value === "role" || value === "accountStatus" || value === "createdAt") {
              onSortByChange(value);
            }
          }}
          w={180}
        />

        <Select
          label="Urutan"
          value={sortOrder}
          data={[
            {
              value: "desc",
              label: "Menurun",
            },
            {
              value: "asc",
              label: "Menaik",
            },
          ]}
          onChange={(value) => {
            if (value === "asc" || value === "desc") {
              onSortOrderChange(value);
            }
          }}
          w={180}
        />
        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Group align="flex-end" grow>
        <Select
          label="Role"
          placeholder="Semua role"
          clearable
          data={[
            {
              value: "OUTLET_ADMIN",
              label: "Outlet Admin",
            },
            {
              value: "WORKER",
              label: "Worker",
            },
            {
              value: "DRIVER",
              label: "Driver",
            },
          ]}
          value={filters.role ?? null}
          onChange={(value) => onChange("role", value)}
        />

        <Select
          label="Status Akun"
          placeholder="Semua status"
          clearable
          data={[
            {
              value: "INVITED",
              label: "Diundang",
            },
            {
              value: "ACTIVE",
              label: "Aktif",
            },
            {
              value: "INACTIVE",
              label: "Tidak Aktif",
            },
          ]}
          value={filters.accountStatus ?? null}
          onChange={(value) => onChange("accountStatus", value)}
        />

        <Select
          label="Status Kerja"
          placeholder="Semua status"
          clearable
          data={[
            {
              value: "OFF_DUTY",
              label: "Off Duty",
            },
            {
              value: "AVAILABLE",
              label: "Tersedia",
            },
            {
              value: "BUSY",
              label: "Sibuk",
            },
          ]}
          value={filters.workStatus ?? null}
          onChange={(value) => onChange("workStatus", value)}
        />

        <Select
          label="Outlet"
          placeholder="Semua outlet"
          clearable
          searchable
          data={outlets.map((outlet) => ({
            value: outlet.id,
            label: outlet.name,
          }))}
          value={filters.outletId ?? null}
          onChange={(value) => onChange("outletId", value)}
        />
      </Group>
    </>
  );
}
````

## File: src/components/back-office/komplain/ComplaintContent.tsx
````typescript
"use client";

import { Image, Modal, Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useComplaintHooks } from "@/hooks/complaint.hooks";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComplaintDecisionModal } from "./ComplaintDecisionModal";
import { ComplaintFilters } from "./ComplaintFilters";
import { ComplaintTable } from "./ComplaintTable";
import TableSkeleton from "../shared/TableSkeleton";
import { useState } from "react";

export function ComplaintContent({ role }: { role: string }) {
  const [proofOpened, setProofOpened] = useState(false);
  const onOpenedProof = () => setProofOpened(true);
  const {
    query,
    canDecideComplaint,
    selectedComplaint,
    decideComplaint,

    decisionModalOpened,
    data,
    isLoading,
    isError,
    error,
    refetch,
    handleDecisionModalClose,
    handleQueryChange,
    handleCategoryChange,
    handleStatusChange,
    handleSortByChange,
    handleSortOrderChange,
    handlePageChange,
    handlePageSizeChange,
    handleReset,
    handleDecide,
    handleDecisionSubmit,
  } = useComplaintHooks(role);
  return (
    <Stack gap="lg">
      <PageHeader title="Keluhan Pelanggan" description="Kelola keluhan pengguna dalam sistem." />
      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <ComplaintFilters
            query={query}
            onChange={handleQueryChange}
            onStatusChange={handleStatusChange}
            onCategoryChange={handleCategoryChange}
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={data}
            onRetry={refetch}
            isEmpty={(result) => result.data.length === 0}
            skeleton={<TableSkeleton />}
          >
            {(result) => (
              <ComplaintTable
                data={result.data}
                meta={result.meta}
                canDecide={canDecideComplaint}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onDecide={handleDecide}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
      <ComplaintDecisionModal
        onOpenedProof={onOpenedProof}
        opened={decisionModalOpened}
        complaint={selectedComplaint}
        isSubmitting={decideComplaint.isPending}
        onClose={handleDecisionModalClose}
        onSubmit={handleDecisionSubmit}
      />
      <Modal opened={proofOpened} onClose={() => setProofOpened(false)} title="Bukti Komplain" centered size="lg">
        <Image src={selectedComplaint?.proofPhotoUrl} alt="Bukti komplain" radius="md" />
      </Modal>
    </Stack>
  );
}
````

## File: src/components/back-office/komplain/ComplaintFilters.tsx
````typescript
"use client";

import { ActionIcon, Group, Select, TextInput, Tooltip } from "@mantine/core";
import { IconRefresh, IconSearch } from "@tabler/icons-react";
import { ComplaintCategory, ComplaintStatus, SortOrder } from "@/types/api";
import { ComplaintQuery, ComplaintSortBy } from "@/types/api/complaint.types";

type Props = {
  query: ComplaintQuery;
  onChange: <Key extends keyof ComplaintQuery>(key: Key, value: ComplaintQuery[Key]) => void;
  onStatusChange: (value: ComplaintStatus | null) => void;
  onSortByChange: (value: ComplaintSortBy) => void;
  onSortOrderChange: (value: SortOrder) => void;
  onCategoryChange: (value: ComplaintCategory | null) => void;
  onReset: () => void;
};

const STATUS_OPTIONS = [
  {
    value: "OPEN",
    label: "Menunggu Keputusan",
  },
  {
    value: "APPROVED",
    label: "Disetujui",
  },
  {
    value: "REJECTED",
    label: "Ditolak",
  },
];

const CATEGORY_OPTIONS = [
  {
    value: "TIDAK_SESUAI",
    label: "Tidak Sesuai",
  },
  {
    value: "RUSAK",
    label: "Rusak",
  },
  {
    value: "HILANG",
    label: "Hilang",
  },
];

const SORT_BY_OPTIONS = [
  {
    value: "createdAt",
    label: "Tanggal Keluhan",
  },
  {
    value: "decidedAt",
    label: "Tanggal Keputusan",
  },
];

const SORT_ORDER_OPTIONS = [
  {
    value: "desc",
    label: "Menurun",
  },
  {
    value: "asc",
    label: "Menaik",
  },
];

export function ComplaintFilters({ query, onChange, onStatusChange, onSortByChange, onSortOrderChange, onReset, onCategoryChange }: Props) {
  return (
    <>
      <Group align="flex-end" gap="sm">
        <TextInput
          label="Cari"
          placeholder="Cari kode pesanan atau pelanggan"
          leftSection={<IconSearch size={16} />}
          value={query.search ?? ""}
          onChange={(event) => onChange("search", event.currentTarget.value)}
          style={{ flex: 1, minWidth: 280 }}
        />

        <Select
          label="Urutkan"
          data={SORT_BY_OPTIONS}
          value={query.sortBy ?? "createdAt"}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortByChange(value as ComplaintSortBy);
          }}
          w={180}
        />

        <Select
          label="Urutan"
          data={SORT_ORDER_OPTIONS}
          value={query.sortOrder ?? "desc"}
          onChange={(value) => {
            if (!value) {
              return;
            }

            onSortOrderChange(value as SortOrder);
          }}
          w={180}
        />

        <Tooltip label="Reset filter">
          <ActionIcon variant="default" size="input-sm" onClick={onReset} aria-label="Reset filter">
            <IconRefresh size={16} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Group align="flex-end" gap="sm">
        <Select
          label="Status"
          placeholder="Semua status"
          clearable
          data={STATUS_OPTIONS}
          value={query.status ?? null}
          onChange={(value) => onStatusChange(value as ComplaintStatus | null)}
        />

        <Select
          label="Kategori"
          placeholder="Semua kategori"
          clearable
          data={CATEGORY_OPTIONS}
          value={query.category ?? null}
          onChange={(value) => onCategoryChange(value as ComplaintCategory | null)}
        />
      </Group>
    </>
  );
}
````

## File: src/components/back-office/komplain/ComplaintTable.tsx
````typescript
"use client";

import { ActionIcon, Badge, Table, Text } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { ComplaintListItem } from "@/types/api/complaint.types";
import { ComplaintStatus, PaginatedResponse } from "@/types/api";

type Props = {
  data: ComplaintListItem[];
  meta: PaginatedResponse<ComplaintListItem>["meta"];
  canDecide: boolean;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onDecide: (complaint: ComplaintListItem) => void;
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function getStatusLabel(status: ComplaintStatus) {
  const statusMap: Record<ComplaintStatus, string> = {
    OPEN: "Menunggu",
    APPROVED: "Diterima",
    REJECTED: "Ditolak",
  };

  return statusMap[status];
}

function getStatusColor(status: ComplaintStatus) {
  const colorMap: Record<ComplaintStatus, string> = {
    OPEN: "yellow",
    APPROVED: "green",
    REJECTED: "red",
  };

  return colorMap[status];
}

function getCategoryLabel(category: ComplaintListItem["category"]) {
  const categoryMap: Record<ComplaintListItem["category"], string> = {
    TIDAK_SESUAI: "Tidak Sesuai",
    RUSAK: "Rusak",
    HILANG: "Hilang",
  };
  return categoryMap[category];
}

export function ComplaintTable({ data, meta, canDecide, onPageChange, onPageSizeChange, onDecide }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={900}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Kode Pesanan</Table.Th>

              <Table.Th>Pelanggan</Table.Th>

              <Table.Th>Kategori</Table.Th>

              <Table.Th>Status</Table.Th>

              <Table.Th>Dibuat Pada</Table.Th>

              {canDecide && <Table.Th ta="right">Aksi</Table.Th>}
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((complaint) => (
              <Table.Tr key={complaint.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {complaint.order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {complaint.customer.name}
                  </Text>

                  <Text size="xs" c="var(--color-text-secondary)">
                    {complaint.customer.email}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {getCategoryLabel(complaint.category)}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Badge color={getStatusColor(complaint.status)} variant="light">
                    {getStatusLabel(complaint.status)}
                  </Badge>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(complaint.createdAt)}
                  </Text>
                </Table.Td>

                {canDecide && (
                  <Table.Td ta="right">
                    {complaint.status === "OPEN" && (
                      <ActionIcon
                        variant="subtle"
                        color="rinseBlue"
                        aria-label={`Tangani komplain ${complaint.id}`}
                        onClick={() => onDecide(complaint)}
                      >
                        <IconEdit size={18} />
                      </ActionIcon>
                    )}
                  </Table.Td>
                )}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/back-office/order/OrderBillSection.tsx
````typescript
"use client";

import { Badge, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import type { OrderDetail } from "@/types/api/order.types";

type Props = {
  bill: OrderDetail["bill"];
};

function formatCurrency(value: string) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(value));
}

function BillInformationItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Stack gap={2}>
      <Text size="xs" c="var(--color-text-secondary)">
        {label}
      </Text>

      {typeof value === "string" ? (
        <Text size="sm" fw={500} c="var(--color-text-primary)">
          {value}
        </Text>
      ) : (
        value
      )}
    </Stack>
  );
}

function formatDateTime(value: string | null) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function OrderBillSection({ bill }: Props) {
  if (!bill) {
    return (
      <Paper withBorder p="lg" radius="md">
        <Stack gap="md">
          <Text fw={600}>Informasi Tagihan</Text>

          <Text size="sm" c="var(--color-text-secondary)">
            Tagihan belum dibuat.
          </Text>
        </Stack>
      </Paper>
    );
  }

  const paymentStatus =
    bill.paymentStatus === "PAID"
      ? {
          label: "Sudah Dibayar",
          color: "green",
        }
      : {
          label: "Belum Dibayar",
          color: "red",
        };

  return (
    <Paper withBorder p="lg" radius="md">
      <Stack gap="md">
        <Text fw={600}>Informasi Tagihan</Text>

        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            lg: 4,
          }}
          spacing="lg"
        >
          <BillInformationItem
            label="Status Pembayaran"
            value={
              <Badge variant="light" color={paymentStatus.color}>
                {paymentStatus.label}
              </Badge>
            }
          />

          <BillInformationItem label="Berat Laundry" value={`${bill.weightKg} kg`} />

          <BillInformationItem label="Total Harga Laundry" value={`${formatCurrency(bill.laundryCost)}`} />

          <BillInformationItem label="Tarif Shipping" value={`${formatCurrency(bill.shippingCost)}`} />

          <BillInformationItem label="Total Tagihan" value={formatCurrency(bill.totalAmount)} />
          <BillInformationItem label="Dibayar Pada" value={formatDateTime(bill.paidAt)?? "-"} />
        </SimpleGrid>
      </Stack>
    </Paper>
  );
}
````

## File: src/components/back-office/outlet/OutletContent.tsx
````typescript
"use client";

import { Button, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { useOutletHooks } from "@/hooks/outlet.hooks";
import { OutletFilters } from "./OutletFilters";
import { OutletTable } from "./OutletTable";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import TableSkeleton from "../shared/TableSkeleton";

export function OutletContent() {
  const { form, router, setPage, handleReset, outlets, setPageSize, setSelectedOutlet, selectedOutlet, deleteOutlet, handleDeactivate } = useOutletHooks();
  return (
    <Stack gap="lg">
      <PageHeader
        title="Outlet"
        description="Kelola seluruh outlet dalam sistem."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={() => router.push("/internal/super-admin/outlet/baru")}>
            Tambah Outlet
          </Button>
        }
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <OutletFilters form={form} onReset={handleReset} />

          <AsyncStateView
            isLoading={outlets.isLoading}
            isError={outlets.isError}
            error={outlets.error}
            data={outlets.data}
            onRetry={() => outlets.refetch()}
            skeleton={<TableSkeleton />}
          >
            {(response) => (
              <OutletTable
                data={response.data}
                meta={response.meta}
                onPageChange={setPage}
                onPageSizeChange={(size) => {
                  setPageSize(size);
                  setPage(1);
                }}
                onEdit={(id) => router.push(`/internal/super-admin/outlet/${id}`)}
                onDelete={(outlet) => setSelectedOutlet(outlet)}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
      <ConfirmDialog
        opened={Boolean(selectedOutlet)}
        title="Nonaktifkan Outlet"
        message={
          selectedOutlet
            ? `Apakah kamu yakin ingin menonaktifkan outlet "${selectedOutlet.name}"? Outlet yang dinonaktifkan tidak akan dapat digunakan kembali untuk operasional.`
            : ""
        }
        confirmLabel="Nonaktifkan"
        loading={deleteOutlet.isPending}
        onClose={() => setSelectedOutlet(null)}
        onConfirm={handleDeactivate}
      />
    </Stack>
  );
}
````

## File: src/components/back-office/penerimaan/ReceiveOrderModal.tsx
````typescript
"use client";

import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import type { OrderListItem } from "@/types/api/order.types";

type Props = {
  opened: boolean;
  order: OrderListItem | null;
  isLoading: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function ReceiveOrderModal({ opened, order, isLoading, onClose, onConfirm }: Props) {
  const handleClose = () => {
    if (isLoading) {
      return;
    }

    onClose();
  };

  return (
    <Modal opened={opened} onClose={handleClose} title="Terima Pesanan" centered>
      <Stack gap="lg">
        {order && (
          <Stack gap={4}>
            <Text size="sm">Pesanan berikut akan diterima di outlet:</Text>

            <Stack gap={2}>
              <Text size="sm" fw={600} c="var(--color-text-primary)">
                {order.orderCode}
              </Text>

              <Text size="sm" c="var(--color-text-secondary)">
                {order.customer.name}
              </Text>
            </Stack>

            <Text size="sm" c="var(--color-text-secondary)">
              Setelah dikonfirmasi, pesanan akan dipindahkan ke tahap siap dibuatkan order.
            </Text>
          </Stack>
        )}

        <Group justify="flex-end">
          <Button variant="default" onClick={handleClose} disabled={isLoading}>
            Batal
          </Button>

          <Button onClick={onConfirm} loading={isLoading}>
            Terima Pesanan
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
````

## File: src/components/back-office/pricing/shipping/ShippingRateContent.tsx
````typescript
"use client";

import { IconPlus } from "@tabler/icons-react";
import { Button, Paper, Stack } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { PageHeader } from "@/components/ui/PageHeader";
import { useShippingRateHooks } from "@/hooks/pricing.hooks";
import { ShippingRateFilters } from "./ShippingRateFilters";
import { ShippingRateModal } from "./ShippingRateModal";
import { ShippingRateTable } from "./ShippingRateTable";
import { DeactivateShippingRateModal } from "./DeactivateShippingRateModal";
import TableSkeleton from "../../shared/TableSkeleton";

export function ShippingRateContent() {
  const {
    handleCreateClick,
    query,
    handleQueryChange,
    handleSortByChange,
    handleSortOrderChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    handlePageChange,
    handlePageSizeChange,
    handleEdit,
    handleDeactivateClick,
    modalOpened,
    selectedShippingRate,
    isSubmitting,
    handleModalClose,
    handleCreate,
    handleUpdate,
    deactivateModalOpened,
    shippingRateToDeactivate,
    deactivateShippingRate,
    handleDeactivateModalClose,
    handleDeactivateConfirm,
  } = useShippingRateHooks();
  return (
    <Stack gap="lg">
      <PageHeader
        title="Harga Shipping"
        description="Kelola tarif shipping yang digunakan dalam sistem."
        action={
          <Button leftSection={<IconPlus size={16} />} onClick={handleCreateClick}>
            Tambah Tarif
          </Button>
        }
      />

      <Paper
        withBorder
        radius="md"
        p="md"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <Stack gap="md">
          <ShippingRateFilters
            filters={{
              search: query.search,
            }}
            sortBy={query.sortBy ?? "maxDistanceMeters"}
            sortOrder={query.sortOrder ?? "asc"}
            onChange={handleQueryChange}
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
            onReset={handleReset}
          />

          <AsyncStateView
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={data}
            onRetry={refetch}
            isEmpty={(result) => result.data.length === 0}
            skeleton={<TableSkeleton />}
          >
            {(result) => (
              <ShippingRateTable
                data={result.data}
                meta={result.meta}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
                onEdit={handleEdit}
                onDeactivate={handleDeactivateClick}
              />
            )}
          </AsyncStateView>
        </Stack>
      </Paper>
      <ShippingRateModal
        key={selectedShippingRate ? selectedShippingRate.id : "create-shipping-rate"}
        opened={modalOpened}
        shippingRate={selectedShippingRate}
        isSubmitting={isSubmitting}
        onClose={handleModalClose}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />
      <DeactivateShippingRateModal
        opened={deactivateModalOpened}
        shippingRate={shippingRateToDeactivate}
        isSubmitting={deactivateShippingRate.isPending}
        onClose={handleDeactivateModalClose}
        onConfirm={handleDeactivateConfirm}
      />
    </Stack>
  );
}
````

## File: src/components/customer/order/billDetailView.tsx
````typescript
"use client";

import {
  useCreatePayment,
  useLatestPayment,
  useOrderDetail,
} from "@/hooks/order/order.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { BillDetailContent } from "./billDetailContent";
import { Anchor, Box, Group, Stack, Text } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function BillDetailView({ id }: { id: string }) {
  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderDetail(id);

  const router = useRouter();

  function handleBack() {
    router.replace(`/pesanan/${id}`);
  }

  const createPayment = useCreatePayment(id);

  const { refetch: refetchLatestPayment } = useLatestPayment(id);

  const handlePayment = () => {
    createPayment.mutate(undefined, {
      onSuccess: (payment) => {
        window.location.href = payment.redirectUrl;
      },

      onError: async (error) => {
        if (error.code !== "PAYMENT_ALREADY_PENDING") {
          return;
        }

        const { data: latestPayment } = await refetchLatestPayment();

        if (!latestPayment?.redirectUrl) {
          return;
        }

        window.location.href = latestPayment.redirectUrl;
      },
    });
  };

  return (
    <Box maw={720} mx="auto" py={{ base: 16, sm: 32 }}>
      <Stack gap="lg">
        <Anchor
          component="button"
          type="button"
          onClick={handleBack}
          fw={600}
          c="var(--c-text-primary"
        >
          <Group gap={2}>
            <IconChevronLeft stroke={2} />
            pesanan
          </Group>
        </Anchor>

        <AsyncStateView
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={order}
          onRetry={() => refetch()}
          emptyTitle="Tagihan tidak ditemukan"
          emptyDescription="Order ini mungkin sudah dihapus atau bukan milik akun kamu."
        >
          {(order) =>
            !order.bill ? (
              <Text c="dimmed" ta="center" py="xl">
                Tagihan belum tersedia.
              </Text>
            ) : (
              <BillDetailContent
                order={order}
                bill={order.bill}
                onPay={handlePayment}
                isPaying={createPayment.isPending}
              />
            )
          }
        </AsyncStateView>
      </Stack>
    </Box>
  );
}
````

## File: src/components/customer/order/orderDetail.tsx
````typescript
"use client";

import { Stack, Anchor, Group } from "@mantine/core";
import { useConfirmOrder, useOrderDetail } from "@/hooks/order/order.hooks";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { OrderInfoCard } from "./OrderInfoCard";
import { OrderBillSummaryCard } from "./OrderBillSummaryCard";
import { OrderActionsSection } from "./OrderActionsSection";
import { useRouter } from "next/navigation";
import { IconChevronLeft } from "@tabler/icons-react";
import { ApiError } from "@/lib/api/axios";
import { notifications } from "@mantine/notifications";
import { useQueryClient } from "@tanstack/react-query";

export function OrderDetailView({ id }: { id: string }) {
  const {
    data: order,
    isLoading,
    isError,
    error,
    refetch,
  } = useOrderDetail(id);
  const router = useRouter();
  const { mutate: confirmOrder, isPending } = useConfirmOrder();
  const queryClient = useQueryClient();

  function handleBack() {
    router.replace("/pesanan");
  }

  function handleConfirm() {
    confirmOrder(id, {
      onSuccess: (result) => {
        notifications.show({
          title: "Order berhasil dikonfirmasi",
          message: result.message,
          color: "green",
        });
        queryClient.invalidateQueries({ queryKey: ["orders", id] });
      },
      onError: (error) => notifications.show({
        title: "Konfirmasi order gagal",
        message: getConfirmErrorMessage(error),
        color: "red",
      }),
    });
  }

  return (
    <Stack gap="xl">
      <Anchor
        component="button"
        type="button"
        onClick={handleBack}
        fw={600}
        c="var(--c-text-primary"
      >
        <Group gap={2}>
          <IconChevronLeft stroke={2} />
          pesanan Saya
        </Group>
      </Anchor>

      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={order}
        onRetry={() => refetch()}
        emptyTitle="Order tidak ditemukan"
        emptyDescription="Order ini mungkin sudah dihapus atau bukan milik akun kamu."
      >
        {(order) => (
          <Stack gap="xl">
            <OrderInfoCard order={order} />
            <OrderBillSummaryCard order={order} />
            <OrderActionsSection
              order={order}
              isConfirming={isPending}
              onConfirmReceived={handleConfirm}
            />
          </Stack>
        )}
      </AsyncStateView>
    </Stack>
  );
}

function getConfirmErrorMessage(error: unknown): string {
  if (!(error instanceof ApiError)) {
    return "Gagal mengonfirmasi order.";
  }

  switch (error.code) {
    case "ORDER_FORBIDDEN":
      return "Order tidak ditemukan atau bukan milik kamu.";
    case "CONFLICT":
      return "Order belum siap dikonfirmasi.";
    case "COMPLAINT_NOT_ALLOWED":
      return "Tidak bisa konfirmasi selagi komplain masih diproses.";
    default:
      return error.message;
  }
}
````

## File: src/components/field-ops/shared/AttendanceHistory.tsx
````typescript
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { EmptyState } from "@/components/ui/EmptyState";
import { useAttendanceHistory } from "@/hooks/attendance.hooks";
import { formatFieldOpsDate, formatFieldOpsTime } from "@/utils/fieldops.date";
import { ActionIcon, Group, Pagination, Paper, SimpleGrid, Skeleton, Stack, Text } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { IconArrowNarrowDown, IconArrowNarrowUp, IconCalendar } from "@tabler/icons-react";

export function AttendanceHistory() {
  const { historyQuery, period, sortOrder, setPage, handlePeriodChange, handleSortChange } = useAttendanceHistory();
  return (
    <Stack gap={"md"}>
      {/* filter */}
      <Group justify="space-between" align="flex-end">
        <MonthPickerInput
          label="Bulan"
          placeholder="Pilih Bulan"
          value={`${period}-01`}
          onChange={handlePeriodChange}
          valueFormat="MMMM YYYY"
          leftSection={<IconCalendar size={18} />}
          maxDate={new Date()}
          w={200}
        />
        <Group>
          <ActionIcon
            variant={sortOrder === "asc" ? "filled" : "light"}
            size={"lg"}
            aria-label="Urutkan terlama"
            onClick={() => handleSortChange("asc")}
          >
            <IconArrowNarrowUp size={18} />
          </ActionIcon>
          <ActionIcon
            variant={sortOrder === "desc" ? "filled" : "light"}
            size={"lg"}
            aria-label="Urutkan terbaru"
            onClick={() => handleSortChange("desc")}
          >
            <IconArrowNarrowDown size={18} />
          </ActionIcon>
        </Group>
      </Group>

      <AsyncStateView
        isLoading={historyQuery.isPending}
        isError={historyQuery.isError}
        error={historyQuery.error}
        data={historyQuery.data}
        onRetry={() => historyQuery.refetch()}
        skeleton={
          <Stack gap={"md"}>
            <SimpleGrid cols={3}>
              <Skeleton height={80} radius={"md"} />
              <Skeleton height={80} radius={"md"} />
              <Skeleton height={80} radius={"md"} />
            </SimpleGrid>
            <Skeleton height={90} radius={"md"} />
            <Skeleton height={90} radius={"md"} />
          </Stack>
        }
      >
        {(response) => {
          const items = response.data.attendanceHistory;
          const summary = response.data.summary;
          const meta = response.meta;

          return (
            <Stack gap={"md"}>
              {/* summary statistic requested by mentor */}
              <SimpleGrid cols={3}>
                <Paper withBorder p={"sm"} radius={"md"} shadow="md">
                  <Text size="xs" c="dimmed" ta={"center"}>
                    Hari Efektif
                  </Text>
                  <Text fw={600} size="lg" ta={"center"}>
                    {summary.totalDays}
                  </Text>
                </Paper>

                <Paper withBorder p={"sm"} radius={"md"} shadow="md">
                  <Text size="xs" c="dimmed" ta={"center"}>
                    Hadir
                  </Text>
                  <Text fw={600} size="lg" ta={"center"}>
                    {summary.presentDays}
                  </Text>
                </Paper>

                <Paper withBorder p={"sm"} radius={"md"} shadow="md">
                  <Text size="xs" c="dimmed" ta={"center"}>
                    Tidak Hadir
                  </Text>
                  <Text fw={600} size="lg" ta={"center"}>
                    {summary.absentDays}
                  </Text>
                </Paper>
              </SimpleGrid>

              {/* history list untuk paginationnya */}
              {items.length === 0 ? (
                <EmptyState title="Belum ada riwayat" description="Belum ada riwayat absensi pada bulan ini." />
              ) : (
                <Stack gap="sm">
                  {items.map((attendance) => (
                    <Paper key={attendance.id} withBorder radius="md" p="md">
                      <Stack gap="sm">
                        <Text fw={600} size="sm">
                          {formatFieldOpsDate(attendance.attendanceDate)}
                        </Text>

                        <SimpleGrid cols={2}>
                          <Stack gap={2}>
                            <Text size="xs" c="dimmed">
                              Masuk
                            </Text>

                            <Text size="sm" fw={500}>
                              {formatFieldOpsTime(attendance.clockInAt)}
                            </Text>
                          </Stack>

                          <Stack gap={2}>
                            <Text size="xs" c="dimmed">
                              Pulang
                            </Text>

                            <Text size="sm" fw={500}>
                              {formatFieldOpsTime(attendance.clockOutAt)}
                            </Text>
                          </Stack>
                        </SimpleGrid>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              )}

              {/* button pagination */}
              {meta.totalPages > 1 && (
                <Group justify="center">
                  <Pagination value={meta.page} total={meta.totalPages} onChange={setPage} size={"sm"} />
                </Group>
              )}
            </Stack>
          );
        }}
      </AsyncStateView>
    </Stack>
  );
}
````

## File: src/components/field-ops/shared/FieldOpsAppShell.tsx
````typescript
"use client";

import { AppShell, Group, Title } from "@mantine/core";
import { useCallback, useState } from "react";

import { useFieldOpsTaskNotification } from "@/hooks/fieldOpsTaskNotification.hooks";
import { BottomNav } from "./BottomNav";

export function FieldOpsAppShell({ children, role, basePath }: { children: React.ReactNode; role: "Worker" | "Driver"; basePath: string }) {
  const [hasNewTask, setHasNewTask] = useState(false);

  const handleNewTask = useCallback(() => {
    setHasNewTask(true);
  }, []);

  const handleTaskOpen = useCallback(() => {
    setHasNewTask(false);
  }, []);

  useFieldOpsTaskNotification({
    role,
    onNewTask: handleNewTask,
  });

  return (
    <AppShell header={{ height: 56 }} footer={{ height: 64 }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title
            order={3}
            style={{
              color: "var(--color-primary-dark)",
              letterSpacing: -0.5,
            }}
          >
            Popo Laundry
          </Title>

          <Title
            size="md"
            style={{
              color: "var(--color-primary-dark)",
              letterSpacing: -0.5,
            }}
          >
            {role}
          </Title>
        </Group>
      </AppShell.Header>

      <AppShell.Main maw={720} mx="auto" pb={80}>
        {children}
      </AppShell.Main>

      <AppShell.Footer>
        <BottomNav basePath={basePath} tugasNew={hasNewTask} onTaskOpen={handleTaskOpen} />
      </AppShell.Footer>
    </AppShell>
  );
}
````

## File: src/components/field-ops/shared/FieldOpsGreeting.tsx
````typescript
"use client";

import { useMemo } from "react";
import { useCurrentUser } from "@/hooks/authCustomer.hooks";
import { Carousel } from "@mantine/carousel";
import { Group, Paper, Skeleton, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconBolt, IconClipboardCheck, IconMedal, IconSun } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

const AUTOPLAY_DELAY_MS = 4000;

const STATIC_GREETINGS = [
  {
    text: "Semangat bekerja hari ini!",
    icon: IconBolt,
  },
  {
    text: "Jangan lupa cek tugasmu ya!",
    icon: IconClipboardCheck,
  },
  {
    text: "Kerja bagus, terus pertahankan!",
    icon: IconMedal,
  },
  {
    text: "Selamat bertugas hari ini!",
    icon: IconSun,
  },
];

export function FieldOpsGreeting() {
  const employeeQuery = useCurrentUser();

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: AUTOPLAY_DELAY_MS,
        stopOnMouseEnter: false,
        stopOnInteraction: false,
      }),
    [],
  );

  return (
    <Stack>
      {employeeQuery.isPending && <Skeleton height={24} width={150} radius="md" />}

      {employeeQuery.isError && (
        <Text size="sm" c="dimmed">
          Halo, selamat datang!
        </Text>
      )}

      {employeeQuery.data && (
        <Paper
          radius="lg"
          shadow="md"
          pos="relative"
          style={{
            overflow: "hidden",
            background:
              "linear-gradient(135deg, var(--mantine-color-orange-6) 0%, var(--mantine-color-orange-5) 45%, var(--mantine-color-yellow-5) 100%)",
          }}
        >
          <Stack gap="lg" p={15} pos="relative" style={{ zIndex: 1 }}>
            <Text fw={600} fz="xl" c="white">
              Halo, {employeeQuery.data.name}!
            </Text>

            <Carousel
              withControls={false}
              withKeyboardEvents={false}
              color="white"
              plugins={[autoplay]}
              emblaOptions={{
                loop: true,
                watchDrag: false,
              }}
            >
              {STATIC_GREETINGS.map(({ text, icon: Icon }) => (
                <Carousel.Slide key={text}>
                  <Group gap="sm" wrap="nowrap">
                    <ThemeIcon size={36} radius="xl" variant="white" c="orange.6">
                      <Icon size={20} stroke={2} />
                    </ThemeIcon>

                    <Text fw={600} size="md" c="white">
                      {text}
                    </Text>
                  </Group>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Stack>
        </Paper>
      )}
    </Stack>
  );
}
````

## File: src/components/field-ops/shared/FieldOpsHome.tsx
````typescript
"use client";

import { Stack } from "@mantine/core";
import type { ReactNode } from "react";
import { AttendanceStatusCard } from "./AttendanceStatusCard";
import { FieldOpsGreeting } from "./FieldOpsGreeting";

type FieldOpsHomeProps = {
  children?: ReactNode;
};

export function FieldOpsHome({ children }: FieldOpsHomeProps) {
  return (
    <Stack gap="md">
      <FieldOpsGreeting />

      <AttendanceStatusCard />
      
      {children}
    </Stack>
  );
}
````

## File: src/components/shared/Headers/Header.tsx
````typescript
import {
  Box,
  Burger,
  Container,
  Drawer,
  Flex,
  Stack,
  Title,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { HeaderProfile } from "./HeaderProfile";
import { NAV_LINKS } from "./nav-links";

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "var(--color-background)",
        borderBottom:
          "3px solid color-mix(in srgb, var(--color-primary-dark) 13%, transparent)",
      }}
    >
      <Container size="lg" py="sm">
        <Flex align="center" justify="space-between" gap="md" mih={48}>
          <Flex align="center" gap="xs" style={{ flexShrink: 0 }}>
            <Anchor
              component={Link}
              href="/"
              underline="never"
              style={{ textDecoration: "none" }}
            >
              <Title
                order={3}
                style={{
                  color: "var(--color-primary-dark)",
                  letterSpacing: -0.5,
                }}
              >
                Popo Laundry
              </Title>
            </Anchor>
          </Flex>

          <Box style={{ flexShrink: 0 }}>
            <HeaderProfile />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
````

## File: src/hooks/employee.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type {
  AssignEmployeePayload,
  EmployeeQuery,
  InviteEmployeePayload,
  OutletAttendanceQuery,
  OutletAttendanceSortBy,
  OutletTeamQuery,
  UpdateEmployeePayload,
} from "@/types/api/employee.types";
import { EmployeeApi } from "@/lib/api/employee.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useOutlets } from "./outlet.hooks";
import { filterOutletAttendanceSchema, FilterOutletAttendanceValues } from "@/lib/validation/employee.validation";
import { SortOrder } from "@/types/api";
import { schemaResolver, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

export const EMPLOYEES_QUERY_KEY = ["employees"];
const employeeApi = new EmployeeApi();

export function useEmployees(params?: EmployeeQuery) {
  return useQuery({
    queryKey: [...EMPLOYEES_QUERY_KEY, params],
    queryFn: () => employeeApi.getEmployees(params),
  });
}

export function useEmployee(employeeId: string) {
  return useQuery({
    queryKey: [...EMPLOYEES_QUERY_KEY, "detail", employeeId],
    queryFn: () => employeeApi.getEmployee(employeeId),
    enabled: Boolean(employeeId),
  });
}

export function useInviteEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: InviteEmployeePayload) => employeeApi.inviteEmployee(payload),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      }),
  });
}

export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ employeeId, payload }: { employeeId: string; payload: UpdateEmployeePayload }) => employeeApi.updateEmployee(employeeId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...EMPLOYEES_QUERY_KEY, "detail", variables.employeeId],
      });
    },
  });
}

export function useActivateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (employeeId: string) => employeeApi.activateEmployee(employeeId),

    onSuccess: (_, employeeId) => {
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      });
      queryClient.invalidateQueries({
        queryKey: [...EMPLOYEES_QUERY_KEY, "detail", employeeId],
      });
    },
  });
}

export function useDeactivateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (employeeId: string) => employeeApi.deactivateEmployee(employeeId),

    onSuccess: (_, employeeId) => {
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      });
      queryClient.invalidateQueries({
        queryKey: [...EMPLOYEES_QUERY_KEY, "detail", employeeId],
      });
    },
  });
}

export function useResendInvitation() {
  return useMutation({
    mutationFn: (employeeId: string) => employeeApi.resendInvitation(employeeId),
  });
}

export function useAssignEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AssignEmployeePayload) => employeeApi.assignEmployee(payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [...EMPLOYEES_QUERY_KEY, "detail", variables.employeeId],
      });
    },
    onError: (err) => {
      notifications.show({
        title: "Gagal",
        message: err instanceof Error ? err.message : "Gagal memindahkan karyawan.",
        color: "red"
      })
    }
  });
}

export function useCurrentOutletTeam(query: OutletTeamQuery) {
  return useQuery({
    queryKey: [...EMPLOYEES_QUERY_KEY, "team", query],
    queryFn: () => employeeApi.getCurrentOutletTeam(query),
  });
}

export function useCurrentOutletAttendance(query: OutletAttendanceQuery, options: { enabled?: boolean }) {
  return useQuery({
    queryKey: [...EMPLOYEES_QUERY_KEY, "attendance", query],
    queryFn: () => employeeApi.getCurrentOutletAttendance(query),
    enabled: options.enabled,
  });
}

export function useEmployeeHooks() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [filters, setFilters] = useState<Pick<EmployeeQuery, "search" | "role" | "accountStatus" | "workStatus" | "outletId">>({});
  const [debouncedSearch] = useDebouncedValue(filters.search ?? "", 400);
  const [sortBy, setSortBy] = useState<NonNullable<EmployeeQuery["sortBy"]>>("createdAt");
  const [sortOrder, setSortOrder] = useState<NonNullable<EmployeeQuery["sortOrder"]>>("desc");

  const employees = useEmployees({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const outlets = useOutlets({
    page: 1,
    pageSize: 50,
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (key: keyof Pick<EmployeeQuery, "search" | "role" | "accountStatus" | "workStatus" | "outletId">, value: string | null) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  };

  return {
    router,
    filters,
    sortBy,
    sortOrder,
    outlets,
    handleFilterChange,
    setSortBy,
    setPage,
    setSortOrder,
    handleReset,
    employees,
    setPageSize,
  };
}

export function useEmployeeAttendanceHooks() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50 | 100>(10);
  const [sortBy, setSortBy] = useState<OutletAttendanceSortBy>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const form = useForm<FilterOutletAttendanceValues>({
    mode: "controlled",

    initialValues: {
      search: "",
      date: null,
      role: null,
      status: null,
    },

    validate: schemaResolver(filterOutletAttendanceSchema),

    validateInputOnChange: true,

    onValuesChange: () => {
      setPage(1);
    },
  });

  const [debouncedSearch] = useDebouncedValue(form.values.search, 400);

  const attendance = useCurrentOutletAttendance(
    {
      page,
      pageSize,

      search: debouncedSearch || undefined,

      date: form.values.date ?? undefined,
      role: form.values.role ?? undefined,
      status: form.values.status ?? undefined,

      sortBy,
      sortOrder,
    },
    {
      enabled: !form.errors.search,
    },
  );

  const handleReset = () => {
    form.reset()

    setPage(1);
    setSortBy("name");
    setSortOrder("asc");
  };

  const handleSort = (column: OutletAttendanceSortBy) => {
    setPage(1);

    if (sortBy === column) {
      setSortOrder((previous) => (previous === "asc" ? "desc" : "asc"));
      return;
    }

    setSortBy(column);
    setSortOrder("asc");
  };

  return {
    form,
    attendance,
    page,
    setPage,
    pageSize,
    setPageSize,
    sortBy,
    sortOrder,
    handleSort,
    handleReset,
  };
}
````

## File: src/hooks/worker.hooks.ts
````typescript
import { ApiError } from "@/lib/api/axios";
import { WorkerApi } from "@/lib/api/worker.api";
import type { StationType, WorkerAvailableQuery, WorkerBypassPayload, WorkerHistoryQuery, WorkerValidatePayload } from "@/types/api/worker.types";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useState } from "react";

export const WORKER_QUERY_KEY = ["worker"] as const;
export const WORKER_AVAILABLE_QUERY_KEY = [...WORKER_QUERY_KEY, "available"] as const;
export const WORKER_ACTIVE_QUERY_KEY = [...WORKER_QUERY_KEY, "active"] as const;
export const WORKER_HISTORY_QUERY_KEY = [...WORKER_QUERY_KEY, "history"] as const;

type StationFilter = StationType | "ALL";
const workerApi = new WorkerApi();

export function useAvailable() {
  const AVAILABLE_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [stationType, setStationType] = useState<StationFilter>("ALL");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const query: WorkerAvailableQuery = {
    page: page,
    pageSize: AVAILABLE_PAGE_SIZE,
    ...(stationType !== "ALL" && { stationType }),
    sortOrder: sortOrder,
  };

  // fetching endpoint available

  const availableQuery = useQuery({
    queryKey: [...WORKER_AVAILABLE_QUERY_KEY, query],
    queryFn: () => workerApi.getAvailable(query),
  });

  function handleStationFilter(value: string | null) {
    if (!value) return;
    setStationType(value as StationFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }
  return {
    availableQuery,

    page,
    stationType,
    sortOrder,

    setPage,
    handleStationFilter,
    handleSortChange,
  };
}

export function useClaim() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => workerApi.claim(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas berhasil diambil!",
        message: "Tugas telah menjadi tugas aktif anda.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal mengambil tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useActive() {
  return useQuery({
    queryKey: WORKER_ACTIVE_QUERY_KEY,
    queryFn: () => workerApi.getActive(),
    refetchInterval:10_000 // supaya ketika ON_HOLD_BYPASS terapprove atau tereject, page tidak diam di situ saja.
  });
}

export function useValidateQuantities() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ assignmentId, payload }: { assignmentId: string; payload: WorkerValidatePayload }) =>
      workerApi.validateQuantities(assignmentId, payload),
    onSuccess: async () => {
      notifications.show({
        title: "Validasi Berhasil",
        message: "Kuantitas sesuai, silahkan memulai tugas anda!",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_ACTIVE_QUERY_KEY });
    },
    onError: async (error) => {
      if (error instanceof ApiError && error.code === "QUANTITY_MISMATCH") {
        await queryClient.invalidateQueries({ queryKey: WORKER_ACTIVE_QUERY_KEY });
        return;
      }
      notifications.show({
        title: "Validasi Gagal",
        message: error instanceof Error ? error.message : "Terjadi Kesalahan",
        color: "red",
      });
    },
  });
}

export function useRequestBypass() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ assignmentId, payload }: { assignmentId: string; payload: WorkerBypassPayload }) => workerApi.requestBypass(assignmentId, payload),
    onSuccess: async () => {
      notifications.show({
        title: "Permintaan bypass terkirim!",
        message: "Silahkan menunggu konfirmasi dari Outlet admin.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_ACTIVE_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Permintaan bypass gagal!",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useComplete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (assignmentId: string) => workerApi.complete(assignmentId),
    onSuccess: async () => {
      notifications.show({
        title: "Tugas Selesai!",
        message: "Tugas berhasil diselesaikan, terimakasih atas kerja keras anda.",
        color: "green",
      });
      await queryClient.invalidateQueries({ queryKey: WORKER_QUERY_KEY });
    },
    onError: (error: Error) => {
      notifications.show({
        title: "Gagal menyelesaikan tugas",
        message: error.message,
        color: "red",
      });
    },
  });
}

export function useHistoryList() {
  const HISTORY_PAGE_SIZE = 5;

  const [page, setPage] = useState<number>(1);
  const [stationType, setStationType] = useState<StationFilter>("ALL");
  const [period, setPeriod] = useState<string>(() => dayjs().format("YYYY-MM"));
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // query params
  const query: WorkerHistoryQuery = {
    page: page,
    pageSize: HISTORY_PAGE_SIZE,
    period,
    ...(stationType !== "ALL" && { stationType }),
    sortOrder,
  };
  const historyQuery = useQuery({
    queryKey: [...WORKER_HISTORY_QUERY_KEY, query],
    queryFn: () => workerApi.getHistoryList(query),
  });

  function handlePeriodChange(value: string) {
    setPeriod(value);
    setPage(1);
  }

  function handleStationFilter(value: string | null) {
    if (!value) return;
    setStationType(value as StationFilter);
    setPage(1);
  }

  function handleSortChange(value: "asc" | "desc") {
    setSortOrder(value);
    setPage(1);
  }

  return {
    historyQuery,

    page,
    period,
    stationType,
    sortOrder,

    setPage,
    handlePeriodChange,
    handleStationFilter,
    handleSortChange,
  };
}

export function useHistoryDetail(assignmentId: string) {
  return useQuery({
    queryKey: [...WORKER_HISTORY_QUERY_KEY, "detail", assignmentId],
    queryFn: () => workerApi.getHistoryDetail(assignmentId),
  });
}
````

## File: src/lib/api/authEmployee.api.ts
````typescript
import {
  AcceptInvitationPayload,
  ApiResponse,
  EmployeeLoginResponse,
  MeResponse,
  MessageResponse,
  ResetPasswordCustomerPayload,
  VerificationPayload,
} from "@/types/api";
import { api } from "./axios";
import { EmployeeLoginSchema } from "../validation/auth.validation";

export type AcceptInvitationResponse = {
  message: string;
};

export class AuthEmployeeApi {
  async login(payload: EmployeeLoginSchema) {
    const { data } = await api.post<ApiResponse<EmployeeLoginResponse>>("/auth/employee/login", payload);
    return data.data;
  }

  async acceptInvitation(payload: AcceptInvitationPayload) {
    const { data } = await api.post<{
      data: AcceptInvitationResponse;
    }>("/auth/employee/accept-invitation", payload);

    return data.data;
  }

  async forgotPassword(payload: VerificationPayload) {
    const { data } = await api.post<ApiResponse<null>>("/auth/employee/forgot-password", payload);
    return data;
  }

  async resetPassword(payload: ResetPasswordCustomerPayload) {
    const { data } = await api.post<ApiResponse<null>>("/auth/employee/reset-password", payload);
    return data;
  }

  async me() {
    const { data } = await api.get<MeResponse>("/auth/employee/me");
    return data.data;
  }

  async logout() {
    const { data } = await api.post<{ data: MessageResponse }>("/auth/employee/logout");
    return data.data;
  }
}
````

## File: src/lib/api/worker.api.ts
````typescript
import type { ApiResponse } from "@/types/api";
import { api } from "./axios";
import type {
   WorkerAvailableQuery,
   WorkerClaimResponse,
   WorkerAvailablePaginated,
   WorkerActiveResponse,
   WorkerValidatePayload,
   WorkerValidateResponse,
   WorkerCompleteResponse,
   WorkerBypassPayload,
   WorkerBypassResponse,
   WorkerHistoryPaginated,
   WorkerHistoryQuery,
   WorkerHistoryDetailResponse,
} from "@/types/api/worker.types";

const BASE_PATH = "/internal/worker/jobs";

export class WorkerApi {
  async getAvailable(query: WorkerAvailableQuery) {
    const { data } = await api.get<WorkerAvailablePaginated>(`${BASE_PATH}/available`, {
      params: query,
    });
    return {
      data: data.data,
      meta: data.meta,
    };
  }

  async claim(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerClaimResponse>>(`${BASE_PATH}/${assignmentId}/claim`, {});
    return data.data;
  }

  async getActive() {
    const { data } = await api.get<ApiResponse<WorkerActiveResponse>>(`${BASE_PATH}/active`);
    return data.data;
  }

  async validateQuantities(assignmentId: string, payload: WorkerValidatePayload) {
    const { data } = await api.post<ApiResponse<WorkerValidateResponse>>(`${BASE_PATH}/${assignmentId}/validate-quantities`, payload);
    return data.data;
  }
  async requestBypass(assignmentId: string, payload: WorkerBypassPayload) {
    const { data } = await api.post<ApiResponse<WorkerBypassResponse>>(`${BASE_PATH}/${assignmentId}/bypass-requests`, payload);
    return data.data;
  }

  async complete(assignmentId: string) {
    const { data } = await api.post<ApiResponse<WorkerCompleteResponse>>(`${BASE_PATH}/${assignmentId}/complete`, {});
    return data.data;
  }

  async getHistoryList(query: WorkerHistoryQuery) {
    const { data } = await api.get<WorkerHistoryPaginated>(`${BASE_PATH}/history`, { params: query });
    return { data: data.data, meta: data.meta };
  }

  async getHistoryDetail(assignmentId: string) {
    const { data } = await api.get<ApiResponse<WorkerHistoryDetailResponse>>(`${BASE_PATH}/history/${assignmentId}`);
    return data.data;
  }
}
````

## File: src/lib/validation/address.validation.ts
````typescript
import * as z from "zod";

export const createAddressSchema = z.object({
  label: z.string().max(50).optional().or(z.literal("")),
  provinceId: z.string().min(1, "Provinsi wajib dipilih"),
  provinceName: z.string().min(1),
  cityId: z.string().min(1, "Kota/Kabupaten wajib dipilih"),
  cityName: z.string().min(1),
  districtId: z.string().min(1, "Kecamatan wajib dipilih"),
  districtName: z.string().min(1),
  subDistrictId: z.string().min(1, "Kelurahan wajib dipilih"),
  subDistrictName: z.string().min(1),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap"),
  zipCode: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit angka"),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

export const updateAddressSchema = z.object({
  label: z.string().max(50).optional(),
  provinceId: z.string().min(1).optional(),
  provinceName: z.string().min(1).optional(),
  cityId: z.string().min(1).optional(),
  cityName: z.string().min(1).optional(),
  districtId: z.string().min(1).optional(),
  districtName: z.string().min(1).optional(),
  subDistrictId: z.string().min(1, "Kelurahan wajib dipilih"),
  subDistrictName: z.string().min(1),
  zipCode: z
    .string()
    .regex(/^\d{5}$/, "Kode pos harus 5 digit angka")
    .optional(),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap")
    .optional(),
  phone: z.string().min(8, "Nomor telepon tidak valid").max(20).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
});

export const previewLocationSchema = z.object({
  provinceName: z.string().min(1, "Provinsi wajib dipilih"),
  cityName: z.string().min(1, "Kota/Kabupaten wajib dipilih"),
  districtName: z.string().min(1, "Kecamatan wajib dipilih"),
  subDistrictName: z.string().min(1),
  zipCode: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit angka"),
  streetDetail: z
    .string()
    .min(10, "Detail alamat terlalu pendek, tulis lebih lengkap"),
});

export type CreateAddressSchema = z.infer<typeof createAddressSchema>;
export type UpdateAddressSchema = z.infer<typeof updateAddressSchema>;
export type PreviewLocationInput = z.infer<typeof previewLocationSchema>;
````

## File: src/types/api/address.types.ts
````typescript
export type Address = {
  id: string;
  label: string | null;
  provinceId: string;
  provinceName: string;
  cityId: string;
  cityName: string;
  districtId: string;
  districtName: string;
  subDistrictId: string;
  subDistrictName: string;
  zipCode: string;
  streetDetail: string;
  formattedAddress: string;
  phone: string;
  latitude: number | undefined; 
  longitude: number | undefined; 
  isPrimary: boolean;
};
export type Region = { id: number; name: string };

export type AddressFormValues = {
  label: string;
  provinceId: string;
  provinceName: string;
  cityId: string;
  cityName: string;
  districtId: string;
  districtName: string;
  subDistrictId: string;
  subDistrictName: string;
  streetDetail: string;
  zipCode: string;
  phone: string;
  latitude: number | undefined;
  longitude: number | undefined;
};

// Payload final setelah pin di peta dipastikan ada
export type AddressFormSubmitValues = {
  label: string;
  provinceId: string;
  provinceName: string;
  cityId: string;
  cityName: string;
  districtId: string;
  districtName: string;
  subDistrictId: string;
  subDistrictName: string;
  streetDetail: string;
  zipCode: string;
  phone: string;
  latitude: number;
  longitude: number;
};

export type AddressFormProps = {
  initialAddress?: Address;
  isPending: boolean;
  error: unknown;
  onSubmit: (values: AddressFormSubmitValues) => void;
  onCancel: () => void;
};


export type PreviewLocationResult = {
  latitude: number | undefined;
  longitude: number | undefined;
  found: boolean;
};
````

## File: src/types/api/employee.types.ts
````typescript
import { AccountStatus, DriverAssignmentStatus, EmployeeRole, PaginatedResponse, PickupDeliveryType, SortOrder, StationType, WorkerAssignmentStatus, WorkStatus } from ".";

export type EmployeeOutlet = {
  id: string;
  name: string;
};

export type Employee = {
  id: string;
  name: string;
  email: string;
  role: EmployeeRole;
  accountStatus: AccountStatus;
  workStatus: WorkStatus | null;
  currentOutletId: string | null;
  currentOutlet: EmployeeOutlet | null;
  createdAt: string;
  updatedAt: string;
};

export type EmployeeQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: EmployeeRole;
  accountStatus?: AccountStatus;
  workStatus?: WorkStatus;
  outletId?: string;
  sortBy?: "name" | "email" | "role" | "accountStatus" | "createdAt";
  sortOrder?: "asc" | "desc";
};

export type InviteEmployeePayload = {
  name: string;
  email: string;
  role: EmployeeRole;
};

export type UpdateEmployeePayload = {
  name?: string;
  role?: EmployeeRole;
};

export type AssignEmployeePayload = {
  employeeId: string;
  outletId: string;
};

export type OutletTeamSortBy = "name" | "role" | "workStatus";

export type OutletTeamQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: EmployeeRole;
  workStatus?: WorkStatus;
  stationType?: StationType;
  sortBy?: OutletTeamSortBy;
  sortOrder?: SortOrder;
};

export type OutletTeamWorkerTask = {
  id: string;
  stationType: StationType;
  status: WorkerAssignmentStatus;
  assignedAt: string;
  startedAt: string | null;
};

export type OutletTeamDriverTask = {
  id: string;
  taskType: PickupDeliveryType;
  status: DriverAssignmentStatus;
  assignedAt: string;
  pickedUpAt: string | null;
};

export type OutletTeamItem = {
  id: string;
  name: string;
  email: string;

  role: Exclude<EmployeeRole, "OUTLET_ADMIN">;

  accountStatus: AccountStatus;

  workStatus: WorkStatus | null;

  workerTasks: OutletTeamWorkerTask[];

  driverTasks: OutletTeamDriverTask[];
};

export type AttendanceStatus = "NOT_CLOCKED_IN" | "CLOCKED_IN" | "CLOCKED_OUT";

export type OutletAttendanceSortBy = "name" | "clockInAt" | "clockOutAt";

export type OutletAttendanceQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  date?: Date;
  role?: Exclude<EmployeeRole, "OUTLET_ADMIN">;
  status?: AttendanceStatus;
  sortBy?: OutletAttendanceSortBy;
  sortOrder?: SortOrder;
};

export type OutletAttendanceItem = {
  employeeId: string;
  employeeName: string;
  employeeEmail: string;
  role: EmployeeRole;
  attendanceDate: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  status: AttendanceStatus;
};

export type OutletAttendanceSummary = {
  totalEmployees: number;
  notClockedIn: number;
  clockedIn: number;
  clockedOut: number;
};

export type OutletAttendanceData = {
  summary: OutletAttendanceSummary;
  data: OutletAttendanceItem[];
};

export type OutletAttendanceResponse = {
  success: boolean;
  message: string;
  data: OutletAttendanceData;
  meta: PaginatedResponse<null>['meta']
};
````

## File: src/types/api/order.types.ts
````typescript
import {
  BillPaymentStatus,
  ComplaintCategory,
  ComplaintStatus,
  CustomerStatus,
  DriverAssignmentStatus,
  PaginatedResponse,
  PickupDeliveryType,
  SortOrder,
  StationType,
  WorkerAssignmentStatus,
} from ".";

export type DecimalString = string;

export type OrderSortBy = "createdAt" | "pickupScheduledAt" | "orderCode";

export type OrderQuery = {
  page?: number;
  pageSize?: number;
  search?: string;
  outletId?: string;
  customerStatus?: CustomerStatus;
  paymentStatus?: BillPaymentStatus;
  startDate?: string;
  endDate?: string;
  sortBy?: OrderSortBy;
  sortOrder?: SortOrder;
};

export type OrderCustomer = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
};

export type OrderOutlet = {
  id: string;
  name: string;
};

export type OrderBill = {
  id: string;
  weightKg: DecimalString;
  totalAmount: DecimalString;
  paymentStatus: BillPaymentStatus;
  laundryCost: DecimalString;
  shippingCost: DecimalString;
  paidAt: DecimalString
};

export type OrderListItem = {
  id: string;
  orderCode: string;
  customerStatus: CustomerStatus;

  pickupDate: string;
  pickupScheduledAt: string;

  receivedAt: string | null;

  createdAt: string;
  updatedAt: string;

  customer: OrderCustomer;
  outlet: OrderOutlet;
  bill: OrderBill | null;
};

export type OrderLaundryItem = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type OrderItem = {
  id: string;
  orderId: string;
  laundryItemId: string;
  quantity: number;
  laundryItem: OrderLaundryItem;
};

export type OrderDriver = {
  id: string;
  name: string;
  role: "DRIVER";
};

export type OrderDriverAssignment = {
  id: string;
  orderId: string;
  driverId: string | null;
  outletId: string;

  taskType: PickupDeliveryType;
  status: DriverAssignmentStatus;

  assignedAt: string | null;
  pickedUpAt: string | null;
  deliveredAt: string | null;
  completedAt: string | null;

  createdAt: string;
  updatedAt: string;

  driver: OrderDriver | null;
};

export type OrderWorker = {
  id: string;
  name: string;
  role: "WORKER";
};

export type OrderWorkerAssignment = {
  id: string;
  orderId: string;
  workerId: string | null;
  outletId: string;

  stationType: StationType;
  status: WorkerAssignmentStatus;

  assignedAt: string | null;
  startedAt: string | null;
  completedAt: string | null;

  createdAt: string;
  updatedAt: string;

  worker: OrderWorker | null;
};

export type OrderComplaint = {
  id: string;
  orderId: string;
  customerId: string;

  category: ComplaintCategory;
  description: string;
  proofPhotoUrl: string;

  status: ComplaintStatus;

  handledBy: string | null;
  responseNote: string | null;
  decidedAt: string | null;

  createdAt: string;
};

export type OrderDetail = {
  id: string;
  orderCode: string;

  customerId: string;
  outletId: string;

  addressSnapshot: string;
  addressPhoneSnapshot: string;

  addressLatitude: DecimalString;
  addressLongitude: DecimalString;
  distanceMeters: DecimalString;

  pickupDate: string;
  pickupScheduledAt: string;

  customerStatus: CustomerStatus;

  paidAt: string | null;
  receivedAt: string | null;
  receivedBy: string | null;

  createdAt: string;
  updatedAt: string;

  customer: OrderCustomer;
  outlet: OrderOutlet;
  bill: OrderBill | null;

  orderItems: OrderItem[];
  driverAssignments: OrderDriverAssignment[];
  workerAssignments: OrderWorkerAssignment[];
  complaint: OrderComplaint | null;
};

export type OrdersResponse = {
  data: OrderListItem[];
  meta: PaginatedResponse<OrderLaundryItem>["meta"];
};

export type CreateOrderItemPayload = {
  laundryItemId: string;
  quantity: number;
};

export type CreateOrderPayload = {
  weightKg: number;
  items: CreateOrderItemPayload[];
};
````

## File: src/types/api/worker.types.ts
````typescript
import type { ListQuery, PaginationMeta } from ".";

export type StationType = "WASHING" | "IRONING" | "PACKING";

export type WorkerAssignmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "ON_HOLD_BYPASS" | "COMPLETED";

// available
export type WorkerAvailableItem = {
  id: string;
  stationType: StationType;
  order: {
    id: string;
    orderCode: string;
  };
  createdAt: string;
};

export interface WorkerAvailableQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  stationType?: StationType;
}

export type WorkerAvailablePaginated = {
  success: boolean;
  message: string;
  data: WorkerAvailableItem[];
  meta: PaginationMeta;
};

// claim
export type WorkerClaimResponse = {
  id: string;
  order: {
    id: string;
    orderCode: string;
  };
  assignedAt: string | null;
  status: WorkerAssignmentStatus;
  stationType: StationType;
};

// active dan state-state yang dibutuhkan

type WorkerActiveOrderItem = {
  orderItemId: string;
  laundryItem: { id: string; name: string };
};

type WorkerActiveBase = {
  id: string;
  stationType: StationType;
  assignedAt: string | null;
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

export type WorkerActiveAssigned = WorkerActiveBase & {
  status: "ASSIGNED";
  attempt: number;
  maxAttempt: number;
  canValidate: boolean;
  canRequestBypass: boolean;
  order: WorkerActiveBase["order"] & {
    items: WorkerActiveOrderItem[];
  };
};

export type WorkerActiveInProgress = WorkerActiveBase & {
  status: "IN_PROGRESS";
};

export type WorkerActiveOnHoldBypass = WorkerActiveBase & {
  status: "ON_HOLD_BYPASS";
};

export type WorkerActiveAssignment = WorkerActiveAssigned | WorkerActiveInProgress | WorkerActiveOnHoldBypass;

export type WorkerActiveResponse = WorkerActiveAssignment | null; // tujuan tidak digabung di atas ^ adalah agar semantik dan props tidak perlu memikirkan null lainnya.

// validate-quantity - ada di Active Assigned

export type WorkerValidatePayload = {
  items: {
    orderItemId: string;
    submittedQuantity: number;
  }[];
};

export type WorkerValidateResponse = {
  id: string;
  status: "IN_PROGRESS";
  stationType: StationType;
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

export type WorkerBypassPayload = WorkerValidatePayload;

export type WorkerBypassResponse = {
  id: string;
  status: "ON_HOLD_BYPASS";
  stationType: StationType;
  startedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

export type WorkerCompleteResponse = {
  id: string;
  status: "COMPLETED";
  stationType: StationType;
  completedAt: string | null;
  order: {
    id: string;
    orderCode: string;
  };
};

//history

export type WorkerHistoryItem = {
  id: string;
  completedAt: string;
  stationType: StationType;
  order: {
    id: string;
    orderCode: string;
  };
};

export interface WorkerHistoryQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  stationType?: StationType;
  period:string
}

export type WorkerHistoryPaginated = {
  success: boolean;
  message: string;
  data: {
    historyList: WorkerHistoryItem[];
    summary: {
      totalCompleted: number;
    };
  };
  meta: PaginationMeta;
};

export type WorkerHistoryDetailResponse = {
  id: string;
  stationType: StationType;
  orderCode: string;
  assignedAt: string | null;
  startedAt: string | null;
  completedAt: string | null;
  items: {
    id: string;
    name: string;
    quantity: number;
  }[];
};
````

## File: src/app/(auth)/login/page.tsx
````typescript
import { Suspense } from "react";
import { Center, Loader } from "@mantine/core";
import LoginPageContent from "@/components/authCustomer/LoginCustomerContent";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <Center mih="100vh">
          <Loader size="md" />
        </Center>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
````

## File: src/components/back-office/penerimaan/ReceptionTable.tsx
````typescript
"use client";

import { ActionIcon, Button, Group, Table, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { ServerPagination } from "@/components/ui/ServerPagination";
import { PaginatedResponse } from "@/types/api";
import type { OrderListItem } from "@/types/api/order.types";

type ReceptionTableMode = "RECEIVE" | "CREATE_ORDER";

type Props = {
  data: OrderListItem[];
  meta: PaginatedResponse<OrderListItem>["meta"];
  mode: ReceptionTableMode;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: 10 | 20 | 50) => void;
  onReceive: (order: OrderListItem) => void;
  onCreateOrder: (order: OrderListItem) => void;
  onView: (orderId: string) => void;
};

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function ReceptionTable({ data, meta, mode, onPageChange, onPageSizeChange, onReceive, onCreateOrder, onView }: Props) {
  return (
    <>
      <Table.ScrollContainer minWidth={800}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Kode Pesanan</Table.Th>

              <Table.Th>Pelanggan</Table.Th>

              <Table.Th>Jadwal Pickup</Table.Th>

              <Table.Th ta="right">Aksi</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>
            {data.map((order) => (
              <Table.Tr key={order.id}>
                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {order.orderCode}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" fw={600} c="var(--color-text-primary)">
                    {order.customer.name}
                  </Text>

                  <Text size="xs" c="var(--color-text-secondary)">
                    {order.customer.email}
                  </Text>
                </Table.Td>

                <Table.Td>
                  <Text size="sm" c="var(--color-text-secondary)">
                    {formatDateTime(order.pickupScheduledAt)}
                  </Text>
                </Table.Td>

                <Table.Td ta="right">
                  <Group gap="xs" justify="flex-end" wrap="nowrap">
                    {mode === "RECEIVE" && (
                      <Button size="xs" onClick={() => onReceive(order)}>
                        Terima
                      </Button>
                    )}

                    {mode === "CREATE_ORDER" && !order.bill && (
                      <Button size="xs" onClick={() => onCreateOrder(order)}>
                        Buat Order
                      </Button>
                    )}

                    <ActionIcon variant="subtle" color="rinseBlue" aria-label={`Lihat pesanan ${order.orderCode}`} onClick={() => onView(order.id)}>
                      <IconChevronRight size={18} />
                    </ActionIcon>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <ServerPagination
        page={meta.page}
        pageSize={meta.pageSize as 10 | 20 | 50}
        totalItems={meta.totalItems}
        totalPages={meta.totalPages}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
}
````

## File: src/components/customer/alamat/AddressForm.tsx
````typescript
"use client";

import { Stack, TextInput, Textarea, Button, Alert } from "@mantine/core";
import { useForm, schemaResolver } from "@mantine/form";
import { createAddressSchema } from "@/lib/validation/address.validation";
import { ApiError } from "@/lib/api/axios";
import type {
  AddressFormProps,
  AddressFormSubmitValues,
  AddressFormValues,
} from "@/types/api/address.types";
import { useAuthStore } from "@/stores/useAuthStore";
import { useAddressLocationPreview } from "@/hooks/addressCustomer/Useaddresslocationpreview ";
import { AddressRegionFields } from "./AddressRegionFields";
import { AddressMapSection } from "./AddressMapSection";

export function AddressForm({
  initialAddress,
  isPending,
  error,
  onSubmit,
  onCancel,
}: AddressFormProps) {
  const user = useAuthStore((state) => state.user);
  const form = useForm<AddressFormValues>({
    initialValues: {
      label: initialAddress?.label ?? "",
      provinceId: initialAddress?.provinceId ?? "",
      provinceName: initialAddress?.provinceName ?? "",
      cityId: initialAddress?.cityId ?? "",
      cityName: initialAddress?.cityName ?? "",
      districtId: initialAddress?.districtId ?? "",
      districtName: initialAddress?.districtName ?? "",
      subDistrictId: initialAddress?.subDistrictId ?? "",
      subDistrictName: initialAddress?.subDistrictName ?? "",
      streetDetail: initialAddress?.streetDetail ?? "",
      zipCode: initialAddress?.zipCode ?? "",
      phone: initialAddress?.phone ?? user?.phone ?? "",
      longitude: undefined,
      latitude: undefined,
    },
    validate: schemaResolver(createAddressSchema),
  });

  const {
    locationError,
    isAddressDetailComplete,
    hasPosition,
    isCheckingLocation,
    resetPin,
    handleCheckLocation,
    handlePinChange,
  } = useAddressLocationPreview(form);

  function handleFormSubmit(values: AddressFormValues) {
    if (values.latitude === undefined || values.longitude === undefined) {
      return;
    }

    const submitValues: AddressFormSubmitValues = {
      ...values,
      latitude: values.latitude,
      longitude: values.longitude,
    };

    onSubmit(submitValues);
  }

  const errorMessage =
    error instanceof ApiError
      ? error.code === "GEOCODING_FAILED"
        ? "Alamat tidak ditemukan. Coba tulis detail jalan lebih lengkap."
        : error.message
      : null;

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Stack gap="md">
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

        <TextInput
          label="Label"
          placeholder="Rumah, Kos, Kantor, dll (opsional)"
          {...form.getInputProps("label")}
        />

        <AddressRegionFields form={form} />

        <TextInput
          label="Kode Pos"
          description="Masukkan kode pos sesuai alamat."
          placeholder="Masukkan kode pos"
          maxLength={5}
          inputMode="numeric"
          required
          {...form.getInputProps("zipCode")}
          onChange={(e) => {
            form.setFieldValue(
              "zipCode",
              e.currentTarget.value.replace(/\D/g, ""),
            );
            resetPin();
          }}
        />

        <Textarea
          label="Detail Alamat"
          description="Nama jalan, nomor rumah."
          placeholder="Contoh: nama jalan, nomor rumah"
          minRows={3}
          required
          {...form.getInputProps("streetDetail")}
          onChange={(e) => {
            form.setFieldValue("streetDetail", e.currentTarget.value);
            resetPin();
          }}
        />

        <AddressMapSection
          isAddressDetailComplete={isAddressDetailComplete}
          hasPosition={hasPosition}
          latitude={form.values.latitude}
          longitude={form.values.longitude}
          locationError={locationError}
          isCheckingLocation={isCheckingLocation}
          onCheckLocation={handleCheckLocation}
          onPinChange={handlePinChange}
        />

        <Stack gap="xs">
          <Button
            type="submit"
            loading={isPending}
            disabled={!hasPosition}
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-text-on-accent)",
            }}
          >
            {initialAddress ? "Simpan Perubahan" : "Tambah Alamat"}
          </Button>
          <Button variant="subtle" onClick={onCancel} disabled={isPending}>
            Batal
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
````

## File: src/components/customer/alamat/AddressList.tsx
````typescript
"use client";

import { useState } from "react";
import { Stack, Text, Button, Modal, Alert } from "@mantine/core";
import { modals } from "@mantine/modals";

import { AddressCard } from "./AddressCard";
import { AddressForm } from "./AddressForm";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import type { Address, AddressFormSubmitValues } from "@/types/api/address.types";
import { notifications } from "@mantine/notifications";
import { ApiError } from "@/lib/api/axios";
import { useAddresses, useCreateAddress, useDeleteAddress, useSetPrimaryAddress, useUpdateAddress } from "@/hooks/addressCustomer/address.hooks";

const MAX_ADDRESSES = 5; // samain sama batas backend (address.service.ts)

export function AddressList() {
  const {
    data: addresses,
    isLoading,
    isError,
    error,
    refetch,
  } = useAddresses();
  const [modalMode, setModalMode] = useState<"create" | "edit" | null>(null);
  const [editingAddress, setEditingAddress] = useState<Address | undefined>(undefined);

  const createMutation = useCreateAddress();
  const updateMutation = useUpdateAddress();
  const deleteMutation = useDeleteAddress();
  const setPrimaryMutation = useSetPrimaryAddress();

  function closeModal() {
    setModalMode(null);
    setEditingAddress(undefined);
  }

  function openCreateModal() {
    setEditingAddress(undefined);
    setModalMode("create");
  }

  function openEditModal(address: Address) {
    setEditingAddress(address);
    setModalMode("edit");
  }

 function handleSubmit(values: AddressFormSubmitValues) {
  if (modalMode === "edit" && editingAddress) {
    updateMutation.mutate(
      { id: editingAddress.id, payload: values },
      {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Alamat berhasil diperbarui.",
            color: "green",
          });

          closeModal();
        },
        onError: (error) => {
          notifications.show({
            title: "Gagal",
            message:
              error instanceof Error
                ? error.message
                : "Gagal memperbarui alamat.",
            color: "red",
          });
        },
      },
    );
  } else {
    createMutation.mutate(values, {
      onSuccess: () => {
        notifications.show({
          title: "Berhasil",
          message: "Alamat berhasil ditambahkan.",
          color: "green",
        });

        closeModal();
      },
      onError: (error) => {
        notifications.show({
          title: "Gagal",
          message:
            error instanceof Error
              ? error.message
              : "Gagal menambahkan alamat.",
          color: "red",
        });
      },
    });
  }
}

 function handleDelete(address: Address) {
  modals.openConfirmModal({
    title: "Hapus alamat?",
    children: (
      <Text size="sm">
        Alamat &quot;{address.label || address.formattedAddress}&quot; akan dihapus. Order
        yang sudah berjalan tidak akan terpengaruh.
      </Text>
    ),
    labels: { confirm: "Hapus", cancel: "Batal" },
    confirmProps: {
      style: { backgroundColor: "var(--color-error)" },
    },
    onConfirm: () =>
      deleteMutation.mutate(address.id, {
        onSuccess: () => {
          notifications.show({
            title: "Berhasil",
            message: "Alamat berhasil dihapus.",
            color: "green",
          });
        },
        onError: (error) => {
          notifications.show({
            title: "Gagal",
            message:
              error instanceof ApiError
                ? error.message
                : "Gagal menghapus alamat.",
            color: "red",
          });
        },
      }),
  });
}

  const mutation = modalMode === "edit" ? updateMutation : createMutation;

  return (
    <Stack gap="md">
      <AsyncStateView
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={addresses}
        onRetry={() => refetch()}
        isEmpty={(data) => data.length === 0}
        emptyTitle="Belum ada alamat"
        emptyDescription="Tambahkan alamat pertama kamu untuk mulai pesan laundry."
        emptyAction={{ label: "+ Tambah Alamat", onClick: openCreateModal }}
      >
        {(addressList) => {
          const isAtLimit = addressList.length >= MAX_ADDRESSES;

          return (
            <Stack gap="md">
              {addressList.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  onEdit={() => openEditModal(address)}
                  onDelete={() => handleDelete(address)}
                  onSetPrimary={() => setPrimaryMutation.mutate(address.id)}
                  isSettingPrimary={setPrimaryMutation.isPending}
                />
              ))}

              {isAtLimit ? (
                <Alert style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}>
                  Maksimal {MAX_ADDRESSES} alamat tersimpan. Hapus salah satu untuk menambah yang baru.
                </Alert>
              ) : (
                <Button variant="outline" onClick={openCreateModal}>
                  + Tambah Alamat
                </Button>
              )}
            </Stack>
          );
        }}
      </AsyncStateView>

      <Modal
        opened={modalMode !== null}
        onClose={closeModal}
        title={modalMode === "edit" ? "Edit Alamat" : "Tambah Alamat"}
      >
        <AddressForm
          initialAddress={editingAddress}
          isPending={mutation.isPending}
          error={mutation.error}
          onSubmit={handleSubmit}
          onCancel={closeModal}
        />
      </Modal>
    </Stack>
  );
}
````

## File: src/components/shared/Headers/HeaderProfile.tsx
````typescript
"use client";

import {
  Avatar, Group, Menu, Skeleton, Text, UnstyledButton, Button, Box,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLogout,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import { useLogout } from "@/hooks/authCustomer.hooks";
import { NAV_LINKS } from "./nav-links";
import { notifications } from "@mantine/notifications";

export function HeaderProfile() {
  const user = useAuthStore((s) => s.user);
  const isInitializing = useAuthStore((s) => s.isInitializing);
  const router = useRouter();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  if (isInitializing) {
    return (
      <Group gap="xs">
        <Skeleton height={36} width={36} radius="xl" />
        <Skeleton height={14} width={80} visibleFrom="sm" />
      </Group>
    );
  }

  if (!user) {
    return (
      <Group gap="sm">
        <Button component={Link} href="/login" variant="subtle" size="sm">
          Masuk
        </Button>
        <Button
          component={Link}
          href="/register"
          size="sm"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-on-accent)",
          }}
        >
          Daftar
        </Button>
      </Group>
    );
  }

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "?";

  const handleLogout = () => {
  logout(undefined, {
    onSuccess: () => {
      useAuthStore.getState().clearUser();

      notifications.show({
        title: "Berhasil",
        message: "Kamu berhasil keluar dari akun.",
        color: "green",
      });

      router.replace("/login");
    },

    onError: (error) => {
      notifications.show({
        title: "Gagal",
        message:
          error instanceof Error
            ? error.message
            : "Gagal keluar dari akun. Silakan coba lagi.",
        color: "red",
      });
    },
  });
};

  return (
    <Menu shadow="md" width={220} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar
              src={user?.profilePhotoUrl || undefined}
              radius="xl"
              size={40}
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {initials}
            </Avatar>
            <Text fw={500} size="lg" visibleFrom="sm">{user.name}</Text>
            <Box visibleFrom="sm" component="span" style={{ display: "inline-flex" }}>
              <IconChevronDown size={16} style={{ color: "var(--color-text-secondary)" }} />
            </Box>
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label style={{ wordBreak: "break-all" }}>{user.email}</Menu.Label>

        {NAV_LINKS.map(({ label, href, icon: Icon }) => (
          <Menu.Item
            key={href}
            component={Link}
            href={href}
            leftSection={<Icon size={16} />}
          >
            {label}
          </Menu.Item>
        ))}
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout size={16} />}
          onClick={handleLogout}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Keluar..." : "Keluar"}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
````

## File: src/hooks/order.hooks.ts
````typescript
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { OrderApi } from "@/lib/api/order.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDebouncedValue } from "@mantine/hooks";
import { useOutlets } from "./outlet.hooks";
import { CreatePaymentResponse, ListOrderQuery } from "@/types/api/orders.types";
import { ApiError } from "@/lib/api/axios";
import type { CreateOrderPayload, OrderQuery } from "@/types/api/order.types";

const orderApi = new OrderApi();
export const ORDERS_QUERY_KEY = ["orders"] as const;

export function useOrderList(params: OrderQuery) {
  return useQuery({
    queryKey: [...ORDERS_QUERY_KEY, params],
    queryFn: () => orderApi.getOrders(params),
    refetchInterval: 15_000,
    refetchOnWindowFocus: true
  });
}

export function useOrder(orderId: string) {
  return useQuery({
    queryKey: [...ORDERS_QUERY_KEY, "detail", orderId],
    queryFn: () => orderApi.getOrderById(orderId),
    enabled: Boolean(orderId),
  });
}

export function useReceiveOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) => orderApi.receiveOrder(orderId),

    onSuccess: async (_, orderId) => {
      await queryClient.invalidateQueries({
        queryKey: ORDERS_QUERY_KEY,
      });

      await queryClient.invalidateQueries({
        queryKey: [...ORDERS_QUERY_KEY, "detail", orderId],
      });
    },
  });
}

type CreateOrderVariables = {
  orderId: string;
  payload: CreateOrderPayload;
};

export function useCreateOrderAdmin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, payload }: CreateOrderVariables) => orderApi.createOrderAdmin(orderId, payload),

    onSuccess: async (_, variables) => {
      await queryClient.invalidateQueries({
        queryKey: ORDERS_QUERY_KEY,
      });

      await queryClient.invalidateQueries({
        queryKey: [...ORDERS_QUERY_KEY, "detail", variables.orderId],
      });
    },
  });
}

type OrderFiltersState = Pick<OrderQuery, "search" | "customerStatus" | "paymentStatus" | "outletId" | "startDate" | "endDate">;

export function useOrderHooks(role: string) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<10 | 20 | 50>(10);
  const [filters, setFilters] = useState<OrderFiltersState>({});
  const [debouncedSearch] = useDebouncedValue(filters.search ?? "", 400);
  const [sortBy, setSortBy] = useState<NonNullable<OrderQuery["sortBy"]>>("createdAt");
  const [sortOrder, setSortOrder] = useState<NonNullable<OrderQuery["sortOrder"]>>("desc");

  const orders = useOrderList({
    page,
    pageSize,
    ...filters,
    search: debouncedSearch || undefined,
    sortBy,
    sortOrder,
  });

  const outlets = useOutlets({
    page: 1,
    pageSize: 50,
    sortBy: "name",
    sortOrder: "asc",
  });

  const handleFilterChange = (key: keyof OrderFiltersState, value: string | null) => {
    setFilters((current) => ({
      ...current,
      [key]: value || undefined,
    }));

    setPage(1);
  };

  const handleReset = () => {
    setFilters({});
    setSortBy("createdAt");
    setSortOrder("desc");
    setPage(1);
  };

  const handleView = (orderId: string) => {
    const basePath = role === "SUPER_ADMIN" ? "/internal/super-admin/pesanan" : "/internal/outlet-admin/pesanan";

    router.push(`${basePath}/${orderId}`);
  };

  return { filters, sortBy, sortOrder, outlets, handleFilterChange, setSortBy, setPage, setSortOrder, orders, setPageSize, handleView, handleReset };
}

export function useCreateOrder() {
  return useMutation({ mutationFn: orderApi.createOrder });
}

export function useOrders(query: ListOrderQuery) {
  return useQuery({
    queryKey: ["orders", query],
    queryFn: () => orderApi.listOrders(query),
  });
}

export function useOrderDetail(id: string) {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => orderApi.getOrderDetail(id),
    enabled: !!id,
  });
}

export function useCreatePayment(id: string) {
  return useMutation<
    CreatePaymentResponse,
    ApiError,
    void
  >({
    mutationFn: () => orderApi.paymentAttempt(id),
  });
}

export function useLatestPayment(id: string) {
  return useQuery({
    queryKey: ["payment", id],
    queryFn: () => orderApi.getLastestPayment(id),
    enabled: !!id,
  });
}
````

## File: src/types/api/attendance.types.ts
````typescript
import type { ListQuery, PaginationMeta } from ".";

// dipakai di button
export type ClockInResponse = {
  id: string;
  attendanceDate: string;
  clockInAt: string;
  employeeId: string;
  outletId: string;
};

// dipakai di button juga
export type ClockOutResponse = {
  id: string;
  attendanceDate: string;
  clockOutAt: string;
  employeeId: string;
  outletId: string;
};

// dipakai di attendance status card
export type WorkStatus = "OFF_DUTY" | "AVAILABLE" | "BUSY";

export type AttendanceStatusResponse = {
  workStatus: WorkStatus | null;
  attendanceDate: string | null;
  clockInAt: string | null;
  clockOutAt: string | null;
  canClockIn: boolean;
  canClockOut: boolean;
  isCarryOver: boolean;
};

//

export type AttendanceHistoryItem = {
  id: string;
  attendanceDate: string;
  clockInAt: string | null;
  clockOutAt: string | null;
  employeeId: string;
  outletId: string;
  createdAt: string;
};

export type AttendanceHistorySummary = {
  period: string;
  totalDays: number;
  presentDays: number;
  absentDays: number;
};

export type AttendanceHistoryData = {
  attendanceHistory: AttendanceHistoryItem[];
  summary: AttendanceHistorySummary;
};
export interface AttendanceHistoryQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  period: string;
}

export type AttendanceHistoryPaginated = {
  success: boolean;
  message: string;
  data: AttendanceHistoryData;
  meta: PaginationMeta;
};
````

## File: src/types/api/driver.types.ts
````typescript
import type { ListQuery, PaginationMeta } from ".";

export type TaskType = "PICKUP" | "DELIVERY";

export type DriverAssignmentStatus = "QUEUED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED";

// available
export type DriverAvailableItem = {
  id: string;
  createdAt: string;
  order: {
    id: string;
    orderCode: string;
    addressSnapshot: string;
    pickupScheduledAt?: string;
  };
  taskType: TaskType;
};

export interface DriverAvailableQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  taskType?: TaskType;
}

export type DriverAvailablePaginated = {
  success: boolean;
  message: string;
  data: DriverAvailableItem[];
  meta: PaginationMeta;
};

// Claim
export type DriverClaimResponse = {
  id: string;
  order: {
    id: string;
    orderCode: string;
  };
  taskType: TaskType;
  assignedAt: string | null;
  status: DriverAssignmentStatus;
};

// active

type DriverActiveBase = {
  id: string;

  order: {
    id: string;
    orderCode: string;
  };
};

type CustomerDestination = {
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
};

type OutletDestination = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
};

export type DriverActivePickupAssigned = DriverActiveBase & {
  taskType: "PICKUP";
  status: "ASSIGNED";
  state: "PICKUP_ASSIGNED";
  action: "START_PICKUP";
  destination: CustomerDestination;
  pickupScheduledAt: string;
};

export type DriverActivePickupToCustomer = DriverActiveBase & {
  taskType: "PICKUP";
  status: "IN_PROGRESS";
  state: "PICKUP_TO_CUSTOMER";
  action: "CONFIRM_PICKUP";
  destination: CustomerDestination;
  pickupScheduledAt: string;
};

export type DriverActivePickupToOutlet = DriverActiveBase & {
  taskType: "PICKUP";
  status: "IN_PROGRESS";
  state: "PICKUP_TO_OUTLET";
  action: null;
  destination: OutletDestination;
  pickedUpAt: string;
};

export type DriverActiveDeliveryAssigned = DriverActiveBase & {
  taskType: "DELIVERY";
  status: "ASSIGNED";
  state: "DELIVERY_ASSIGNED";
  action: "START_DELIVERY";
  destination: CustomerDestination;
};

export type DriverActiveDeliveryToCustomer = DriverActiveBase & {
  taskType: "DELIVERY";
  status: "IN_PROGRESS";
  state: "DELIVERY_TO_CUSTOMER";
  action: "COMPLETE_DELIVERY";
  destination: CustomerDestination;
};

export type DriverActiveAssignment =
  | DriverActiveDeliveryAssigned
  | DriverActiveDeliveryToCustomer
  | DriverActivePickupAssigned
  | DriverActivePickupToCustomer
  | DriverActivePickupToOutlet;

export type DriverActiveResponse = DriverActiveAssignment | null;
// Start
export type DriverStartResponse = {
  id: string;
  taskType: TaskType;
  status: DriverAssignmentStatus;
};

// pickup-collected
export type DriverPickupCollectedResponse = {
  id: string;
  taskType: TaskType;
  status: DriverAssignmentStatus;
  pickedUpAt: string;
};

export type DriverCompleteResponse = {
  id: string;
  taskType: TaskType;
  status: DriverAssignmentStatus;
  deliveredAt: string;
};

// history
export type DriverHistoryItem = {
  id: string;
  completedAt: string;
  taskType: TaskType;
  order: {
    id: string;
    orderCode: string;
  };
};

export interface DriverHistoryQuery extends Pick<ListQuery, "page" | "pageSize" | "sortOrder"> {
  taskType?: TaskType;
  period: string;
}

export type DriverHistoryPaginated = {
  success: boolean;
  message: string;
  data: {
    historyList: DriverHistoryItem[];
    summary: {
      totalCompleted: number;
    };
  };
  meta: PaginationMeta;
};

export type DriverHistoryDetailResponse = {
  id: string;
  outlet: {
    name: string;
    address: string;
  };
  order: {
    customer: {
      name: string;
    };
    orderCode: string;
    addressSnapshot: string;
    addressPhoneSnapshot: string;
  };
  status: DriverAssignmentStatus;
  completedAt: string | null;
  taskType: TaskType;
  assignedAt: string | null;
  pickedUpAt: string | null;
  deliveredAt: string | null;
};
````

## File: src/types/api/index.ts
````typescript
export type Role = "CUSTOMER" | "WORKER" | "DRIVER" | "OUTLET_ADMIN" | "SUPER_ADMIN";

export type RegisterCustomerResponse = {
  customerId: string;
  email: string;
  message: string;
};

export type GoogleLoginPayload = { idToken: string };

export type LoginUser = {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER";
  isEmailVerified: boolean;
};

export type LoginCustomerResponse = {
  user: LoginUser;
  homeUrl: string;
};

export type EmployeeLoginResponse = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type VerifyEmailPayload = {
  token: string;
  name: string;
  password: string;
};

export type AcceptInvitationPayload = {
  token: string;
  password: string;
};

export type VerificationPayload = {
  email: string;
};

export type MessageResponse = {
  message: string;
};

export type ResetPasswordCustomerPayload = {
  token: string;
  newPassword: string;
};

export type Me = {
  id: string;
  name: string;
  email: string;
  role: Role;
  accountType: "customer" | "employee";
  phone: string | null;
  profilePhotoUrl: string | null;
  isEmailVerified: boolean;
  authProvider: string;
};

export type MeResponse = {
  success: true;
  data: Me;
};

export type AccountStatus = "INVITED" | "ACTIVE" | "INACTIVE";
export type AttendanceStatus = "OFF_DUTY" | "ON_DUTY";
export type AvailabilityStatus = "AVAILABLE" | "BUSY";
export type PaymentStatus = "UNPAID" | "PENDING" | "PAID" | "FAILED" | "CANCELLED" | "EXPIRED";
export type InternalOrderState = "ON_HOLD_BYPASS" | "PAUSED_OFF_HOURS";
export type CustomerOrderStatus =
  | "MENUNGGU_PENJEMPUTAN_DRIVER"
  | "LAUNDRY_SEDANG_MENUJU_OUTLET"
  | "LAUNDRY_TELAH_SAMPAI_OUTLET"
  | "LAUNDRY_SEDANG_DICUCI"
  | "LAUNDRY_SEDANG_DISETRIKA"
  | "LAUNDRY_SEDANG_DI_PACKING"
  | "MENUNGGU_PEMBAYARAN"
  | "LAUNDRY_SIAP_DIANTAR"
  | "LAUNDRY_SEDANG_DIKIRIM_MENUJU_CUSTOMER"
  | "MENUNGGU_KONFIRMASI_CUSTOMER"
  | "SELESAI"
  | "DIBATALKAN_CUSTOMER"
  | "DALAM_PENANGANAN_KOMPLAIN";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  accountStatus: AccountStatus;
  outletId?: string;
  stationType?: "WASHING" | "IRONING" | "PACKING";
  isEmailVerified?: boolean;
}

export interface ListQuery {
  page: number;
  pageSize: 10 | 20 | 50 | number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filters?: Record<string, string | number | boolean | undefined>;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface OrderListItem {
  id: string;
  orderNumber: string;
  customerName: string;
  outletName: string;
  status: CustomerOrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  total?: number;
}

export type PaginationMeta = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
export type EmployeeRole = "OUTLET_ADMIN" | "WORKER" | "DRIVER";
export type WorkStatus = "OFF_DUTY" | "AVAILABLE" | "BUSY";
export type BypassStatus = "PENDING" | "APPROVED" | "REJECTED";
export type StationType = "WASHING" | "IRONING" | "PACKING";
export type SortOrder = "asc" | "desc";
export type ComplaintCategory = "TIDAK_SESUAI" | "RUSAK" | "HILANG";

export type ComplaintStatus = "OPEN" | "APPROVED" | "REJECTED";

export type CustomerStatus =
  | "SCHEDULED"
  | "WAITING_DRIVER_PICKUP"
  | "ON_THE_WAY_TO_OUTLET"
  | "ARRIVED_AT_OUTLET"
  | "WASHING"
  | "IRONING"
  | "PACKING"
  | "WAITING_PAYMENT"
  | "OVERDUE"
  | "READY_FOR_DELIVERY"
  | "ON_THE_WAY_TO_CUSTOMER"
  | "WAITING_CUSTOMER_CONFIRMATION"
  | "RECEIVED_BY_CUSTOMER";

export type BillPaymentStatus =
  | "UNPAID"
  | "PAID";

export type PickupDeliveryType =
  | "PICKUP"
  | "DELIVERY";

export type DriverAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "COMPLETED";
export type WorkerAssignmentStatus =
  | "QUEUED"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "ON_HOLD_BYPASS"
  | "COMPLETED";
````

## File: src/lib/api/axios.ts
````typescript
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export class ApiError extends Error {
  code: string;
  fields?: Record<string, string>;

  constructor(code: string, message: string, fields?: Record<string, string>) {
    super(message);

    this.name = "ApiError";
    this.code = code;
    this.fields = fields;
  }
}

type ErrorEnvelope = {
  success: false;
  error: {
    code: string;
    message: string;
    fields?: Record<string, string>;
  };
};

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

let refreshPromise: Promise<void> | null = null;

const NO_REFRESH_ENDPOINTS = [
  "/auth/login",
  "/auth/employee/login",
  "/auth/employee/accept-invitation",
  "/auth/employee/forgot-password",
  "/auth/employee/reset-password",
  "/auth/register",
  "/auth/verify-email",
  "/auth/resend-verification",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/login/google",
  "/auth/refresh",
];

function shouldSkipRefresh(url?: string): boolean {
  if (!url) return false;

  return NO_REFRESH_ENDPOINTS.some((endpoint) => url.includes(endpoint));
}

export async function refreshAccessToken(): Promise<void> {
  if (refreshPromise) {
    return refreshPromise;
  }

  refreshPromise = axios
    .post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {},
      {
        withCredentials: true,
      },
    )
    .then(() => {})
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError<ErrorEnvelope>) => {
    const originalRequest = error.config as RetryableRequestConfig | undefined;
    const status = error.response?.status;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    if (shouldSkipRefresh(originalRequest.url)) {
      const payload = error.response?.data?.error;
      return Promise.reject(
        new ApiError(
          payload?.code ?? "UNKNOWN_ERROR",
          payload?.message ?? "Terjadi kesalahan. Silakan coba lagi.",
          payload?.fields,
        ),
      );
    }


    const code = error.response?.data?.error?.code;

    // HANYA coba refresh untuk token yang benar-benar EXPIRED
    // (pernah login, tokennya basi). Kalau ACCESS_TOKEN_REQUIRED
    // (belum pernah login sama sekali / tidak ada cookie), refresh
    // dijamin gagal karena refreshToken juga tidak ada — percuma dicoba.
    if (code === "ACCESS_TOKEN_EXPIRED" && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();
        return api(originalRequest);
      } catch (refreshError) {

        // Hindari infinite reload: cuma redirect kalau BELUM di /login,
        // dan pakai client-side navigation, bukan full reload.
        if (
          typeof window !== "undefined" &&
          !window.location.pathname.startsWith("/login")
        ) {
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    const payload = error.response?.data?.error;
    return Promise.reject(
      new ApiError(
        payload?.code ?? "UNKNOWN_ERROR",
        payload?.message ?? "Terjadi kesalahan. Silakan coba lagi.",
        payload?.fields,
      ),
    );
  },
);
````

## File: src/components/back-office/penerimaan/ReceptionContent.tsx
````typescript
"use client";

import { Paper, Stack, Tabs } from "@mantine/core";
import { AsyncStateView } from "@/components/ui/AsyncStateView";
import { CreateOrderModal } from "./CreateOrderModal";
import { ReceptionFilters } from "./ReceptionFilters";
import { ReceptionTable } from "./ReceptionTable";
import { ReceiveOrderModal } from "./ReceiveOrderModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { useReceiveOrderHooks } from "@/hooks/reception.hooks";
import TableSkeleton from "../shared/TableSkeleton";

export function ReceptionContent() {
  const {
    stage,
    handleStageChange,
    query,
    handleQueryChange,
    handleReset,
    isLoading,
    isError,
    error,
    data,
    refetch,
    tableMode,
    handlePageChange,
    handlePageSizeChange,
    handleReceive,
    handleCreateOrder,
    handleView,
    selectedOrderToReceive,
    receiveOrderMutation,
    setSelectedOrderToReceive,
    handleReceiveConfirm,
    selectedOrderToCreate,
    createOrderMutation,
    setSelectedOrderToCreate,
    handleCreateOrderSubmit,
  } = useReceiveOrderHooks();
  return (
    <>
      <Stack gap="lg">
        <PageHeader title="Penerimaan Pesanan" description="Kelola pesanan menunggu penerimaan dalam sistem." />
        <Tabs value={stage} onChange={handleStageChange}>
          <Tabs.List>
            <Tabs.Tab value="WAITING_RECEIPT">Menunggu Diterima</Tabs.Tab>

            <Tabs.Tab value="READY_TO_CREATE">Siap Dibuatkan Order</Tabs.Tab>
          </Tabs.List>
        </Tabs>

        <Paper
          withBorder
          radius="md"
          p="md"
          style={{
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Stack gap="md">
            <ReceptionFilters
              query={query}
              onChange={handleQueryChange}
              onSortByChange={(value) => handleQueryChange("sortBy", value)}
              onSortOrderChange={(value) => handleQueryChange("sortOrder", value)}
              onReset={handleReset}
            />

            <AsyncStateView
              isLoading={isLoading}
              isError={isError}
              error={error}
              data={data}
              onRetry={refetch}
              isEmpty={(result) => result.data.length === 0}
              skeleton={<TableSkeleton />}
            >
              {(result) => (
                <ReceptionTable
                  data={result.data}
                  meta={result.meta}
                  mode={tableMode}
                  onPageChange={handlePageChange}
                  onPageSizeChange={handlePageSizeChange}
                  onReceive={handleReceive}
                  onCreateOrder={handleCreateOrder}
                  onView={handleView}
                />
              )}
            </AsyncStateView>
          </Stack>
        </Paper>
      </Stack>
      <ReceiveOrderModal
      key={selectedOrderToReceive?.id || "receive-modal"}
        opened={selectedOrderToReceive !== null}
        order={selectedOrderToReceive}
        isLoading={receiveOrderMutation.isPending}
        onClose={() => setSelectedOrderToReceive(null)}
        onConfirm={handleReceiveConfirm}
      />

      <CreateOrderModal
      key={selectedOrderToCreate?.id || "create-modal"}
        opened={selectedOrderToCreate !== null}
        order={selectedOrderToCreate}
        isSubmitting={createOrderMutation.isPending}
        onClose={() => setSelectedOrderToCreate(null)}
        onSubmit={handleCreateOrderSubmit}
      />
    </>
  );
}
````

## File: package.json
````json
{
  "name": "laundry-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@mantine/carousel": "9.5.0",
    "@mantine/charts": "9.5.0",
    "@mantine/core": "9.5.0",
    "@mantine/dates": "9.5.0",
    "@mantine/form": "9.5.0",
    "@mantine/hooks": "9.5.0",
    "@mantine/modals": "9.5.0",
    "@mantine/notifications": "9.5.0",
    "@supabase/ssr": "^0.12.5",
    "@supabase/supabase-js": "^2.114.0",
    "@tabler/icons-react": "^3.46.0",
    "@tanstack/react-query": "^5.101.4",
    "axios": "^1.19.0",
    "dayjs": "^1.11.23",
    "embla-carousel-autoplay": "^8.6.0",
    "embla-carousel-react": "^8.6.0",
    "leaflet": "^1.9.4",
    "next": "16.2.12",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-leaflet": "^5.0.0",
    "recharts": "^3.10.1",
    "zod": "^4.4.3",
    "zustand": "^5.0.15"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@tanstack/react-query-devtools": "^5.101.4",
    "@types/leaflet": "^1.9.22",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.2.12",
    "postcss": "^8.5.25",
    "postcss-preset-mantine": "^1.18.0",
    "postcss-simple-vars": "^7.0.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "allowScripts": {
    "sharp@0.34.5": true,
    "unrs-resolver@1.12.2": true
  }
}
````
