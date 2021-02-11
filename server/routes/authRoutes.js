import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/authController";

router.post("/registrarse", authCtrl.registrarse);
router.post("/iniciarSesion", authCtrl.iniciarSesion);

export default router;
