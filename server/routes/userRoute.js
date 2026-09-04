import express from "express";
import { userRegistration, userLogin } from "../controllers/userController.js";

const router = express.Router();

router.post('/mykcc/v1/api/userRegistration', userRegistration);
router.post('/mykcc/v1/api/userLogin', userLogin);



export default router;