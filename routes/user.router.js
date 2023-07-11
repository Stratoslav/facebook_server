const { Router } = require("express");
const userController = require("../controllers/user.controllers.js");
const multer = require("multer");

const userRouter = Router();
const upload = multer({ dest: "uploads/" });
userRouter.get("/users", userController.getAllUsers);
userRouter.get("/user/:id", userController.getUser);

userRouter.post("/user-data/:id", userController.createUserData);
userRouter.get("/user-data/:id", userController.getDataUser);
userRouter.put("/user-update/:id", userController.updateUserData);
userRouter.put(
  "/user-upload/:id",
  // upload.single("image"),
  userController.uploadAvatarUser
);

userRouter.get("/user/:id", userController.getUser);

module.exports = {
  userRouter,
};
