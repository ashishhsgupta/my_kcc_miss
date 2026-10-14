import { getStateService } from "../../services/banksNbranches/stateService.js";

export const getStateController = async(req,res)=>{
  try{
     const result = getStateService();
     return res.status(200).json({success:true, message:"state fetch successfully!",data:result});
  }catch(err){
    console.error("State Controller Error:", err);
    return res.status(500).json({success:false, message:err.message,})
  }
}