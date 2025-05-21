import styled from "styled-components";

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
      background-color: ${({ theme }) => theme.colors.componentBackground};
      padding: 2rem;
      border-radius: 40px;
    header{
        text-align: center;
        margin-top: 2rem; 
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
            font-size: 0.7rem;
            padding: 1rem;
        }
    }
    @media (min-width: 768px) {
        header{
            p{
                font-size: 0.85rem;
            }
        }
    }
      @media (min-width: 1440px) {
        padding: 4rem;
      
        margin-left: 1rem;
        margin-right: 1rem;
        border-radius: 40px;
        header{
            span{
                font-size: 0.75rem;
            }
            h2{
                font-size: 2.25rem;
            }
            p{
                font-size: 0.875rem;
            }
        }
      }
`
export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    div{
        border: 1px solid;
        height: 4rem;
        border-radius: 40px;
        padding-left: 2rem;
        padding-top: 0.6rem;
        gap: 0.2rem;
        display: flex;
        flex-direction: column;
        border-color: ${({ theme }) => theme.colors["border-gray"]};
     

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
        }
       
       input, select{
        background-color:${({ theme }) => theme.colors.componentBackground};
        width: 90%;
      
       }

      
    }
    button{
        background-color: ${({ theme }) => theme.colors["main-color"]};
        color: ${({ theme }) => theme.colors["day-background"]};
        height: 3.5rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: bold;
        margin-top: 1rem;
       }

           @media (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr; 
            gap: 1rem;
            padding: 2rem;
                & > div:nth-child(1),
                & > div:nth-child(2) {
                    grid-column: span 1; 
                    margin-bottom: 1rem;
                }
                 & > div:nth-child(n + 5):nth-child(-n + 7) {
                grid-column: 1 / -1; 
                  margin-top: 1rem;
                   margin-bottom: 1rem;
                    }
                    & > button:last-child {
                    grid-column: 1 / -1;
                    text-align: center;
                    justify-self: center;
                    width: 30%; 
                    margin-top: 1rem; 
                }

           }
             @media (min-width: 1440px) {
                div{
                    input, select{
                       background-color:${({ theme }) => theme.colors.componentBackground};
                    }
                }
             }
`
