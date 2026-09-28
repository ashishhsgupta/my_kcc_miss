import { saveApplicationDetailsSchema } from "../../models/loanApplicationSchema/loanApplicationSchema.js";
import { validationRequireFields } from "../../validations/loanValidation/loanApplicationValidation.js";

export const applicationServices = async (applicationData) => {
  const [day, month, year] = applicationData.DOB.split("/");
  applicationData.DOB = `${year}-${month}-${day}`;
  validationRequireFields(applicationData,[
     "name",
    "aadharNumber",
    "passbookName",
    "DOB",
    "gender",
    "mobile",
    "socialCategory",
    "farmerCategory",
    "farmerType",
    "primaryOccupation",
    "relativeType",
    "relativeName",
    "stateName",
    "district",
    "subDistrict",
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
