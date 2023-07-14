import igniteLogo from '../assets/ignite-logo-header.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.headerLogo} src={igniteLogo} alt="Logo do Ignite" />
    </div>
  )
}