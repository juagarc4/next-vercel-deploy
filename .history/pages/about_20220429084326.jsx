import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <h1>About Page</h1>
        <h1 className='title'>
          Go to <Link href='/'>Home!</Link>
        </h1>

        <p className='{styles.'description}>
          Get started by editing <code className={styles.code}>pages/about.jsx</code>
        </p>
    </MainLayout>
  )
}
