import { useContext, useEffect } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'
import { TitleContext } from 'app/provider/TitleProvider'

const Planner = () => {
  const { language } = useContext(LanguageContext)
  const { setTitle } = useContext(TitleContext)

  useEffect(() => {
    setTitle(language.pages.home.name)
  }, [language.pages.home.name])

  return (
    <div>
      {language.pages.home.name}
    </div>
  )
}

export default Planner
