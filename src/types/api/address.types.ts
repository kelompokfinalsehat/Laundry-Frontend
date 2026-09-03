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
  latitude: number | undefined; 
  longitude: number | undefined; 
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
  latitude: number | undefined;
  longitude: number | undefined;
};

// Payload final setelah pin di peta dipastikan ada
export type AddressFormSubmitValues = {
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
  latitude: number;
  longitude: number;
};

export type AddressFormProps = {
  initialAddress?: Address;
  isPending: boolean;
  error: unknown;
  onSubmit: (values: AddressFormSubmitValues) => void;
  onCancel: () => void;
};


export type PreviewLocationResult = {
  latitude: number | undefined;
  longitude: number | undefined;
  found: boolean;
};
