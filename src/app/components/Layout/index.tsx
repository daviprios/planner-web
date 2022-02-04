import { Link } from 'react-router-dom'
import { routePaths } from 'app/routes'
import { useContext, useRef, useState } from 'react'

import { ChangeLanguage } from 'app/lang/ManageLanguage'
import { LanguageContext } from 'app/provider/LanguageProvider'
import { ThemeContext } from 'app/provider/ThemeProvider'
import { TitleContext } from 'app/provider/TitleProvider'

import './index.sass'
import styles from './index.module.sass'
import ThemeSwitcher from './ThemeSwitcher'
import Dropdown from '../Dropdown'
import { useOnClickOutside } from 'usehooks-ts'

const Layout = (props: {children: JSX.Element | JSX.Element[]}) => {
  const { children } = props

  const { language, setLanguage } = useContext(LanguageContext)
  const { theme } = useContext(ThemeContext)
  const { title } = useContext(TitleContext)
  
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  const sideMenuRef = useRef(null)
  useOnClickOutside(sideMenuRef, () => setIsSideMenuOpen(false))

  return (
    <div id='Layout' className={`${theme} ${styles.layout}`}>
      <aside className={styles.sideMenu} style={{ display: isSideMenuOpen ? '' : 'none' }} ref={sideMenuRef}>
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
      <main className={styles.content}>
        {children}
      </main>
    </div>
  )
}

export default Layout
