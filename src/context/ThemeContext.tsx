import { darkTheme } from "@/styles/themes/darkMode";
import { lightTheme } from "@/styles/themes/lightMode";
import { createContext, ReactNode, useEffect, useState } from "react";
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
    const [theme, setTheme] = useState<ThemeType | null>(null);

     useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = savedTheme === "light" || savedTheme === 'dark' ? savedTheme : (systemPrefersDark ? ThemeType.dark : ThemeType.light);
        setTheme(initialTheme as ThemeType);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

     useEffect(() => {
        if(theme){
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
       
    }, [theme]);


    function toggleTheme() {
        setTheme(prev => prev === ThemeType.light ? ThemeType.dark : ThemeType.light);
    }
    if(theme === null){
        return null
    }
    
    return(
        <ThemeContext.Provider value={{theme, themeData: themes[theme],toggleTheme}}>
            <ThemeProviderStyled theme={themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
}



