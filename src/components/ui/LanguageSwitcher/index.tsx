import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation()
    const languages = [
        {code: 'en', name:'English', flag: 'GB'}, 
         {code: 'pt-BR', name:'Português', flag: 'BR'}
    ]
    return(
        <div>
            {languages.map((lang) => (
                <button 
                    key={lang.code} 
                    onClick={() => i18n.changeLanguage(lang.code)} 
                    disabled={i18n.language === lang.code}>
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                </button>
            ))}
        </div>
    )
}