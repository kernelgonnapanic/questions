import React from 'react'
import styles from './Avatar.scss'

const Avatar = ({ src, onClick }) => (
  <img className={styles.avatar} src={src} onClick={onClick} />
)

export default Avatar
