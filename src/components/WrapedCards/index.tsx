import styles from '../../styles/components/aboutUs.module.scss'
import { PawSvg } from '../PawSvg'
import Carousel from 'react-elastic-carousel';
import cx from 'classnames';
import { Aspas } from '../Aspas';

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
                            <Aspas classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p className={styles.aspasPadding}>{content}</p>
                        </div>
                        <PawSvg/>
                    </div>
                </div>
                <div className={styles.wrapedCards}>
                    <span></span>
                    <span></span>
                    <div className={styles.card}>
                        <div>
                            <h1>{title}</h1>
                            <Aspas classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p className={styles.aspasPadding}>{content}</p>
                        </div>
                        <PawSvg/>
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
                    <PawSvg/>
                </div>
            </div>
            }
        </div>
    )

}