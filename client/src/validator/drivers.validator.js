import Validator from '../libs/classValidator'

export const validateFirstname = (firstname) => {
  const validate = new Validator({ firstname })
  validate.isLongMin('firstname', 4)
  validate.isLongMax('firstname', 30)
  validate.isText('firstname')
  return validate.resolve()
}

export const validateLastname = (lastname) => {
  const validate = new Validator({ lastname })
  validate.isLongMin('lastname', 4)
  validate.isLongMax('lastname', 30)
  validate.isText('lastname')
  return validate.resolve()
}

export const validateBirth = (birth) => {
  const validate = new Validator({ birth })
  validate.isDate('birth')
  return validate.resolve()
}

export const validateImage = (image) => {
  const validate = new Validator({ image })
  validate.isUrl('image')
  return validate.resolve()
}

export const validateNationality = (nationality) => {
  const validate = new Validator({ nationality })
  validate.isText()
  return validate.resolve()
}

export const validateDataRequired = (data) => {
  const validate = new Validator(data)

  validate.isRequired('lastname')
  validate.isRequired('firstname')
  validate.isRequired('nationality')
  validate.isRequired('birth')
  validate.isRequired('teams')

  return validate.resolve()
}

export const createDriverValidate = {
  onSubmit: validateDataRequired,
  firstname: validateFirstname,
  lastname: validateLastname,
  nationality: validateNationality,
  image: validateImage,
  birth: validateBirth
}
