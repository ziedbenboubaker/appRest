const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const logger = require("morgan");

if (!dotenv.config()) throw new Error("No .env file!");
const connectDB = require("./config");
const checkHandler = require("./midleware/checkHandler");
const { listRouter, itemRouter } = require("./routers");

connectDB().then();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(logger("dev"));

app.use("/api/lists", listRouter);
app.use("/api/items", itemRouter);

app.use((req, res, next) => {
  const error = new Error("Page not founded");
  error.status = 404;
  next(error);
});

app.use(checkHandler);
module.exports = app;
