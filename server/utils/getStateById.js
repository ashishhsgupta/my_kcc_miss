import { BANK_CONFIG } from "../config/bankConfig/bankConfiguration"

export const getStateById = (stateId)=>{
    for(const bankTypeDetails of Object.values(BANK_CONFIG)){
        for(const bankDetails of Object.values(bankTypeDetails.banks)){
            if(bankDetails.state.stateId === Number(stateId)){
                return{
                 stateId:bankDetails.state.stateId,
                 stateName:bankDetails.state.stateName
                }
            }
        }
    }
    throw new Error("State not found")
}