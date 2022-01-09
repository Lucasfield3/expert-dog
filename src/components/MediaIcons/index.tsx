import { SVGAttributes } from "react"

import styles from '../../styles/components/mediaIcons.module.scss'

type SVGProps = SVGAttributes<SVGSVGElement> & {
    theme?:string;
}

export const MediaIcons = (props: SVGProps)=>{

    return (
        <>
             <svg {...props} className={styles.svgColors} width="23" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_201_10)">
                <path d="M15.2596 0.769226H5.97115C2.65385 0.769226 0 3.42307 0 6.74038V10.7211V16.0288C0 19.3461 2.65385 22 5.97115 22H15.2596C18.5769 22 21.2308 19.3461 21.2308 16.0288V10.7211V6.74038C21.2308 3.42307 18.5769 0.769226 15.2596 0.769226ZM10.6154 7.40384C12.8048 7.40384 14.5962 9.19519 14.5962 11.3846C14.5962 13.574 12.8048 15.3654 10.6154 15.3654C8.42596 15.3654 6.63462 13.574 6.63462 11.3846C6.63462 9.19519 8.42596 7.40384 10.6154 7.40384ZM14.5962 5.41346C14.5962 4.68365 15.1933 4.08653 15.9231 4.08653C16.6529 4.08653 17.25 4.68365 17.25 5.41346C17.25 6.14326 16.6529 6.74038 15.9231 6.74038C15.1933 6.74038 14.5962 6.14326 14.5962 5.41346Z" fill="white"/>
                <circle cx="10.6154" cy="11.3846" r="3.98077" fill="#722C8D"/>
                <circle cx="15.9231" cy="5.31617" r="1.32692" fill="#722C8D"/>
                </g>
                <rect x="0.5" y="1.26923" width="20.2308" height="20.2308" rx="4.5" stroke="#722C8D" strokeMiterlimit="1.51733"/>
                <defs>
                <clipPath id="clip0_201_10">
                <rect y="0.769226" width="21.2308" height="21.2308" rx="5" fill="white"/>
                </clipPath>
                </defs>
            </svg>

            <svg {...props} className={styles.svgColors} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_201_14)">
                <path d="M18.8718 0H2.35897C1.05615 0 0 1.05615 0 2.35897V18.8718C0 20.1746 1.05615 21.2308 2.35897 21.2308H18.8718C20.1746 21.2308 21.2308 20.1746 21.2308 18.8718V2.35897C21.2308 1.05615 20.1746 0 18.8718 0Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.8292 3.9564V6.7018L16.1998 6.70604C14.9226 6.70604 14.6765 7.31283 14.6765 8.19968V10.1643H17.7189L17.3243 13.2364H14.6765V21.2308H11.5029V13.2364H8.84619V10.1643H11.5029V7.8984C11.5029 5.26757 13.1064 3.83334 15.4572 3.83334C16.5779 3.83334 17.5449 3.91821 17.8292 3.9564Z" fill="#722C8D"/>
                </g>
                <rect x="0.5" y="0.5" width="20.2308" height="20.2308" rx="3.5" stroke="#722C8D"/>
                <defs>
                <clipPath id="clip0_201_14">
                <rect width="21.2308" height="21.2308" rx="4" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </>
    )

}