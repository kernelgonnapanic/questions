import React from 'react'
import Header from '../../components/Header'
import '../../styles/core.scss'
import styles from './CoreLayout.scss'
import Modal from '../../components/Modal'
import UserModal from '../../containers/UserModal'

export const CoreLayout = ({ children }) => (
  <div className={styles.appContainer}>
    <Header />
    <div>
      {children}
    </div>
    <Modal>
      <UserModal />
    </Modal>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
