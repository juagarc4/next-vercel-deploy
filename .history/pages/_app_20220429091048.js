import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component
  return <Component {...pageProps} />
}

export default MyApp
