import { useCallback, useEffect, useState } from 'react';
import carousel1 from '../../../assets/carousel.png';
import carousel2 from '../../../assets/carousel2.png';
import carousel3 from '../../../assets/carousel3.png';
import carousel4 from '../../../assets/carousel4.png';
import carousel5 from '../../../assets/carousel5.png';
import carousel6 from '../../../assets/carousel6.png';
import { useMediaQuery } from 'react-responsive';
import { ImagesCarouselContainer, ImagesCarouselMobile } from './style';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];   
   

export function ImagesCarousel(){
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); 
  const isMobile = useMediaQuery({maxWidth: 600});

  useEffect(() => {
    if(!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % images.length);
  }, [currentIndex, goToSlide, images.length]);

  const goToPrev = useCallback(() => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, goToSlide, images.length]); 

  useEffect(() => {
    setCurrentIndex(0)
  }, [isMobile])
    return(
        <ImagesCarouselContainer>
        {isMobile ? (
          <ImagesCarouselMobile>
             <button onClick={goToPrev}><ArrowLeft size={32} /></button>
                    <div>
                      <img src={images[currentIndex]} draggable="false"/>
                    </div>
              <button onClick={goToNext}><ArrowRight size={32} /></button>
                      <div>
                        {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
                      </div>
          
          </ImagesCarouselMobile>
            
        ) : (
          <div>
            <button onClick={goToPrev}>Anterior</button>
            {images.map((image, index) => (
              <div 
                key={index}
                className={`desktop-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                  draggable="false"
                />
          </div>
            ))}
           
            <button onClick={goToNext}>Próximo</button>
          </div>
        )}

     
        </ImagesCarouselContainer>
    )
}