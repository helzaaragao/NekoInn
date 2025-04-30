import styled from "styled-components";

export const FeedbacksContainer = styled.div`
    header{ 
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      span{
        font-size: 0.7rem;
        color: ${({ theme }) => theme.colors["black-off"]};
        font-weight: bold;
        letter-spacing: 3px;
      }
      h2{
        font-size: 2rem;
        font-weight: 700;
      }
     p{
      font-size: 0.75rem;
     }
    }
`

export const FeedbacksCarousel = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > button:first-child{
    position: absolute;
        top: 40%;
        left: -4%;
        background-color: ${({ theme }) => theme.colors["main-color"]};
        color: ${({ theme }) => theme.colors["day-background"]};
        border-radius: 99px;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
  }


  button:nth-child(3){
    position: absolute;
        top: 40%;
        right: -4%;
        background-color: ${({ theme }) => theme.colors["main-color"]};
        color: ${({ theme }) => theme.colors["day-background"]};
        border-radius: 99px;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
  }
`;

export const SlidesContainer = styled.section<{ $isDesktop: boolean }>`
   display: ${({ $isDesktop }) => ($isDesktop ? 'grid' : 'block')};
   padding: 2rem;
`
export const Slide = styled.section<{$isDesktop: boolean, $isActive: boolean }>`
   display: ${({ $isDesktop, $isActive }) => ($isDesktop || $isActive ? 'block' : 'none')};
   height: 28.313rem;
   > svg{
    color: ${({ theme }) => theme.colors["main-color"]};
    font-size: 4.625rem;
    margin-bottom: 0.2rem;
   }
   p{
    font-size: 0.875rem;
    padding: 0.5rem;
   }

   figure{
    background-color: ${({ theme }) => theme.colors["main-color"]};
    border-radius: 70%;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
    
     
    }
   }
`
