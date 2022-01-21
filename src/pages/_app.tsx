import type { AppProps } from 'next/app'
import { ChangeSizeProvider } from '../context/ChangeSize'
import { ChangeThemesProvider } from '../context/ChangeThemes'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChangeSizeProvider>
      <ChangeThemesProvider>
        <Component {...pageProps} />
      </ChangeThemesProvider>
    </ChangeSizeProvider>
  )
}
export default MyApp
