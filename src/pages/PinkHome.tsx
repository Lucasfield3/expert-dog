import {  useRef } from 'react';
import styles from '../styles/pages/pinkHome.module.scss'
import { PhotoGallery } from '../components/PhotoGallery';
import { ContactUs } from '../components/ContactUs';
import Landing from '../components/Landing';
import Footer from '../components/Footer';
import { FixedMenu } from '../components/FixedMenu';
import { WrappedCardsFeed } from '../components/WrappedCardsFeed';
import { WrappedCardsAboutUs } from '../components/WrappedCardsAboutUs';

 const PinkHome = () => {
    const toHome = useRef<HTMLDivElement>(null)
    const toAboutUs = useRef<HTMLDivElement>(null)
    const toFeedback = useRef<HTMLDivElement>(null)
    const toPhotos = useRef<HTMLDivElement>(null)
    const toContact = useRef<HTMLDivElement>(null)


    return(
        <> 
            <div className={styles.container} >
                <div ref={toHome}>
                    <Landing/>
                </div>
                <div ref={toAboutUs}>
                    <WrappedCardsAboutUs/>
                </div>
                <div ref={toFeedback}>
                    <WrappedCardsFeed/>
                </div>
                <div ref={toPhotos}>
                    <PhotoGallery />
                </div>
                <div ref={toContact}>
                    <ContactUs />
                </div>
                <Footer/>
                <FixedMenu 
                toHome={()=>toHome.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                toAboutUs={()=>toAboutUs.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
                toContact={()=>toContact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
                toFeedback={()=>toFeedback.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
                toPhotos={()=>toPhotos.current.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
                />           
            </div>
       </>
    )

}

export default PinkHome