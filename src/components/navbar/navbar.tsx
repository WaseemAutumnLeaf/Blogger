import React from 'react'
import styles from "./navbar.module.css";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <ul className={styles.navbar}>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Log Out</li>
    </ul>
  )
}

export default Navbar;