const { Schema } = require('mongoose');

const Model = new Schema(
  {
    uid: {
      type: String,
      index: true,
      unique: true,
    },

    mail: String,
    telephone: Number,
    password: String,

    firstName: String,
    lastName: String,
  },
  { toJSON: { virtuals: true }, timestamps: true },
);
module.exports = Model;
