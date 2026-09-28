import { ROLE, ROLE_FLAG } from "./roles.js"


export const getRoleById = (roleId)=>{
  const roleKey =  Object.keys(ROLE_FLAG).find(
    (key)=>Number(ROLE_FLAG[key]) === Number(roleId)
  );
  if(!roleKey){
    throw new Error("Role not found");
  }
  return ROLE[roleKey]
};