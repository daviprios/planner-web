import { Link } from 'react-router-dom'
import { routePaths } from 'app/routes'
import { ChangeLanguage } from 'app/lang/ManageLanguage'
import { useContext } from 'react'
import { LanguageContext } from 'app/provider/LanguageProvider'
import styles from 'index.module.sass'

const Layout = (props: {children: JSX.Element | JSX.Element[]}) => {
  const { children } = props
  const {setLanguage} = useContext(LanguageContext)

  return (
    <div id='Layout'>
      <div>
        <button>
          =
        </button>
        <button onClick={() => setLanguage(ChangeLanguage('en'))}>
          English
        </button>
        <button onClick={() => setLanguage(ChangeLanguage('pt_br'))}>
          Português brasileiro
        </button>
        <h1>
          Título
        </h1>
      </div>
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
