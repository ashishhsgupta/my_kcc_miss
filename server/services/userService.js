import { validateUser } from "../validations/validateUsers.js";
import { createUser, findUserByMobileNumber } from "../models/userModel.js";
import { ROLE_FLAG } from "../utils/roles.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getBankNameById } from "../utils/getBankNameById.js";
import { getBranchNameById } from "../utils/getBranchNameById.js";
import { getRoleById } from "../utils/getRoleNameById.js";


export const registerUserService = async (userData) => {
  validateUser(userData, false);
  const existingUser = await findUserByMobileNumber(userData.mobile);
  if (existingUser) {
    throw new Error("Mobile number already registered!");
  }
  const roleFlag = ROLE_FLAG[userData.role];
  if (!roleFlag) {
    throw new Error("Invalid  role");
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;
  userData.role = roleFlag;

  return await createUser(userData);
};

export const loginUserService = async (userData) => {
  validateUser(userData, true);
  const existingUser = await findUserByMobileNumber(userData.mobile);
  if (!existingUser) {
    throw new Error("Invalid mobile number or password!");
  }
  const isPasswordValid = await bcrypt.compare(
    userData.password,
    existingUser.password,
  );
  if (!isPasswordValid) {
    throw new Error("Invalid mobile number or password!");
  }
  const bankDetails = getBankNameById(existingUser.bank_id);
  const branchDetails = getBranchNameById(
    existingUser.bank_id,
    existingUser.branch_id,
  );
  const existingRole = getRoleById(existingUser.role);

  const token = jwt.sign(
    {
      id: existingUser.id,
      name: existingUser.name,
      mobile: existingUser.mobile,
      role: existingUser.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  return {
    token,
    user: {
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      mobile: existingUser.mobile,
      role: existingUser.role,
      roleName:existingRole.roleName,
      bankId: existingUser.bank_id,
      bankName: bankDetails.bankName,
      branchId: existingUser.branch_id,
      branchName: branchDetails.branchName,

    },
  };
};
