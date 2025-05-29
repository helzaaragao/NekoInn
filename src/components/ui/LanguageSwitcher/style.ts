import styled from "styled-components";

export const LanguageButtonContainer = styled.button`
  display: flex;
  width: 5rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors['main-color']};
  font-size: 0.8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 220px;
  color:${({ theme }) => theme.colors['day-background']};

`