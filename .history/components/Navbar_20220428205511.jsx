import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      <ActiveLink text='Home' href='/'>Home</ActiveLink>
      <ActiveLink text='Contact'href='/contact'>
      <ActiveLink text='About' href='/about'></ActiveLink>
    </nav>
  )
}
