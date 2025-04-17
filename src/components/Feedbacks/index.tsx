import { ArrowLeft, ArrowRight } from 'lucide-react'
import {CarouselContainer } from './style'
import { Quotes } from '@phosphor-icons/react'

import Emily from '../../assets/testimonial (2).png'
import Mark from '../../assets/testimonial.png'
import EmilyS from '../../assets/testimonial(4).png'

export function Feedbacks(){


    return(
        <div>
            <header>
                <span>Pawsitive Reviews from Happy Customers</span>
                <h2>They Celebrate</h2>
                <p>Discover what our clients have to say about their experiences at NekoInn. Their testimonials speak volumes about the exceptional care and service we provide for their beloved feline companions.</p>
            </header>
            <CarouselContainer>
                <ArrowLeft size={32} />
                    <article>
                         <Quotes size={32} />
                         <p>Leaving my cat at NekoInn was the best decision I ever made. The staff went above and beyond to ensure that my furry friend felt loved and cared for. I received regular updates and photos, which put my mind at ease during my time away. Thank you, NekoInn, for providing such a wonderful home away from home for my cat!</p>
                         <figure>
                            <img src={Emily} alt="" />
                         </figure>
                    </article>
                    <article>
                         <Quotes size={32} />
                         <p>I cannot recommend NekoInn enough! From the moment I walked in, I knew my cat would be in good hands. The facilities are clean and spacious, and the staff is incredibly friendly and attentive. My cat came back home relaxed and happy, and I will definitely be using NekoInn for all my future boarding needs.</p>
                         <figure>
                            <img src={Mark} alt="" />
                         </figure>
                    </article>
                    <article>
                         <Quotes size={32} />
                         <p>NekoInn made the experience so much easier. Their personalized care and attention to detail set them apart from other boarding facilities. I loved receiving updates and photos of my cat enjoying her stay. I have complete peace of mind knowing she's in the care of such dedicated professionals. Thank you, NekoInn!</p>
                         <figure>
                            <img src={EmilyS} alt="" />
                         </figure>
                    </article>
                <ArrowRight size={32} />
            </CarouselContainer>

        </div>
    )
}
// https://chakra-ui.com/docs/components/accordion