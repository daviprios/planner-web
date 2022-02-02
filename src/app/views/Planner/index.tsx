import { useContext } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'

const Planner = () => {
  const {language} = useContext(LanguageContext)

  return (
    <div>
      {language.pages.home.name}
    </div>
  )
}

export default Planner
