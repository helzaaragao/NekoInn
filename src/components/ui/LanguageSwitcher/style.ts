import styled from "styled-components";

export const LanguageButtonContainer = styled.button`
  display: flex;
  width: 8rem;
  height: 2.813rem;
  margin-left: 2.5rem;
  background-color: ${({ theme }) => theme.colors['main-color']};
  border: 2px solid;
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 220px;
  color:${({ theme }) => theme.colors['day-background']};

   @media (min-width: 1024px) {
    width: 4rem;
    margin-left: 0rem;
    border: none;
   }
  @media (min-width: 1440px){
    width: 5rem;
    padding: 0; 
    border: none;
    margin-left: 0;
    margin-right: 0;
  }

`