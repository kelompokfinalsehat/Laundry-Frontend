import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { employeeApi } from "@/lib/api/employee.api";

import type {
  AssignEmployeePayload,
  EmployeeQuery,
  InviteEmployeePayload,
  UpdateEmployeePayload,
} from "@/types/api/employee.types";

export const EMPLOYEES_QUERY_KEY = ["employees"];

export function useEmployees(
  params?: EmployeeQuery,
) {
  return useQuery({
    queryKey: [
      ...EMPLOYEES_QUERY_KEY,
      params,
    ],
    queryFn: () =>
      employeeApi.getEmployees(params),
  });
}

export function useEmployee(
  employeeId: string,
) {
  return useQuery({
    queryKey: [
      ...EMPLOYEES_QUERY_KEY,
      "detail",
      employeeId,
    ],
    queryFn: () =>
      employeeApi.getEmployee(employeeId),
    enabled: Boolean(employeeId),
  });
}

export function useInviteEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: InviteEmployeePayload,
    ) => employeeApi.inviteEmployee(payload),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      }),
  });
}

export function useUpdateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      employeeId,
      payload,
    }: {
      employeeId: string;
      payload: UpdateEmployeePayload;
    }) =>
      employeeApi.updateEmployee(
        employeeId,
        payload,
      ),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [
          ...EMPLOYEES_QUERY_KEY,
          "detail",
          variables.employeeId,
        ],
      });
    },
  });
}

export function useActivateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (employeeId: string) =>
      employeeApi.activateEmployee(employeeId),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      }),
  });
}

export function useDeactivateEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (employeeId: string) =>
      employeeApi.deactivateEmployee(employeeId),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      }),
  });
}

export function useResendInvitation() {
  return useMutation({
    mutationFn: (employeeId: string) =>
      employeeApi.resendInvitation(employeeId),
  });
}

export function useAssignEmployee() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: AssignEmployeePayload,
    ) => employeeApi.assignEmployee(payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: EMPLOYEES_QUERY_KEY,
      });

      queryClient.invalidateQueries({
        queryKey: [
          ...EMPLOYEES_QUERY_KEY,
          "detail",
          variables.employeeId,
        ],
      });
    },
  });
}