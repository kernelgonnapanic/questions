import React from 'react'
import Tab from '../Tab'
import styles from './Navbar.scss'

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.navbarLeft}>
      <div className={styles.title}>Questions</div>
      <div className={styles.plus} />
    </div>
    <div className={styles.navbarRight}>
      <div className={styles.tabs}>
        <Tab name='My shelf' route='/myshelf' />
        <Tab name='All' route='/' />
      </div>
      <div className={styles.sorts}>
        <span>Sort by: </span><a href='#'>recent</a><span> or </span><a href='#'>hot</a>
      </div>
    </div>
  </div>
)

export default Navbar
