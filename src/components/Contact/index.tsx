import { useState } from "react";
import { ContactContainer, FormContact } from "./style"
import emailjs from '@emailjs/browser'
import {format, isBefore, parseISO} from 'date-fns'
import {ptBR} from 'date-fns/locale'

// Frase de erro para quando ocorrer do usuário colocar algo errado de proposito na data por exemplo

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
            return
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
            setSubmitSuccess(true)
        } catch(error){
             console.error('Erro ao enviar email:', error);
            setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
  };
  if(submitSuccess){
    return(
         <ContactContainer>
                <header>
                    <span>AGENDAMENTO CONFIRMADO!</span>
                    <h2>Obrigado por reservar conosco!</h2>
                    <p>Enviamos uma confirmação para <strong>{formData.email}</strong> com os detalhes do seu agendamento para o plano <strong>{formData.purrPlan}</strong> em <strong>{formattedDate}</strong>.</p>
                </header>
            </ContactContainer>
    )
  }
    return(
        <ContactContainer>
        <header>
            <span>SECURE YOUR CAT'S STAY TODAY</span>
                <h2>Book Now</h2>
                <p>Ready to reserve your cat's spot at NekoInn? Our easy-to-use booking system makes it simple to schedule your cat's stay with us. Just select your desired dates, choose from our range of accommodations and services, and complete your reservation in a few easy steps.</p>
                {submitError && <p className="error-message">{submitError}</p>}
        </header>
        <FormContact onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">FULL NAME</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="phone">PHONE NUMBER</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="catName">CAT NAME</label>
                <input type="text" id="catName" name="catName" value={formData.catName} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="date">PICK A DATE</label>
                <input type="date" id="scredullingDate" name="scredullingDate" value={formData.scredullingDate ? format(formData.scredullingDate, 'yyyy-MM-dd') : ''} onChange={handleChange} min={format(MIN_DATE, 'yyyy-MM-dd')} required />
            </div>
            <div>
                <label htmlFor="numberPets">HOW MANY PETS?</label>
                <input type="number" id="numberPets" name="numberPets" value={formData.numberPets} onChange={handleChange} min="1" required />
            </div>
            <div>
                <label htmlFor="purrPlan">PURR PLAN</label>
                <select name="purrPlan" id="purrPlan" value={formData.purrPlan} onChange={handleChange} required>
                    <option defaultValue="selecione">Selecione</option>
                    <option value="Purr Ducal">Purr Ducal</option>
                    <option value="Purr Imperial">Purr Imperial</option>
                    <option value="Purr Royal">Purr Royal</option>
                </select>
            </div>
            <button type="submit" disabled={isSubmitting}> {isSubmitting ? 'SENDING...' : 'BOOK NOW'}</button>
            </FormContact>     
        </ContactContainer>
    )
}