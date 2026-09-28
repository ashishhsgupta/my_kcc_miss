import { getBranchService } from "../../services/banksNbranches/branchService.js";

export const getBranchesController = (req,res)=>{
  try{
  const {bankId} = req.params;
  const branches = getBranchService(bankId);
  return res.status(200).json({success:true, data:branches,})
  }catch(err){
    return res.status(400).json({
        success:false, message:err.message,
    })
  }
}