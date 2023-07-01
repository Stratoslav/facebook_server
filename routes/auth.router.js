const { Router } = require("express");

const AuthController = require("../controllers/auth.controllers.js");

const authRouter = Router();

authRouter.post("/registration", AuthController.registration);
authRouter.post("/login", AuthController.login);
authRouter.post("/logout", AuthController.logout);

module.exports = authRouter;
