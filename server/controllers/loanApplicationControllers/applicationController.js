import { applicationServices } from "../../services/loanApplicationServices/LoanApplicationServicess.js";

export const applicationController = async (req, res) => {
  try {
    const applicationData = {
      ...req.body, creatorId:req.user.id,
    }
   
    const result = await applicationServices(applicationData);
    return res
      .status(201)
      .json({
        success: true,
        message: "Application details save successfully!",
        data: result,
      });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};
