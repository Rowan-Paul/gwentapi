const mongoose = require('mongoose')

const LocationsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['quest', 'buy', 'base deck', 'random', 'win', 'summoned'],
    },
    territory: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    character: {
      type: String,
      required: false,
    },
  },
  { _id: false }
)

module.exports = LocationsSchema
