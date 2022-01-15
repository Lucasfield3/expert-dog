 import * as React from 'react';
import { useEffect, useState } from 'react';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import styles from '../../styles/components/selectThemes.module.scss'
import cx from 'classnames';

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
    let clickedOut = false
    const dismissSelectMenu = ()=>{
        if(process.browser){
            const select = document.querySelector('#customSelect') 
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

    


    useEffect(()=>{
        dismissSelectMenu()
    },[isOver])

    return (
        <>
            <div id='customSelect' className={styles.customSelect} >
                    <input type="text" id='defaultInput' onClick={()=>setShowMenu(!showMenu)} readOnly value={theme === "" ? 'temas' : theme}/>
                        <div>
                            <div className={className}>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="padrao"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="roxo-branco-gradiente"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="roxo-preto-gradiente"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="roxo-preto-branco"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho-gradiente"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho-roxo"/>
                                <input  type="text" readOnly  onClick={(e)=> ChangeTheme(e)} value="branco-vermelho-roxo-gradiente"/>
                            </div>
                        </div>  
                </div>
        </>
    );
};

// className={cx('toggler', {
//     'toggler--active': this.state.display,
//   })}