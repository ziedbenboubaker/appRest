const { ItemModel } = require("../models");

async function addItem(request, response, next) {
  try {
    const itemData = request.body;
    const item = await new ItemModel(itemData).save();

    response.end(JSON.stringify(item));
  } catch (e) {
    next(e);
  }
}

async function removeItem(request, response, next) {
  try {
    const query = { _id: request.params.id };
    const item = await ItemModel.findOne(query);

    if (!item) {
      return response.sendStatus(404);
    }

    await item.remove();

    response.end(JSON.stringify(item));
  } catch (e) {
    next(e);
  }
}

async function getItems(request, response, next) {
  try {
    const { listId } = request.params;
    const items = await ItemModel.find({ listId });

    response.end(JSON.stringify(items));
  } catch (e) {
    next(e);
  }
}
module.exports = { addItem, removeItem, getItems };
