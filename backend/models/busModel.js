const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
  {
    plateNumber: {
      type: String,
      required: [true, "Please add a plate Number"],
      unique: true,
    },
    MaxCapacity: {
      type: String,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Driver",
    },
    companyID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bus", busSchema);
