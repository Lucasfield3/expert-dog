import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from '../../styles/components/fixedMenu.module.scss'
import { CustomSVG } from '../CustomSVG';
import cx from 'classnames';
import { ChangeThemesContext } from '../../context/ChangeThemes';


type Props = {
    toHome:()=>void;
    toAboutUs:()=>void;
    toFeedback:()=>void;
    toPhotos:()=>void;
    toContact:()=>void;
};
export const FixedMenu = (props:Props) => {

    const [ isMenuShowing, setIsMenuShowing ] = useState(false)
    const {changeColor, theme} = React.useContext(ChangeThemesContext)

    let classNames = cx(styles.menu, {
      [styles.showMenu]:isMenuShowing,
  })
  
      useEffect(()=>{
          window.addEventListener('scroll', ()=> {
              if(window.scrollY > 0){
                  setIsMenuShowing(true)
              }else{
                  setIsMenuShowing(false)
              }
          })
        }, [])


    const colorIcons = theme.includes('vermelho') ? 'var(--red)' : 'var(--purple)'


    
    return (
        <div className={classNames}>
            <div onClick={props.toAboutUs}>
                <span style={{background:colorIcons}}></span>
                <CustomSVG color={{menu:colorIcons}} svgName='about-us'/>
                <p className={styles.text}>Sobre nós</p>
            </div>
            <div  onClick={props.toFeedback}>
                <span style={{background:colorIcons}}></span>
                <CustomSVG color={{menu:colorIcons}} svgName='feedback'/>
                <p className={styles.text}>Feed backs</p>
            </div>
            <div  onClick={props.toHome}>
                <span style={{background:colorIcons}}></span>
                <CustomSVG color={{menu:colorIcons}} svgName='dog-house'/>
                <p className={styles.text}>Home</p>
            </div>
            <div onClick={props.toContact}>
                <span style={{background:colorIcons}}></span>
                <CustomSVG color={{menu:colorIcons}} svgName='phone'/>
                <p className={styles.text}>Fale conosco</p>
            </div>
            <div onClick={props.toPhotos}>
                <span style={{background:colorIcons}}></span>
                <CustomSVG color={{menu:colorIcons}} svgName='camera'/>
                <p className={styles.text}>Galeria</p>
            </div>
        </div>
    );
};