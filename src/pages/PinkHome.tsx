import Image  from 'next/image'
import { useState } from 'react';
import logo from '../../public/images/Logo-Expert-Creat.png';
import { MediaIcons } from '../components/MediaIcons';
import styles from '../styles/pages/pinkHome.module.scss'
import cx from 'classnames';
import { WrapedCards } from '../components/WrapedCards';

export const PinkHome = () => {

    const [ toggle, setToggle] = useState(null)

    let classNames = cx(styles.bodyPinkGradient, {
        [styles.bodyBlue]:toggle,
        [styles.bodyGradiente]:toggle
    })

    return(
        <> 
            <div onClick={()=> setToggle(!toggle)} className={styles.container} >
                <div className={styles.home}>
                    <div className={styles.bodyPinkGradient}>
                        <header>
                        <MediaIcons/>
                        </header>
                        <main className={styles.logo}>
                            <Image  src={logo} alt=''/>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        </main>
                    </div>
                    <WrapedCards 
                    title='Quem nós somos' 
                    content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    isSlide={false}
                    />
                     <WrapedCards 
                    title='O que falam sobre nós.' 
                    content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    isSlide={true}
                    />
                </div>            
            </div>
       </>
    )

}