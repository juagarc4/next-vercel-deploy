import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <DarkLayout>
      <h1>About Page</h1>
        <h1 className={'title'}>
          Go to <Link href='/'>Home!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing <code className={'code'}>pages/about.jsx</code>
        </p>
        </DarkLayout>
    </MainLayout>
  )
}
