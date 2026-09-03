import type { UpdatePhotoResponse, UpdateProfileResponse } from "@/types/api/profile.type";

import { MAX_PHOTO_SIZE_BYTES, profilePhotoSchema, type UpdateProfileSchema } from "@/lib/validation/profile.validation";

import { api, ApiError } from "./axios";

class BackOfficeProfileApi {
  async updateProfile(payload: UpdateProfileSchema) {
    const body: Record<string, string> = {
      name: payload.name!,
    };

    if (payload.phone) {
      body.phone = payload.phone;
    }

    if (payload.newPassword) {
      body.newPassword = payload.newPassword;
      body.currentPassword = payload.currentPassword!;
    }

    const { data } = await api.patch<{
      data: UpdateProfileResponse;
    }>("/internal/profile/me", body);

    return data.data;
  }

  async updateProfilePhoto(file: File) {
    const parsed = profilePhotoSchema.safeParse(file);

    if (!parsed.success) {
      const isTooLarge = file.size > MAX_PHOTO_SIZE_BYTES;

      throw new ApiError(isTooLarge ? "FILE_TOO_LARGE" : "FILE_TYPE_INVALID", parsed.error.issues[0].message);
    }

    const formData = new FormData();

    formData.append("PROFILE_PHOTO", file);

    const { data } = await api.patch<{
      data: UpdatePhotoResponse;
    }>("/internal/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  }
}

export const backOfficeProfileApi = new BackOfficeProfileApi();
