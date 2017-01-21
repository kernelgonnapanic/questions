import React from 'react'
import Header from '../../components/Header'
import '../../styles/core.scss'
import styles from './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div className={styles.appContainer}>
    <Header />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
