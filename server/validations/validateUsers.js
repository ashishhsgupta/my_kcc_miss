import { REJEX } from "../utils/rejex.js";
import { ROLE, ROLE_FLAG } from "../utils/roles.js";
import { VALIDATION_MSG } from "../constants/messageConstant.js";
export const validateUser = (user, isLoginMode = false) => {
  const { name, email, mobile, role, password, confirmPassword } = user;

  if (!mobile || !REJEX.MOBILE.test(mobile)) {
    throw new Error(VALIDATION_MSG.mobile);
  }
  if (!password || password.trim() === "") {
    throw new Error(VALIDATION_MSG.password);
  }
  if (isLoginMode) {
    return true;
  }

  if (!name || !REJEX.NAME.test(name)) {
    throw new Error(VALIDATION_MSG.name);
  }
  if (!email || !REJEX.EMAIL.test(email)) {
    throw new Error(VALIDATION_MSG.email);
  }

  const roleFlag = ROLE_FLAG[role.toLowerCase()];
  if (!roleFlag) {
    throw new Error(VALIDATION_MSG.role);
  }

  if (!REJEX.PASSWORD.test(password)) {
    throw new Error(VALIDATION_MSG.rejexPassword);
  }
  if (!confirmPassword || confirmPassword.trim() === "") {
    throw new Error(VALIDATION_MSG.confirmPassword);
  }
  if (!REJEX.PASSWORD.test(confirmPassword)) {
    throw new Error(VALIDATION_MSG.rejexConfirmPassword);
  }
  if (password !== confirmPassword) {
    throw new Error(VALIDATION_MSG.invalidPassword);
  }
  return true;
};
