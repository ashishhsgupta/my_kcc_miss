import { getAPI } from "../../apiRoute/baseService";
import { API } from "../../apiRoute/endPoints";


export const getBanks = async(banks)=> {
  return await getAPI(API.BANK, banks);
}
export const getBranches = async(bankId)=>{
   return getAPI(API.BRANCHES(bankId))
};
export const getFYs = async()=>{
  return getAPI(API.FY_FETCH_ENDPOINT)
};