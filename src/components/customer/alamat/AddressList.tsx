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
