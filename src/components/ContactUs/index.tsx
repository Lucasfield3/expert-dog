import styles from '../../styles/components/contactUs.module.scss'
import Carousel from 'react-elastic-carousel';
import dogPhoto from '../../../public/images/photos/golden.jpg'
import cx from 'classnames';

import Image  from 'next/image'



export const ContactUs = ()=>{

      
    return(
        <div className={styles.container}>
            <h1>Contato</h1>
            <div className={styles.form}>
                <input placeholder='Seu nome' type="text"/>
                <input placeholder='Seu email' type="text"/>
                <input placeholder='Seu telefone' type="text"/>
                <textarea placeholder='Sua mensagem'/>
                <button type="submit">Enviar</button>
            </div>
        </div>
    )

}