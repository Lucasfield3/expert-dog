import Image  from 'next/image'
import React, { MutableRefObject } from 'react';
import styles from '../../styles/components/landing.module.scss'
import logo from '../../../public/images/Logo-Expert-Creat.png';
import { CustomSVG } from '../CustomSVG';

type Props = {

}

const Landing = ({}:Props) => {
    return (
        <div className={styles.bodyPinkGradient}>
            <header>
                <CustomSVG svgName='media'/>
            </header>
            <main className={styles.logo}>
                <Image  src={logo} alt=''/>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
            </main>
        </div>
    );
};

export default Landing;