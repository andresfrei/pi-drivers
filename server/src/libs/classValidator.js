class Validator {
  constructor (values) {
    this.values = values
    this._errors = []
    this.filds = new Set()
  }

  isRequired (key) {
    this.filds.add(key)
    const res = !!this.values[key] || this.values[key] === 0
    !res && this._errors[key].push('It is required')
    return res
  }

  isNumber (key) {
    this.filds.add(key)
    const res = !isNaN(Number(this.values[key]))
    !res && this._errors[key].push('Not a number')
    return res
  }

  isString (key) {
    this.filds.add(key)
    const res = typeof this.values[key] === 'string'
    !res && this._errors[key].push('Not a string')
    return res
  }

  isEmail (key) {
    this.filds.add(key)
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const res = regex.test(this.values[key])
    !res && this._errors[key].push('Not an email')
    return res
  }

  isMax (key, max) {
    const res = this.values[key] <= max
    !res && this._errors[key].push(`Must be less than or equal to ${max}`)
    return res
  }

  isMin (key, min) {
    const res = this.values[key] >= min
    !res && this._errors[key].push(`Must be greater than or equal to ${min}`)
    return res
  }

  isRange (key, min, max) {
    const res = this.values[key] >= min && this.values[key] <= max
    !res && this._errors[key].push(`The value is out of the range ${min} and ${max}`)
    return res
  }

  isUrl (key) {
    this.filds.add(key)
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
    const res = regex.test(this.values[key])
    !res && this._errors[key].push('Not an url')
    return res
  }

  isContainsLetters (key) {
    this.filds.add(key)
    const regex = /[a-zA-Z]/
    const res = regex.test(this.values[key])
    !res && this._errors[key].push('Must contain some letter')
    return res
  }

  isContainNumbers (key) {
    this.filds.add(key)
    const regex = /\d/
    const res = regex.test(this.values[key])
    !res && this._errors[key].push('Must contain some number')
    return res
  }

  isContainSymbols (key) {
    this.filds.add(key)
    const regex = /\W/
    const res = regex.test(this.values[key])
    !res && this._errors[key].push('Must contain at least one symbol')
    return res
  }

  isLongMin (key, long) {
    const isText = typeof this.values[key] === 'string'
    const res = isText && this.values[key].length >= long
    !res && this._errors[key].push(`Minimum length of ${long} characters`)
    return res
  }

  isPasswordSecure (key) {
    this.filds.add(key)
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{5,}$/
    const res = regex.test(this.values[key])
    !res && this._errors[key].push('The password must have at least 5 characters, at least one letter, one number and one sign')
    return res
  }

  notEmpty (key) {
    this.filds.add(key)
    const res = !!this.values[key]
    !res && this._errors[key].push('The value cannot be empty')
    return res
  }

  isValidate () {
    return this._errors.length === 0
  }

  filterData (res, next) {
    const filteredData = Object.keys(this.values)
      .filter(key => this.filds.has(key))
      .reduce((obj, key) => {
        obj[key] = this.values[key]
        return obj
      }, {})
    res.body = filteredData
    next()
  }

  resolve (res, next) {
    this.isValidate()
      ? this.filterData(res, next)
      : res.status(400).json(this._errors)
  }
}

module.exports = Validator
