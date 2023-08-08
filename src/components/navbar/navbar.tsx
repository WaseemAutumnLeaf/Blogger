import React from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <ul className={styles.navbar}>
      <div className={styles.link}>
        <li><Link href="/">Home</Link></li>
      </div>
      <div className={styles.link}>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </div>
      <div className={styles.link}>
        <li><Link href="/">Log Out</Link></li>
      </div>

    </ul>
  )
}

export default Navbar;