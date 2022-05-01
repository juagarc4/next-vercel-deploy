import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || {}
  return <Component {...pageProps} />
}

export default MyApp
