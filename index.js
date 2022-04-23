import { readFile } from "fs/promises";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import Slides from "./model/slides.model.js";
import userRouter from "./routes/user.route.js";
import isAuth from "./middleware/isAuth.middleware.js";
import errorHandler from "./middleware/error,middleware.js";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());

app.get("/", async (req, res) => {
  // const newSlide = await Slides.create({ name: "hamda", key: 20 });
  // console.log(newSlide);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(data));
});

app.use("/api/users", isAuth, userRouter);

app.all("*", (req, res) => {
  res.send("404");
});

app.use(errorHandler);

mongoose
  .connect("mongodb://localhost:27017/gamebuilder")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    throw new err();
  });

app.listen(8000, () => {
  console.log("Gooo");
});
