import {
  UpdatePhotoResponse,
  UpdateProfileResponse,
} from "@/types/api/profile.types";
import {
  MAX_PHOTO_SIZE_BYTES,
  profilePhotoSchema,
  UpdateEmailSchema,
  UpdateProfileSchema,
} from "../validation/profile.validation";
import { api, ApiError } from "./axios";
import { MessageResponse } from "@/types/api";

export class ProfileApi {
  async updateProfile(payload: UpdateProfileSchema) {
    const body: Record<string, string> = { name: payload.name };
    if (payload.phone) body.phone = payload.phone;
    if (payload.newPassword) {
      body.newPassword = payload.newPassword;
      body.currentPassword = payload.currentPassword!;
    }
    const { data } = await api.patch<{ data: UpdateProfileResponse }>(
      "/profile/me",
      body,
    );
    return data.data;
  }

  async updateProfilePhoto(file: File) {
    const parsed = profilePhotoSchema.safeParse(file);
    if (!parsed.success) {
      const isTooLarge = file.size > MAX_PHOTO_SIZE_BYTES;
      const code = isTooLarge ? "FILE_TOO_LARGE" : "FILE_TYPE_INVALID";
      throw new ApiError(code, parsed.error.issues[0].message);
    }
    const formData = new FormData();
    formData.append("PROFILE_PHOTO", file);
    const { data } = await api.patch<{ data: UpdatePhotoResponse }>(
      "/profile/photo",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );
    return data.data;
  }

  async requestEmailChange(payload: UpdateEmailSchema) {
    const { data } = await api.patch<{ data: MessageResponse }>(
      "/profile/email",
      payload,
    );
    return data.data;
  }

  async confirmEmailChange(token: string) {
    const { data } = await api.post<{ data: MessageResponse }>(
      "/profile/email/confirm",
      { token },
    );
    return data.data;
  }
}
