import { Link } from 'react-router-dom'
import { routePaths } from 'app/routes'
import { useContext, useState } from 'react'

import { ChangeLanguage } from 'app/lang/ManageLanguage'
import { LanguageContext } from 'app/provider/LanguageProvider'
import { ThemeContext } from 'app/provider/ThemeProvider'
import { TitleContext } from 'app/provider/TitleProvider'

import styles from './index.module.sass'
import './index.sass'
import ThemeSwitcher from './ThemeSwitcher'
import Dropdown from '../Dropdown'

const Layout = (props: {children: JSX.Element | JSX.Element[]}) => {
  const { children } = props

  const { language, setLanguage } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const { title } = useContext(TitleContext)

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <div id='Layout' className={`${theme} ${styles.layout}`}>
      <div className={styles.header}>
        <div>
          <button className={styles.sideMenuButton} onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
            =
          </button>
          <h1 className={styles.title}>
            { title }
          </h1>
        </div>
        <div>
          <Dropdown text={language.global.languageOption}>
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
          </Dropdown>
          <ThemeSwitcher/>
        </div>
      </div>
      <aside className={styles.sideMenu} style={{ display: isSideMenuOpen ? '' : 'none' }}>
        <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
          =
        </button>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to={routePaths.home}>
                {language.pages.home.name}
              </Link>
            </li>
            <li>
              <Link to={routePaths.calendar}>
                {language.pages.calendar.name}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

export default Layout
