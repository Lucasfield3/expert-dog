
import * as React from 'react';
import { CustomSVG } from '../CustomSVG';
import styles from '../../styles/components/feed.module.scss'
import Carousel from 'react-elastic-carousel';
import { ChangeThemesContext } from '../../context/ChangeThemes';
import { CSSProperties, useEffect } from 'react';

type Props = {
    
};
export const WrappedCardsFeed = (props: Props) => {

    const { theme, changeColor} = React.useContext(ChangeThemesContext)

    const breakPoints = [
        {width: 1, itemsToShow:1}
      ]

    const myStyle= {
        myCard:{
            background:theme.includes('vermelho') ? '#FFFFFF' : '#E3D5E8', 
            boxShadow:theme.includes('vermelho') ? 'inset 0px 0px 4px 0px #000000' : 'none'
        } as CSSProperties,
        mySpan1:{
            background:changeColor(
                'var(--purple)',
                'var(--purple)',
                'white',
                'var(--black)',
                'var(--red)',
                'var(--red)',
                'white',
                'white'
            )
        } as CSSProperties,
        mySpan2:{
            background:changeColor(
                'var(--purple)',
                'white',
                'white',
                'var(--black)',
                'white',
                'var(--red)',
                'white',
                'var(--purple)'
            )
        } as CSSProperties,
        myH1:{
            color:changeColor(
                '#C73478',
                'var(--black)',
                'var(--black)',
                'var(--black)',
                'var(--red)',
                'var(--red)',
                'var(--purple)',
                'var(--purple)'
            )
        } as CSSProperties,
        myP:{
            color:changeColor(
                'var(--purple)',
                'var(--purple)',
                'var(--purple)',
                'var(--purple)',
                'var(--black)',
                'var(--black)',
                'var(--black)',
                'var(--black)'
            )
        } as CSSProperties,
        mySvgFillPaw:changeColor(
                'white',
                'white',
                'white',
                'white',
                'var(--soft-red)',
                'var(--soft-red)',
                '#E3D5E8',
                '#E3D5E8'
                ),
    } 

    // const changeCarouselColor = () =>{
    //     if(process.browser){
    //         const divMain= document.querySelector<HTMLElement>('.rec-dot')
    //         const buttonActive = document.querySelector<HTMLElement>(':not(.rec .rec-arrow) [tabindex = "-1"]')
    //         const button = document.querySelector<HTMLElement>(':not(.rec .rec-arrow) [tabindex = "0"]')
    //         button.addEventListener('change')
    //         buttonActive.style.background = changeColor(
    //             'var(--purple)',
    //             'var(--purple)',
    //             'var(--purple)',
    //             'var(--purple)',
    //             'white',
    //             'var(--red)',
    //             'white',
    //             'white'
    //         )
    //         buttonActive.style.boxShadow = changeColor(
    //             '0 0 1px 3px var(--purple)',
    //             '0 0 1px 3px var(--purple)',
    //             '0 0 1px 3px var(--purple)',
    //             '0 0 1px 3px var(--purple)',
    //             '0 0 1px 3px white',
    //             '0 0 1px 3px var(--red)',
    //             '0 0 1px 3px white',
    //             '0 0 1px 3px white'
    //         )
          
    //            button.style.backgroundColor = changeColor(
    //                  'white',
    //                  'white',
    //                  'white',
    //                  'white',
    //                  'var(--red)',
    //                  'white',
    //                  'var(--purple)',
    //                  'var(--purple)',
    //              )
    //              button.style.boxShadow = changeColor(
    //                  '0 0 1px 3px var(--purple)',
    //                  '0 0 1px 3px var(--purple)',
    //                  '0 0 1px 3px var(--purple)',
    //                  '0 0 1px 3px var(--purple)',
    //                  '0 0 1px 3px white',
    //                  '0 0 1px 3px var(--red)',
    //                  '0 0 1px 3px white',
    //                  '0 0 1px 3px white'
    //              )

           
                 
            
    //     }
    // }

    // useEffect(() =>{
    //     changeCarouselColor()
    // }, [theme])
    
 
    return (
        <div style={{background:changeColor(
            'linear-gradient(180deg, #A578B6 0%, #C73478 174%)',
            'linear-gradient(180deg, #FFFFFF 0%, #722C8D 100%)',
            'linear-gradient(180deg, #30272C 0%, #722C8D 100%)',
            'white',
            'linear-gradient(180deg, #FFFFFF 0%, #FD0D16 100%)',
            'white',
            'var(--purple)',
            'linear-gradient(180deg, #A577B5 0%, #FC3841 100%)'
        )}} className={styles.container}>
             <Carousel className={styles.carousel} showArrows={false} isRTL={false} breakPoints={breakPoints}>
           
                <div className={styles.wrapedCards}>
                    <span style={myStyle.mySpan1}></span>
                    <span style={myStyle.mySpan2}></span>
                    <div style={myStyle.myCard} className={styles.card}>
                        <div>
                            <h1 style={myStyle.myH1}>O que falam sobre nós.</h1>
                            <CustomSVG color={{aspas:myStyle.mySvgFillPaw === 'var(--soft-red)' ? 'var(--red)': 'var(--purple)'}} svgName='aspas' classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p style={myStyle.myP} className={styles.aspasPadding}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <CustomSVG color={{dogPaw:myStyle.mySvgFillPaw}} svgName='dog-paw'/>
                    </div>
                </div>
                <div className={styles.wrapedCards}>
                    <span style={myStyle.mySpan1}></span>
                    <span style={myStyle.mySpan2}></span>
                    <div style={myStyle.myCard} className={styles.card}>
                        <div>
                            <h1 style={myStyle.myH1}>O que falam sobre nós.</h1>
                            <CustomSVG color={{aspas:myStyle.mySvgFillPaw === 'var(--soft-red)' ? 'var(--red)': 'var(--purple)'}} svgName='aspas' classNameAspas2={styles.aspas2} classNameAspas1={styles.aspas1}/>
                            <p style={myStyle.myP} className={styles.aspasPadding}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <CustomSVG color={{dogPaw:myStyle.mySvgFillPaw}} svgName='dog-paw'/>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};