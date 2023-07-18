import React from 'react'
import Navbar from '../navbar/navbar'
import styles from "./layout.module.css";

type Props = {}

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <main>{children}</main>
  </>
  )
}

export default Layout;