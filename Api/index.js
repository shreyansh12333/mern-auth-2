import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
dotenv.config({ path: "../.env" });
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/user", authRouter);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
