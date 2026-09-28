import express from "express";
import { getBanksController } from "../controllers/bankController.js";
import { getBranchesController } from "../controllers/loanApplicationControllers/branchController.js";

const bankRouter = express.Router();

bankRouter.get("/mykcc/v1/api/banks", getBanksController);
bankRouter.get("/mykcc/v1/api/branches/:bankId/branches", getBranchesController);


export default bankRouter;