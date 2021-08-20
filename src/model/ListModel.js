const { model, Schema } = require("mongoose");

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("lists", listSchema);
