import { BANK_CONFIG } from "../config/bankConfig/bankConfiguration.js"

export const getBranchNameById = (bankId,branchId)=>{

  for(const bankTypeDetails of Object.values(BANK_CONFIG)){
    for(const bankDetails of Object.values(bankTypeDetails.banks)){

      if(Number(bankDetails.bankId) === Number(bankId)){
        const branch = bankDetails.branches.find(
            (branch)=>Number(branch.branchId) === Number(branchId)
        );
          if(branch){
            return {
              branchId:branch.branchId,
              branchName:branch.branchName,
            }
          }
        }
      }
    }
  throw new Error("Branch not found")
}