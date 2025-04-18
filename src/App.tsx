import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./home"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
        
        <Home></Home>
    </ThemeProvider>

// Pesquisar sobre themes e como utilizar em breve melhor
  )
}
