import { useTranslation } from "react-i18next";
import { LanguageButtonContainer } from "./style";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation()
    const languages = [
        {code: 'en', name:'English', flag: 'en'}, 
         {code: 'pt-BR', name:'Português', flag: 'pt-BR'}
    ]
    return(
        <LanguageButtonContainer>
            {languages.map((lang) => (
                <button 
                    key={lang.code} 
                    onClick={() => i18n.changeLanguage(lang.code)} 
                    disabled={i18n.language === lang.code}>
                        <span>{lang.flag}</span>
                </button>
            ))}
        </LanguageButtonContainer>
    )
}