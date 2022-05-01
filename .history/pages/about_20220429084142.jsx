import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - Initial App</title>
        <meta name='description' content='About Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        
      </main>
    </div>
  )
}
