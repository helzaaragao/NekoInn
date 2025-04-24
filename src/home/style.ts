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
        display: flex;
        flex-direction: column;
        gap: 1rem;
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
    top: 50%;  /* Centraliza verticalmente */
    left: 50%;  /* Centraliza horizontalmente */
    transform: translate(-50%, -50%);
    z-index: 3;
    width: 200px;  /* Largura do arco */
    height: 100px;  /* Altura do arco */
  
  /* Posicionamento dos gatos em forma de Lua Crescente */
  img {
    position: absolute;
    width: 4.125rem;
  }

  /* Gato 1: Topo do arco (ponto mais alto) */
  img:nth-child(1) {
    bottom: 90%;
    left: 0;
    transform: translateX(-130%);
  }

  /* Gato 2: Meio do arco (lado esquerdo) */
  img:nth-child(2) {
    top: 50%;
    left: 5%;
    transform: translateX(-130%);
  }

  /* Gato 3: Meio do arco (lado direito) */
  img:nth-child(3) {
    top: 100%;
    left: 30%;
    transform: translateY(40%) translateX(-120%);
    
  }

  /* Gato 4: Parte inferior (opcional, se quiser mais elementos) */
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
        gap: 1rem;
        p{
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
    > section:nth-child(2){
        height: 30%;
        background-color: ${({ theme }) => theme.colors["secundary/hover"]};
    }
    >section:nth-child(3){
        height: 30%;
        background-color: ${({ theme }) => theme.colors["secundary/hover"]};
    }
`

