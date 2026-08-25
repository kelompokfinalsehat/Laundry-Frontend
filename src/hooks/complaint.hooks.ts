import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { ComplaintApi } from "@/lib/api/complaint.api";

import type {
  ComplaintQuery,
  DecideComplaintPayload,
} from "@/types/api/complaint.types";

const complaintApi = new ComplaintApi();

export const COMPLAINTS_QUERY_KEY = [
  "complaints",
];

export function useComplaints(
  params?: ComplaintQuery,
) {
  return useQuery({
    queryKey: [
      ...COMPLAINTS_QUERY_KEY,
      params,
    ],

    queryFn: () =>
      complaintApi.getComplaints(
        params,
      ),
  });
}

export function useComplaint(
  complaintId: string,
) {
  return useQuery({
    queryKey: [
      ...COMPLAINTS_QUERY_KEY,
      "detail",
      complaintId,
    ],

    queryFn: () =>
      complaintApi.getComplaintById(
        complaintId,
      ),

    enabled: Boolean(
      complaintId,
    ),
  });
}

export function useDecideComplaint() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      complaintId,
      payload,
    }: {
      complaintId: string;
      payload: DecideComplaintPayload;
    }) =>
      complaintApi.decideComplaint(
        complaintId,
        payload,
      ),

    onSuccess: (
      _,
      variables,
    ) => {
      queryClient.invalidateQueries({
        queryKey:
          COMPLAINTS_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [
          ...COMPLAINTS_QUERY_KEY,
          "detail",
          variables.complaintId,
        ],
      });
    },
  });
}