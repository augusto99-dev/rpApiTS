import express from "express";
import CategoryController from "../controllers/category.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CategoryController();
  const response = await controller.getCategories();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new CategoryController();
  const response = await controller.createCategory(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new CategoryController();
  const response = await controller.getCategory(req.params.id);
  if (!response) res.status(404).send({ message: "No Category found" })
  return res.send(response);
});

export default router