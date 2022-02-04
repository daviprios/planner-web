import { LanguageContext } from 'app/provider/LanguageProvider'
import { ThemeContext } from 'app/provider/ThemeProvider'
import { useState, useEffect, useContext } from 'react'
import styles from './index.module.sass'

const ThemeSwitcher = (props: { style?: React.HTMLAttributes<HTMLButtonElement> }) => {
  const { style } = props
  const { language } = useContext(LanguageContext)
  const { setTheme } = useContext(ThemeContext)
  const [isDay, setIsDay] = useState(false)

  useEffect(() => {
    setTheme(isDay ? 'theme-light' : 'theme-dark')
  }, [isDay, setTheme])

  return (
    <input aria-label={language.aria.global.themeSwitcher} className={styles.themeSwitch} type='checkbox' checked={isDay} onChange={() => setIsDay(!isDay)} style={style}/>
  )
}

export default ThemeSwitcher
