import React from 'react'
import Header from '../../components/Header'
import '../../styles/core.scss'
import styles from './CoreLayout.scss'
import ModalContainer from '../../containers/ModalContainer'
import UserContainer from '../../containers/UserContainer'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className={styles.appWrapper}>
      <div className={styles.appContainer}>
        {children}
      </div>
    </div>
    <ModalContainer>
      <UserContainer />
    </ModalContainer>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
