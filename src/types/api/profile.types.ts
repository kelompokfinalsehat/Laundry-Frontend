export type UpdateProfileResponse = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profilePhotoUrl: string | null;
};

export type UpdatePhotoResponse = { profilePhotoUrl: string };
export type MessageResponse = { message: string };