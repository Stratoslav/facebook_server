const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const multer = require("multer");
const uploadFile = require("express-fileupload");
const authRouter = require("./routes/auth.router");
const { userRouter } = require("./routes/user.router");
const postRouter = require("./routes/posts.router");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("static"));
app.use(uploadFile());

app.use("/auth", authRouter);
app.use("/api", userRouter);
app.use("/posts", postRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
