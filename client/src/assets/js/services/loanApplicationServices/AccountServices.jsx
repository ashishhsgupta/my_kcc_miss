import { postAPI } from "../../apiRoute/baseService";
import { API } from "../../apiRoute/endPoints";

export const basicLoanServices = async(form) => {
    const payload = {
  beneficiary_name: form.name,
  aadhar_no: form.aadharNumber,
  passbook_name: form.passbookName,
  DOB: form.DOB,
  gender: form.gender,
  mobile: form.mobile,

  social_category: form.socialCategory,
  farmer_category: form.farmerCategory,
  farmer_type: form.farmerType,
  primary_occupation: form.primaryOccupation,

  relative_type: form.relativeType,
  relative_name: form.relativeName,

  state_name: form.stateName,
  district: form.district,
  sub_district: form.subDistrict,
  village: form.village,
  address: form.address,
  pinCode: form.pinCode,
};
    console.log("FORM:", form);
  console.log("PAYLOAD:", payload);
Object.entries(payload).forEach(([key, value]) => {
    if (value === undefined) {
      console.error(`❌ ${key} is undefined`);
    }
  });
  return await postAPI(API.BASIC_DETAILS_ENDPOINT, payload)
};


export const basicAccountServices = async(basicAccountDetails) => {
  return await postAPI(API.ACCOUNT_DETAILS_ENDPOINT, basicAccountDetails)
}