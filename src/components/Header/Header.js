import React from 'react'
import SearchBar from '../../containers/SearchBar'
import Navbar from '../Navbar'
import styles from './Header.scss'

export const Header = () => (
  <div className={styles.header}>
    <Navbar />
    <SearchBar />
  </div>
)

export default Header
