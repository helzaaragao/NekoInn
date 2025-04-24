import { Header } from "../components/Header";
import { Envelope, MapPinArea, Phone, Play } from "@phosphor-icons/react"

import mainHero from '../assets/mainHero.png'
import vector from '../assets/Vector.svg'
import lastCat from '../assets/Group 2.png'
import firstCat from '../assets/Group 5.png'
import secondCat from '../assets/Group 4.png'
import thirdCat from '../assets/Group 3.png'
import aboutCat from '../assets/about.png'
import detailsCat from '../assets/rooms.png'
import groomingSpa from '../assets/groomingSpa.png'
import playtimeParadise from '../assets/playtimeParadise.png'
import gourmetDining from '../assets/gourmetDining.png'
import { PlanPrices } from "../components/PlanPrices";
import { Feedbacks } from "../components/Feedbacks";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { HomeContainer, MainBanner, Vectors } from "./style";


export function Home(){
    return(
        <HomeContainer>
         <Header></Header>
         <MainBanner>
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
       
                <aside>
                    <span>WATCH NOW</span>
                    <p>Introducing The NekoInn</p>
                    <figure>
                     <Play size={32}  />
                    </figure>
                   
                </aside>
            </section>
            <section>
                <figure>
                    
                    <div>
                       <Vectors src={vector} alt="" $variant='primary' />
                       <Vectors src={vector} alt="" $variant='secundary' />
                       <img src={mainHero} alt="" />
                        
                    </div>
                 
                    <div>
                        <img src={firstCat} alt="" />
                        <img src={secondCat} alt="" />
                        <img src={thirdCat} alt="" />
                        <img src={lastCat} alt="" />
                    </div>
              

                </figure>
              
            </section>
            
         </MainBanner>
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
         <section>
            <article>
                <span>YOUR TRUSTED CAT RETREAT</span>
                <h2>About NekoInn</h2>
                <p>NekoInn is more than a cat boarding facility; it's a home away from home for your furry family members. Nestled in serene surroundings, our inn offers a tranquil retreat for cats of all shapes, sizes, and personalities. With a team of dedicated caregivers passionate about feline welfare, we ensure every guest receives love, attention, and comfort. Rest easy knowing your cat is in caring hands at NekoInn.</p>
                <button>BOOK NOW</button>
            </article>
            <figure>
                <img src={vector}/>
                <img src={aboutCat}/>
            </figure>
         </section>
         <section>
            <figure>
                <img src={detailsCat} alt="" />
            </figure>
            <article>
                <span>PERFECTLY TAILORED FOR YOUR FELINE FRIEND</span>
                <h2>Our Rooms</h2>
                {/* https://ui.shadcn.com/docs/components/accordion */}
            </article>
         </section>
         <section>
            <article>
                <span>DEDICATED CARE FOR EVERY PURRSONALITY</span>
                <h3>Purr Care</h3>
                <p>Experience top-notch feline care with our Purr Care services. From grooming to playtime, we provide personalized attention to ensure your cat's happiness and well-being at NekoInn.</p>
                <button>Book Now</button>
            </article>
            <div>
                <div>
                    <img src={groomingSpa} alt="" />
                    <h4>Grooming Spa:</h4>
                    <p>Indulge your cat in a pampering experience at our Grooming Spa. Our skilled groomers provide gentle care and attention, from luxurious baths to expert grooming sessions, leaving your cat looking and feeling their best.</p>
                </div>
                <div>
                    <img src={playtimeParadise} alt="" />
                    <h4>Playtime Paradise:</h4>
                    <p>Let your cat unleash their playful side in our Playtime Paradise. With a variety of engaging toys, climbing structures, and interactive games, our supervised play sessions offer the perfect opportunity for your cat to exercise, socialize, and have fun.</p>
                </div>
                <div>
                    <img src={gourmetDining} alt="" />
                    <h4>Gourmet Dining:</h4>
                    <p>Treat your cat's taste buds to a culinary delight with our Gourmet Dining service. From premium cat cuisine to customized meal plans tailored to their dietary needs, our gourmet chefs ensure that every meal is both delicious and nutritious.</p>
                </div>
            </div>
         </section>
         <section>
            {/* https://ui.shadcn.com/docs/components/carousel */}
         </section>
        <PlanPrices></PlanPrices>
        <Feedbacks></Feedbacks>
        <Contact></Contact>
        <Footer></Footer>
        </HomeContainer>
    )
}