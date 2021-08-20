const { model, Schema } = require("mongoose");

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    listId: {
      type: Schema.Types.ObjectId,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("items", itemSchema);
