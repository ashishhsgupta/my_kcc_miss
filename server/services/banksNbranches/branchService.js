import { BANK_CONFIG } from "../../config/bankConfig/bankConfiguration.js";

export const getBranchService = (bankId) => {
  for (const bankTypeDetails  of Object.values(BANK_CONFIG)) {
    for (const bankDetails of Object.values(bankTypeDetails.banks)) {
      if (bankDetails.bankId === Number(bankId)) {
        return bankDetails.branches;
      }
    }
  }
  throw new Error("bank not found");
};
