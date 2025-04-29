import styled from "styled-components";

export const ImagesCarouselContainer = styled.section`
    /* display: flex;
    width: 100%; */
`

export const ImagesCarouselMobile = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

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
        left: 5%;
       
    }
    button:nth-child(2){
        position: absolute;
        top: 50%;
        left: 5%;
    }
   
`