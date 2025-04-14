import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle></GlobalStyle>
    <>
     <h1>Testando</h1>
    </>
    </ThemeProvider>

// Pesquisar sobre themes e como utilizar em breve melhor
  )
}
