import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from '../../styles/components/fixedMenu.module.scss'
import { CustomSVG } from '../CustomSVG';
import cx from 'classnames';


type Props = {
    toHome:()=>void;
    toAboutUs:()=>void;
    toFeedback:()=>void;
    toPhotos:()=>void;
    toContact:()=>void;
};
export const FixedMenu = (props:Props) => {

    const [ isMenuShowing, setIsMenuShowing ] = useState(false)

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

        

    
    return (
        <div className={classNames}>
            <div onClick={props.toAboutUs}>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='about-us'/>
                <p>Sobre nós</p>
            </div>
            <div  onClick={props.toFeedback}>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='feedback'/>
                <p>Feed backs</p>
            </div>
            <div  onClick={props.toHome}>
                <span></span>
                <CustomSVG color={{menu:'violet'}} svgName='dog-house'/>
                <p>Home</p>
            </div>
            <div onClick={props.toContact}>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='phone'/>
                <p>Fale conosco</p>
            </div>
            <div onClick={props.toPhotos}>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='camera'/>
                <p>Galeria</p>
            </div>
        </div>
    );
};