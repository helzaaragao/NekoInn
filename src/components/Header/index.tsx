import { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import { HamburgerButton, HeaderContainer, MobileMenu, NavDesktop, NavLink } from './style';

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

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            
            {isMobileView && (
                <>
                    <HamburgerButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen}>
                       <span></span>
                       <span></span>
                       <span></span>
                    </HamburgerButton>

                    <MobileMenu isOpen={isMobileMenuOpen}>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Sobre</NavLink>
            <NavLink href="#">Contato</NavLink>
          </MobileMenu>
                </>
            )}

            {!isMobileView && (
                    <NavDesktop>
                    <NavLink href="#">Home</NavLink>
                    <NavLink href="#">Sobre</NavLink>
                    <NavLink href="#">Contato</NavLink>
                    </NavDesktop>
                )}
            

        </HeaderContainer>
    )
}