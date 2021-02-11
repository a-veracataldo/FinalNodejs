import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/userController";
import { authorization, validation } from "../middlewares";

router.post(
  "/",
  [
    authorization.verifyToken,
    authorization.isAdmin,
    validation.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

export default router;
