import express from "express";
import UserRouter from "./user.routes";
import ProductRouter from "./product.routes";
import ModelRouter from "./model.routes";
import CategoryRouter from "./category.routes";



const router = express.Router();

router.use("/users", UserRouter)
router.use("/products", ProductRouter)
router.use("/models", ModelRouter)
router.use("/categories", CategoryRouter)


export default router;
