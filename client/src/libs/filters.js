export const filterByName = (drivers, name) => {
  const res = drivers.filter(driver =>
    driver.firstname.toLowerCase().includes(name) ||
    driver.lastname.toLowerCase().includes(name)
  )
  return res
}

export const filterByNationality = (drivers, natyonality) => {
  return drivers.filter(driver => driver.nationality.toLowerCase().includes(natyonality))
}

export const filterByTeam = (drivers, value) => {
  const res = drivers.filter(driver =>
    driver.teams && driver.teams.some(team => team.toLowerCase().includes(value))
  )
  return res
}
