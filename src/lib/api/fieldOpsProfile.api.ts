import type { ApiResponse } from "@/types/api";
import type { FieldOpsProfile, UpdateFieldOpsProfilePayload, UpdateFieldOpsProfilePhotoResponse } from "@/types/api/fieldOpsProfile.types";

import { api } from "./axios";

const BASE_PATH = "/internal/profile";

export class FieldOpsProfileApi {
  async getProfile() {
    const { data } = await api.get<ApiResponse<FieldOpsProfile>>(`${BASE_PATH}/me`);

    return data.data;
  }

  async updateProfile(payload: UpdateFieldOpsProfilePayload) {
    const { data } = await api.patch<ApiResponse<FieldOpsProfile>>(`${BASE_PATH}/me`, payload);

    return data.data;
  }

  async updateProfilePhoto(file: File) {
    const formData = new FormData();
    formData.append("PROFILE_PHOTO", file);
    const { data } = await api.patch<ApiResponse<UpdateFieldOpsProfilePhotoResponse>>(`${BASE_PATH}/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  }
}

