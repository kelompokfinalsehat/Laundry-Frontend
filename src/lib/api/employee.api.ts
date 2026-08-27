import { PaginatedResponse } from "@/types/api";
import { api } from "./axios";
import type {
  AssignEmployeePayload,
  Employee,
  EmployeeQuery,
  InviteEmployeePayload,
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

  async getCurrentOutletTeam(query: OutletTeamQuery) {
    const response = await api.get<PaginatedResponse<OutletTeamItem>>(
      "/internal/employees/team",
      {
        params: query,
      },
    );

    return response.data;
  }
}
