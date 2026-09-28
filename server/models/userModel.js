import { getDB } from "../config/database.js";

export const createUser = async (user) => {
  const db = getDB();
  const sql = `INSERT INTO user_details (name, email, mobile, role, password,bank_id,branch_id) VALUES(?,?,?,?,?,?,?)`;
  const values = [
    user.name,
    user.email,
    user.mobile,
    user.role,
    user.password,
    user.bankId,
    user.branchId,
  ];
  const [result] = await db.execute(sql,values);
  return result;
};

export const findUserByMobileNumber = async (mobile) => {
  const db = getDB();
  const [rows] = await db.execute(
    `SELECT id, name, email, mobile, role, bank_id, branch_id, password from user_details WHERE mobile = ?`,
    // `CALL user_login(?)`,
    [mobile],
  );
  return rows[0];
};
