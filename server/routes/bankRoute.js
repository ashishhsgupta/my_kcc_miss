import express from "express";
import { getBanksController } from "../controllers/bankController.js";
import { getBranchesController } from "../controllers/loanApplicationControllers/branchController.js";
import { getStateController } from "../controllers/loanApplicationControllers/stateController.js";

const bankRouter = express.Router();

bankRouter.get("/mykcc/v1/api/banks", getBanksController);
bankRouter.get("/mykcc/v1/api/branches/:bankId/branches", getBranchesController);
bankRouter.get("/mykcc/v1/api/states", getStateController);



export default bankRouter;