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
