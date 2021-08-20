const Router = require("express");

const { ItemController } = require("../controllers");

module.exports = Router()
  .post("/", ItemController.addItem)
  .delete("/:id", ItemController.removeItem)
  .get("/", ItemController.getItems);
