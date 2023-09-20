const Validator = require('../libs/classValidator')

const createDriverMiddleware = (req, res, next) => {
  const validate = new Validator(req.body)

  validate.isRequired('firstname')
  validate.isRequired('lastname')
  validate.isRequired('description')
  validate.isUrl('image')
  validate.isRequired('nationality')
  validate.isRequired('birth')
  validate.isRequired('wiki')
  validate.isRequired('teams')

  validate.resolve(res, next)
}

module.exports = { createDriverMiddleware }
