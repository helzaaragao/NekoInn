import styled from "styled-components";

export const ButtonContainer = styled.div<{ $bgColor?: string }>`
  width: 100%;
  padding: 0 1rem; 
 
  button{ 
    width: 100%;
    height: 4.063rem;
    background-color: ${({ theme, $bgColor }) => 
      $bgColor || theme.colors["main-color"]};
    color: ${({ theme }) => theme.colors["day-background"]};
    font-weight: bold;
    font-size: 0.7rem;
    border-radius: 220px;
    margin: 0 auto;
    display: block;

    @media (min-width: 768px) {
    button {
      max-width: 100%;
      border-radius: 0; 
    }
  }
  }
`
