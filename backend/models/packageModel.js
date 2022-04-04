const mongoose = require("mongoose");

const packageSchema = mongoose.Schema(
  {
    companyID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    duration: {
      type: String,
    },
    price: {
      type: Number,
    },
    destination: {
      type: String,
    },
    maxCustomerNumber: {
      type: Number,
    },
    minCustomerNumber: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Package", packageSchema);
