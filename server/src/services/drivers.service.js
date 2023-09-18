const { Driver, Team } = require('../db')
const findDriversService = ({ query }) => {

}

const findOneDriverService = async (idDriver) => {
  const driver = await Driver.findByPk(idDriver, { include: [Team] })
  if (!driver) return {}
  return driver.toJSON()
}

module.exports = { findDriversService, findOneDriverService }
