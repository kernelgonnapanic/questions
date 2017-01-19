import React from 'react'
import { IndexLink, Link } from 'react-router'
import styles from './Navbar.scss'

const Navbar = () => (
  <div className={styles.navbar}>
    <div>
      <div>Questions</div>
      <div>Plus</div>
    </div>
    <div className={styles.navbarRight}>
      <div>
        <IndexLink to='/' activeClassName='route--active'>
          My Shelf
        </IndexLink>
        <Link to='/all' activeClassName='route--active'>
          All questions
        </Link>
      </div>
      <div>
      Sort by: <a href='#'>recent</a> or <a href='#'>hot</a>
      </div>
    </div>
  </div>
)

export default Navbar
