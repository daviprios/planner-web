import { useContext } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'

const Calendar = () => {
  const {language} = useContext(LanguageContext)

  return (
    <div>
      {language.pages.calendar.name}
    </div>
  )
}

export default Calendar
