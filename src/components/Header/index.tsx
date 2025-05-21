import { useContext, useEffect, useState } from 'react';
import { Switch } from "@chakra-ui/react"
import { Moon, Sun } from '@phosphor-icons/react';
import { Button } from '../ui/Button';
import { ChackraSwitchIndicador, ChakraSwitchControl, ChakraSwitchRoot, HamburgerButton, HeaderContainer, MobileMenu, NavDesktop, NavLink, NavMobile } from './style';
import { ThemeContext, ThemeType } from '@/context/ThemeContext';

import menuHambuguer from '../../assets/Hamburger.svg'
import X from '../../assets/X.png'


export function Header(){
    const [isBurgerMenu, setIsBurgerMenu] = useState(false);
    const [isSmallScreenView, setIsSmallScreenView] = useState(false);

    const {theme, themeData, toggleTheme} = useContext(ThemeContext);

    const isDarkMode = theme === ThemeType.dark
    

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreenView(window.innerWidth < 1024);
        }
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])
    
    useEffect(() => {
        if (isBurgerMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isBurgerMenu]);

    const toggleMobileMenu = () => {
        setIsBurgerMenu(prevState => !prevState);
      };
      
    
    return(
        <HeaderContainer>
            <img src={themeData.images.logo} alt="" />
            {isSmallScreenView && (
                <>
                                <HamburgerButton onClick={toggleMobileMenu} $isOpen={isBurgerMenu}>
                                {isBurgerMenu ? (
                                    <img src={X} alt="Close menu" />
                                ) : (
                                    <img src={menuHambuguer} alt="Open menu" />
                                )}
                                </HamburgerButton>

                    {isBurgerMenu && (
                            <MobileMenu $isOpen={isBurgerMenu}>
                                 <ChakraSwitchRoot  size="lg" checked={isDarkMode} onCheckedChange={toggleTheme}>
                                            <Switch.HiddenInput />
                                            <ChakraSwitchControl>
                                                <ChackraSwitchIndicador fallback={<Sun size={32} data-icon="sun"/>}>
                                                    <Moon size={32} data-icon="moon"/>
                                                </ChackraSwitchIndicador>
                                            </ChakraSwitchControl>
                                </ChakraSwitchRoot>
                                <NavMobile>
                                    <NavLink href="#">About us</NavLink>
                                    <NavLink href="#">Our Rooms</NavLink>
                                    <NavLink href="#">Purr Care</NavLink>
                                    <NavLink href="#">Testimonial</NavLink>
                                    <Button bgColor="secundary/hover"></Button>
                                </NavMobile>

                          </MobileMenu>
                        )
                    }
                </>
            )}

            {!isSmallScreenView && (
                    <NavDesktop>
                        <ul>
                            <NavLink href="#">About us</NavLink>
                            <NavLink href="#">Our Rooms</NavLink>
                            <NavLink href="#">Purr Care</NavLink>
                            <NavLink href="#">Testimonial</NavLink>
                        </ul>
                        <div>
                            <ChakraSwitchRoot  size="lg" checked={isDarkMode} onCheckedChange={toggleTheme}>
                                                <Switch.HiddenInput />
                                                <ChakraSwitchControl>
                                                    <ChackraSwitchIndicador fallback={<Sun size={32} data-icon="sun"/>}>
                                                        <Moon size={32} data-icon="moon"/>
                                                    </ChackraSwitchIndicador>
                                                </ChakraSwitchControl>
                            </ChakraSwitchRoot>
                            <Button></Button>
                        </div>
                    </NavDesktop>
                )}
        </HeaderContainer>
    )
}

// Melhorias Adicionais
// Animar a entrada/saída do menu (se quiser um fade in/out):
// Use react-spring ou framer-motion para animações mais suaves.

// Fechar o menu ao clicar em um link.