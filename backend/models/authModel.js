const mongoose = require("mongoose");

const refreshTokenSchema = mongoose.Schema(
  {
    refreshToken: {
      type: String,
      required: [true, "Please add a token"],
    }
  }
);

module.exports = mongoose.model("refreshToken", refreshTokenSchema);
