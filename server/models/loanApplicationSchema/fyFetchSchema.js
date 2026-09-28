import { getDB } from "../../config/database.js";

export const fyFetchSchema = async () => {
  const db = getDB();
  const sql = `SELECT id, fy_code, fy_name from financial_years order by id DESC`;
  const [result] = await db.execute(sql);
  return result;
};
