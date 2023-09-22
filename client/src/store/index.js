import { configureStore } from '@reduxjs/toolkit'

import languageReducer from '../reducers/language.slice'
import keysReducer from '../reducers/keys.slice'
import driversReducer from '../reducers/drivers.slice'

export default configureStore({
  reducer: {
    language: languageReducer,
    drivers: driversReducer,
    keys: keysReducer
  }
})
