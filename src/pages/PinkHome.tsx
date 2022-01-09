import Image  from 'next/image'
import { useState } from 'react';
import logo from '../../public/images/Logo-Expert-Creat.png';
import { MediaIcons } from '../components/MediaIcons';
import styles from '../styles/pages/pinkHome.module.scss'
import cx from 'classnames';
import { AboutUs } from '../components/AboutUs';

export const PinkHome = () => {

    const [ toggle, setToggle] = useState(null)

    let classNames = cx(styles.bodyPinkGradient, {
        [styles.bodyBlue]:toggle,
        [styles.bodyGradiente]:toggle
    })

    return(
        <> 
            <div onClick={()=> setToggle(!toggle)} className={styles.container} >
                <div className={classNames}>
                    <header>
                    <MediaIcons/>
                    </header>
                    <main className={styles.logo}>
                        <Image  src={logo} alt=''/>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                    </main>
                    <AboutUs/>
                </div>            
            </div>
       </>
    )

}