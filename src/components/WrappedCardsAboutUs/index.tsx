import { useContext } from 'react'
import { ChangeThemesContext } from '../../context/ChangeThemes'
import styles from '../../styles/components/aboutUs.module.scss'
import { CustomSVG } from '../CustomSVG'


export const WrappedCardsAboutUs = ()=>{

    const { theme, changeColor} = useContext(ChangeThemesContext)

    return(
        <div style={{background:changeColor(
            '#A578B6',
            'linear-gradient(180deg, #722C8D 0%, rgba(248, 248, 248, 0) 100%)',
            'linear-gradient(180deg, #722C8D 0%, #2E2727 100%)',
            '#722C8D',
            'linear-gradient(180deg, #FD0D16 0%, rgba(255, 255, 255, 0.56) 100%)',
            '#FD0D16',
            '#FD0D16',
            'linear-gradient(180deg, #FB3842 0%, rgba(114, 44, 141, 0.64) 100%)'
        )}} className={styles.container}>
            <div className={styles.wrapedCards}>
                <span style={{background:theme === 'padrão' || theme === '' ? 'var(--violet)' : 'white'}}></span>
                <span style={{background:changeColor(
                    'var(--violet)',
                    'var(--violet)',
                    '#FFFFFF',
                    "#FFFFFF",
                    '#FD0D16',
                    '#FFFFFF',
                    "FFFFFF",
                    '#FD0D16'
                )}}></span>
                <div style={{
                    background:theme.includes('vermelho') ? '#FFFFFF' : '#E3D5E8', 
                    border:theme.includes('vermelho') ? '1px solid rgba(0, 0, 0, 0.24)' : 'none'
                    }} className={styles.card}>
                    <div>
                        <h1 style={{color:changeColor(
                            '#C2397D',
                            '#2E2727',
                            '#2E2727',
                            '#2E2727',
                            '#FD0D16',
                            '#FD0D16',
                            '#FD0D16',
                            '#FD0D16',
                            
                        )}}>Quem nós somos</h1>
                        <p style={{color:changeColor(
                            'var(--violet)',
                            'var(--violet)',
                            'var(--violet)',
                            'var(--violet)',
                            '#2E2727',
                            '#2E2727',
                            '#2E2727',
                            '#2E2727',
                        )}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <CustomSVG color={{dogPaw:theme.includes('vermelho') ? 'rgba(253, 13, 22, 0.13)' : '#FFFFFF'}}svgName='dog-paw'/>
                </div>
            </div>
        </div>
    )

}