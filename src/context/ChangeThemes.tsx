import * as React from 'react';
import { createContext, useEffect, useState } from 'react';


type ChangeThemesContextData = {
    ChangeTheme:(e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>void;
    theme:string;
    changeColor:(
        padrao:string, 
        purpleWhiteGradiente:string, 
        purpleBlackGradiente:string, 
        purpleBlackWhite:string,
        whiteRedGradiente:string,
        whiteRed:string,
        whiteRedPurple:string,
        whiteRedPurpleGradiente:string,
    )=>string;
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

    const changeColor = (
        padrao:string, 
        purpleWhiteGradiente:string, 
        purpleBlackGradiente:string, 
        purpleBlackWhite:string,
        whiteRedGradiente:string,
        whiteRed:string,
        whiteRedPurple:string,
        whiteRedPurpleGradiente:string,
        )=>{
        if(theme === 'padrão' || theme === ''){
            return padrao
        }
        if(theme === 'roxo-branco-gradiente'){
            return purpleWhiteGradiente
        }
        if(theme === 'roxo-preto-gradiente'){
            return purpleBlackGradiente
        }
        if(theme === 'roxo-preto-branco'){
            return purpleBlackWhite
        }
        if(theme === 'branco-vermelho-gradiente'){
            return whiteRedGradiente
        }
        if(theme === 'branco-vermelho'){
            return whiteRed
        }   
        if(theme === 'branco-vermelho-roxo'){
            return whiteRedPurple
        }
        if(theme === 'branco-vermelho-roxo-gradiente'){
            return whiteRedPurpleGradiente
        }
    }
  
    useEffect(() =>{
        setTheme(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

    return (
        <ChangeThemesContext.Provider value={{ChangeTheme, theme, changeColor}}>
            {props.children}
        </ChangeThemesContext.Provider>
    );
};
