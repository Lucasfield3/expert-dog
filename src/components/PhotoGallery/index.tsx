import styles from '../../styles/components/photoGallery.module.scss'
import Carousel from 'react-elastic-carousel';
import dogPhoto from '../../../public/images/photos/golden.jpg'
import cx from 'classnames';

import Image  from 'next/image'



export const PhotoGallery = ()=>{

    const breakPoints = [
        {width: 1, itemsToShow:1}
      ]
      
    return(
        <div className={styles.container}>
            <h1>Nossa galleria de fotos</h1>
             <Carousel isRTL={false} breakPoints={breakPoints}>
                <div className={styles.card}>
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