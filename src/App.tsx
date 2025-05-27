import { GlobalStyle } from "./styles/global"
import { Home } from "./home"
import { ThemeProvider } from "./context/ThemeContext"
import { useEffect } from "react";
import i18next from "i18next";

export function App() {
useEffect(() => {
  i18next.loadNamespaces(['home', 'components']); // Pré-carrega todos os namespaces
}, []);
  return (
    <ThemeProvider>
      <GlobalStyle></GlobalStyle>
        <Home></Home>
    </ThemeProvider>
)}
