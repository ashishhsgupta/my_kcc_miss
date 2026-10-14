import { getFarmerCategoryId } from "../../config/bankConfig/applicationConfig/farmerCategory.js";
import { getFarmerTypeId } from "../../config/bankConfig/applicationConfig/farmerType.js";
import { getGenderId } from "../../config/bankConfig/applicationConfig/genderConfig.js";
import { getPrimaryOccupationId } from "../../config/bankConfig/applicationConfig/primaryOccupassion.js";
import { getRelativeTypeId } from "../../config/bankConfig/applicationConfig/relativeType.js";
import { getSocialCategoryId } from "../../config/bankConfig/applicationConfig/socialCategory.js";
import { saveApplicationDetailsSchema } from "../../models/loanApplicationSchema/loanApplicationSchema.js";
import { validationRequireFields } from "../../validations/loanValidation/loanApplicationValidation.js";

export const applicationServices = async (applicationData) => {
 if(applicationData.DOB){
   const [day, month, year] = applicationData.DOB.split("/");
  applicationData.DOB = `${year}-${month}-${day}`;
 }
  applicationData.gender = getGenderId(applicationData.gender);
  applicationData.social_category = getSocialCategoryId(applicationData.social_category);
  applicationData.farmer_category = getFarmerCategoryId(applicationData.farmer_category);
  applicationData.farmer_type = getFarmerTypeId(applicationData.farmer_type);
  applicationData.primary_occupation = getPrimaryOccupationId(applicationData.primary_occupation);
     console.log(
  "BEFORE relative type conversion:",
  applicationData.relative_type
);
  applicationData.relative_type = getRelativeTypeId(applicationData.relative_type);
  console.log(
  "AFTER relative type conversion:",
  applicationData.relative_type,
  typeof applicationData.relative_type
);
  validationRequireFields(applicationData,[
    "beneficiary_name",
    "aadhar_no",
    "passbook_name",
    "DOB",
    "gender",
    "mobile",
    "social_category",
    "farmer_category",
    "farmer_type",
    "primary_occupation",
    "relative_type",
    "relative_name",
    "state_name",
    "district",
    "sub_district",
    "village",
    "address",
    "pinCode",
  ]);
  const result = await saveApplicationDetailsSchema(applicationData);
  return {
    id: result.insertId,
    affectedRows: result.affectedRows,
  };
};
