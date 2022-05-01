import { NextPage } from 'next'
import '../styles/globals.css'

type NaxtPageWithLayout = NextPage & {
  getL
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)

}

export default MyApp
