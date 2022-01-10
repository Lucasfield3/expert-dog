import { SVGAttributes } from "react"


type SVGProps = SVGAttributes<SVGSVGElement> & {
    theme?:string;
    classNameAspas1:string;
    classNameAspas2:string;
}

export const Aspas = (props: SVGProps)=>{

    return (
        <>
            <svg {...props} className={props.classNameAspas1} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.306 19.6078C23.306 20.8337 22.3122 21.8275 21.0863 21.8275H15.9071C14.6812 21.8275 13.6874 20.8337 13.6874 19.6078V10.6531H21.0863C22.3122 10.6531 23.306 11.6469 23.306 12.8728V19.6078Z" fill="#722C8D"/>
                <path d="M9.98795 19.6078C9.98795 20.8337 8.99416 21.8275 7.76827 21.8275H2.58903C1.36314 21.8275 0.369354 20.8337 0.369354 19.6078V10.6531H7.76827C8.99416 10.6531 9.98795 11.6469 9.98795 12.8728V19.6078Z" fill="#722C8D"/>
                <path d="M15.2264 14.5211L15.2264 7.07515C15.2264 4.72762 16.3904 2.64392 18.6327 2.26638C19.1433 2.18041 19.7196 2.10491 20.3671 2.04784" stroke="#722C8D" strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.90835 14.5211L1.90835 7.07515C1.90836 4.72762 3.07239 2.64392 5.31466 2.26638C5.82522 2.18041 6.40156 2.10491 7.04909 2.04784" stroke="#722C8D" strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>


            <svg {...props} className={props.classNameAspas2} width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.21968C0 0.993783 0.993783 0 2.21968 0H7.39892C8.62481 0 9.61859 0.993783 9.61859 2.21968V9.61859H2.21968C0.993783 9.61859 0 8.62481 0 7.39892V2.21968Z" fill="#722C8D"/>
                <path d="M13.3181 2.21968C13.3181 0.993783 14.3118 0 15.5377 0H20.717C21.9429 0 22.9366 0.993783 22.9366 2.21968V9.61859H15.5377C14.3118 9.61859 13.3181 8.62481 13.3181 7.39892V2.21968Z" fill="#722C8D"/>
                <path d="M8.07956 6.28901L8.07956 11.7714C8.07956 14.3417 6.64229 16.6108 4.09002 16.9146C3.7342 16.9569 3.35093 16.9946 2.93883 17.0259" stroke="#722C8D" strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.3977 6.28901L21.3977 11.7714C21.3977 14.3417 19.9604 16.6108 17.4081 16.9146C17.0523 16.9569 16.669 16.9946 16.2569 17.0259" stroke="#722C8D" strokeWidth="2.95957" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </>
    )

}