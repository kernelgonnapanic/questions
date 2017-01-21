import React from 'react'
import { Link } from 'react-router'
import styles from './Tab.scss'

const Tab = ({ name, route }) => (
  <div className={styles.tab}>
    <Link to={route} activeClassName={styles.tabActive}>
      <div className={styles.radio}>
        <div className={styles.radioInner} />
      </div>
      <div>{name}</div>
    </Link>
  </div>
)

Tab.propTypes = {
  name: React.PropTypes.string,
  route: React.PropTypes.string
}

export default Tab
