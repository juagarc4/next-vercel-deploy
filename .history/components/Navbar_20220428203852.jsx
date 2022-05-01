import React from 'react'
import Link from 'next/link'

import styles from ''
export const Navbar = () => {
  return (
    <nav>
      <Link className="link" href='/'>Home</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
    </nav>
  )
}