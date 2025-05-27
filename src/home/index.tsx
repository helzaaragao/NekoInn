import { Header } from "../components/Header";
import { ArrowRight, Envelope, MapPinArea, Phone, Play } from "@phosphor-icons/react"
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
import { About, Address, Cats, HeroBanner, HomeContainer, PurrCare, Rooms, Vectors } from "./style";
import { Button } from "@/components/ui/Button";
import { AccordionChackra } from "@/components/ui/Accordion";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";
import '../../public/i18n'
import { useTranslation } from "react-i18next";

export function Home(){
    const { t } = useTranslation('home'); 


    return(
        <>
        <HomeContainer>
            <Header></Header>
            <HeroBanner>
                <section>
                    <article>
                        <span>{t('MainHome.hero.article-span')}</span>
                        <h1>{t('MainHome.hero.article-title')}</h1>
                        <p>{t('MainHome.hero.article-description')}</p>
                        <button>{t('MainHome.hero.bookButton')}</button>
                    </article>
                    <aside>
                        <span>{t('MainHome.hero.aside-span')}</span>
                        <p>{t('MainHome.hero.aside-title')}</p>
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
                    
                        <Cats>
                            <img src={firstCat} alt="" />
                            <img src={secondCat} alt="" />
                            <img src={thirdCat} alt="" />
                            <img src={lastCat} alt="" />
                        </Cats>
                

                    </figure>
                
                </section>
            </HeroBanner>
            <Address>
                <section>
                    <div>
                         <MapPinArea size={32} weight="bold" />
                    </div>
                    <p>123 Meow Avenue. 
                    Kittyville, CA 90210 United States</p>
                </section>
                <section>
                    <div>
                        <Phone size={32} />
                    </div>
                
                    <p>(555) 555-5555</p>
                </section>
                <section>
                    <a href="mailto:info@neko-inn.com">
                        <div>
                        <Envelope size={32} />
                        </div>
                        <p>info@neko-inn.com</p>
                    </a>
                </section>
            </Address>
            <About>
                <article>
                    <span>{t('MainHome.about.span')}</span>
                    <h2>{t('MainHome.about.title')}</h2>
                    <p>{t('MainHome.about.description')}</p>
                    <Button></Button>
                </article>
                <figure>
                    <img src={vector}/>
                    <img src={aboutCat}/>
                </figure>
            </About>
            <Rooms>
                <figure>
                    <img src={detailsCat} alt="" />
                </figure>
                <article>
                    <span>{t('MainHome.rooms.span')}</span>
                    <h2>{t('MainHome.rooms.title')}</h2>
                    <AccordionChackra></AccordionChackra> 
                </article>
            </Rooms>
            <PurrCare>
                <article>
                    <span>{t('MainHome.purrCare.article-span')}</span>
                    <h2>{t('MainHome.purrCare.article-title')}</h2>
                    <p>{t('MainHome.purrCare.article-description')}.</p>
                    <button><ArrowRight size={20} />{t('MainHome.purrCare.article-button')}</button>
                </article>
                <div>
                    <div>
                        <img src={groomingSpa} alt="" />
                        <h4>{t('MainHome.purrCare.firstDiv-title')}</h4>
                        <p>{t('MainHome.purrCare.firstDiv-description')}</p>
                    </div>
                    <div>
                        <img src={playtimeParadise} alt="" />
                        <h4>{t('MainHome.purrCare.secondDiv-title')}</h4>
                        <p>{t('MainHome.purrCare.secondDiv-description')}</p>
                    </div>
                    <div>
                        <img src={gourmetDining} alt="" />
                        <h4>{t('MainHome.purrCare.thirdDiv-title')}</h4>
                        <p>{t('MainHome.purrCare.thirdDiv-description')}</p>
                    </div>
                </div>
            </PurrCare>
            <GalleryCarousel></GalleryCarousel>
            <PlanPrices></PlanPrices>
            <Feedbacks></Feedbacks>
            <Contact></Contact>
        </HomeContainer>
        <Footer></Footer>
        </>
    )
}