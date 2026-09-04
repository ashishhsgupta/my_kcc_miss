import { getDB } from "../config/database.js";
import { registerUserService, loginUserService } from "../services/userService.js";

export const userRegistration = async (req, res) => {
  try {
    const result = await registerUserService(req.body);
    return res.status(201).json({
      success: true,
      message: "User Registered successfully",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const userLogin = async(req, res)=>{
  try{
   const result = await loginUserService(req.body);
   return res.status(201).json({
    success:true, message:"Login successfully!", data:result,
   })
  }catch(err){
    return res.status(400).json({
      success:false, message:err.message,
    })
  }
}

