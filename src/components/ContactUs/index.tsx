import styles from '../../styles/components/contactUs.module.scss'
import Carousel from 'react-elastic-carousel';
import dogPhoto from '../../../public/images/photos/golden.jpg'
import cx from 'classnames';

import Image  from 'next/image'
import { CSSProperties, MutableRefObject, useContext } from 'react';
import { ChangeThemesContext } from '../../context/ChangeThemes';

type Props = {

}

export const ContactUs = ({}:Props)=>{

    const {changeColor, theme} = useContext(ChangeThemesContext)

    const myStyle = {
        myBackground:{
            background:changeColor(
                'linear-gradient(180deg, #A675B4 64%, #B14D92 100%)',
                'linear-gradient(180deg, #A675B4 0%, #FFFFFF 100%)',
                'linear-gradient(180deg, #32282E 0%, #2E2728 0.01%, #722C8D 100%)',
                'var(--purple)',
                'linear-gradient(180deg, #FFFFFF 0%, #FFEFEF 6.8%, #FD0D16 100%)',
                '#FFFFFF',
                'var(--red)',
                'linear-gradient(180deg, #A577B4 0%, #FA3944 100%)'   
            ),
            borderBottom:theme === 'branco-vermelho' || theme === 'roxo-branco-gradiente' ? '1px solid' : 'none'
        }as CSSProperties,
        myButton:{
            background:changeColor(
                'var(--purple)',
                'var(--purple)',
                'var(--purple)',
                'var(--purple)',
                'var(--red)',
                'var(--red)',
                'white',
                'white'
            ), 
            color:changeColor(
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'var(--red)',
                'var(--red)'
            )
        } as CSSProperties,
        myInputs:{
            border:changeColor(
                'none',
                '1px solid #2E2727',
                'none',
                'none',
                '1px solid #2E2727',
                '1px solid #2E2727',
                'none', 
                'none'
            )
        }as CSSProperties,
        myTitle:{
            color:changeColor(
                'white', 
                'var(--black)',
                'white',
                'white',
                'var(--black)',
                'var(--black)',
                'white',
                'white'
            )   
        } as CSSProperties
    }

   
      
    return(
        <div style={myStyle.myBackground} className={styles.container}>
            <h1 style={myStyle.myTitle}>Contato</h1>
            <div id='list' className={styles.form}>
                <input style={myStyle.myInputs} placeholder='Seu nome' type="text"/>
                <input style={myStyle.myInputs} placeholder='Seu email' type="text"/>
                <input style={myStyle.myInputs} placeholder='Seu telefone' type="text"/>
                <textarea style={myStyle.myInputs} placeholder='Sua mensagem'/>
                <button style={myStyle.myButton} type="submit">Enviar</button>
            </div>
        </div>
    )

}