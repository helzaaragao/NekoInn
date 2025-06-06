import styled from "styled-components";

export const FeedbacksContainer = styled.div`
    header{ 
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
      @media (min-width: 768px) {
       header{
        p{
           font-size: 0.85rem;
        }
       }
      }
       @media (min-width: 1024px) {
        header{
          padding: 2rem;
        }
     }
      @media (min-width: 1440px) {
        header{
          span{
            font-size: 0.75rem;
          }
          h2{
            font-size: 2.5rem;
          }
          p{
            font-size: 0.875rem;
          }
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
   @media (min-width: 768px) {
     > button:first-child{
      width: 3rem;
      height: 3rem;
      left: 1%;
      svg{
        width: 2.5rem;
        height: 2.5rem;
      }
     }
     button:nth-child(3){
      width: 3rem;
      height: 3rem;
      right: 1%;
       svg{
        width: 2.5rem;
        height: 2.5rem;
      }
     }
   }
    @media (min-width: 1024px) {
        > button:first-child{
          left: -1%;
        }
     button:nth-child(3){
      right: -1%;
    }
    }
    @media (min-width: 1440px) {
       > button:first-child{
        left: 0%;
       }
            button:nth-child(3){
              right: 0%;
            }
  }
`;

export const SlidesContainer = styled.section<{ $isDesktop: boolean }>`
   display: ${({ $isDesktop }) => ($isDesktop ? 'flex' : 'block')};
   //mudei de grid para flex
   padding: 2rem;
    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 0.5rem;
     }
      @media (min-width: 1440px) {
        gap: 1rem;
      }
     
`
export const Slide = styled.section<{$isDesktop: boolean, $isActive: boolean }>`
   display: ${({ $isDesktop, $isActive }) => ($isDesktop || $isActive ? 'block' : 'none')};
   height: 28.313rem;
   background-color:  ${({ theme }) => theme.colors.componentBackground};
    border-radius: 20px;
    padding: 1rem;
   > svg{
    color: ${({ theme }) => theme.colors["main-color"]};
    font-size: 4.625rem;
    margin-bottom: 0.2rem;
   }
   p{
    font-size: 0.875rem;
    padding: 0.5rem;
   }

   div{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 0.5rem;
    
      figure{
        background-color: ${({ theme }) => theme.colors["main-color"]};
        border-radius: 70%;
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p{
        font-size: 1rem;
        font-weight: bold;
      }
   }

  
   @media (min-width: 768px) {
    padding: 2rem;
    height: 20rem;
    margin-bottom: 2rem;
   }
    @media (min-width: 1024px) {
      margin-bottom: 3rem;
      height: auto;
       > svg{
        margin-bottom: 1rem;
       }
       p{
        margin-bottom: 1rem;
       }
       figure{
        margin-bottom: 2rem;
       }
    }
     @media (min-width: 1440px) {
      border-radius: 40px;
     }
    
`
