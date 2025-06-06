import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors["black"]};
    color: ${({ theme }) => theme.colors["day-background"]};  
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    padding: 1.2rem;
     @media (min-width: 1024px) {
        border-top-right-radius: 120px;
        border-top-left-radius: 120px;
     }
     @media (min-width: 1440px) {
        padding: 2rem;
     }
`
export const Newsletter = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
       
       
        margin-top: 3rem;
            img{
            width: 5.313rem;
            height: 5.313rem; 
        }
        div{
            span{
                font-size: 0.625rem;
                color: ${({ theme }) => theme.colors["black-off"]};
                font-weight: bold;
                letter-spacing: 3px;
            }
            h4{
                font-size: 2rem;
                font-weight: 700;
            }
        }
    }
     @media (min-width: 768px) {
        align-items: center;
     }
         @media (min-width: 1024px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 2rem;
           
             > div{
                  margin-top: 0;
             }
            hr{
                display: none;
            }
         }
            @media (min-width: 1440px) {
                > div{
                    div{
                        span{
                            font-size: 0.75rem;
                        }
                        h4{
                            font-size: 2.25rem;
                        }
                    }
                }
            }
`
export const EmailNewsletter = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid ;
    height: 4rem;
    border-radius: 40px;
    margin: 1rem;
    padding: 1rem;
    border-color: ${({ theme }) => theme.colors["border-gray"]};
   
    > div{
        display: flex;
        flex-direction: column;
        label{
            font-size: 0.6rem;
            color: ${({ theme }) => theme.colors["black-off"]};
            letter-spacing: 1.5px;
            font-weight: bold;
        }
        input{
            border: none;
            outline: none;
            font-size: 1rem;
            background-color:  ${({ theme }) => theme.colors["black"]};
        }
       
    }
    div:last-child{
            background-color: ${({ theme }) => theme.colors["main-color"]};
            width: 3rem;
            height: 3rem;
            border-radius: 999px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

         @media (min-width: 768px) {
            width: 70%;
         }
          @media (min-width: 1024px) {
            width: 50%;
            justify-content: space-between;
            padding-left: 2rem;
            padding-right: 1rem;
          }

`
export const ContactInfos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        section{
            display: flex;
            gap: 1rem;
                div{
                background-color: ${({ theme }) => theme.colors["main-color"]};
                width: 3rem;
                height: 3rem;
                border-radius: 99px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            article{
                h5{
                    font-size: 1.25rem;
                    font-weight: bold;
                }
                p{
                    font-size: 0.875rem;
                }
            }
        }

        section:first-child{
            article{
                width: 60%;
            }
        }
        section:last-child{
            a{
                display: flex;
                gap: 1rem;
            }
        }
       
       
    }
    div:nth-child(2){
        h5{
            font-size: 1.25rem;
            font-weight: 700;
        }
        p{
            font-size: 0.875rem;
        }
        
    }

    div:nth-child(3){
        h5{
            font-size: 1.25rem;
            font-weight: 700;
        }
        figure{
            display: flex;
            gap: 1rem;
            div{
            background-color: ${({ theme }) => theme.colors["main-color"]};
                width: 3rem;
                height: 3rem;
                border-radius: 99px;
                display: flex;
                align-items: center;
                justify-content: center;
                svg{
                    color: ${({ theme }) => theme.colors["background/text"]};
                }
        }
        }
      
    }
    div:last-child{
       margin-bottom: 2rem;
        p{
            font-size:0.75rem;
            font-weight: bold;
        }
   
    }
     @media (min-width: 768px) {
       
    
     }
       @media (min-width: 1024px) {
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         padding: 1.5rem;
         div:last-child{
            grid-column: 2 / 4;
            letter-spacing: 3px; 
         }
       }
       @media (min-width: 1440px) {
        > div {
            gap: 2rem;
            section{
                article{
                    h5{
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }
       }
`
