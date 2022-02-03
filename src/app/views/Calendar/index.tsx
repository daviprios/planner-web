import { useContext, useEffect } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'
import { TitleContext } from 'app/provider/TitleProvider'

const Calendar = () => {
  const { language } = useContext(LanguageContext)
  const { setTitle } = useContext(TitleContext)

  useEffect(() => {
    setTitle(language.pages.calendar.name)
  }, [language.pages.calendar.name])

  return (
    <div>
      {language.pages.calendar.name}
    </div>
  )
}

export default Calendar
