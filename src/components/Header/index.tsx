import { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import menuHambuguer from '../../assets/Hamburger.svg'
import X from '../../assets/X.png'
import { HamburgerButton, HeaderContainer, MobileMenu, NavDesktop, NavLink } from './style';
import { Switch } from "@chakra-ui/react"
import { Moon, Sun } from '@phosphor-icons/react';


export function Header(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false); 

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobileView(window.innerWidth <= 768);
        }
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile)

        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
      };
    
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            
            {isMobileView && (
                <>
                                <HamburgerButton onClick={toggleMobileMenu} $isOpen={isMobileMenuOpen}>
                                {isMobileMenuOpen ? (
                                    <img src={X} alt="Close menu" />
                                ) : (
                                    <img src={menuHambuguer} alt="Open menu" />
                                )}
                                </HamburgerButton>

                    {isMobileMenuOpen && (
                            <MobileMenu $isOpen={isMobileMenuOpen}>
                                 <Switch.Root colorPalette="blue" size="lg">
                                            <Switch.HiddenInput />
                                            <Switch.Control>
                                                <Switch.Thumb />
                                                <Switch.Indicator fallback={<Sun size={32} />}>
                                                    <Moon size={32} />
                                                </Switch.Indicator>
                                            </Switch.Control>
                                            <Switch.Label>Switch me</Switch.Label>
                                </Switch.Root>
                                <NavLink href="#">About us</NavLink>
                                <NavLink href="#">Our Rooms</NavLink>
                                <NavLink href="#">Purr Care</NavLink>
                                <NavLink href="#">Testimonial</NavLink>
                                <button type='submit'>Book Now</button>
                          </MobileMenu>
                        )
                    }
                </>
            )}

            {!isMobileView && (
                    <NavDesktop>
                        <NavLink href="#">About us</NavLink>
                        <NavLink href="#">Our Rooms</NavLink>
                        <NavLink href="#">Purr Care</NavLink>
                        <NavLink href="#">Testimonial</NavLink>
                         {/* Light/Dark */}
                        <button>Book Now</button>
                    </NavDesktop>
                )}
            

        </HeaderContainer>
    )
}

// Melhorias Adicionais
// Animar a entrada/saída do menu (se quiser um fade in/out):
// Use react-spring ou framer-motion para animações mais suaves.

// Fechar o menu ao clicar em um link:

// tsx
// Copy
// const closeMenu = () => setIsMobileMenuOpen(false);

// <NavLink href="#" onClick={closeMenu}>Home</NavLink>

// https://mantine.dev/core/switch/ -> dark/light mode
// https://chakra-ui.com/docs/components/accordion