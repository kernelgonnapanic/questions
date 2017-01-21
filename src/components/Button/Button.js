import React from 'react'
import styles from './Button.scss'

const Button = ({ text }) => (
  <div className={styles.button}>{text}</div>
)

Button.propTypes = {
  text: React.PropTypes.string
}

export default Button
