import React from 'react'
import styles from './Avatar.scss'

const Avatar = ({ src, onClick }) => (
  <img className={styles.avatar} src={src} onClick={onClick} />
)

Avatar.propTypes = {
  src: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default Avatar
