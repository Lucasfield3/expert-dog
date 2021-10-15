import type { NextPage } from 'next'
import Image  from 'next/image'
import logo from '../public/images/Logo-Expert-Creat.png';

const Home: NextPage = () => {
  return (
    <div>
     <Image src={logo} alt=''/>
    </div>
  )
}

export default Home
