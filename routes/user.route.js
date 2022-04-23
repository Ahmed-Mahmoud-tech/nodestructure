import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/user.controller.js";

const userRouter = Router();

userRouter.route("/").get(getAllUsers);

userRouter.route("/:id").get(getUserById).patch(updateUser).delete(deleteUser);

export default userRouter;
