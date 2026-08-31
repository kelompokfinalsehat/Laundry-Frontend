"use client";

import { useState } from "react";
import { Stack, Text, Button, Modal, Loader, Alert, Group } from "@mantine/core";
import { modals } from "@mantine/modals";

import { AddressCard } from "./AddressCard";
import { AddressForm } from "./AddressForm";
import type { Address, AddressFormSubmitValues, AddressFormValues } from "@/types/api/address.types";
import { useAddresses, useCreateAddress, useDeleteAddress, useSetPrimaryAddress, useUpdateAddress } from "@/hooks/address.hooks";

const MAX_ADDRESSES = 5; // samain sama batas backend (address.service.ts)

export function AddressList() {
  const { data: addresses, isLoading } = useAddresses();
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
      { onSuccess: closeModal },
    );
  } else {
    createMutation.mutate(values, { onSuccess: closeModal });
  }
}

  function handleDelete(address: Address) {
    modals.openConfirmModal({
      title: "Hapus alamat?",
      children: (
        <Text size="sm">
          Alamat "{address.label || address.formattedAddress}" akan dihapus. Order yang sudah
          berjalan tidak akan terpengaruh.
        </Text>
      ),
      labels: { confirm: "Hapus", cancel: "Batal" },
      confirmProps: { style: { backgroundColor: "var(--color-error)" } },
      onConfirm: () => deleteMutation.mutate(address.id),
    });
  }

  if (isLoading) {
    return (
      <Group justify="center" py="xl">
        <Loader color="var(--color-primary)" />
      </Group>
    );
  }

  const isAtLimit = (addresses?.length ?? 0) >= MAX_ADDRESSES;
  const mutation = modalMode === "edit" ? updateMutation : createMutation;

  return (
    <Stack gap="md">
      {addresses?.length === 0 && (
        <Text size="sm" c="var(--color-text-secondary)">
          Belum ada alamat tersimpan.
        </Text>
      )}

      {addresses?.map((address) => (
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
