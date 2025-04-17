import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
export const HamburgerButton = styled.button<{$isOpen:boolean}>`
    display: flex;


    
    @media (min-width: 768px) {
    display: none;
  }
`
export const MobileMenu = styled.div`
    position: fixed;
    width: 60%;
    height: 100%;


`
export const NavLink = styled.a`
  width: 60%;
  display: flex;
`
export const NavDesktop = styled.nav`
    display: none;

    @media (min-width: 768px) {
    display: flex;
  }
`
