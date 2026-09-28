import { VALIDATION_MSG } from "../constants/MsgConstant";

export const NameValidation = (value) => {
  if (!value.trim()) return VALIDATION_MSG.name;
  if (!/^[A-Za-z ]+$/.test(value)) return VALIDATION_MSG.nameFormat;
  return "";
};

export const EmailValidation = (value) => {
  if (!value) return VALIDATION_MSG.email;
  if (!/\S+@\S+\.\S+/.test(value)) return VALIDATION_MSG.emailFormat;
  return "";
};

export const MobileValidation = (value) => {
  if (!value.trim()) return VALIDATION_MSG.mobile;
  if (!/^[6-9]\d{9}$/.test(value)) return VALIDATION_MSG.mobileFormat;
  return "";
};

export const PasswordValidation = (value) => {
  if (!value) return VALIDATION_MSG.password;
  if (value.length < 8) return VALIDATION_MSG.passwordLength;
  return "";
};

export const ConfirmPasswordValidation = (password, confirmPassword) => {
  if (!confirmPassword) return VALIDATION_MSG.confirmPasswordRequire;
  if (password !== confirmPassword) return VALIDATION_MSG.confirmPassword;
  return "";
};

export const RoleValidation = (value) => {
  if (!value) return VALIDATION_MSG.roleSelection;
  return "";
};
export const FinancialYears = (value) => {
  if (!value) return VALIDATION_MSG.financialYears;
  return "";
};

export const AadharValidation = (value) => {
  if (!value || !/^\d{12}$/.test(value)) {
    return VALIDATION_MSG.aadharNumber;
  }
  return "";
};

export const DOBValidation = (value) => {
  if (!value) return "Date of birth is required!";
  const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
  if (!regex.test(value)) {
    return VALIDATION_MSG.DOB;
  }
  const [day, month, year] = value.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    return "Enter a valid date";
  }
  const today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() < month - 1 ||
    (today.getMonth() === month - 1 && today.getDate() < day)
  ) {
    age--;
  }
  if (age < 18) {
    return "Age must be at least 18 years";
  }
  if (age > 120) {
    return "Age must not be more than 120 years";
  }
  return "";
};
export const GenderValidation = (value) => {
  if (!value) return "Select the gender";
  const allowedGenders = ["Mr", "Mrs", "Others"];
  if (!allowedGenders.includes(value)) {
    return "Select a valid gender";
  }
  return "";
};
export const SocialCategoryValidation = (value) => {
  if (!value) return VALIDATION_MSG.socialCategoryValidation;
  return "";
};
export const FarmerCategoryValidation = (value) => {
  if (!value) return VALIDATION_MSG.farmerCategoryValidation;
  return "";
};
export const FarmerTypeValidation = (value) => {
  if (!value) return VALIDATION_MSG.farmerTypeValidation;
  return "";
};
export const FarmerOccupationValidation = (value) => {
  if (!value) return VALIDATION_MSG.farmerOccupationValidation;
  return "";
};
export const RelativeTypeValidation = (value) => {
  if (!value) return VALIDATION_MSG.relativeTypeValidation;
  return "";
};
export const RelativeNameValidation = (value) => {
  if (!value.trim()) return VALIDATION_MSG.name;
  if (!/^[A-Za-z ]+$/.test(value)) return VALIDATION_MSG.nameFormat;
  return "";
};
export const StateNameValidation = (value) => {
  if (!value) return VALIDATION_MSG.stateNameValidation;
  return "";
};
export const DistrictValidation = (value) => {
  if (!value) return VALIDATION_MSG.districtValidation;
  return "";
};
export const SubDistrictValidation = (value) => {
  if (!value) return VALIDATION_MSG.subDistrictValidation;
  return "";
};
export const VillageValidation = (value) => {
  if (!value) return VALIDATION_MSG.villageValidation;
  return "";
};
export const AddressValidation = (value) => {
  if (!value || !value.trim()) {
    return VALIDATION_MSG.addressValidation;
  }
  const addressRegex = /^[A-Za-z0-9\s,./#'()\-]{5,200}$/;
  if (!value) return "";
  return addressRegex.test(value) ? "" : VALIDATION_MSG.addressValidation;
};
export const PinCodeValidation = (value) => {
  const pinCodeRegex = /^[1-9][0-9]{5}$/;
  if (!value || !pinCodeRegex.test(value)) {
    return VALIDATION_MSG.pinCodeValidation;
  }
  return "";
};
export const BankValidation = (value) => {
  if (!value) return VALIDATION_MSG.bankValidation;
  return "";
};
export const BranchValidation = (value) => {
  if (!value) return VALIDATION_MSG.branchValidation;
  return "";
};
export const AccountValidation = (value) => {
  if (!value) return VALIDATION_MSG.accountNumber;
  if (value.length < 8) return VALIDATION_MSG.accountNumberLength;
  return "";
};

export const ConfirmAccountValidation = (account, confirmAccount) => {
  if (!confirmAccount) return VALIDATION_MSG.confirmAccountRequire;
  if (account !== confirmAccount) return VALIDATION_MSG.confirmAccountNumber;
  return "";
};
