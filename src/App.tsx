import { GlobalStyle } from "./styles/global"
import { Home } from "./home"
import { ThemeProvider } from "./context/ThemeContext"

export function App() {

  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
        <Home></Home>
    </ThemeProvider>
)}
