import styles from '../../styles/components/aboutUs.module.scss'
import { CustomSVG } from '../CustomSVG'
import Carousel from 'react-elastic-carousel';
import cx from 'classnames';
import { MutableRefObject } from 'react';


interface AboutUsProps{
    title: string;
    content: string;
    isSlide:boolean;
}


export const WrapedCards = ({title, content, isSlide}:AboutUsProps)=>{

    const breakPoints = [
        {width: 1, itemsToShow:1}
      ]
      
    let classNames = cx(styles.container, {
        [styles.bodyGradienteRevert]:isSlide,
        [styles.bodyGradiente]:isSlide === false,
        
    })


    return(
        <div className={classNames}>
           {isSlide ? 
             <Carousel isRTL={false} breakPoints={breakPoints}>
                <div className={styles.wrapedCards}>
                    <span></span>
                    <span></span>
                    <div className={styles.card}>
                        <div>
                            <h1>{title}</h1>
                            <CustomSVG svgName='aspas' classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p className={styles.aspasPadding}>{content}</p>
                        </div>
                        <CustomSVG color={{dogPaw:'#FFFFFF'}} svgName='dog-paw'/>
                    </div>
                </div>
                <div className={styles.wrapedCards}>
                    <span></span>
                    <span></span>
                    <div className={styles.card}>
                        <div>
                            <h1>{title}</h1>
                            <CustomSVG svgName='aspas' classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p className={styles.aspasPadding}>{content}</p>
                        </div>
                        <CustomSVG color={{dogPaw:'#FFFFFF'}} svgName='dog-paw'/>
                    </div>
                </div> 
            </Carousel>
           : 
            <div className={styles.wrapedCards}>
                <span></span>
                <span></span>
                <div className={styles.card}>
                    <div>
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
                    <CustomSVG color={{dogPaw:'#FFFFFF'}} svgName='dog-paw'/>
                </div>
            </div>
            }
        </div>
    )

}