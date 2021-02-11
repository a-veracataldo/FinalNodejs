import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/authController";

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.post("/registrarse", authCtrl.registrarse);
router.post("/iniciarSesion", authCtrl.iniciarSesion);

export default router;
