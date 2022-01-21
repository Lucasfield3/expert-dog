import { createContext, ReactNode, useEffect, useState } from "react";

interface ChangeSizeData {
    setSize:(
        small:string,
        large:string,
        defaultSize:string
    )=>string;
    match:string;
}

export const ChangeSizeContext = createContext({} as ChangeSizeData)

interface ChangeSizeProviderProps {
    children:ReactNode;
}

export const ChangeSizeProvider = ({children}:ChangeSizeProviderProps)=>{

    const [match, setMatch] = useState('')

    let checkMatchesLarge:MediaQueryList | null; 
    let checkMatchesSmall:MediaQueryList | null; 
    const checkSize = ()=>{
        if(process.browser){
            window.addEventListener('change', ()=>{
                checkMatchesLarge = window.matchMedia('(max-width:1350px)')
                checkMatchesSmall = window.matchMedia('(max-width:860px)')
                if(checkMatchesLarge.matches){
                    setMatch('large')

                }
        
                if(checkMatchesSmall.matches){
                    setMatch('small')
                  
                }
    
                if(!checkMatchesLarge.matches && !checkMatchesSmall.matches){
                    setMatch('default')
                   
                }   
            })
        
        }
    }

    const setSize = (small:string, large:string, defaultSize:string)=>{
        if(match === 'large'){
            return large
        }

        if(match === 'small'){
            return small
        }

        if(match === 'default'){
            return defaultSize
        }
    }

    useEffect(() =>{
        checkSize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match])

    return(
        <ChangeSizeContext.Provider value={{setSize, match}}>
            {children}
        </ChangeSizeContext.Provider>
    )

}

