import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { userRouter } from "./src/router/UserRoute.js";
const app = express();
app.use(express.json());

app.use("/", userRouter);

mongoose
  .connect(process.env.KEY)
  .then(() => console.log("Connected!"))
  .catch((error) => console.log(error.message));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
