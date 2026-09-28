import { loanAccountServices } from "../../services/loanApplicationServices/LoanAccountServices.js";

export const loanAccountController = async (req,res)=>{
    try{
      const loanAccountDetails = {...req.body, creator_id:req.user.id};
      const result = await loanAccountServices(loanAccountDetails);
      return res.status(200).json({success:true, message:"Account details saved successfully!",data:result,}) 
    }catch(err){
        return res.status(400).json({
            success:false, message:err.message,
        })
    }
}