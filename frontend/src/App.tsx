import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/globa'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>App</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
