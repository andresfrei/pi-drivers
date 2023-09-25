import { createSlice } from '@reduxjs/toolkit'
import { FILED_NAME } from '../config/constants'

const initialState = {
  loader: true,
  hasLoad: false,
  paginationItems: 9,
  paginationCurrentPage: 1,
  paginationCurrentData: [],
  searchField: FILED_NAME,
  searchValue: '',
  seatchHasFilter: false
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
