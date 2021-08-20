const { ListModel } = require("../model");

async function addList(request, response, next) {
  try {
    const list = { ...request.body };
    const newList = await new ListModel(list).save();
    response.end(JSON.stringify(newList));
  } catch (e) {
    next(e);
  }
}

async function getLists(request, response, next) {
  try {
    const { name } = request.body;
    const List = await ListModel.find({ name });
    response.end(JSON.stringify(List));
  } catch (e) {
    next(e);
  }
}
module.exports = { addList, getLists };
