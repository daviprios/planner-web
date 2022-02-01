import React from 'react'
import ReactDOM from 'react-dom'
import App from 'app/routes'
import reportWebVitals from './reportWebVitals'
import 'reflect-metadata'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
