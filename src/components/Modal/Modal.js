import React from 'react'
import styles from './Modal.scss'

const Modal = ({ modalOpened, closeModal, children }) => modalOpened
? (
  <div>
    <div className={styles.modal}>
      {children}
    </div>
    <div className={styles.overlay} onClick={closeModal} />
  </div>
) : null

Modal.propTypes = {
  modalOpened: React.PropTypes.bool
}

export default Modal
