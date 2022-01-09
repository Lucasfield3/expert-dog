import styles from '../../styles/components/aboutUs.module.scss'
import Image  from 'next/image'
import dogPaw from '../../../public/images/dog-paw.svg'
import { PawSvg } from '../PawSvg'

export const AboutUs = ()=>{

    return(
        <div className={styles.container}>
            <div className={styles.wrapedCards}>
                <span></span>
                <span></span>
                <div className={styles.card}>
                    <div>
                        <h1>Quem nós somos</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <PawSvg/>
                </div>
            </div>
        </div>
    )

}