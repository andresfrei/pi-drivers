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

export const validateDescription = (description) => {
  const validate = new Validator({ description })
  validate.isRequired('description')
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

export const validateWiki = (wiki) => {
  const validate = new Validator({ wiki })
  validate.isUrl('wiki')
  return validate.resolve()
}

export const validateTeams = (teams) => {
  const validate = new Validator({ teams })
  validate.notEmpty('teams')
  return validate.resolve()
}

export const validateDataRequired = (data) => {
  const validate = new Validator(data)

  validate.isRequired('firstname')
  validate.isRequired('lastname')
  validate.isRequired('description')
  validate.isRequired('image')
  validate.isRequired('nationality')
  validate.isRequired('birth')
  validate.isRequired('teams')
  validate.isRequired('wiki')
  validate.notEmpty('teams')

  return validate.resolve()
}

export const createDriverValidate = {
  onSubmit: validateDataRequired,
  firstname: validateFirstname,
  lastname: validateLastname,
  description: validateDescription,
  nationality: validateNationality,
  image: validateImage,
  birth: validateBirth,
  wiki: validateWiki,
  teams: validateTeams
}
