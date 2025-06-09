import { ChackraSwitchIndicador, ChakraSwitchControl, ChakraSwitchRoot } from '@/components/Header/style';
import { ThemeContext } from '@/context/ThemeContext';
import { Switch } from '@chakra-ui/react';
import { Moon, Sun } from '@phosphor-icons/react';
import {  useContext } from 'react';


export const DarkModeSwitch = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const isDarkMode = theme === 'dark';

    return(
        <ChakraSwitchRoot size="lg" onCheckedChange={toggleTheme} checked={isDarkMode}>
            <Switch.HiddenInput/>
            <ChakraSwitchControl>
            <ChackraSwitchIndicador fallback={<Sun size={32} data-icon="sun"/>}>
            <Moon size={32} data-icon="moon"/>
            </ChackraSwitchIndicador>
            </ChakraSwitchControl>
       </ChakraSwitchRoot>
    )
}