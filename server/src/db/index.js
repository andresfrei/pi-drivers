require('dotenv').config()
const { Sequelize } = require('sequelize')

const fs = require('fs')
const path = require('path')
const { POSTGRES_URL } = process.env

const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: 'postgres',
  logging: false
})

// Cambio de origen
const basename = path.join(__dirname, '..', 'models')

const modelDefiners = []

fs.readdirSync(basename)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(basename, file)))
  })

modelDefiners.forEach(model => model(sequelize))

const entries = Object.entries(sequelize.models)
const capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]])
sequelize.models = Object.fromEntries(capsEntries)

const { Driver, Team, Nationality } = sequelize.models

// Aca vendrian las relaciones
Driver.belongsToMany(Team, { through: 'Driver_Team' })
Team.belongsToMany(Driver, { through: 'Driver_Team' })
Driver.belongsTo(Nationality)
Nationality.hasMany(Driver)

module.exports = {
  Driver,
  Team,
  Nationality,
  conn: sequelize // para importart la conexión { conn } = require('./db.js');
}
