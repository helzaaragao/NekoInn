import { ThemeProvider } from "styled-components"
import { darkTheme, defaultTheme, lightTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { Home } from "./home"
import { useTheme } from "./hooks/useTheme";

export function App() {
   const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle></GlobalStyle>
        
        <Home></Home>
    </ThemeProvider>

// Pesquisar sobre themes e como utilizar em breve melhor
  )
}
