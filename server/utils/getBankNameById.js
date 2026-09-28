import { BANK_CONFIG } from "../config/bankConfig/bankConfiguration.js"

export const getBankNameById = (bankId)=>{
  for(const bankTypeDetails of Object.values(BANK_CONFIG)){
    for(const bankDetails of Object.values(bankTypeDetails.banks)){
        if(bankDetails.bankId === Number(bankId)){
            return {
                bankId:bankDetails.bankId,
                bankName:bankDetails.bankName,
            }
        }
    }
  }
  throw new Error("Bank not found!")
};

