import { fyFetchSchema } from "../../models/loanApplicationSchema/fyFetchSchema.js";

export const fyFetchService = async () => {
//   fyFetchVAlidation(fyFetch);
  const result = await fyFetchSchema();
  return result;
};
