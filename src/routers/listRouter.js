const Router = require("express");

const { ListController } = require("../controllers");

module.exports = Router()
  .post("/", ListController.addList)
  .get("/:name", ListController.getList);
