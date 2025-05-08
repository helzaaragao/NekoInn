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
        img{
            width: 100%;
            height: 25rem;
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
    }

   
`