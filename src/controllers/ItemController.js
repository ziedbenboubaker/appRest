const { ItemModel } = require("../model");

async function addItem(request, response, next) {
  try {
    const item = { ...request.body };
    const newItem = await new ItemModel(item).save();
    response.end(JSON.stringify(newItem));
  } catch (e) {
    next(e);
  }
}

async function removeItem(request, response, next) {
  try {
    const item = await ItemModel.findOne({
      _id: request.params.id,
    });

    if (!item) {
      return response.sendStatus(404);
    }
    await ItemModel.remove();
    response.sendStatus(204);
  } catch (e) {
    next(e);
  }
}

async function getItems(request, response, next) {
  try {
    const { listId } = request.body;
    const Item = await ItemModel.find({ listId });
    response.end(JSON.stringify(Item));
  } catch (e) {
    next(e);
  }
}
module.exports = { addItem, removeItem, getItems };
