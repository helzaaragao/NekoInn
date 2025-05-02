import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, MapPinArea, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import newsLetter from '../../assets/newsletter.svg'
import { Phone } from 'lucide-react'
import { ContactInfos, EmailNewsletter, FooterContainer, Newsletter } from './style'
export function Footer(){
    return(
        <FooterContainer>
            <Newsletter>
                <div>
                        <img src={newsLetter} alt="" />
                        <div>
                            <span>STAY IN TOUCH</span>
                            <h4>Newsletter</h4>
                         </div>
                </div>
                    <EmailNewsletter>
                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" />
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
                            <h5>Pay Us A Visit</h5>
                        <p>123 Meow Avenue. 
                        Kittyville, CA 90210 United States</p>
                        </article>
                </section>
                <section>
                    <div>
                        <Phone size={32} />
                    </div>
                    <article>
                    <h5>Give Us A Call</h5>
                    <p>(555) 555-5555</p>
                    </article>
                </section>
                <section>
                    <a href="mailto:info@neko-inn.com">
                    <div>
                     <Envelope size={32} />
                    </div>
                    <article>
                    <h5>Send Us A Message</h5>
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
                    <h5>Socialize With NekoInn</h5>
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
                    <p>2024 © COPYRIGHT - NEKOINN A 5 STAR PURR HOTEL</p>
                </div>
            </ContactInfos>
        
        </FooterContainer>
    )
}