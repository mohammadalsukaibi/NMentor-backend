const mongoose = require('mongoose')

const busSchema = mongoose.Schema(
  {
    plateNumber: {
      type: String,
      required: [true, 'Please add a plate Number'],
      unique: true,
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Bus', busSchema)