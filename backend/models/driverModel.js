const mongoose = require("mongoose");

const driverSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a name"],
    },
    licenseNumber: {
      type: String,
      required: [true, "Please add a license Number"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please add a phone number"],
    },
    DOB: {
      type: String,
      required: [true, "Please add a date of birth"],
    },
    gender: {
      type: String,
      required: [true, "Please add a gender"],
    },
    companyID: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Driver", driverSchema);
