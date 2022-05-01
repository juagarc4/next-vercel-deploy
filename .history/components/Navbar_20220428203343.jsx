import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/contact'>Contact</Link>
      <a href='/about'>About</a>
    </nav>
  )
}
