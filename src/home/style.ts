import styled from "styled-components";
import Introducing from "../assets/pexels-tomas-ryant-2870510 1.png"

export const HomeContainer = styled.main`
    padding: 1rem;
 
`

export const MainBanner = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;

  > section:first-child{
    article {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        span{
            font-size: 0.625rem;
            color: ${({ theme }) => theme.colors["black-off"]};
            font-weight: bold;
            letter-spacing: 3px;
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
    aside{
        width: 100%;
        height: 7.625rem;
        margin-top: 3rem;
        color: ${({ theme }) => theme.colors["day-background"]};
        background-image: url(${Introducing});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 1.6rem;
       

        span{
            letter-spacing: 0.4rem;
            font-weight: 600;
        }
        p {
            font-size: 1rem;
            font-weight: 700;
        }

        figure{
            width: 4rem;
            height: 4rem;
            background-color:  ${({ theme }) => theme.colors["main-color"]};
            border-radius: 99px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 0;
            
            
        }
        
    }
   }

   > section:nth-child(2){
    margin-top: 5rem;
    margin-bottom: 5rem;
     figure{
        width: 100%;
       position: relative;
     
        
        
       > div:first-child{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

         img:last-child{
            position: relative;
            z-index: 2;
            border-bottom-left-radius: 225px;
         }
        }
     }
   }
`
export const Vectors = styled.img<{$variant: 'primary' | 'secundary'}>`
   max-width: 100%;
   height: auto;
   position: absolute;
   z-index: 1;
   display: block;
  
  ${props => props.$variant === 'primary' && `
    width: 200px;
    // right: 40%;
    left: 45%;
    top: 62%;
    transform: scaleX(-1);
  `}
 
 ${props => props.$variant === 'secundary' && `
    width: 200px;
    right: 50%;
    bottom: 50%;
  `}
 
`

export const Cats = styled.div`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 200px;  
    height: 100px; 
  
  img {
    position: absolute;
    width: 4.125rem;
  }

  img:nth-child(1) {
    bottom: 90%;
    left: 0;
    transform: translateX(-130%);
  }

  img:nth-child(2) {
    top: 50%;
    left: 5%;
    transform: translateX(-130%);
  }

  img:nth-child(3) {
    top: 100%;
    left: 30%;
    transform: translateY(40%) translateX(-120%);
    
  }

  img:nth-child(4) {
    top: 70%;
    left: 50%;
    transform:  translateY(160%) translateX(-30%);
  }
`;

export const Address = styled.address`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 25rem;
    color: ${({ theme }) => theme.colors["day-background"]};
    

   > section:first-child{
        height: 40%;
        background-color: ${({ theme }) => theme.colors["main-color"]};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        div{
          width: 9rem;
          background-color: ${({ theme }) => theme.colors["secundary/hover"]};
          border-radius: 60px;
          height: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
        }
        
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }

    }
    > section:nth-child(2){
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1.8rem;
        padding-left: 1.1rem;
        /* border-top-left-radius: 40px;
        border-top-right-radius: 40px; */
        background-color: ${({ theme }) => theme.colors["secundary/hover"]};
        div{
          width: 4rem;
          background-color: ${({ theme }) => theme.colors["main-color"]};
          border-radius: 60px;
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
    >section:nth-child(3){
        height: 30%;
        background-color: ${({ theme }) => theme.colors["secundary/hover"]};
        display: flex;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        a{
          display: flex;
          align-items: center;
          gap: 1.8rem;
          padding-left: 1.1rem;

            div{
            width: 4rem;
            background-color: ${({ theme }) => theme.colors["main-color"]};
            border-radius: 60px;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          p{
              font-size: 1.2rem;
              font-weight: 600;
          }
        }
    }
`
export const About = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  article{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2.5rem;
    span{
      font-size: 0.625rem;
      color: ${({ theme }) => theme.colors["black-off"]};
      margin-bottom: 0.5rem;
      font-weight: bold;
      letter-spacing: 3px;
    }
    h2{
      font-size: 2rem;
      font-weight: 700;
    }
    p{
      font-size: 0.7rem;
      text-align: start;
      padding: 2rem;
    }
    Button{
      color: ${({ theme }) => theme.colors["day-background"]};
      background-color: ${({ theme }) => theme.colors["main-color"]};
    }
  }
  figure{
    img:first-child{
      position: absolute;
      width: 200px;
      right: 17%; 
    }
    img:last-child{
      position: relative;
    }
  }
`
export const Rooms = styled.section`
figure{
  margin-top: 4rem;
}
  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    text-align: center;
    > span{
      font-size: 0.7rem;
      color: ${({ theme }) => theme.colors["black-off"]};
      letter-spacing: 3px;
      font-weight: bold;
      margin-top: 2rem;
    }
    h2{
      font-size: 2rem;
      font-weight: 700;
    }
  }
`
export const PurrCare = styled.section`
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  article{
    width: 100%;
    padding: 5rem 5rem 3rem 2rem;
    background-color: ${({ theme }) => theme.colors["main-color"]};
    border-radius: 40px;
   
    span{
      font-size: 0.7rem;
      color: ${({ theme }) => theme.colors["black"]};
      letter-spacing: 3px;
      font-weight: bold;
    }
    h2{
      font-size: 2rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors["day-background"]};
      margin-top: 1rem;
    }
    p{
      margin-top: 1rem;
      color: ${({ theme }) => theme.colors["day-background"]};
      font-size: 0.875rem;
    }
    button{
      display: flex; 
      align-items: center;
      padding-left: 1rem;
      gap: 3rem;
      width:  14rem;
      height: 3rem;
      background-color: ${({ theme }) => theme.colors["secundary/hover"]};
      color:${({ theme }) => theme.colors["day-background"]};
      font-size: 0.75rem;
      border-radius: 220px;
      margin-top: 2rem;
      font-weight: bold;
    }
  }
 > div{
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
      h4{
        font-size: 1.5rem;
        font-weight: bold;
      }
      p{
       font-size: 0.875rem;
       width: 80%;
      }
    }
    
  }
`



