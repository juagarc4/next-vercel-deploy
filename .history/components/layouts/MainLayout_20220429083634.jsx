import Head from 'next/head'

import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

export const MainLayout = () => {
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
          Go to <Link href='/contact'>Contact!</Link>
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
