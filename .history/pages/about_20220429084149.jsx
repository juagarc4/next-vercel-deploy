import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  return (
    <MainLayout>
      <h1>About Page</h1>
        <h1 className={styles.title}>
          Go to <Link href='/'>Home!</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/about.jsx</code>
        </p>
    </MainLayout>
  )
}
