import Image  from 'next/image'
import React, { CSSProperties, useContext, useEffect } from 'react';
import styles from '../../styles/components/landing.module.scss'
import logo from '../../../public/images/Logo-Expert-Creat.png';
import logoRed from '../../../public/images/logo-red.png';
import logoPurple from '../../../public/images/logo-purple.svg';
import logoLinear from '../../../public/images/logo-linear.png';
import { CustomSVG } from '../CustomSVG';
import { SelectThemes } from '../SelectThemes';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import cx from 'classnames';

type Props = {

}

const Landing = ({}:Props) => {

    const { theme, setBack , setColor} = useContext(ChangeThemesContext)

   //const element = document.querySelector('h3')

   

    return (
        <div style={{background:setBack()}} className={styles.body}>
            <header>
                <SelectThemes/>
                <CustomSVG svgName='media'/>
            </header>
            <main className={styles.logo}>
                <div 
                style={{display:theme === '' || 
                theme === 'padrão' || 
                theme === 'roxo-preto-gradiente' || 
                theme === 'roxo-preto-branco'  ? 'block' : 'none'}}>
                    <Image width='300' height='300' src={logo} alt=''/>
                </div>
                <div style={{display:theme === 'roxo-branco-gradiente' ? 'block' : 'none'}}>     
                    <Image width='300' height='300' src={logoPurple} alt=''/>
                </div>
                <div 
                style={{display:theme === 'branco-vermelho-gradiente' || 
                theme === 'branco-vermelho' || 
                theme  === 'branco-vermelho-roxo' ? 'block' : 'none'}}>
                    <Image width='300' height='300' src={logoRed} alt=''/>                 
                </div>
                <div style={{display:theme === 'branco-vermelho-roxo-gradiente' ? 'block' : 'none'}}>
                    <Image width='300' height='300' src={logoLinear} alt=''/>
                </div>
                <h3 className={styles.presentationText} style={{color:setColor()}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </main>
        </div>
    );
};

export default Landing;
