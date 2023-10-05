import es from '../translations/es'
import en from '../translations/en'
import br from '../translations/br'

import { setLanguage as setLanguageSlice } from '../reducers/language.slice'
import { useSelector, useDispatch } from 'react-redux'
import { APP_KEY_LANGUAGE } from '../config/constants'

const language = { es, en, br }

export default function useLanguage (key) {
  const { selected, dictionary } = useSelector(state => state.language)
  const dispatch = useDispatch()

  const word = (value) => {
    if (!key) return '<undefined>'
    if (!dictionary[key]) return '<undefined>'
    return dictionary[key][value] || '<undefined>'
  }

  const setLanguage = (value) => {
    console.log(value)
    const selected = value
    const dictionary = language[selected]
    dispatch(setLanguageSlice({ selected, dictionary }))
    window.localStorage.setItem(APP_KEY_LANGUAGE, value)
  }

  return { selected, setLanguage, word }
}
