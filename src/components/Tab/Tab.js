import React from 'react'
import { IndexLink } from 'react-router'
import styles from './Tab.scss'

const Tab = ({ name, route }) => (
  <div className={styles.tab}>
    <IndexLink to={route} activeClassName={styles.tabActive}>
      <div className={styles.radio}>
        <div className={styles.radioInner} />
      </div>
      <div>{name}</div>
    </IndexLink>
  </div>
)

Tab.propTypes = {
  name: React.PropTypes.string,
  route: React.PropTypes.string
}

export default Tab
