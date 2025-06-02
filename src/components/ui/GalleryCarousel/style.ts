import styled from "styled-components";

export const ImagesCarouselContainer = styled.section`
    width: 100%;
`

export const ImagesCarouselMobile = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 5rem;

   > button {
        background-color: ${({ theme }) => theme.colors["main-color"]};
        color: ${({ theme }) => theme.colors["day-background"]};
        width: 3rem;
        height: 3rem;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:first-child{
        position: absolute;
        top: 40%;
        left: -4%;

        
       
    }

    div:nth-child(2){
        overflow: hidden;
        img{
            width: 100%;
            height: 25rem;
               transition: transform 0.3s ease;
        }
     
    }

    div:nth-child(3){
        position: absolute;
        background-color: ${({ theme }) => theme.colors["main-color"]};
        width: 7rem;
        height: 7rem;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 4.438rem;
            height: 4.438rem;
        }
        top: 80%;
        right: 15%;
    }

    button:nth-child(4){
        position: absolute;
        top: 40%;
        right: -4%;
    }
    @media (min-width: 768px) {
    button:first-child{
        width: 4rem;
        height: 4rem;
        svg{
            width: 2.5rem;
            height: 2.5rem;
        }
        left: 4%;
    }
        div:nth-child(2){
            img{
                height: 40rem; 
            }
        }
        div:nth-child(3){
            width: 8rem;
            height: 8rem;
                img{
                width: 5rem;
                height: 5rem;
                }
                top: 90%;
                right: 15%;
        }
    button:nth-child(4){
        width: 4rem;
        height: 4rem;
        svg{
            width: 2.5rem;
            height: 2.5rem;
        }
        right: 5%;
    }
     > div:last-child { 
    position: absolute;
    bottom: -50px; 
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    z-index: 20; 
    gap: 8px; 
  }
    }
    

   
`
export const DesktopImagesCarousel = styled.div`
 @media (min-width: 1024px) {
    display: flex;
    margin-top: 3rem;
    margin-bottom: 5rem;
    gap: 1rem;
    > div{
    position: relative;
    width: 100%;
    figure{
        position: relative;
        display: inline-block;
        img:first-child{
          display: block;
          width: 100%;
          height: auto;
        }
        div:last-child{
          position: absolute;
          top: 75%;
          right: 10%;
          width: 4rem; 
          height: 4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background-color: ${({ theme }) => theme.colors["main-color"]};
          img{
            width: 80%;
          }
        }
    }

    }
}
@media (min-width: 1440px) {
    padding: 2rem;
    > div{
        figure{
              div:last-child{
                 top: 85%;
              }
        }
    }
}
`