const mongoose = require('mongoose')
require('../models/Card')
require('../models/User')

const dbName = 'gwentcards'

const db = mongoose.connection

const Card = mongoose.model('Card')
const User = mongoose.model('User')

const northernRealms = require('./northernRealms.json')
const monsters = require('./monsters.json')
const nilfgaard = require('./nilfgaard.json')
const scoiatael = require('./scoiatael.json')
const neutral = require('./neutral.json')
const skellige = require('./skellige.json')

mongoose
  .connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    return Card.deleteMany()
  })
  .then(() => {
    console.log('Deleted cards')
    return Card.insertMany(northernRealms)
  })
  .then(() => {
    console.log('Inserted Northern Realms cards')
    return Card.insertMany(monsters)
  })
  .then(() => {
    console.log('Inserted Monsters cards')
    return Card.insertMany(nilfgaard)
  })
  .then(() => {
    console.log('Inserted Nilfgaard cards')
    return Card.insertMany(scoiatael)
  })
  .then(() => {
    console.log('Inserted Scoiatael cards')
    return Card.insertMany(neutral)
  })
  .then(() => {
    console.log('Inserted Neutral cards')
    return Card.insertMany(skellige)
  })
  .then(() => {
    console.log('Inserted Skellige cards')
    return User.deleteMany()
  })
  .then(() => {
    console.log('Deleted users')

    const newUser = new User()
    newUser.email = 'mail@example.com'
    newUser.password = newUser.generateHash('password')
    newUser.username = 'rpf'

    return newUser.save()
  })
  .then(() => {
    console.log('Created new user')
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    db.close()
    console.log('Database closed')
  })
