import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <Link href='/'>Home</Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
    </nav>
  )
}