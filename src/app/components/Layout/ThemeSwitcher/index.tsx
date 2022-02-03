import { ThemeContext } from 'app/provider/ThemeProvider'
import { useState, useEffect, useContext } from 'react'
import styles from './index.module.sass'

const ThemeSwitcher = (props: { style?: React.HTMLAttributes<HTMLButtonElement> }) => {
  const { style } = props
  const { setTheme } = useContext(ThemeContext)
  const [isDay, setIsDay] = useState(false)

  useEffect(() => {
    setTheme(isDay ? 'theme-light' : 'theme-dark')
  }, [isDay])

  return (
    <button className={styles.themeSwitch} data-isday={isDay} onClick={() => setIsDay(!isDay)} style={style}>
      <span className={styles.sunIcon}>🌞</span>
      <span className={styles.moonIcon}>🌛</span>
    </button>
  )
}

export default ThemeSwitcher
