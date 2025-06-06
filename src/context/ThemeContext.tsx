import { darkTheme } from "@/styles/themes/darkMode";
import { lightTheme } from "@/styles/themes/lightMode";
import { createContext, ReactNode, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

export enum ThemeType {
    light = 'light', 
    dark = 'dark',
}
const themes = {
    light: lightTheme, 
    dark: darkTheme,
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({
    theme: ThemeType.light, 
    themeData: lightTheme,
    toggleTheme: () => {},
})

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState(ThemeType.light)

    function toggleTheme(){
        if(theme === ThemeType.light){
          setTheme(ThemeType.dark)
        }else { 
            setTheme(ThemeType.light)
        }
    }
    return(
        <ThemeContext.Provider value={{theme, themeData: themes[theme],toggleTheme}}>
            <ThemeProviderStyled theme={themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
}



