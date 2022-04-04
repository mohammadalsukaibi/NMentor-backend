const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
    },
    // drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Driver'}],
    // buses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bus'}],
    neighborhoods: [{
      type: String,
    }],
    
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Company', companySchema)