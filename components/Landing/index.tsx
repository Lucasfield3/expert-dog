import Image  from 'next/image'
import React, { CSSProperties, useContext, useEffect } from 'react';
import styles from '../../styles/components/landing.module.scss'
import logo from '../../public/images/Logo-Expert-Creat.png';
import logoRed from '../../public/images/logo-red.png';
import logoPurple from '../../public/images/logo-purple.svg';
import logoLinear from '../../public/images/logo-linear.png';
import { CustomSVG } from '../CustomSVG';
import { SelectThemes } from '../SelectThemes';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import cx from 'classnames';
import { ChangeSizeContext } from '../../context/ChangeSize';

type Props = {

}

const Landing = ({}:Props) => {

    const { theme, changeColor} = useContext(ChangeThemesContext)
    const { match, setSize} = useContext(ChangeSizeContext)

   //const element = document.querySelector('h3')

   

    return (
        <div style={{background:changeColor(
            'var(--liner-gradient-pink-violet)',
            '#FFFFFF',
            'var(--black)',
            'var(--black)',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF',
            '#FFFFFF'
        )}} className={styles.body}>
            <header>
                <SelectThemes/>
                <CustomSVG svgName='media'/>
            </header>
            <main className={styles.logo}>
                <div 
                className={styles.image}
                style={{display:theme === '' || 
                theme === 'padrão' || 
                theme === 'roxo-preto-gradiente' || 
                theme === 'roxo-preto-branco'  ? 'block' : 'none'}}>
                    <Image width='350' height='350' src={logo} alt=''/>
                </div>
                <div className={styles.image} style={{display:theme === 'roxo-branco-gradiente' ? 'block' : 'none'}}>     
                    <Image width='350' height='350' src={logoPurple} alt=''/>
                </div>
                <div 
                className={styles.image}
                style={{display:theme === 'branco-vermelho-gradiente' || 
                theme === 'branco-vermelho' || 
                theme  === 'branco-vermelho-roxo' ? 'block' : 'none'}}>
                    <Image width='350' height='350' src={logoRed} alt=''/>                 
                </div>
                <div className={styles.image} style={{display:theme === 'branco-vermelho-roxo-gradiente' ? 'block' : 'none'}}>
                    <Image width='350' height='350' src={logoLinear} alt=''/>
                </div>
                <h3 className={styles.presentation} style={{color:changeColor(
                    '#FFFFFF',
                    'var(--purple)',
                    '#FFFFFF',
                    '#FFFFFF',
                    'var(--black)',
                    'var(--black)',
                    'var(--black)',
                    'var(--purple)'
                )}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </main>
        </div>
    );
};

export default Landing;
