import { Header } from "../components/Header";
import { Envelope, MapPinArea, Phone, Play } from "@phosphor-icons/react"

import mainHero from '../assets/mainHero.png'
import vector from '../assets/Vector.svg'
import lastCat from '../assets/Group 2.png'
import firstCat from '../assets/Group 5.png'
import secondCat from '../assets/Group 4.png'
import thirdCat from '../assets/Group 3.png'

export function Home(){
    return(
        <>
         <Header></Header>
         <main>
            <section>
                <article>
                    <span>WHERE FELINE CONFORT COMES FIRST</span>
                    <h1>Your 5 Starts Purr Inn</h1>
                    <p>At NekoInn, we understand that your beloved feline companion deserves the best care, even when you can't be there.
                        That's why we've created a haven designed specifically for cats, where every whisker is cherished and every purr 
                        is celebrated. From cozy accommodations to personalized attention, we strive to provide a nurturing environment 
                        where your cat can relax, play, and thrive while you're away. Welcome to NekoInn, where your cat's comfort and 
                        happiness are our top priorities.</p>
                    <button>BOOK A PURR-SUITE</button>
                </article>
       
                <footer>
                    <span>WATCH NOW</span>
                    <p>Introducing The NekoInn</p>
                    <figure>
                     <Play size={32} weight="bold" />
                    </figure>
                   
                </footer>
            </section>
            <section>
                <figure>
                    <div>
                        <img src={vector} alt="" />
                        <img src={mainHero} alt="" />
                        <img src={vector} alt="" />
                    </div>
                    <div>
                        <img src={firstCat} alt="" />
                        <img src={secondCat} alt="" />
                        <img src={thirdCat} alt="" />
                        <img src={lastCat} alt="" />
                    </div>
              

                </figure>
              
            </section>
            
         </main>
         <address>
            <section>
                 <MapPinArea size={32} weight="bold" />
                 <p>123 Meow Avenue. 
                 Kittyville, CA 90210 United States</p>
            </section>
            <section>
                 <Phone size={32} />
                 <p>(555) 555-5555</p>
            </section>
            <section>
                <a href="mailto:info@neko-inn.com">
                    <Envelope size={32} />
                    <p>info@neko-inn.com</p>
                 </a>
            </section>
         </address>
         <div>
            <span>YOUR TRUSTED CAT RETREAT</span>
         </div>
        </>
    )
}