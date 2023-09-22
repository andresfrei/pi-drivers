import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {
    setDrivers: (state, action) => {
      return action.payload
    }
  }
})

export const { setDrivers } = driversSlice.actions
export default driversSlice.reducer
