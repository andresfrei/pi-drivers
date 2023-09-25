import { useState } from 'react'

export default function useForm (initialValues) {
  const [values, setValues] = useState(initialValues)

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

  const handleClear = () => setValues(initialValues)

  return {
    values,
    handleChange,
    handleClear,
    handleAddSelected
  }
}
