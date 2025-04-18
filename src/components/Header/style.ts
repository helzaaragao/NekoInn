import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
export const HamburgerButton = styled.button<{$isOpen:boolean}>`
    display: flex;
    top: 1rem;      // Distância do topo
    right: 1rem; 
    z-index: 1001; 
    cursor: pointer;
    background-color: transparent;
   


    
    @media (min-width: 768px) {
    display: none;
  }
`
export const MobileMenu = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top:0;
    right:0;
    width: 70%;
    height: 100vh;
    z-index: 1000;
    
    
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors["main-color"]};
    padding-top: 4rem; // Espaço para o botão X

    


`
export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color:  ${({ theme }) => theme.colors["day-background"]};

`
export const NavDesktop = styled.nav`
    display: none;

    @media (min-width: 768px) {
    display: flex;
  }
`
