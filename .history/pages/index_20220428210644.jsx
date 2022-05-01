import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Initial App</title>
        <meta name='description' content='Home Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
     <Navbar/>
      <main className={styles.main}>
        <h1>Home Page</h1>
        <h1 className={styles.title}>
          Go to <Link href='/about'>About!</Link>
        </h1>
        <h1 className={styles.title}>
          Go to <Link href='/about'>About!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.jsx</code>
        </p>
      </main>
    </div>
  )
}
