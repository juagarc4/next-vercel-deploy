import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ActiveLink text='Homehref='/'>Home</ActiveLink>
      <ActiveLink href='/contact'>Contact</ActiveLink>
      <ActiveLink href='/about'>About</ActiveLink>
    </nav>
  )
}
