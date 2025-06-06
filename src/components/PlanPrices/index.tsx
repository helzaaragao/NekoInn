import { CheckCircle } from '@phosphor-icons/react'
import pinkCrown from '../../assets/royal-crown-variant-made-of-lines-and-circles-svgrepo-com 1.svg'
import whiteCrown from '../../assets/royal-crown-of-elegant-vintage-design-svgrepo-com 1.svg'
import pinkOutlineCrown from '../../assets/crown-made-of-triangles-and-circles-outline-svgrepo-com 1.svg'
import { PricesContainer, PricesHeader, PricesSection } from './style'
import { useTranslation } from 'react-i18next'

export function PlanPrices(){
     const { t } = useTranslation('components'); 
    return(
        <PricesContainer>
            <PricesHeader>
                <span>{t('PlanPrices.header-span')}</span>
                <h2>{t('PlanPrices.header-title')}</h2>
                <p>{t('PlanPrices.header-description')}</p>
            </PricesHeader>
            <PricesSection>
                <article>
                    <div>
                        <span>PURR DUCAL</span>
                        <img src={pinkCrown} alt="" />
                        <h4>{t('PlanPrices.section-firstDiv-title')} <small>{t('PlanPrices.titleSmall')} </small></h4>
                    </div>
                    <ul>
                        <li>
                            <CheckCircle size={32} />
                            {t('PlanPrices.section-firstDiv-li1')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                               {t('PlanPrices.section-firstDiv-li2')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                              {t('PlanPrices.section-firstDiv-li3')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                              {t('PlanPrices.section-firstDiv-li4')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                              {t('PlanPrices.section-firstDiv-li5')}
                        </li>
                    </ul>
                    <button>{t('PlanPrices.button')}</button> 
                </article>
                <article>
                     <div>
                    <span>PURR IMPERIAL</span>
                    <img src={whiteCrown} alt="" />
                    <h4>{t('PlanPrices.section-secondDiv-title')} <small>  {t('PlanPrices.titleSmall')}</small></h4>
                    </div>
                    <ul>
                        <li>
                            <CheckCircle size={32} />
                           {t('PlanPrices.section-secondDiv-li1')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            {t('PlanPrices.section-secondDiv-li2')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            {t('PlanPrices.section-secondDiv-li3')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                           {t('PlanPrices.section-secondDiv-li4')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                           {t('PlanPrices.section-secondDiv-li5')}
                        </li>
                    </ul>
                    <button>{t('PlanPrices.button')}</button> 
                </article>
                <article>
                  <div>
                    <span>PURR ROYAL</span>
                    <img src={pinkOutlineCrown} alt="" />
                    <h4>{t('PlanPrices.section-thirdDiv-title')} <small> {t('PlanPrices.titleSmall')}</small></h4>
                    </div>
                    <ul>
                        <li>
                            <CheckCircle size={32} />
                            {t('PlanPrices.section-thirdDiv-li1')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                             {t('PlanPrices.section-thirdDiv-li2')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                             {t('PlanPrices.section-thirdDiv-li3')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                            {t('PlanPrices.section-thirdDiv-li4')}
                        </li>
                        <li>
                            <CheckCircle size={32} />
                             {t('PlanPrices.section-thirdDiv-li5')}
                        </li>
                    </ul>
                    <button>{t('PlanPrices.button')}</button> 
                </article>
            </PricesSection>
        </PricesContainer>
    )
}