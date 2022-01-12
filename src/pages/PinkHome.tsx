import { useState } from 'react';
import styles from '../styles/pages/pinkHome.module.scss'
import cx from 'classnames';
import { WrapedCards } from '../components/WrapedCards';
import { PhotoGallery } from '../components/PhotoGallery';
import { ContactUs } from '../components/ContactUs';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

export const PinkHome = () => {

    const [ toggle, setToggle] = useState(null)

    let classNames = cx(styles.bodyPinkGradient, {
        [styles.bodyBlue]:toggle,
        [styles.bodyGradiente]:toggle
    })

    return(
        <> 
            <div onClick={()=> setToggle(!toggle)} className={styles.container} >
                <Landing/>
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
                <PhotoGallery/>
                <ContactUs/>
                <Footer/>           
            </div>
       </>
    )

}