const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please add a phone number'],
    },
    DOB: {
        type: String,
        required: [true, 'Please add a date of birth'],
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender'],
    },
    currentLocation: {type: String}
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Customer', customerSchema)