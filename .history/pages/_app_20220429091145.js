import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <Component {...pageProps} />

  return getLayout
}

export default MyApp
