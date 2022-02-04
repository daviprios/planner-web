import { useContext, useEffect } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'
import { TitleContext } from 'app/provider/TitleProvider'

const Agenda = () => {
  const { language } = useContext(LanguageContext)
  const { setTitle } = useContext(TitleContext)

  useEffect(() => {
    setTitle(language.pages.agenda.name)
  }, [language.pages.agenda.name, setTitle])

  return (
    <div>
      {language.pages.agenda.name}
    </div>
  )
}

export default Agenda
