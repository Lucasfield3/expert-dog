import type { AppProps } from 'next/app'
import { ChangeThemesProvider } from '../context/ChangeThemes'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChangeThemesProvider>
      <Component {...pageProps} />
    </ChangeThemesProvider>
  )
}
export default MyApp
