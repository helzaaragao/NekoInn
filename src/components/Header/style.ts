import { Switch } from "@chakra-ui/react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;

  > img:first-child {
    width: 11.125rem;
    height: 4.313rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2.5rem;

  }
  @media (min-width: 1440px){
    gap: 0;
  }
  
`
export const HamburgerButton = styled.button<{$isOpen:boolean}>`
    display: flex;
    top: 2rem;      
    right: 1rem; 
    z-index: 1001; 
    cursor: pointer;
    position: absolute;
    background-color: transparent;
    width: 3.188rem;
    height: 2.688rem;
   
    @media (min-width: 1024px) {
    display: none;
  }
`
export const MobileMenu = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top:0;
    right:0;
    width: 80%;
    height: 100vh;
    z-index: 1000;
    border-top-left-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors["main-color"]};

    @media (min-width: 768px) {
      width: 60%;
  }
`
export const ChakraSwitchRoot = styled(Switch.Root)`
  position: relative;
  width: 6rem;
  height: 3rem; 
  margin-top: 1rem;
  margin-left: 2rem;
 
  @media (min-width: 1024px) {
    width: 5rem;
    margin: 0 auto;
  } 
   @media (min-width: 1440px) {
    width: 6.813rem;
    height: 2.813rem;
   }
  
`
export const ChakraSwitchControl = styled(Switch.Control)`
  width: 100%;
  height: 100%;
  background-color:${({ theme }) => theme.colors.switchBackground};
  color: ${({ theme }) => theme.colors['background/text']};
  position: relative;
  overflow: hidden;
`

export const ChackraSwitchIndicador = styled(Switch.Indicator)`
  width: 100%;
  height: 100%;
  svg{
    width: 2rem;
    height: 100%;
  }
  &[data-checked]{
    background-color: ${({ theme }) => theme.colors["main-color"]};
    color: ${({ theme }) => theme.colors["day-background"]};
    svg{
      margin-right: 1.5rem;
    }
  }

   @media (min-width: 1024px) {
      svg{
        width: 1.7rem;
      }
   }
`

export const NavLink = styled.a`
  font-size: 1.1rem;
  margin-bottom: 1.8rem;
  padding-left: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  @media (min-width: 1024px) {
    font-size: 0.875rem;
    padding-left: 0; 
  }
`
export const NavMobile = styled.nav`
    display: flex;
    flex-direction: column;
    color:  ${({ theme }) => theme.colors["day-background"]};
    margin-top: 5rem;
    padding-left: 0;
    Button:last-child{
      margin-top: 2rem;
      background-color: ${({ theme }) => theme.colors["secundary/hover"]};
    }
`

export const NavDesktop = styled.nav`
    display: none;

    @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 25rem;
      margin-top: 2rem;
      a{ 
        font-size: 0.8rem;
      }
    }
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto; 
      Button:first-child{
        width: 8rem;
        height: 3rem;
        margin: 0;
        padding: 0;
      }
    }
  }
   @media (min-width: 1440px){
    gap: 12rem;
     ul{
      width: 28rem;
      justify-content: space-between;
      a{
        font-size: 0.875rem;
      }
    }
    div{
      width: auto; 
      gap: 1rem; 
      button:first-child{
          width: 10.313rem;
          height: 2.813rem;
            margin: 0; 
            padding: 0;
        }
  }}
`
