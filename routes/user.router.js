const { Router } = require("express");
const userController = require("../controllers/user.controllers.js");
const userRouter = Router();

userRouter.get("/users", userController.getAllUsers);

userRouter.get("/user/:id", userController.getUser);

module.exports = {
  userRouter,
};
