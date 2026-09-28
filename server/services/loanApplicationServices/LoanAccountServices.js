import { loanAccountSchema } from "../../models/loanApplicationSchema/loanAccountSchema.js";
import { validationRequireFields } from "../../validations/loanValidation/loanApplicationValidation.js";

export const loanAccountServices = async (accountDetails) => {
  validationRequireFields(accountDetails, [
    "state_name",
    "district",
    "bank_name",
    "branch_name",
    "account_number",
  ]);
  const result = await loanAccountSchema(accountDetails);
  return {
    id: result.insertId,
    affectedrows: result.affectedrows,
  };
};
