import { useContext } from 'react'
import { ChangeThemesContext } from '../../context/ChangeThemes'
import styles from '../../styles/components/aboutUs.module.scss'
import { CustomSVG } from '../CustomSVG'


export const WrappedCardsAboutUs = ()=>{

    const { theme, changeColor} = useContext(ChangeThemesContext)

    return(
        <div style={{background:changeColor(
            '#A578B6',
            'linear-gradient(180deg, var(--purple) 0%, rgba(248, 248, 248, 0) 100%)',
            'linear-gradient(180deg, var(--purple) 0%, var(--black) 100%)',
            'var(--purple)',
            'linear-gradient(180deg, var(--red) 0%, rgba(255, 255, 255, 0.56) 100%)',
            'var(--red)',
            'var(--red)',
            'linear-gradient(180deg, #FB3842 0%, rgba(114, 44, 141, 0.64) 100%)'
        )}} className={styles.container}>
            <div className={styles.wrapedCards}>
                <span style={{background:theme === 'padrão' || theme === '' ? 'var(--purple)' : 'white'}}/>
                <span style={{background:changeColor(
                    'var(--purple)',
                    'var(--purple)',
                    '#FFFFFF',
                    "#FFFFFF",
                    'var(--red)',
                    '#FFFFFF',
                    "FFFFFF",
                    'var(--red)'
                )}}/>
                <div style={{
                    background:theme.includes('vermelho') ? '#FFFFFF' : '#E3D5E8', 
                    boxShadow:theme.includes('vermelho') ? 'inset 0px 0px 4px 0px #000000' : 'none'
                    }} className={styles.card}>
                    <div>
                        <h1 style={{color:changeColor(
                            '#C2397D',
                            'var(--black)',
                            'var(--black)',
                            'var(--black)',
                            'var(--red)',
                            'var(--red)',
                            'var(--red)',
                            'var(--red)',
                            
                        )}}>Quem nós somos</h1>
                        <p style={{color:changeColor(
                            'var(--purple)',
                            'var(--purple)',
                            'var(--purple)',
                            'var(--purple)',
                            'var(--black)',
                            'var(--black)',
                            'var(--black)',
                            'var(--black)',
                        )}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <CustomSVG color={{dogPaw:theme.includes('vermelho') ? 'var(--soft-red)' : '#FFFFFF'}}svgName='dog-paw'/>
                </div>
            </div>
        </div>
    )

}