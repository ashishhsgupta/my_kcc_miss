import { getBanksService } from "../services/banksNbranches/bankService.js";

export const getBanksController = async(req, res) => {
  try{
    const banks = getBanksService();
    return res.status(200).json({success:true, data:banks,})
  }catch(err){
    return res.status(400).json({
        succss:false, message:err.message,
    })
  }
}