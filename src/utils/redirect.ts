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
