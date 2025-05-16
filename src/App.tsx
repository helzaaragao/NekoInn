import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "./styles/global"
import { Home } from "./home"
import { defaultTheme } from "./styles/themes/default"


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
        
        <Home></Home>
    </ThemeProvider>

// Pesquisar sobre themes e como utilizar em breve melhor
  )
}
