import { FeedbacksCarousel, FeedbacksContainer, Slide, SlidesContainer } from './style'
import { Quotes,  ArrowLeft, ArrowRight } from '@phosphor-icons/react'
import { useState, useEffect } from 'react';
import Emily from '../../assets/testimonial (2).png'
import Mark from '../../assets/testimonial.png'
import Fernanda from '../../assets/fernandaS.png'
import { useTranslation } from 'react-i18next';

export function Feedbacks(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const { t } = useTranslation('components'); 

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
                <span>{t('Feedbacks.header-span')}</span>
                <h2>{t('Feedbacks.header-title')}</h2>
                <p>{t('Feedbacks.header-description')}</p>
            </header>
            <FeedbacksCarousel>
                 
                    <button onClick={goToPrev}><ArrowLeft size={30} /></button>
                  
                <SlidesContainer $isDesktop={isDesktop}>
                      <Slide $isDesktop={isDesktop}  $isActive={isDesktop || currentSlide === 0}>
                          <Quotes />
                          <p>{t('Feedbacks.firstQuotes-description')}</p>
                          <div>
                              <figure>
                                <img src={Emily} alt="" />
                            </figure>
                            <p>Emily S</p>
                          </div>
                        
                      </Slide>
                      <Slide $isDesktop={isDesktop} $isActive={isDesktop || currentSlide === 1}>
                          <Quotes />
                          <p>{t('Feedbacks.secondQuotes-description')}</p>
                          <div>
                              <figure>
                                  <img src={Mark} alt="" />
                              </figure>
                              <p>Mark T</p>
                          </div>


                      </Slide>
                      <Slide $isDesktop={isDesktop} $isActive={isDesktop || currentSlide === 2}>
                          <Quotes/>
                          <p>{t('Feedbacks.thirdQuotes-description')}</p>
                          <div>
                              <figure>
                                <img src={Fernanda} alt="" />
                              </figure>
                              <p>Fernanda S</p>
                          </div>
                          
                      </Slide>
                    </SlidesContainer>

                  
                    <button onClick={goToNext}><ArrowRight size={30} /></button>
            
                  
             
                
            </FeedbacksCarousel>

        </FeedbacksContainer>
    )
}