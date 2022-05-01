import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NaxtPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode
}

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
