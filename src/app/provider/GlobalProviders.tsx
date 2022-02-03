import LanguageProvider from './LanguageProvider'
import ThemeProvider from './ThemeProvider'

const GlobalProviders = (props: {children: JSX.Element | JSX.Element[]}) => {
  const {children} = props

  return (
    <LanguageProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
    </LanguageProvider>
  )
}

export default GlobalProviders
