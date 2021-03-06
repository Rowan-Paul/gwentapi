const mongoose = require('mongoose')
const LocationsSchema = require('./Locations')

const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deck: {
    type: String,
    required: true,
    enum: [
      'neutral',
      'monsters',
      'nilfgaard',
      'northern realms',
      "scoia'tael",
      'skellige',
    ],
  },
  row: {
    type: String,
    required: false,
    enum: ['close', 'ranged', 'siege', 'leader', 'agile'],
  },
  strength: {
    type: Number,
    required: false,
  },
  locations: {
    type: [LocationsSchema],
    required: true,
  },
  abilities: {
    type: [String],
    required: false,
    default: undefined,
    enum: [
      'agile',
      'hero',
      'medic',
      'morale boost',
      'muster',
      'spy',
      'tight bond',
    ],
  },
  effect: {
    type: String,
    required: false,
    enum: [
      'weather',
      'decoy',
      "commander's horn",
      'scorch',
      'summon avenger',
      'mardroeme',
      'berserker',
    ],
  },
  notes: {
    type: String,
    required: false,
  },
  isDLC: {
    type: Boolean,
    required: true,
    default: false,
  },
  expansion: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('Card', CardSchema)
