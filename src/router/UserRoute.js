import { Router } from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getByIdUser,
  updateUserByID,
} from "../controller/UserController.js";
import { myLogger } from "../middleware/loggerMiddileware.js";

export const userRouter = Router();

userRouter.get("/", myLogger, getAllUsers);
userRouter.get("/:id", getByIdUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUserByID);
userRouter.delete("/:id", deleteUserById);
