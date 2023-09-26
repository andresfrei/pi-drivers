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
  }

  const handleAddSelected = (field, value) => {
    let array
    if (!values[field].includes(value)) array = [...values[field], value]
    else array = values[field].filter(item => item !== value)
    setValues({
      ...values,
      [field]: array
    })
  }

  // Recibe como parametro la funcion a ejecutar
  const handleSubmit = async (fnc) => {
    const res = validate(values)
    if (!res.resolved) {
      setErrors(res.errors)
      return res
    }
    return await fnc(values)
  }

  const handleClear = () => setValues(initialValues)

  return {
    values,
    handleChange,
    handleClear,
    handleAddSelected,
    handleSubmit,
    errors
  }
}
