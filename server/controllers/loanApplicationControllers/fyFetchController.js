import { fyFetchService } from "../../services/loanApplicationServices/fyFetchService.js";

export const fyFetchController = async (req, res) => {
  try {
    const result = await fyFetchService();
    return res.status(200).json({
      success: true,
      message: "FY fetched syccessfully!",
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
