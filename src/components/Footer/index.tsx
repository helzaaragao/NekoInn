import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, MapPinArea, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import newsLetter from '../../assets/newsletter.svg'
import { Phone } from 'lucide-react'
import { ContactInfos, EmailNewsletter, FooterContainer, Newsletter } from './style'
import { useTranslation } from 'react-i18next';
export function Footer(){
    const { t } = useTranslation('components'); 
    return(
        <FooterContainer>
            <Newsletter>
                <div>
                        <img src={newsLetter} alt="" />
                        <div>
                            <span>{t('Footer.newsletter-span')}</span>
                            <h4>{t('Footer.newsletter-title')}</h4>
                         </div>
                </div>
                <EmailNewsletter>
                        <div>
                            <label htmlFor="email">{t('Footer.newsletter-email')}</label>
                            <input type="email" id="e-mail" name="e-mail" />
                        </div>
                        <div>
                        <Envelope size={32} />
                        </div>
                </EmailNewsletter>
                    <hr />
            </Newsletter>
            <ContactInfos>
                <div>
                    <section>
                        <div>
                            <MapPinArea size={32}/>
                        </div>
                        <article>
                            <h5>{t('Footer.info-title_1')}</h5>
                        <p>123 Meow Avenue. 
                        Kittyville, CA 90210 United States</p>
                        </article>
                </section>
                <section>
                    <div>
                        <Phone size={32} />
                    </div>
                    <article>
                    <h5>{t('Footer.info-title_2')}</h5>
                    <p>(555) 555-5555</p>
                    </article>
                </section>
                <section>
                    <a href="mailto:info@neko-inn.com">
                    <div>
                     <Envelope size={32} />
                    </div>
                    <article>
                    <h5>{t('Footer.info-title_3')}</h5>
                        <p>info@neko-inn.com</p>
                        </article>
                    </a>
                </section>
                </div>
                <div>
                  <h5>NekoInn Plans</h5>
                  <p>Purr Ducal</p>
                  <p>Purr Royal</p>
                  <p>Purr Imperial</p>
                </div>
                <div>
                    <h5>{t('Footer.info-socialmedia-title')}</h5>
                    <figure>
                    <div>
                    <FacebookLogo size={32} weight='bold'/>
                    </div>
                    <div>
                    <TwitterLogo size={32}weight='bold' />
                    </div>
                   <div>
                     <LinkedinLogo size={32} weight='bold'/>
                   </div>
                   <div>
                   <YoutubeLogo size={32}weight='bold' />
                   </div>
                 <div>
                 <InstagramLogo size={32} weight='bold'/>
                 </div>
                 </figure>
               
                </div>
                <div>
                    <p>{t('Footer.info-socialmedia-description')}</p>
                </div>
            </ContactInfos>
        </FooterContainer>
    )
}