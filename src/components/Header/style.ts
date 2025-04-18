import { Switch } from "@chakra-ui/react";
import styled from "styled-components";

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
    position: fixed;
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
    padding-left: 2.5rem;
    
    
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors["main-color"]};
   
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
`
export const ChakraSwitchRoot = styled(Switch.Root)`
  margin-top: 1rem;
  width: 6rem;
  height: 3rem;
  --icon-size: 1rem; 
  
`
export const ChakraSwitchControl = styled(Switch.Control)`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  background: #E2E8F0 ;

  &[data-checked] {
    background: #8E345F !important; /* Roxo quando ligado */
  }
`
// export const ChackraSwitchThumb = styled(Switch.Thumb)`
//   width: 3rem;
// `

export const ChackraSwitchIndicador = styled(Switch.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
 

  svg{
    width: 2rem;
    height: 100%;
  }
`



export const NavLink = styled.a`

  text-decoration: none;
 
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
`
export const NavMobile = styled.nav`
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    color:  ${({ theme }) => theme.colors["day-background"]};
    
`

export const NavDesktop = styled.nav`
    display: none;

    @media (min-width: 768px) {
    display: flex;
  }
`
