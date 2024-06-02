import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.routes.js";
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
app.use("/api/user", router);
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
