import { configureStore } from '@reduxjs/toolkit'

import languageReducer from '../reducers/language.slice'
import keysReducer from '../reducers/keys.slice'

export default configureStore({
  reducer: {
    language: languageReducer,
    keys: keysReducer
  }
})
