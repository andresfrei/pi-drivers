import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loader: true,
  loadData: false,
  pagination: 9,
  page: 1,
  listDrivers: [],
  searchDrivers: '',
  filterSearch: false
}

const keysSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    setKey: (state, action) => {
      const { key, value } = action.payload
      return { ...state, [key]: value }
    }
  }
})

export const { setKey } = keysSlice.actions
export default keysSlice.reducer
