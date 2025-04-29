import { CheckCircle } from '@phosphor-icons/react'

import pinkCrown from '../../assets/royal-crown-variant-made-of-lines-and-circles-svgrepo-com 1.svg'
import whiteCrown from '../../assets/royal-crown-of-elegant-vintage-design-svgrepo-com 1.svg'
import { PricesContainer, PricesHeader, PricesSection } from './style'
export function PlanPrices(){
    return(
        <PricesContainer>
            <PricesHeader>
                <span>TRANSPARENT RATES FOR YOUR PURRY COMPANION</span>
                <h2>Pricing</h2>
                <p>In our Pricing Section, transparency meets affordability. At NekoInn, we believe in straightforward pricing, ensuring you have peace of mind knowing exactly what to expect.</p>
            </PricesHeader>
            <PricesSection>
                <article>
                    <div>
                        <span>PURR DUCAL</span>
                        <img src={pinkCrown} alt="" />
                        <h4>$160.99 <small>PER DAY</small></h4>
                    </div>
                    <ul>
                        <li>
                            <CheckCircle size={32} />
                            Standard Room Accommodation
                        </li>
                        <li>
                            <CheckCircle size={32} />
                             Basic Grooming
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Group Playtime
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Standard Meal Plan
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Daily Wellness Check
                        </li>
                    </ul>
                    <button>BOOK NOW</button> 
                </article>
                <article>
                     <div>
                    <span>PURR IMPERIAL</span>
                    <img src={whiteCrown} alt="" />
                    <h4>$600.99<small>PER DAY</small></h4>
                    </div>
                    <ul>
                        <li>
                            <CheckCircle size={32} />
                            Presidential Suite Accommodation
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Deluxe Spa Grooming Package
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Exclusive One-on-One Playtime
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Gourmet Meal Plan
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            24/7 Concierge Service
                        </li>
                    </ul>
                    <button>BOOK NOW</button> 
                </article>
                <article>
                <div>
                    <span>PURR ROYAL</span>
                    <img src={pinkCrown} alt="" />
                    <h4>$299.99<small>PER DAY</small></h4>
                    </div>
                    <ul>
                        <li>
                            <CheckCircle size={32} />
                            Luxury Suite Accommodation
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Deluxe Grooming Package
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Private Playtime
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            Premium Meal Plan
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            VIP Wellness Check
                        </li>
                    </ul>
                    <button>BOOK NOW</button> 
                </article>
            </PricesSection>
        </PricesContainer>
    )
}