export const REJEX = {
  NAME: /^[A-Za-z ]{2,50}$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MOBILE: /^[6-9]\d{9}$/,
  PASSWORD:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/,
  PINCODE: /^[1-9][0-9]{5}$/,
  AADHAR: /^\d{12}$/,
  PAN: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
  IFSC: /^[A-Z]{4}0[A-Z0-9]{6}$/,
  ACCOUNT_NUMBER: /^\d{9,18}$/,
  BANK:/^[A-Za-z0-9][A-Za-z0-9 .&()'-]{1,99}$/,
  BRANCH:/^[A-Za-z0-9][A-Za-z0-9 .&()'-]{1,99}$/,
};
