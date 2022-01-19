import styles from '../../styles/components/photoGallery.module.scss'
import Carousel from 'react-elastic-carousel';
import dogPhoto from '../../../public/images/photos/golden.jpg'
import cx from 'classnames';

import Image  from 'next/image'
import { CSSProperties,  useContext, useEffect} from 'react';
import { ChangeThemesContext } from '../../context/ChangeThemes';

type Props = {

}

export const PhotoGallery = ({}:Props)=>{

    const {changeColor, theme} = useContext(ChangeThemesContext)

    const breakPoints = [
        {width: 1, itemsToShow:1}
      ]

    const myStyle = {
        myBackground: {
            background: changeColor(
                'linear-gradient(180deg, #b85193 0%, #A578B6 100%)',
                'linear-gradient(180deg, #75308F 0%, #A578B6 100%)',
                'linear-gradient(180deg, #712C8B 0%, #2E2727 100%)',
                'var(--black)',
                'linear-gradient(180deg, #FE0F19 0%, rgba(255, 255, 255, 0.56) 100%)',
                'var(--red)',
                'white',
                'linear-gradient(180deg, #FA3943 0%, #A577B4 100%)'
            ) 
        } as CSSProperties
    }

    
    return(
        <div style={myStyle.myBackground} className={styles.container}>
            <h1 style={{color:theme === 'branco-vermelho-roxo' ? 'var(--black)' : 'white'}}>Nossa galeria de fotos</h1>
             <Carousel isRTL={false} breakPoints={breakPoints}>
                <div style={{border:theme === 'branco-vermelho-roxo' ? '1px solid' : 'none'}} className={styles.card}>
                    <Image height="250" width="250" src={dogPhoto} alt='foto'/>
                    <p>Golden retriver brincando depois de uma sessão. Texto descritivo.</p>
                </div>
                <div className={styles.card}>
                    <Image height="250" width="250" src={dogPhoto} alt='foto'/>
                    <p>Golden retriver brincando depois de uma sessão. Texto descritivo.</p>
                </div>
            </Carousel>
        </div>
    )

}