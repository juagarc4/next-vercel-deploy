import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map()}
      <ActiveLink text='Home' href='/' />
      <ActiveLink text='Contact'href='/contact' />
      <ActiveLink text='About' href='/about'/>
    </nav>
  )
}
