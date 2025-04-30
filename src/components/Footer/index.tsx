import { Envelope, FacebookLogo, InstagramLogo, LinkedinLogo, MapPinArea, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import newsLetter from '../../assets/newsletter.svg'
import { Phone } from 'lucide-react'
import { FooterContainer } from './style'
export function Footer(){
    return(
        <FooterContainer>
            <div>
                <div>
                        <img src={newsLetter} alt="" />
                        <div>
                            <span>STAY IN TOUCH</span>
                            <h4>Newsletter</h4>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="email">EMAIL</label>
                            <input type="email" />
                        </div>
                        <div>
                        <Envelope size={32} />
                        </div>
                    </div>
            </div>
            <div>
                <div>
                    <section>
                    <MapPinArea size={32} weight="bold" />
                    <h5>Pay Us A Visit</h5>
                    <p>123 Meow Avenue. 
                    Kittyville, CA 90210 United States</p>
                </section>
                <section>
                    <Phone size={32} />
                    <h5>Give Us A Call</h5>
                    <p>(555) 555-5555</p>
                </section>
                <section>
                    <a href="mailto:info@neko-inn.com">
                    <h5>Send Us A Message</h5>
                        <Envelope size={32} />
                        <p>info@neko-inn.com</p>
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
                    <FacebookLogo size={32} />
                    <TwitterLogo size={32} />
                    <LinkedinLogo size={32} />
                    <YoutubeLogo size={32} />
                    <InstagramLogo size={32} />
                </div>
                <div>
                    <p>2024 © COPYRIGHT - NEKOINN A 5 STAR PURR HOTEL</p>
                </div>
            </div>
        
        </FooterContainer>
    )
}