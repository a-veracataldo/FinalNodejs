import { Router } from "express";
const router = Router();

import * as productCtrl from "../controllers/productsController";
import {authorization} from '../middlewares'


router.post("/" ,[authorization.verifyToken,authorization.isAdmin],productCtrl.createProducts);

router.get("/", productCtrl.getProducts);

router.get("/:productId", productCtrl.getProductsId);

router.put("/:productId", [authorization.verifyToken,authorization.isAdmin],productCtrl.updateProductsId);

router.delete("/:productId", [authorization.verifyToken,authorization.isAdmin],productCtrl.deleteProductsId);

export default router;
