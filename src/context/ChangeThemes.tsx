import * as React from 'react';
import { createContext, useState } from 'react';

type ChangeThemesContextData = {
    ChangeTheme:(e: React.ChangeEvent<HTMLSelectElement>)=>void;
    theme:string;
}

export const ChangeThemesContext = createContext({} as ChangeThemesContextData);

type ProviderProps = {
    children: React.ReactNode;
};
export const ChangeThemesProvider = (props: ProviderProps) => {

    const [ theme, setTheme ] = useState('')

    const ChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        setTheme(e.target.value)
        if(theme === 'padrão'){
            setTheme(theme)
        }
        if(theme === 'roxo-branco-gardiente'){
            setTheme(theme)
        }
        if(theme === 'roxo-preto-gradiente'){
            setTheme(theme)
        }
        if(theme === 'roxo-preto-branco'){
            setTheme(theme)
        }
        if(theme === 'branco-vermelho-gradiente'){
            setTheme(theme)
        }
        if(theme === 'branco-vermelho'){
            setTheme(theme)
        }
        if(theme === 'branco-vermelho-roxo'){
            setTheme(theme)
        }
        if(theme === 'branco-vermelho-roxo-gradiente'){
            setTheme(theme)
        }
        
    }

    return (
        <ChangeThemesContext.Provider value={{ChangeTheme, theme}}>
            {props.children}
        </ChangeThemesContext.Provider>
    );
};