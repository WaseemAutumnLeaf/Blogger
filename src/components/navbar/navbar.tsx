import React from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <ul className={styles.navbar}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li>Log Out</li>
    </ul>
  )
}

export default Navbar;