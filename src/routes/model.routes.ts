import express from "express";
import ModelController from "../controllers/model.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ModelController();
  const response = await controller.getModels();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ModelController();
  const response = await controller.createModel(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new ModelController();
  const response = await controller.getModel(req.params.id);
  if (!response) res.status(404).send({message: "No model found"})
  return res.send(response);
});

export default router