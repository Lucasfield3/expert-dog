import Image  from 'next/image'
import logo from '../../public/images/Logo-Expert-Creat.png';
import { MediaIcons } from '../components/MediaIcons';
import styles from '../styles/pages/pinkHome.module.scss'

export const PinkHome = () => {

    return(
        <> 
            <div className={styles.bodyPinkGradient}>
                <header>
                   <MediaIcons/>
                </header>
                <main className={styles.logo}>
                    <Image  src={logo} alt=''/>
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                </main>
            </div>
       </>
    )

}