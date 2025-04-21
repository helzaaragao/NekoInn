import styled from "styled-components";

export const ButtonContainer = styled.div`
 
  button{ 
    width: 10.313rem;
    height: 4.063rem;
    background-color: ${({ theme }) => theme.colors["secundary/hover"]};
    font-weight: bold;
    font-size: 0.7rem;
    border-radius: 220px;
  }
`
