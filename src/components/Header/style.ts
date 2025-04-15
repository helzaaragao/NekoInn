import styled from "styled-components";

export const HeaderContainer = styled.header``
export const HamburgerButton = styled.button<{$isOpen:boolean}>`
    display: flex;


    
    @media (min-width: 768px) {
    display: none;
  }
`
export const MobileMenu = styled.div`
    position: fixed;


`
export const NavLink = styled.a``
export const NavDesktop = styled.nav`
    display: none;

    @media (min-width: 768px) {
    display: flex;
  }
`
