
import * as React from 'react';
import { CustomSVG } from '../CustomSVG';
import styles from '../../styles/components/feed.module.scss'
import Carousel from 'react-elastic-carousel';
type Props = {
    
};
export const WrappedCardsFeed = (props: Props) => {

    const breakPoints = [
        {width: 1, itemsToShow:1}
      ]

    return (
        <div className={styles.container}>
             <Carousel isRTL={false} breakPoints={breakPoints}>
                <div className={styles.wrapedCards}>
                    <span></span>
                    <span></span>
                    <div className={styles.card}>
                        <div>
                            <h1>O que falam sobre nós.</h1>
                            <CustomSVG svgName='aspas' classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p className={styles.aspasPadding}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <CustomSVG color={{dogPaw:'#FFFFFF'}} svgName='dog-paw'/>
                    </div>
                </div>
                <div className={styles.wrapedCards}>
                    <span></span>
                    <span></span>
                    <div className={styles.card}>
                        <div>
                        <h1>O que falam sobre nós.</h1>
                            <CustomSVG svgName='aspas' classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p className={styles.aspasPadding}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <CustomSVG color={{dogPaw:'#FFFFFF'}} svgName='dog-paw'/>
                    </div>
                </div> 
            </Carousel>
        </div>
    );
};