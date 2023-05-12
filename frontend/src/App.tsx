import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/globa'
import Router from './Router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
