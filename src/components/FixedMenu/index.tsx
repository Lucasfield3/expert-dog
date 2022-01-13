import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from '../../styles/components/fixedMenu.module.scss'
import { CustomSVG } from '../CustomSVG';
import cx from 'classnames';


type Props = {
    
};
export const FixedMenu = (props: Props) => {

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
            <div>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='about-us'/>
                <p>Sobre nós</p>
            </div>
            <div>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='feedback'/>
                <p>Feed backs</p>
            </div>
            <div>
                <span></span>
                <CustomSVG color={{menu:'violet'}} svgName='dog-house'/>
                <p>Home</p>
            </div>
            <div>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='phone'/>
                <p>Fale conosco</p>
            </div>
            <div>
                <span></span>
                <CustomSVG color={{menu:'#722C8D'}} svgName='camera'/>
                <p>Galeria</p>
            </div>
        </div>
    );
};