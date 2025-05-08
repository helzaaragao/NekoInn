import { FeedbacksCarousel, FeedbacksContainer, Slide, SlidesContainer } from './style'
import { Quotes,  ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useState, useEffect } from 'react';
import Emily from '../../assets/testimonial (2).png'
import Mark from '../../assets/testimonial.png'
import EmilyS from '../../assets/testimonial(4).png'

export function Feedbacks(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
          setIsDesktop(window.innerWidth >= 1024);
        };
    
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);

      useEffect(() => {
        if (isDesktop) return;
    
        const interval = setInterval(() => {
          goToNext();
        }, 5000);
    
        return () => clearInterval(interval);
      }, [currentSlide, isDesktop]);

      const goToPrev = () => {
        setCurrentSlide(prev => (prev === 0 ? 2 : prev - 1));
      };
    
      const goToNext = () => {
        setCurrentSlide(prev => (prev === 2 ? 0 : prev + 1));
      };
    return(
        <FeedbacksContainer>
            <header>
                <span>PAWSITIVE REVIEWS FROM HAPPY CUSTOMERS</span>
                <h2>They Celebrate NekoInn</h2>
                <p>Discover what our clients have to say about their experiences at NekoInn. Their testimonials speak volumes about the exceptional care and service we provide for their beloved feline companions.</p>
            </header>
            <FeedbacksCarousel>
                 
                    <button onClick={goToPrev}><ArrowLeft size={30} /></button>
                  
                <SlidesContainer $isDesktop={isDesktop}>
                    <Slide $isDesktop={isDesktop}  $isActive={isDesktop || currentSlide === 0}>
                         <Quotes />
                         <p>Leaving my cat at NekoInn was the best decision I ever made. The staff went above and beyond to ensure that my furry friend felt loved and cared for. I received regular updates and photos, which put my mind at ease during my time away. Thank you, NekoInn, for providing such a wonderful home away from home for my cat!</p>
                         <figure>
                            <img src={Emily} alt="" />
                         </figure>
                    </Slide>
                    <Slide $isDesktop={isDesktop} $isActive={isDesktop || currentSlide === 1}>
                         <Quotes />
                         <p>I cannot recommend NekoInn enough! From the moment I walked in, I knew my cat would be in good hands. The facilities are clean and spacious, and the staff is incredibly friendly and attentive. My cat came back home relaxed and happy, and I will definitely be using NekoInn for all my future boarding needs.</p>
                         <figure>
                            <img src={Mark} alt="" />
                         </figure>
                    </Slide>
                    <Slide $isDesktop={isDesktop} $isActive={isDesktop || currentSlide === 2}>
                         <Quotes/>
                         <p>NekoInn made the experience so much easier. Their personalized care and attention to detail set them apart from other boarding facilities. I loved receiving updates and photos of my cat enjoying her stay. I have complete peace of mind knowing she's in the care of such dedicated professionals. Thank you, NekoInn!</p>
                         <figure>
                            <img src={EmilyS} alt="" />
                         </figure>
                    </Slide>
                    </SlidesContainer>

                  
                    <button onClick={goToNext}><ArrowRight size={30} /></button>
            
                  
             
                
            </FeedbacksCarousel>

        </FeedbacksContainer>
    )
}