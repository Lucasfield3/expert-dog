import styles from '../../styles/components/photoGallery.module.scss'
import Carousel from 'react-elastic-carousel';
import dogPhoto from '../../../public/images/photos/golden.jpg'
import cx from 'classnames';

import Image  from 'next/image'
import { CSSProperties,  useContext, useEffect, useState} from 'react';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import { ChangeSizeContext } from '../../context/ChangeSize';

type Props = {

}

export const PhotoGallery = ({}:Props)=>{

    const {changeColor, theme} = useContext(ChangeThemesContext)
    const { match, setSize} = useContext(ChangeSizeContext)
    let checkMatchesLarge:MediaQueryList | null; 
    let checkMatchesSmall:MediaQueryList | null; 

    const [breakPoints, setBreakPoints] = useState([
        {width:1, itemsToShow:2}
    ])
  
   
    const checkSize =() =>{
        if(process.browser){
            window.onresize = ()=>{
                checkMatchesLarge = window.matchMedia('(max-width:1350px)')
                checkMatchesSmall = window.matchMedia('(max-width:860px)')
                if(checkMatchesLarge.matches){
                    setBreakPoints([{width:200, itemsToShow:2}])
                }
        
                if(checkMatchesSmall.matches){
                    setBreakPoints([{width:1, itemsToShow:1}])
                }

                if(!checkMatchesLarge.matches && !checkMatchesSmall.matches){
                    setBreakPoints([{width:500, itemsToShow:3}])
                }   
            }
        
        }
    
    }
    useEffect(() =>{
        checkSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match])

   

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
                <div style={{border:theme === 'branco-vermelho-roxo' ? '1px solid' : 'none'}} className={styles.card}>
                    <Image height="250" width="250" src={dogPhoto} alt='foto'/>
                    <p>Golden retriver brincando depois de uma sessão. Texto descritivo.</p>
                </div>
                <div style={{border:theme === 'branco-vermelho-roxo' ? '1px solid' : 'none'}} className={styles.card}>
                    <Image height="250" width="250" src={dogPhoto} alt='foto'/>
                    <p>Golden retriver brincando depois de uma sessão. Texto descritivo.</p>
                </div>
                <div style={{border:theme === 'branco-vermelho-roxo' ? '1px solid' : 'none'}} className={styles.card}>
                    <Image height="250" width="250" src={dogPhoto} alt='foto'/>
                    <p>Golden retriver brincando depois de uma sessão. Texto descritivo.</p>
                </div>
                <div style={{border:theme === 'branco-vermelho-roxo' ? '1px solid' : 'none'}} className={styles.card}>
                    <Image height="250" width="250" src={dogPhoto} alt='foto'/>
                    <p>Golden retriver brincando depois de uma sessão. Texto descritivo.</p>
                </div>
            </Carousel>
        </div>
    )

}