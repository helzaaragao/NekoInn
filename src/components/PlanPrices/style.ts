import styled from "styled-components";

export const PricesContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (min-width: 768px) {
        align-items: center;
    }
`
export const PricesHeader = styled.header`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span{
        font-size: 0.625rem;
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
    @media (min-width: 768px) {
         p{
        font-size: 0.85rem;
    }
    }
     @media (min-width: 1024px) {
       padding: 1rem;
     }
`
export const PricesSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    article:first-child{
        background-color: ${({ theme }) => theme.colors["white"]};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 40px;
        padding: 2rem;
        div{
            position: relative;
            span{
                color:  ${({ theme }) => theme.colors["main-color"]};
                font-weight: bold;
                letter-spacing: 3px;
            }

            img{
                position: absolute;
                top: 1%;
                right: 5%;
            }
            h4{
                margin-top: 2rem;
                font-size: 2.5rem;
                font-weight: 800;
                small{
                    font-size: 0.7rem;
                }
            }

        

        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 0.875rem;
            }
       
         
        }
        button{ 
                width: 100%;
                height: 3.5rem;
                background-color: ${({ theme }) => theme.colors["main-color"]};
                color:  ${({ theme }) => theme.colors["day-background"]};
                border-radius: 220px;
                font-size: 0.7rem;
                font-weight: bold;
            }
    }
    article:nth-child(2){
        background-color: ${({ theme }) => theme.colors["main-color"]};
        color: ${({ theme }) => theme.colors["day-background"]};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 40px;
        padding: 2rem;
        div{
            position: relative;
            span{
                font-size: 0.8rem;
                font-weight: bold;
                letter-spacing: 3px;
            }

            img{
                position: absolute;
                top: 1%;
                right: 5%;
            }
            h4{
                margin-top: 2rem;
                font-size: 2.5rem;
                font-weight: 800;
                small{
                    font-size: 0.7rem;
                }
            }

        

        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 0.875rem;
            }
       
         
        }
        button{ 
                width: 100%;
                height: 3.5rem;
                background-color: ${({ theme }) => theme.colors["secundary/hover"]};
               
                border-radius: 220px;
                font-size: 0.7rem;
                font-weight: bold;
            }
    
    }
    article:nth-child(3){
        background-color: ${({ theme }) => theme.colors["white"]};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-radius: 40px;
        padding: 2rem;
        div{
            position: relative;
            span{
                color:  ${({ theme }) => theme.colors["main-color"]};
                font-weight: bold;
                letter-spacing: 3px;
            }

            img{
                position: absolute;
                top: 1%;
                right: 5%;
            }
            h4{
                margin-top: 2rem;
                font-size: 2.5rem;
                font-weight: 800;
                small{
                    font-size: 0.7rem;
                }
            }

        

        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            li{
                display: flex;
                align-items: center;
                gap: 0.8rem;
                font-size: 0.875rem;
            }
       
         
        }
        button{ 
                width: 100%;
                height: 3.5rem;
                background-color: ${({ theme }) => theme.colors["main-color"]};
                color:  ${({ theme }) => theme.colors["day-background"]};
                border-radius: 220px;
                font-size: 0.7rem;
                font-weight: bold;
            }
    }
    @media (min-width: 768px) {
        gap: 2rem;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
     }
`