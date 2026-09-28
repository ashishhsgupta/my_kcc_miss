import { BANK_CONFIG } from "../../config/bankConfig/bankConfiguration.js";

export const getBanksService = () => {
  const banks = [];
  for (const [bankType, bankTypeDetails] of Object.entries(BANK_CONFIG)) {
    for (const [bankKey, bankDetails] of Object.entries(
      bankTypeDetails.banks,
    )) {
      banks.push({
        bankType,
        bankName: bankDetails.bankName,
        bankId: bankDetails.bankId,
      });
    }
  }
  return banks;
};
