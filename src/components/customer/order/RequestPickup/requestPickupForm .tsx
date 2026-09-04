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
