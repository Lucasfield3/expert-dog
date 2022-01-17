import * as React from 'react';
import { createContext, useEffect, useState } from 'react';



type ChangeThemesContextData = {
    ChangeTheme:(e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>void;
    theme:string;
    setBack:()=>string;
    setColor:()=>string;
}

export const ChangeThemesContext = createContext({} as ChangeThemesContextData);

type ProviderProps = {
    children: React.ReactNode;
};
export const ChangeThemesProvider = (props: ProviderProps) => {

    const [ theme, setTheme ] = useState('')

    const ChangeTheme = (e:React.MouseEvent<HTMLInputElement, MouseEvent>) =>{
        setTheme(theme === "" ? e.currentTarget.value : e.currentTarget.value) 
    }

    
  
    const setColor = ():string=>{
        if(theme === 'padrão' || theme === ''){
            return '#FFFFFF'
        }
        if(theme === 'roxo-branco-gradiente'){
            return '#722C8D'
        }
        if(theme === 'roxo-preto-gradiente'){
            return '#FFFFFF'
        }
        if(theme === 'roxo-preto-branco'){
            return '#FFFFFF'
        }
        if(theme === 'branco-vermelho-gradiente'){
            return '#2E2727'
        }
        if(theme === 'branco-vermelho'){
            return '#2E2727'
        }   
        if(theme === 'branco-vermelho-roxo'){
            return '#2E2727'
        }
        if(theme === 'branco-vermelho-roxo-gradiente'){
            return '#722C8D'
        }
    }

  

    const setBack = ()=>{
        if(theme === 'padrão' || theme === ''){
            
            return  'var(--liner-gradient-pink-violet)'
        } 
        if(theme === 'roxo-branco-gradiente'){ 
            return '#FFFFFF'
        }
        if(theme === 'roxo-preto-gradiente'){
            return '#2E2727'
        }
        if(theme === 'roxo-preto-branco'){
            return '#2E2727'    
        } 
        if(theme === 'branco-vermelho-gradiente'){
            return '#FFFFFF'
        } 
        if(theme === 'branco-vermelho'){
            return '#FFFFFF'
        } 
        if(theme === 'branco-vermelho-roxo'){
            
            return '#FFFFFF'
        } 
        if(theme === 'branco-vermelho-roxo-gradiente'){
            
            return '#FFFFFF'
        } 
    }


    useEffect(() =>{
        setTheme(theme)
        setColor()
        setBack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

    return (
        <ChangeThemesContext.Provider value={{ChangeTheme, theme, setBack, setColor}}>
            {props.children}
        </ChangeThemesContext.Provider>
    );
};
