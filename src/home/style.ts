import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 1rem;
 
`

export const MainBanner = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;

  > section:first-child{
    article {

        span{
            font-size: 0.625rem;
            color: ${({ theme }) => theme.colors["black-off"]};
        }
        h1{
            font-size: 1.9rem;
            font-weight: bold;
        }
        p{
            font-size: 0.75rem;
        }

        button{
            background-color: ${({ theme }) => theme.colors["main-color"]};
            color:  ${({ theme }) => theme.colors["day-background"]};
            width: 100%;
            font-weight: bold;
            font-size: 0.75rem;
            height: 3rem;
            border-radius: 220px;
        }
        
    }
   }
`