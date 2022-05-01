import React from 'react'
import Link from 'next/link'

import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={}>
      <Link href='/'>Home</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
    </nav>
  )
}
