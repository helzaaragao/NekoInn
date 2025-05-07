import { DefaultTheme } from "styled-components/dist/types";
import { ButtonContainer } from "./style";

interface ButtonProps {
    bgColor?: keyof DefaultTheme['colors'] | string;
  }

export function Button({bgColor}:ButtonProps){
    return(
        <ButtonContainer $bgColor={bgColor}>
              <button type='submit'>BOOK NOW</button>
        </ButtonContainer>
    )
}