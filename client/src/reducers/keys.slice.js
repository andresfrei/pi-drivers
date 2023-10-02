import { createSlice } from '@reduxjs/toolkit'
import { INICIAL_KEYS } from '../config/constants'

const initialState = INICIAL_KEYS

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
