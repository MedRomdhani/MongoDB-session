import express from "express";
import * as userControler from "./user.controler.js";


const userRouter = express.Router();

userRouter.get('/', userControler.getAllUsers);

userRouter.post('/', userControler.addUser);

userRouter.put('/', userControler.updateUser);

userRouter.delete('/', userControler.deleteUser);

export default userRouter;