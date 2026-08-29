export type Address = {
  id: string;
  label: string | null;
  provinceId: string;
  provinceName: string;
  cityId: string;
  cityName: string;
  districtId: string;
  districtName: string;
  subDistrictId: string;
  subDistrictName: string;
  zipCode: string;
  streetDetail: string;
  formattedAddress: string;
  phone: string;
  latitude: string;
  longitude: string;
  isPrimary: boolean;
};
export type Region = { id: number; name: string };

export type AddressFormValues = {
  label: string;
  provinceId: string;
  provinceName: string;
  cityId: string;
  cityName: string;
  districtId: string;
  districtName: string;
  subDistrictId: string;
  subDistrictName: string;
  streetDetail: string;
  zipCode: string;
  phone: string;
  latitude: number | null;
  longitude: number | null;
};

export type AddressFormProps = {
  initialAddress?: Address;
  isPending: boolean;
  error: unknown;
  onSubmit: (values: Omit<AddressFormValues, "latitude" | "longitude"> & {
    latitude: number;
    longitude: number;
  }) => void;
  onCancel: () => void;
};


export type PreviewLocationResult = {
  latitude: number | null;
  longitude: number | null;
  found: boolean;
};
