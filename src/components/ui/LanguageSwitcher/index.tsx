import { useTranslation } from "react-i18next";
import { LanguageButtonContainer } from "./style";
// import { Button } from "@chakra-ui/react"


export const LanguageSwitcher = () => {
    const {i18n} = useTranslation()
  const isPortuguese = i18n.language === 'pt-BR';
    return(
       <LanguageButtonContainer
  onClick={() => i18n.changeLanguage(isPortuguese ? 'en' : 'pt-BR')}
>
  {isPortuguese ? 'EN' : 'pt-BR'}
</LanguageButtonContainer>
    )
}