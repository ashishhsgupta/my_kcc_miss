import { postAPI } from "../../apiRoute/baseService";
import { API } from "../../apiRoute/endPoints";

export const basicLoanServices = async(accountDetails) => {
  return await postAPI(API.BASIC_DETAILS_ENDPOINT, accountDetails)
};
export const basicAccountServices = async(basicAccountDetails) => {
  return await postAPI(API.ACCOUNT_DETAILS_ENDPOINT, basicAccountDetails)
}