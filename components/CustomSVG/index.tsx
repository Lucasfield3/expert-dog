import { SVGAttributes, useContext } from "react"
import styles from '../../styles/components/svgIcons.module.scss'
import Image  from 'next/image'
import dogHouseViolet from '../../public/images/dog-house-violet.svg'
import dogHouseRed from '../../public/images/dog-house-red.svg'
import { ChangeThemesContext } from "../../context/ChangeThemes"



type SVGProps = {
    color?:{
        whatsapp?:string;
        dogPaw?:string;
        face?:string;
        insta?:string;
        logo?:string;
        menu?:string;
        aspas?:string;
    };
    svgName: string;
    svgprops?:SVGAttributes<SVGSVGElement>;
    classNameAspas1?: string;
    classNameAspas2?: string;
}

export const CustomSVG = (props: SVGProps)=>{

    const { theme } = useContext(ChangeThemesContext)

    const mystyle = theme.includes('vermelho') && theme !== 'branco-vermelho-roxo-gradiente' ? '#FD0D16' : 'var(--purple)'

    return(
        <>
           {props.svgName === 'dog-paw' &&  <svg {...props.svgprops} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1001 33.5099C37.9122 31.438 35.0134 30.2832 32.0001 30.2832C28.9868 30.2832 26.088 31.438 23.9001 33.5099L14.1301 42.7499C8.5301 47.8399 12.5701 57.5699 20.1301 57.1899C24.2301 57.0799 27.5601 54.9799 31.9901 55.0599C36.5801 54.9799 39.9901 56.8299 44.1101 57.1899C51.5401 57.3599 55.3801 47.7399 49.8601 42.7499L40.1001 33.5099Z" fill={props.color.dogPaw}/>
                <path d="M56.9201 19.93C53.1001 19.18 50.1801 23.43 49.4201 27.09C47.1401 38.42 58.1201 40.58 60.6901 29.59C61.7401 24.88 60.0801 20.63 56.9201 19.93Z" fill={props.color.dogPaw}/>
                <path d="M40.7301 26.05C44.5301 26.05 47.6201 21.73 47.6201 16.43C47.2401 3.66998 34.2201 3.66998 33.8501 16.43C33.8501 21.73 36.9401 26.05 40.7301 26.05Z" fill={props.color.dogPaw}/>
                <path d="M14.58 27.09C13.83 23.43 10.9 19.18 7.08004 19.93C3.86238e-05 21.72 3.00004 36.81 9.92004 36.85C13.84 36.72 15.65 32.17 14.58 27.09Z" fill={props.color.dogPaw}/>
                <path d="M23.27 26.05C27.06 26.05 30.15 21.73 30.15 16.43C29.78 3.66998 16.76 3.66998 16.38 16.43C16.38 21.73 19.47 26.05 23.27 26.05Z" fill={props.color.dogPaw}/>
            </svg>}

           {props.svgName === 'whatsapp' && <svg {...props.svgprops} width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>whatsapp [#128]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" fill={props.color.whatsapp}>
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]"></path>
                        </g>
                    </g>
                </g>
            </svg>}

            {props.svgName === 'aspas1' && 
            <>
            <svg {...props.svgprops} className={props.classNameAspas1} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.306 19.6078C23.306 20.8337 22.3122 21.8275 21.0863 21.8275H15.9071C14.6812 21.8275 13.6874 20.8337 13.6874 19.6078V10.6531H21.0863C22.3122 10.6531 23.306 11.6469 23.306 12.8728V19.6078Z" fill={props.color.aspas}/>
                <path d="M9.98795 19.6078C9.98795 20.8337 8.99416 21.8275 7.76827 21.8275H2.58903C1.36314 21.8275 0.369354 20.8337 0.369354 19.6078V10.6531H7.76827C8.99416 10.6531 9.98795 11.6469 9.98795 12.8728V19.6078Z" fill={props.color.aspas}/>
                <path d="M15.2264 14.5211L15.2264 7.07515C15.2264 4.72762 16.3904 2.64392 18.6327 2.26638C19.1433 2.18041 19.7196 2.10491 20.3671 2.04784" stroke={props.color.aspas} strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.90835 14.5211L1.90835 7.07515C1.90836 4.72762 3.07239 2.64392 5.31466 2.26638C5.82522 2.18041 6.40156 2.10491 7.04909 2.04784" stroke={props.color.aspas} strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </>}
            {props.svgName === 'aspas2' && 
            <>
            <svg {...props.svgprops} className={props.classNameAspas2} width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.21968C0 0.993783 0.993783 0 2.21968 0H7.39892C8.62481 0 9.61859 0.993783 9.61859 2.21968V9.61859H2.21968C0.993783 9.61859 0 8.62481 0 7.39892V2.21968Z" fill={props.color.aspas}/>
                <path d="M13.3181 2.21968C13.3181 0.993783 14.3118 0 15.5377 0H20.717C21.9429 0 22.9366 0.993783 22.9366 2.21968V9.61859H15.5377C14.3118 9.61859 13.3181 8.62481 13.3181 7.39892V2.21968Z" fill={props.color.aspas}/>
                <path d="M8.07956 6.28901L8.07956 11.7714C8.07956 14.3417 6.64229 16.6108 4.09002 16.9146C3.7342 16.9569 3.35093 16.9946 2.93883 17.0259" stroke={props.color.aspas} strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3977 6.28901L21.3977 11.7714C21.3977 14.3417 19.9604 16.6108 17.4081 16.9146C17.0523 16.9569 16.669 16.9946 16.2569 17.0259" stroke={props.color.aspas} strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </>}
            {props.svgName === 'media' &&  
            <>
                <a title='instagram' target='_blank' href="https://www.instagram.com/expertdog_oficial" rel="noreferrer">
                    <svg {...props.svgprops} className={styles.svgColors} width="23" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_201_10)">
                        <path d="M15.2596 0.769226H5.97115C2.65385 0.769226 0 3.42307 0 6.74038V10.7211V16.0288C0 19.3461 2.65385 22 5.97115 22H15.2596C18.5769 22 21.2308 19.3461 21.2308 16.0288V10.7211V6.74038C21.2308 3.42307 18.5769 0.769226 15.2596 0.769226ZM10.6154 7.40384C12.8048 7.40384 14.5962 9.19519 14.5962 11.3846C14.5962 13.574 12.8048 15.3654 10.6154 15.3654C8.42596 15.3654 6.63462 13.574 6.63462 11.3846C6.63462 9.19519 8.42596 7.40384 10.6154 7.40384ZM14.5962 5.41346C14.5962 4.68365 15.1933 4.08653 15.9231 4.08653C16.6529 4.08653 17.25 4.68365 17.25 5.41346C17.25 6.14326 16.6529 6.74038 15.9231 6.74038C15.1933 6.74038 14.5962 6.14326 14.5962 5.41346Z" fill="white"/>
                        <circle cx="10.6154" cy="11.3846" r="3.98077" fill={mystyle}/>
                        <circle cx="15.9231" cy="5.31617" r="1.32692" fill={mystyle}/>
                        </g>
                        <rect x="0.5" y="1.26923" width="20.2308" height={theme.includes('preto') || theme.includes('padr??o') || theme === '' ? '0' : '20.2308'} rx="4.5" stroke={mystyle} strokeMiterlimit="1.51733"/>
                        <defs>
                        <clipPath id="clip0_201_10">
                        <rect y="0.769226" width="21.2308" height="21.2308" rx="5" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>

                <a title='facebook' target='_blank' href="https://www.facebook.com/expertdog/" rel="noreferrer">
                    <svg {...props.svgprops} className={styles.svgColors} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_201_14)">
                        <path d="M18.8718 0H2.35897C1.05615 0 0 1.05615 0 2.35897V18.8718C0 20.1746 1.05615 21.2308 2.35897 21.2308H18.8718C20.1746 21.2308 21.2308 20.1746 21.2308 18.8718V2.35897C21.2308 1.05615 20.1746 0 18.8718 0Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.8292 3.9564V6.7018L16.1998 6.70604C14.9226 6.70604 14.6765 7.31283 14.6765 8.19968V10.1643H17.7189L17.3243 13.2364H14.6765V21.2308H11.5029V13.2364H8.84619V10.1643H11.5029V7.8984C11.5029 5.26757 13.1064 3.83334 15.4572 3.83334C16.5779 3.83334 17.5449 3.91821 17.8292 3.9564Z" fill={mystyle}/>
                        </g>
                        <rect x="0.5" y="0.5" width="20.2308" height={theme.includes('preto') || theme.includes('padr??o') || theme === '' ? '0' : '20.2308'} rx="3.5" stroke={mystyle} />
                        <defs>
                        <clipPath id="clip0_201_14">
                        <rect width="21.2308" height="21.2308" rx="4" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </>}
            {props.svgName  === 'dog-house' && <Image width="25" height="25" src={props.color.menu === 'var(--purple)' ? dogHouseViolet : dogHouseRed} alt="dog-house"/>}

            {props.svgName  === 'phone' && 
            <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>phone</title>
                <desc>Created with Sketch.</desc>
                <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Rounded" transform="translate(-749.000000, -1263.000000)">
                        <g id="Communication" transform="translate(100.000000, 1162.000000)">
                            <g id="-Round-/-Communication-/-phone" transform="translate(646.000000, 98.000000)">
                                <g>
                                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                    <path d="M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.06,13.63 6.62,10.79 L8.47,8.94 C8.9,8.51 9.11,7.91 9.04,7.3 L8.75,4.78 C8.63,3.77 7.78,3.01 6.76,3.01 L5.03,3.01 C3.9,3.01 2.96,3.95 3.03,5.08 C3.56,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.99,20.1 20.99,18.97 L20.99,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z" id="????Icon-Color" fill={props.color.menu}></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>}
            {props.svgName  === 'feedback' &&  
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3.01245C6.5875 3.01245 0 7.33745 0 12.8625C0 17.35 4.4125 21.15 10.8625 22.3375L11.1125 25.25C11.147 25.6354 11.2983 26.0011 11.5462 26.2982C11.7942 26.5953 12.1269 26.8096 12.5 26.9125C12.679 26.9627 12.8641 26.988 13.05 26.9875C13.3294 26.9795 13.6035 26.9091 13.8523 26.7815C14.101 26.6539 14.318 26.4723 14.4875 26.25L17.4375 22.5C24.75 21.8125 30 17.775 30 12.8625C30 7.33745 23.4125 3.01245 15 3.01245ZM16.7 20.1375H16.1625L13.475 23.4875L13.175 20.1125L12.1875 20C6.575 19.2374 2.5 16.25 2.5 12.8625C2.5 8.87495 8.225 5.51245 15 5.51245C21.775 5.51245 27.5 8.87495 27.5 12.8625C27.5 16.45 22.75 19.6375 16.7 20.1375Z" fill={props.color.menu}/>
                <ellipse cx="15" cy="13" rx="14" ry="9" fill={props.color.menu}/>
                <ellipse cx="14" cy="22.5" rx="2" ry="1.5" fill={props.color.menu}/>
            </svg>          
            }
            {props.svgName  === 'camera' && 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <title>Camera, Device, Gadget, Image, Photo, Photography, Picture</title>
                <g id="Layer_5" data-name="Layer 5">
                    <path fill={props.color.menu} d="M44,35A11,11,0,1,1,33,24,11,11,0,0,1,44,35ZM62,18V52a6,6,0,0,1-6,6H8a6,6,0,0,1-6-6V18a6,6,0,0,1,6-6H56A6,6,0,0,1,62,18ZM16,22a4,4,0,1,0-4,4A4,4,0,0,0,16,22ZM48,35A15,15,0,1,0,33,50,15,15,0,0,0,48,35ZM43,8a2,2,0,0,0-2-2H23a2,2,0,0,0,0,4H41A2,2,0,0,0,43,8Z"/>
                </g>
            </svg>
            }

            {props.svgName  === 'about-us' &&
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="548.169px" height="548.169px" viewBox="0 0 548.169 548.169" enableBackground='new 0 0 548.169 548.169'
            xmlSpace="preserve">
                <g>
                    <g>
                        <path fill={props.color.menu} d="M109.634,164.452c20.179,0,37.402-7.135,51.674-21.411c14.277-14.275,21.416-31.503,21.416-51.678
                            c0-20.173-7.139-37.401-21.416-51.678c-14.272-14.275-31.496-21.414-51.674-21.414c-20.177,0-37.401,7.139-51.676,21.414
                            C43.684,53.962,36.545,71.186,36.545,91.363c0,20.179,7.139,37.403,21.413,51.678C72.233,157.313,89.457,164.452,109.634,164.452z
                            "/>
                        <path fill={props.color.menu} d="M196.569,278.519c21.413,21.406,47.248,32.114,77.516,32.114c30.269,0,56.103-10.708,77.515-32.114
                            c21.409-21.42,32.117-47.258,32.117-77.52c0-30.264-10.708-56.101-32.117-77.515c-21.412-21.414-47.246-32.121-77.515-32.121
                            c-30.268,0-56.105,10.709-77.516,32.121c-21.411,21.411-32.12,47.248-32.12,77.515S175.158,257.102,196.569,278.519z"/>
                        <path fill={props.color.menu} d="M438.543,164.452c20.17,0,37.397-7.135,51.671-21.411c14.274-14.275,21.409-31.503,21.409-51.678
                            c0-20.173-7.135-37.401-21.409-51.678c-14.273-14.275-31.501-21.414-51.671-21.414c-20.184,0-37.407,7.139-51.682,21.414
                            c-14.271,14.277-21.409,31.501-21.409,51.678c0,20.179,7.139,37.403,21.409,51.678
                            C401.136,157.313,418.359,164.452,438.543,164.452z"/>
                        <path fill={props.color.menu} d="M512.763,164.456c-1.136,0-5.276,1.999-12.415,5.996c-7.132,3.999-16.416,8.044-27.833,12.137
                            c-11.416,4.089-22.747,6.136-33.972,6.136c-12.758,0-25.406-2.187-37.973-6.567c0.945,7.039,1.424,13.322,1.424,18.842
                            c0,26.457-7.71,50.819-23.134,73.089c30.841,0.955,56.056,13.134,75.668,36.552h38.256c15.605,0,28.739-3.863,39.396-11.57
                            c10.657-7.703,15.989-18.986,15.989-33.83C548.172,198.047,536.376,164.452,512.763,164.456z"/>
                        <path fill={props.color.menu} d="M470.096,395.284c-1.999-11.136-4.524-21.464-7.57-30.978c-3.046-9.521-7.139-18.794-12.271-27.836
                            c-5.141-9.034-11.044-16.748-17.706-23.127c-6.667-6.379-14.805-11.464-24.414-15.276c-9.609-3.806-20.225-5.708-31.833-5.708
                            c-1.906,0-5.996,2.047-12.278,6.14c-6.283,4.089-13.224,8.665-20.841,13.702c-7.615,5.037-17.789,9.609-30.55,13.702
                            c-12.762,4.093-25.608,6.14-38.544,6.14c-12.941,0-25.791-2.047-38.544-6.14c-12.756-4.093-22.936-8.665-30.55-13.702
                            c-7.616-5.037-14.561-9.613-20.841-13.702c-6.283-4.093-10.373-6.14-12.279-6.14c-11.609,0-22.22,1.902-31.833,5.708
                            c-9.613,3.812-17.749,8.897-24.41,15.276c-6.667,6.372-12.562,14.093-17.705,23.127c-5.137,9.042-9.229,18.315-12.275,27.836
                            c-3.045,9.514-5.564,19.842-7.566,30.978c-2,11.136-3.331,21.505-3.997,31.121c-0.667,9.613-0.999,19.466-0.999,29.554
                            c0,22.836,6.945,40.874,20.839,54.098c13.899,13.223,32.363,19.842,55.389,19.842h249.535c23.028,0,41.49-6.619,55.392-19.842
                            c13.894-13.224,20.841-31.262,20.841-54.098c0-10.088-0.335-19.938-0.992-29.554C473.418,416.789,472.087,406.419,470.096,395.284
                            z"/>
                        <path fill={props.color.menu} d="M169.303,274.088c-15.418-22.27-23.125-46.632-23.122-73.089c0-5.52,0.477-11.799,1.427-18.842
                            c-12.564,4.377-25.221,6.567-37.974,6.567c-11.23,0-22.552-2.046-33.974-6.136c-11.417-4.093-20.699-8.138-27.834-12.137
                            c-7.138-3.997-11.281-5.996-12.422-5.996C11.801,164.456,0,198.051,0,265.24c0,14.844,5.33,26.127,15.987,33.83
                            c10.66,7.707,23.794,11.563,39.397,11.563h38.26C113.251,287.222,138.467,275.042,169.303,274.088z"/>
                    </g>
                </g>
            </svg>}

            {props.svgName === 'arrow-down' && 
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.706306" y1="0.966366" x2="10.9664" y2="10.2937" stroke="white" strokeLinecap="round"/>
            <line x1="0.5" y1="-0.5" x2="14.3661" y2="-0.5" transform="matrix(-0.73994 0.672673 0.672673 0.73994 22 1)" stroke="white" strokeLinecap="round"/>
            </svg>
            
            }
        </>
    )

}