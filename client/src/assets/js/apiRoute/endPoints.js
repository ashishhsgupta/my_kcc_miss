
const BASE_URL = "http://localhost:4001/mykcc/v1/api"

export const API = {
  REGISTRATION: `${BASE_URL}/userRegistration`,
  LOGIN:`${BASE_URL}/userLogin`,
  FY_FETCH_ENDPOINT:`${BASE_URL}/fyFetch`,
  BASIC_DETAILS_ENDPOINT:`${BASE_URL}/applicationDetails`,
  ACCOUNT_DETAILS_ENDPOINT:`${BASE_URL}/basicAccountDetails`,
  BANK:`${BASE_URL}/banks`,
  BRANCHES:(bankId)=> `${BASE_URL}/branches/${bankId}/branches`,
  
}

