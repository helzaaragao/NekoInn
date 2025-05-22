import { useState } from "react";
import { ContactContainer, FormContact } from "./style";
import emailjs from '@emailjs/browser'

interface FormData{
    name: string,
    email: string, 
    phone: string, 
    catName: string, 
    scredullingDate: string, 
    numberPets: string, 
    purrPlan: string
}

export function Contact(){
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email:'', 
        phone: '', 
        catName: '', 
        scredullingDate: '', 
        numberPets: '', 
        purrPlan: ''
    })

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submitSuccess, setSubmitSuccess] = useState(false);
      const [submitError, setSubmitError] = useState('');

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: value
        }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try{
            //envia o email para mim/a adm
            await emailjs.send(
                 process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID_ADMIN!,
                {
                   ...formData, 
                   to_email: 'helza.batista.aragao@gmail.com',
                   
                }
            )
        }
  }

    // const sendEmail = (e) => {
    //     

    // }
    return(
        <ContactContainer>
        <header>
            <span>SECURE YOUR CAT'S STAY TODAY</span>
                <h2>Book Now</h2>
                <p>Ready to reserve your cat's spot at NekoInn? Our easy-to-use booking system makes it simple to schedule your cat's stay with us. Just select your desired dates, choose from our range of accommodations and services, and complete your reservation in a few easy steps.</p>
        </header>
        <FormContact action="" method="post">
            <div>
                <label htmlFor="name">FULL NAME</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div>
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="phone">PHONE NUMBER</label>
                <input type="tel" id="phone" name="phone" />
            </div>
            <div>
                <label htmlFor="catName">CAT NAME</label>
                <input type="text" id="catName" name="catName" />
            </div>
            <div>
                <label htmlFor="date">PICK A DATE</label>
                <input type="date" id="scredullingDate" name="scredullingDate" />
            </div>
            <div>
                <label htmlFor="numberPets">HOW MANY PETS?</label>
                <input type="number" id="numberPets" name="numberPets" />
            </div>
            <div>
                <label htmlFor="purrPlan">PURR PLAN</label>
                <select name="purrPlan" id="purrPlan" required>
                    <option defaultValue="selecione">Selecione</option>
                    <option value="PURR DUCAL">PURR DUCAL</option>
                    <option value="PURR IMPERIAL">PURR IMPERIAL</option>
                    <option value="PURR ROYAL">PURR ROYAL</option>
                </select>
            </div>
            <button>BOOK NOW</button>
           

        </FormContact>
           
        </ContactContainer>
    )
}