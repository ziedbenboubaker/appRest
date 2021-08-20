const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");

dotenv.config();

const { listRouter, itemRouter } = require("./routers");

const mongooseOpts = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  dbName: process.env.DB_NAME,
};

mongoose
  .connect(process.env.MONGO_DB_URI, mongooseOpts)
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Failed connect to database"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(logger("dev"));

app.use("/api/lists", listRouter);
app.use("/api/items", itemRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).end(JSON.stringify(err));
});

module.exports = app;
