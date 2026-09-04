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