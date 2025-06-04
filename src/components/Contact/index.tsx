import { useState } from "react";
import { ContactContainer, FormContact } from "./style"
import emailjs from '@emailjs/browser'
import {format, isBefore, parseISO} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import { useTranslation } from "react-i18next";


interface FormData{
    name: string,
    email: string, 
    phone: string, 
    catName: string, 
    scredullingDate: Date | null, 
    numberPets: number, 
    purrPlan: string
}

const emailjsConfig = {
    serviceId: import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID || '',
    templateIdAdm: import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN || '',
    templateIdUser: import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID_USER || '',
    userId: import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID || ''
}

const MIN_DATE = new Date(2025, 4, 1);

export function Contact(){
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email:'', 
        phone: '', 
        catName: '', 
        scredullingDate: null, 
        numberPets: 1, 
        purrPlan: ''
    })

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitSuccess, setSubmitSuccess] = useState(false);
      const [submitError, setSubmitError] = useState('');
      const [isEmailSent, setIsEmailSent] = useState(false)
      const { t } = useTranslation('components'); 


      const formattedDate = formData.scredullingDate ? format(formData.scredullingDate, "dd 'de' MMM 'de' yyyy", {locale: ptBR}) : ''


        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            if(name === 'numberPets'){
                return{
                    ...prev,
                    [name]: Number(value)
                }
            }
            if(name === 'scredullingDate'){
                const dateValue = value ? parseISO(value) : null
                return {
                    ...prev, 
                    [name]: dateValue
                }
            }
            return {
                ...prev,
                [name]: value
            }
        })
  };

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
     

         if (isSubmitting || isEmailSent) return;

         if(formData.scredullingDate && isBefore(formData.scredullingDate, MIN_DATE)){
            setSubmitError('Por favor, selecione uma data a partir de maio de 2025')
            return;
         }
            setIsSubmitting(true);
            setSubmitError('');

        try{
            const emailData = {
                ...formData,
                scredullingDate: formattedDate,
                numberPets: formData.numberPets.toString(),
            }
            await emailjs.send(
                emailjsConfig.serviceId,
                emailjsConfig.templateIdAdm,
                {
                   ...emailData, 
                   to_email: 'helza.batista.aragao@gmail.com',
                   subject: `Novo agendamento no Neko Inn - ${formData.name}`
                },
                emailjsConfig.userId
            );
            await emailjs.send(
                    emailjsConfig.serviceId,
                    emailjsConfig.templateIdUser,
                  {
                    ...emailData,
                    to_email: formData.email,
                    subject: 'Auto-reply: Agendamento concluído! | Neko Inn'
                  },
                   emailjsConfig.userId
            )
            setIsEmailSent(true);
            setSubmitSuccess(true);
        } catch(error){
             console.error('Erro ao enviar email:', error);
            setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            setIsEmailSent(false);
        } finally {
            setIsSubmitting(false);
        }
  };
  if(submitSuccess){
    return(
         <ContactContainer>
                <header>
                    <span>{t('Contact.confirmation-span')}</span>
                    <h2>{t('Contact.confirmation-title')}</h2>
                    <p>{t('Contact.confirmation-descriptionEmail')} <strong>{formData.email}</strong> {t('Contact.confirmation-descriptionPlan')} <strong>{formData.purrPlan}</strong> {t('Contact.confirmation-descriptionDate')} <strong>{formattedDate}</strong>.</p>
                </header>
            </ContactContainer>
    )
  }
    return(
        <ContactContainer>
        <header>
            <span>{t('Contact.header-span')}</span>
                <h2>{t('Contact.header-title')}</h2>
                <p>{t('Contact.header-description')}</p>
                {submitError && <p className="error-message">{submitError}</p>}
        </header>
        <FormContact onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">{t('Contact.label-name')}</label>
                <input type="text" id="name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="email">{t('Contact.label-email')}</label>
                <input type="email" id="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="phone">{t('Contact.label-phone')}</label>
                <input type="tel" id="phone" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="catName">{t('Contact.label-catName')}</label>
                <input type="text" id="catName" name="catName" value={formData.catName} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="scredullingDate">{t('Contact.label-date')}</label>
                <input type="date" id="scredullingDate" name="scredullingDate" value={formData.scredullingDate ? format(formData.scredullingDate, 'yyyy-MM-dd') : ''} onChange={handleChange} min={format(MIN_DATE, 'yyyy-MM-dd')} required />
            </div>
            <div>
                <label htmlFor="numberPets">{t('Contact.label-numberPets')}</label>
                <input type="number" id="numberPets" name="numberPets" value={formData.numberPets} onChange={handleChange} min="1" required />
            </div>
            <div>
                <label htmlFor="purrPlan">{t('Contact.label-purrPlan')}</label>
                <select name="purrPlan" id="purrPlan" value={formData.purrPlan} onChange={handleChange} required>
                    <option defaultValue="selecione">{t('Contact.label-pick')}</option>
                    <option value="Purr Ducal">Purr Ducal</option>
                    <option value="Purr Imperial">Purr Imperial</option>
                    <option value="Purr Royal">Purr Royal</option>
                </select>
            </div>
            <button type="submit" disabled={isSubmitting || isEmailSent}> {isSubmitting ? t('Contact.form-sending', 'Sending...') : t('Contact.form-bookNow', 'Book Now')}</button>
            </FormContact>     
        </ContactContainer>
    )
}