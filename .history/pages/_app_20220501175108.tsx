import { NextPage } from 'next'
import { ReactNode } from 'react'
import '../styles/globals.css'

type NaxtPageWithLayout = NextPage & {
  getLayout: () => ReactNode
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page: ReactE) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
