import { DefaultTheme } from "styled-components/dist/types";
import { ButtonContainer } from "./style";
import { useTranslation } from "react-i18next";

interface ButtonProps {
    bgColor?: keyof DefaultTheme['colors'] | string;
  }

export function Button({bgColor}:ButtonProps){
       const { t } = useTranslation('components'); 
    return(
        <ButtonContainer $bgColor={bgColor}>
              <button type='submit'>{t('Header.button')}</button>
        </ButtonContainer>
    )
}