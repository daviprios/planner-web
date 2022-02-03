import { Link } from 'react-router-dom'
import { routePaths } from 'app/routes'
import { ChangeLanguage } from 'app/lang/ManageLanguage'
import { useContext, useState } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'
import styles from './index.module.sass'
import { ThemeContext } from 'app/provider/ThemeProvider'

const Layout = (props: {children: JSX.Element | JSX.Element[]}) => {
  const { children } = props
  const { setLanguage } = useContext(LanguageContext)
  const { theme, setTheme } = useContext(ThemeContext)

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isDay, setIsDay] = useState(false)

  return (
    <div id='Layout' className={`${theme}`}>
      <div className={styles.header}>
        <button className={styles.sideMenuButton}>
          =
        </button>
        <h1>
          Título
        </h1>
        <button className={styles.themeSwitch} data-isDay={isDay} onClick={() => {setIsDay(!isDay);setTheme(isDay ? 'theme-light' : 'theme-dark')}}>
          <span className={styles.sunIcon}>🌞</span>
          <span className={styles.moonIcon}>🌛</span>
        </button>
        <button onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}>
          Language
        </button>
      </div>
      <ul style={{ display: isLanguageDropdownOpen ? '' : 'none' }}>
        <li>
          <button onClick={() => setLanguage(ChangeLanguage('en'))}>
            English
          </button>
        </li>
        <li>
          <button onClick={() => setLanguage(ChangeLanguage('pt_br'))}>
            Português brasileiro
          </button>
        </li>
      </ul>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to={routePaths.home}>
                Início
              </Link>
            </li>
            <li>
              <Link to={routePaths.calendar}>
                Calendario
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
