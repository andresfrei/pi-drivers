import useDrivers from './useDrivers'

export default function useDriver (id) {
  const { drivers } = useDrivers()

  // eslint-disable-next-line eqeqeq
  const driver = drivers.find(driver => driver.id == id)

  return { driver }
}
