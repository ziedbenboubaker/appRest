const { ListModel } = require("../models");

async function addList(request, response, next) {
  try {
    const listData = request.body;
    const list = await new ListModel(listData).save();

    response.end(JSON.stringify(list));
  } catch (e) {
    next(e);
  }
}

async function getList(request, response, next) {
  try {
    const { name } = request.params;
    const list = await ListModel.findOne({ name });

    if (!list) {
      request.body = { name };
      await addList(request, response, next);
    } else {
      response.end(JSON.stringify(list));
    }
  } catch (e) {
    next(e);
  }
}
module.exports = { addList, getList };
