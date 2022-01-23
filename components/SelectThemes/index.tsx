 import * as React from 'react';
import { useEffect, useState } from 'react';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import styles from '../../styles/components/selectThemes.module.scss'
import cx from 'classnames';
import Image from  'next/image'
import arrow from '../../../public/images/select.svg'
import { CustomSVG } from '../CustomSVG';

type Props = {
    
};
export const SelectThemes = (props: Props) => {

    const { ChangeTheme, theme } = React.useContext(ChangeThemesContext)
    const [ showMenu, setShowMenu ] = useState(false)



    let className = cx(styles.select,{
        [styles.showSelect]:showMenu,
        [styles.hiddenSelect]:!showMenu
    })

    let isOver:boolean | null;
    const dismissSelectMenu = ()=>{
        
        if(process.browser){
            const select = document.querySelector('#customSelect') 
            const elements = document.querySelector('#list')

            elements.childNodes.forEach((input) => {  
                input.addEventListener('click', ()=>{
                    setShowMenu(false)
                })
            })

            select.addEventListener('mouseenter', ()=>{
                isOver = true
           })
           select.addEventListener('mouseleave', ()=>{
                isOver = false
            })
            window.addEventListener('click', ()=>{
                if(!isOver){
                    setShowMenu(false)
                }
            })
        }

    }

    const setSelectText = () =>{
         if(theme === 'roxo-branco-gradiente' || theme === 'branco-vermelho-roxo-gradiente'){
            return 'var(--purple)'
         } else  if(theme === 'branco-vermelho-gradiente' || theme === 'branco-vermelho' || theme === 'branco-vermelho-roxo'){
            return 'var(--black)'
         } else return '#FFFFFF'
        
    }

    useEffect(()=>{
        dismissSelectMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isOver])

    return (
        <>
            <div id='customSelect' className={styles.customSelect} >
                   
                        <input type="text" readOnly style={{color:setSelectText()}} onClick={()=>setShowMenu(!showMenu)}  value={theme === "" ? 'temas ▼' : theme+' ▼'}></input>                        {/* <CustomSVG svgName='arrow-down'/> */}
                    
                        <div>
                            <div className={className}>
                                <div id='list'>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="padrão"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="roxo-branco-gradiente"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="roxo-preto-gradiente"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="roxo-preto-branco"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho-gradiente"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho-roxo"/>
                                    <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho-roxo-gradiente"/>
                                </div>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>  
                </div>
        </>
    );
};

// className={cx('toggler', {
//     'toggler--active': this.state.display,
//   })}