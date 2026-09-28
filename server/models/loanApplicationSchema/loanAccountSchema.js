import { getDB } from "../../config/database.js";

export const loanAccountSchema = async (loanAccountDetails) => {
  const db = getDB();
  const sql = `INSERT INTO application_account_details(creator_id, state_name,district,bank_name,branch_name,account_number)VALUES(
  ?,?,?,?,?,?)`;
  const [result] = await db.execute(sql, [
    loanAccountDetails.creator_id,
    loanAccountDetails.state_name,
    loanAccountDetails.district,
    loanAccountDetails.bank_name,
    loanAccountDetails.branch_name,
    loanAccountDetails.account_number,
  ]);
  return result;
};
