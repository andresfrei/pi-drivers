export const arrayIndexField = (array, field) => {
  const slice = array.map(text => text[field][0].toUpperCase())
  slice.sort()
  const index = new Set(slice)

  return Array.from(index)
}
