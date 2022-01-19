import React from 'react';
import Link from 'next/link'
import { CustomSVG } from '../CustomSVG';
import styles from '../../styles/components/footer.module.scss'

const Footer = () => {

    const atTheBottom = ():boolean  => {
        let isAtTheBottom = false
       window.addEventListener('scroll', () =>{
            if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight){
                return isAtTheBottom = true
            }
       })
       console.log(isAtTheBottom)
       return isAtTheBottom && true
    }

    return (
        <div style={{marginBottom:atTheBottom && '8rem'}} className={styles.container}>
            <header>
                <h1>Entre em contato</h1>
            </header>
            <main>
                <div>
                    <h3>Telefones:</h3>
                    <p><CustomSVG color={{whatsapp:'var(--purple)'}} svgName='whatsapp'/>(11)9999-9999</p>
                    <p><CustomSVG color={{whatsapp:'var(--purple)'}} svgName='whatsapp'/>(11)9999-9999</p>
                </div>
                <div>
                    <h3>Trabalhe conosco ou inscreva-se em nossos cursos:</h3>
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdEQOtm4-duvX9kSeIZxZwlpErFqr6GMka_My2K2aowOj_DxA/viewform">
                        <a target="_blank">url.gratis/eIGhS</a>
                    </Link>
                </div>
            </main>
            <footer>
                <p>© Todos os direitos reservados. Expertdog.</p>
            </footer>
        </div>
    );
};

export default Footer;