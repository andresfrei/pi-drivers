import Validator from '../libs/classValidator'

export const validateNewDriver = (data) => {
  const validate = new Validator(data)

  validate.isRequired('fristname')
  validate.isRange('lastname', 2, 30)
  validate.isText('lastname')

  validate.isRequired('firstname')
  validate.isRange('firstname', 2, 30)
  validate.isText('firstname')

  validate.isRequired('description')

  validate.isUrl('image')

  validate.isRequired('nationality')

  validate.isRequired('birth')

  validate.isUrl('wiki')

  validate.isRequired('teams')

  return validate.resolve()
}
