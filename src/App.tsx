import { GlobalStyle } from "./styles/global"
import { Home } from "./home"
import { ThemeProvider } from "./context/ThemeContext"
import { useEffect } from "react";
import i18next from "i18next";

export function App() {
useEffect(() => {
    if (!i18next.hasLoadedNamespace('home') || !i18next.hasLoadedNamespace('components')) {
      i18next.loadNamespaces(['home', 'components'])
    }
  }, [])
  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
        <Home></Home>
    </ThemeProvider>
)}
