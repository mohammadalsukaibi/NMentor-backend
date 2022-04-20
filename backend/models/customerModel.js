const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    phoneNumber: {
      type: String,
    },
    DOB: {
      type: String,
    },
    gender: {
      type: String,
    },
    currentLocation: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
