const { Router } = require("express");
const postsController = require("../controllers/posts.controllers.js");
const postsControllers = require("../controllers/posts.controllers.js");
const postRouter = Router();

postRouter.post("/create", postsControllers.createPost);
postRouter.delete("/delete/:id", postsControllers.deletePost);
postRouter.put("/update", postsControllers.updatePost);
postRouter.get("/:id", postsControllers.getAllPosts);

module.exports = postRouter;
