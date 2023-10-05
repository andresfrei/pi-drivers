class Validator {
  constructor (values) {
    this.values = values
    this.errorsMessages = {}
    this.errors = 0
    this.filds = new Set()
  }

  _addError (key, message) {
    if (!this.errorsMessages[key]) this.errorsMessages[key] = []
    this.errorsMessages[key].push(message)
    this.errors++
  }

  optional (key) {
    this.filds.add(key)
  }

  isRequired (key) {
    this.filds.add(key)
    const res = !!this.values[key] || this.values[key] === 0
    !res && this._addError(key, 'It is required')
    return res
  }

  isNumber (key) {
    this.filds.add(key)
    const res = !isNaN(Number(this.values[key]))
    !res && this._addError(key, 'Not a number')
    return res
  }

  isString (key) {
    this.filds.add(key)
    const res = typeof this.values[key] === 'string'
    !res && this._addError(key, 'Not a string')
    return res
  }

  isText (key) {
    const regex = /^[A-Za-z\s]+$/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'It must contain text only')
    return res
  }

  isDate (key) {
    // const regex = /^\d{2}-\d{2}-\d{4}$/
    const regex = /^\d{2}[-/]\d{2}[-/]\d{4}$/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'It is not a date')
    return res
  }

  isEmail (key) {
    this.filds.add(key)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'Not an email')
    return res
  }

  isMax (key, max) {
    const res = this.values[key] <= max
    !res && this._addError(key, `Must be less than or equal to ${max}`)
    return res
  }

  isMin (key, min) {
    const res = this.values[key] >= min
    !res && this._addError(key, `Must be greater than or equal to ${min}`)
    return res
  }

  isRange (key, min, max) {
    const res = this.values[key] >= min && this.values[key] <= max
    !res && this._addError(key, `The value is out of the range ${min} and ${max}`)
    return res
  }

  isUrl (key) {
    this.filds.add(key)
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'Not an url')
    return res
  }

  isContainsLetters (key) {
    this.filds.add(key)
    const regex = /[a-zA-Z]/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'Must contain some letter')
    return res
  }

  isContainNumbers (key) {
    this.filds.add(key)
    const regex = /\d/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'Must contain some number')
    return res
  }

  isContainSymbols (key) {
    this.filds.add(key)
    const regex = /\W/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'Must contain at least one symbol')
    return res
  }

  isLongMin (key, long) {
    const isText = typeof this.values[key] === 'string'
    const res = isText && this.values[key].length >= long
    !res && this._addError(key, `Minimum length of ${long} characters`)
    return res
  }

  isLongMax (key, long) {
    const isText = typeof this.values[key] === 'string'
    const res = isText && this.values[key].length <= long
    !res && this._addError(key, `Maximun length of ${long} characters`)
    return res
  }

  isPasswordSecure (key) {
    this.filds.add(key)
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{5,}$/
    const res = regex.test(this.values[key])
    !res && this._addError(key, 'The password must have at least 5 characters, at least one letter, one number and one sign')
    return res
  }

  notEmpty (key) {
    this.filds.add(key)

    let res
    if (Array.isArray(this.values[key])) res = !!this.values[key].length
    else res = !!this.values[key]

    !res && this._addError(key, 'The value cannot be empty')
    return res
  }

  isValidate () {
    return !this.errors
  }

  resolve () {
    return { resolved: this.isValidate(), errors: this.errorsMessages }
  }
}

export default Validator
