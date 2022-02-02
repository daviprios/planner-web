import en from './languages/en'
import pt_br from './languages/pt_br'

import { LanguageTemplate } from './languageTemplate'

type Languages = 'en' | 'pt_br'

const Text: LanguageTemplate = pt_br
const ChangeLanguage = (language: Languages): LanguageTemplate => {
  switch(language){
    case 'pt_br':
      return pt_br
    case 'en':
      return en
    default:
      throw new Error('This language isn\'t configurated')
  }
}

const ManageLanguage = { Text, ChangeLanguage }

export type { Languages }
export { Text, ChangeLanguage }
export default ManageLanguage