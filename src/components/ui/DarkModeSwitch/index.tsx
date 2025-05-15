import { ChackraSwitchIndicador, ChakraSwitchControl, ChakraSwitchRoot } from '@/components/Header/style';
import { Switch } from '@chakra-ui/react';
import { Moon, Sun } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const DarkModeSwitch = () => {
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
    return(
        <ChakraSwitchRoot size="lg">
            <Switch.HiddenInput/>
            <ChakraSwitchControl $active={theme === 'light'}>
            <ChackraSwitchIndicador fallback={<Sun size={32} data-icon="sun"/>}>
            <Moon size={32} data-icon="moon"/>
            </ChackraSwitchIndicador>
            </ChakraSwitchControl>
       </ChakraSwitchRoot>
    )
}