import styled from "styled-components";
import Introducing from "../assets/pexels-tomas-ryant-2870510 1.png"

export const HomeContainer = styled.main`
    padding: 1rem;
    overflow-x: hidden; 
    @media (min-width: 768px) {
      padding: 2rem;
  }
 
`

export const HeroBanner = styled.div`
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

   @media (min-width: 768px) {
    > section:first-child{
      display: flex;
      flex-direction: column;
      align-items: center;
      article{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
          font-size: 0.85rem;
        }
        button{
          width: 50%;
        }
      }
      aside{
        width: 60%;
        figure{
          right: 19%;
        }
      
      }
    }
   > section:nth-child(2){
    figure{
      > div:first-child{
        img:last-child{
            border-bottom-left-radius: 300px;
         }
      }
     }
   }
   }

   @media (min-width: 1024px) {
     display: flex;
     flex-direction: row;
     width: 100%;
     text-align: start;
     align-items: center;
     gap: 5rem;
   

     > section:first-child{
      width: 45%;
      align-items: start;
      article{
        display: flex;
        flex-direction: column;
        align-items: start;
        button{
          width: 12.5rem;
        }
      }
      aside{
        width: 21.063rem;
        figure{
          right: 61%;

        }
      }
     }
     > section:nth-child(2){
      width: 50%;
      margin-top: 2rem;
     figure{
      > div:first-child{
        img:last-child{
            border-bottom-left-radius: 0px;
         }
      }
     }

     }
  }

  @media (min-width: 1440px) {
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    > section:first-child{
      article{
        gap: 2rem;
        span{
          font-size: 0.875rem;
        }
        h1{
          font-size: 2.875rem;
        }
        p{
          font-size: 0.875rem;
        }
        button{
          margin-top: 1rem;
        }
      }
      aside{
        margin-top: 5rem;
        figure{
          right: 73%;
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

@media (min-width: 768px) { 
  ${props => props.$variant === 'primary' && `
    width: 250px;
    left: 60%;
    top: 65%;
  `}
 
 ${props => props.$variant === 'secundary' && `
    width: 250px;
    right: 60%;
    bottom: 65%;
  `} 
}

@media (min-width: 1024px) {
  ${props => props.$variant === 'primary' && `
    left: 50%;
    top: 60%;
    transform: scaleX(-1);
  `}
 
 ${props => props.$variant === 'secundary' && `
   
    right: 55%;
    bottom: 55%;
  `}
}
@media (min-width: 1440px) {
  ${props => props.$variant === 'primary' && `
    width: 300px;
    left: 55%;
    top: 60%;
    transform: scaleX(-1);
  `}
 
 ${props => props.$variant === 'secundary' && `
    width: 300px;
    right: 60%;
    bottom: 55%;
  `}
}
 
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

  @media (min-width: 768px) { 
    img {
      width: 6.5rem;
    }
    img:nth-child(1) {
      transform: translateX(-225%) translateY(-50%);
    }
    img:nth-child(2) {
      transform: translateX(-215%);
    }
    img:nth-child(3) {
      transform: translateY(90%) translateX(-190%);
    }
    img:nth-child(4) {
      transform:  translateY(200%) translateX(-40%);
    }
  }
  @media (min-width: 1024px) {
    img:nth-child(1) {
      transform: translateX(-170%) translateY(-20%);
    }
     img:nth-child(2) {
      transform: translateX(-190%);
    }
    img:nth-child(3) {
      transform: translateY(100%) translateX(-160%);
    }
      img:nth-child(4) {
      transform:  translateY(140%);
    }
  }
  @media (min-width: 1440px) {
    img {
      width: 8.125rem;
    }
       img:nth-child(1) {
          transform: translateX(-190%) translateY(-5%);
       }
        img:nth-child(2) {
             transform: translateX(-200%) translateY(20%);
           }
        img:nth-child(3) {
      transform: translateY(110%) translateX(-160%);
    }
     img:nth-child(4) {
      transform:  translateY(140%) translateX(-20%);
    }
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
        background-color: ${({ theme }) => theme.colors["background/text"]};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        div{
          width: 4rem;
          height: 4rem;
          border-radius: 50%; 
          flex-shrink: 0;
          background-color: ${({ theme }) => theme.colors["main-color"]};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 1rem;
          svg {
            width: 2rem;  
            height: 2rem;
          }
         
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
        background-color: ${({ theme }) => theme.colors["main-color"]};
        div{
          width: 4rem;
          height: 4rem;
          border-radius: 50%; 
          flex-shrink: 0;
          background-color: ${({ theme }) => theme.colors["background/text"]};
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 2.5rem;  
            height: 2.5rem;
          }
        }
        
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
    >section:nth-child(3){
        height: 30%;
        background-color: ${({ theme }) => theme.colors["main-color"]};
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
              height: 4rem;
              border-radius: 50%; 
              flex-shrink: 0;
            background-color: ${({ theme }) => theme.colors["background/text"]};
           
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
            width: 2.5rem;  
            height: 2.5rem;
          }
          }
          
          p{
              font-size: 1.2rem;
              font-weight: 600;
          }
        }
    }
    @media (min-width: 768px) { 
      width: 75%;
      margin: 0 auto; 
    }
     @media (min-width: 1024px) {
      flex-direction: row;
      width: 100%;
      height: 10rem;
      position: relative;

      > section:first-child{
        border-top-left-radius: 40px;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 40px;
        width: 45%;
        height: 100%;
        position: absolute;
        padding-right: 5rem;

      
        
      }
         > section:nth-child(2){
           width: 30%;
           height: 100%;
           position: relative;
           left: 37%;
           border-top-left-radius: 90px;
           border-bottom-left-radius: 90px;
         }

      >section:nth-child(3){
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 40px;
        border-top-right-radius: 40px;
        
         width: 30%;
        height: 100%;
        position: relative;
        left: 37%;
       
         
      }
     }
     @media (min-width: 1440px) {
         > section:first-child{
            padding-right: 10rem;
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
      width: 50%;
    }
  }
  figure{
    img:first-child{
      position: absolute;
      width: 12.5rem;
      right: 17%; 
    }
    img:last-child{
      position: relative;
    }
  }
   @media (min-width: 768px) { 
      article{
        p{
           font-size: 0.85rem;
        }
      }
      figure{
         img:first-child{
          width: 14.063rem;
          right: 28%;
          top: 20%;
          bottom: 1%;
        
         }
      }
   }
   @media (min-width: 1024px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    article{
      width: 50%;
      text-align: start;
      align-items: flex-start;
      justify-content: start;
      padding: 2rem;
      gap: 1rem;
      p{
        padding: 0rem;
        font-size: 0.875rem;
      }
      Button{
        width: 45%;
        height: 2.813rem;
        margin-left: 0;
        margin-top: 2rem;
      }
    }
    figure{
      width: 50%;
      position: relative;
      img:first-child{
         width: 15.625rem;
         right: 10%;
         
      }
      img:last-child{
        width: 100%;
        height: 100%;
      }
    }
   }
   @media (min-width: 1440px) {
    article{
      span{
        font-size: 0.75rem;
      }
      h2{
        font-size: 2.25rem;
      }
      p{
        font-size: 0.875rem;
      }
      Button{
        width: 25%;
        font-size: 0.75rem;
        margin-top: 3rem;
      }
    }
    figure{
      img:first-child{
        right: 20%;
         top: 15%;
      }
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
  @media (min-width: 768px) { 
    display: flex;
    flex-direction: column;
    align-items: center;
  }
   @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    figure{
      width: 50%;
      padding: 1rem;
    }
    article{
      width: 50%;
      padding: 2rem;
      align-items: start;
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
  @media (min-width: 768px) { 
    width: 80%;
    margin: 3rem auto; 
    > div{
      div{
        p{
          width: 100%;
}
      }
    
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    margin: 0;
    width: 100%;
    align-items: center;
     gap: 1rem;
    article{
      width: 18rem;
      height: 35rem;
    }
     > div{
       gap: 1rem;
      flex-direction: row;
      width: 100%;
    
      div {
        width: 33.3%;
         img{ 
       
         }
          h4{
        font-size: 1rem;
      }
      }
     }
  }
`




