import { validateUser } from "../validations/validateUsers.js";
import { createUser, findUserByMobileNumber } from "../models/userModel.js";
import { ROLE_FLAG } from "../utils/roles.js";

export const registerUserService = async(userData)=>{
    validateUser(userData);
    const existingUser = await findUserByMobileNumber(userData.mobile);
    if(existingUser){
        throw new Error("Mobile number already registered!")
    }
    const roleFlag = ROLE_FLAG[userData.role.toLowerCase()];
    if(!roleFlag){
        throw new Error("Invalid  role");
    }
    userData.role = roleFlag;
    return await createUser(userData)
};

export const loginUserService = async(userData)=>{
    validateUser(userData, true);
    console.log("login req:", userData)
    const existingUser = await(findUserByMobileNumber(userData.mobile));
    console.log("user from DB:", existingUser)
    if(!existingUser){
        throw new Error ("Invalid mobile number or password!")
    }
    console.log("DB mobile:", existingUser.mobile);
    console.log("Request mobile:", userData.mobile);

    console.log("DB password:", existingUser.password);
    console.log("Request password:", userData.password);
    if(existingUser.password !==userData.password){
        throw new Error("Invalid mobile number or password!")
    };
    return {
        id:existingUser.id,
        name:existingUser.name,
        email:existingUser.email,
        mobile:existingUser.mobile,
        role:existingUser.role,
    };
};