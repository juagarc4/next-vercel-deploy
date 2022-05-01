import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <a href='/contact'>Contact</a>
      <a href='/about'>About</a>
    </nav>
  )
}
