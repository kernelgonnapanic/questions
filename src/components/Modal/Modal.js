import React from 'react'
import styles from './Modal.scss'

const Modal = ({ children }) => (
  <div className={styles.modal}>
    {children}
  </div>
)

Modal.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default Modal
