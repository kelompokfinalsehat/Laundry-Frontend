import { FieldOpsProfileApi } from "@/lib/api/fieldOpsProfile.api";
import { fieldOpsProfileSchema } from "@/lib/validation/fieldOpsProfile.validation";
import type { FieldOpsProfile, UpdateFieldOpsProfilePayload } from "@/types/api/fieldOpsProfile.types";
import { schemaResolver, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const FIELD_OPS_PROFILE_QUERY_KEY = ["field-ops", "profile"] as const;

const fieldOpsProfileApi = new FieldOpsProfileApi();

export function useFieldOpsProfile() {
  return useQuery({
    queryKey: FIELD_OPS_PROFILE_QUERY_KEY,
    queryFn: () => fieldOpsProfileApi.getProfile(),
  });
}

export function useUpdateFieldOpsProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateFieldOpsProfilePayload) => fieldOpsProfileApi.updateProfile(payload),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: FIELD_OPS_PROFILE_QUERY_KEY,
      });
    },
  });
}

export function useUpdateFieldOpsProfilePhoto() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (file: File) => fieldOpsProfileApi.updateProfilePhoto(file),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: FIELD_OPS_PROFILE_QUERY_KEY,
      });
    },
  });
}

export function useFieldOpsProfileEdit(profile: FieldOpsProfile, onSuccess: () => void) {
  const updateProfile = useUpdateFieldOpsProfile();
  const updatePhoto = useUpdateFieldOpsProfilePhoto();

  const form = useForm({
    initialValues: {
      name: profile.name,
      email: profile.email,
      phone: profile.phone ?? "",
      photo: null as File | null,
    },

    validate: schemaResolver(fieldOpsProfileSchema),
  });

  const handleSubmit = form.onSubmit(async (values) => {
    await updateProfile.mutateAsync({
      name: values.name,
      email: values.email,
      ...(values.phone && { phone: values.phone }),
    });

    if (values.photo) {
      await updatePhoto.mutateAsync(values.photo);
    }

    notifications.show({
      title: "Profil berhasil diperbarui",
      message: "Perubahan profil berhasil disimpan.",
      color: "green",
    });

    form.setFieldValue("photo", null);
    form.resetDirty();

    onSuccess();
  });

  const handleReset = () => {
    form.setValues({
      name: profile.name,
      email: profile.email,
      phone: profile.phone ?? "",
      photo: null,
    });

    form.resetDirty();
  };

  return {
    form,
    handleSubmit,
    handleReset,
    isPending: updateProfile.isPending || updatePhoto.isPending,
  };
}
