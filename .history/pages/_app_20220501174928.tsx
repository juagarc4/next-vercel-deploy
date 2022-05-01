import '../styles/globals.css'

type NaxtPa

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(<Component {...pageProps} />)

}

export default MyApp
