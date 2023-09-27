import Validator from '../libs/classValidator'

export const validateNewDriver = (data) => {
  const validate = new Validator(data)

  validate.isRequired('firstname')
  validate.isLongMin('firstname', 4)
  validate.isLongMax('firstname', 30)
  validate.isText('firstname')

  validate.isRequired('lastname')
  validate.isLongMin('lastname', 4)
  validate.isLongMax('lastname', 30)
  validate.isText('lastname')

  validate.isRequired('description')

  validate.isUrl('image')

  validate.isRequired('nationality')

  validate.isRequired('birth')

  validate.isUrl('wiki')

  validate.isRequired('teams')

  return validate.resolve()
}
