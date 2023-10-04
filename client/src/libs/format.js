export const formatDate = (stringDate) => {
  const day = stringDate.slice(8, 10)
  const month = stringDate.slice(5, 7)
  const year = stringDate.slice(0, 4)
  return `${day}/${month}/${year}`
}

export const formatDateSQL = (stringDate) => {
  const date = stringDate.replace('-', '/')
  const [day, month, year] = date.split('/')
  const birth = `${year}-${month}-${day}`
  return birth
}
