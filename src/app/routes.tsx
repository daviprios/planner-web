import { HashRouter, Routes as Switch, Route } from 'react-router-dom'
import LanguageProvider from './provider/LanguageProvider'

import Layout from './components/Layout'
import Calendar from './views/Calendar'
import Planner from './views/Planner'

const routePaths = {
  home: '/',
  calendar: 'calendar'
}

const Routes = () => {
	return (
    <HashRouter>
      <LanguageProvider>
        <Layout>
          <Switch>
            <Route path={routePaths.home}>
              <Route index element={<Planner/>}/>
              <Route path={routePaths.calendar} element={<Calendar/>}/>
            </Route>
          </Switch>
        </Layout>
      </LanguageProvider>
    </HashRouter>
  )
}

export {routePaths}
export default Routes
