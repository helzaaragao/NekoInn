import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors["black"]};
    color: ${({ theme }) => theme.colors["day-background"]};  
    width: 100vw;
     position: relative;
     left: 0;
    right: 0;
   top: 0;
  margin-left: calc(-50vw + 50%); 
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;

  
  & > * {
    margin-left: auto;
    margin-right: auto;
    padding-bottom: none;
    max-width: 100%;
  }
`
export const Newsletter = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  
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
`
export const EmailNewsletter = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ;
    height: 4rem;
    border-radius: 40px;
   margin: 1rem;
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

`
export const ContactInfos = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        svg{
            background-color: ${({ theme }) => theme.colors["main-color"]};
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 20px;
        }
    }
`
