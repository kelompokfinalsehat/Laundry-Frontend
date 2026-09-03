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