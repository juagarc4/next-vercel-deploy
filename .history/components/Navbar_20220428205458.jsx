import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ActiveLink text='Home' href='/'>Home</ActiveLink>
      <ActiveLink text='Home'href='/contact'>Contact</ActiveLink>
      <ActiveLink text='Home' href='/about'>About</ActiveLink>
    </nav>
  )
}
