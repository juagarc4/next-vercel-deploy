import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function ContactPage() {
  return (
   < <div className={styles.container}>
      <Head>
        <title>Contact - Initial App</title>
        <meta name='description' content='Contact Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
     <Navbar/>
      <main className={styles.main}>

      </main>
    </div>>
  )
}
