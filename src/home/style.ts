import styled from "styled-components";
import Introducing from "../assets/pexels-tomas-ryant-2870510 1.png"

// interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
//     $variant?: 'vector' | 'mainHero' | 'cat';
//   }

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
    margin-top: 2rem;
     figure{
        width: 100%;
       
     
        
        
       > div:first-child{
        
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

         img:last-child{
            position: relative;
            z-index: 2;
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
    width: 300px;
    left: 17%;
    top: 30%;
    
  `}
 
 ${props => props.$variant === 'secundary' && `
    width: 300px;
    right: 40%;
    bottom: 20%;
  `}
 
`

