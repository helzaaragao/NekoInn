import { darkTheme, lightTheme } from '@/styles/themes/default';
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        if(typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme | null;
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedTheme || (systemPrefersDark ? 'dark' : 'light')
        }
        return 'light'
    })

        useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
             document.documentElement.classList.remove('light')
        } else{ 
              document.documentElement.classList.add('light')
               document.documentElement.classList.remove('dark')
        }
    },[theme])

      useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = (e: MediaQueryListEvent) => {
            const newTheme = e.matches ? 'dark': 'light';
            setTheme(newTheme)
        }
        mediaQuery.addEventListener('change', handleChange);
        return() => mediaQuery.removeEventListener('change', handleChange)
    }, []);

     const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return {  theme, 
    toggleTheme,
    colors: theme === 'dark' ? darkTheme.colors : lightTheme.colors}
}