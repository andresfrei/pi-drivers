const Validator = require('../libs/classValidator')

const createDriverMiddleware = (req, res, next) => {
  const errors = []
  const { firstName, lastName, description, image, nationality, dob } = req.body

  const firstNameValidate = new Validator('firstName', firstName)
  const lastNameValidate = new Validator('lastName', lastName)

  firstNameValidate.isRequired()
  !firstNameValidate.isValidate() && errors.push(firstNameValidate.errorMessage())

  lastNameValidate.isRequired()
  !lastNameValidate.isValidate() && errors.push(lastNameValidate.errorMessage())

  // Devuelvo solo los campos que me interesan
  req.body = { firstName, lastName, description, image, nationality, dob }

  errors.length > 0
    ? res.status(400).json(errors)
    : next()
}

module.exports = { createDriverMiddleware }
