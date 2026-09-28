import express from 'express';
import { applicationController } from '../../controllers/loanApplicationControllers/applicationController.js';
import { authMiddleware } from '../../middlewares/authentication/authMiddleware.js';
import { loanAccountController } from '../../controllers/loanApplicationControllers/loanAccountController.js';
import { fyFetchController } from '../../controllers/loanApplicationControllers/fyFetchController.js';

const loanRouter = express.Router();

loanRouter.post('/mykcc/v1/api/applicationDetails',authMiddleware, applicationController);
loanRouter.post('/mykcc/v1/api/basicAccountDetails',authMiddleware, loanAccountController);
loanRouter.get('/mykcc/v1/api/fyFetch', fyFetchController);



export default loanRouter;