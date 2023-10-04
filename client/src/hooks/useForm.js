import { useState } from 'react'

export default function useForm ({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })

    // Si es un select fuerzo validación
    const elementType = event.target.nodeName.toLowerCase()
    elementType === 'select' && fieldValidate({ key: 'Enter', target: { name, value } })
  }

  const handleAddSelected = (field, value) => {
    let array

    // Compruebo si el dato ya existe en la seleccion
    if (!values[field].includes(value)) array = [...values[field], value]
    else array = values[field].filter(item => item !== value)
    setValues({
      ...values,
      [field]: array
    })
  }

  // Valido el campo al precionar TAB o Enter
  const fieldValidate = ({ key, target: { name, value } }) => {
    if ((key === 'Enter' || key === 'Tab') && validate[name]) {
      console.log('VALIDO')
      let currentFieldErrors = []
      // Valido solo si tiene datos
      if (value) {
        const res = validate[name](value)
        currentFieldErrors = res.errors[name]
      }
      const newErrors = { ...errors }
      newErrors[name] = currentFieldErrors
      setErrors(newErrors)
    }
  }

  // Recibe como parametro la funcion a ejecutar
  const handleSubmit = async (fnc) => {
    const res = validate.onSubmit(values)
    if (!res.resolved) {
      setErrors(res.errors)
      return res
    }
    return await fnc(values)
  }

  const handleHasError = () => {
    const keys = Object.keys(errors)
    const res = keys.filter(key => !!errors[key]?.length)
    return !!res.length
  }

  const hasError = handleHasError()

  const hasFieldError = (field) => !!errors[field]?.length

  const handleClear = () => setValues(initialValues)

  return {
    values,
    handleChange,
    handleClear,
    handleAddSelected,
    handleSubmit,
    fieldValidate,
    hasFieldError,
    errors,
    hasError
  }
}
