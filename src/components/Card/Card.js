import React from 'react'
import styles from './Card.scss'

const rotate = (angle) => ({
  transform: `rotate(${angle}deg)`
})

const Card = ({ card, angle }) => {
  console.log(angle)
  return (
    <div className={styles.card}>
      <div className={styles.cardBackground} style={rotate(angle)} />
      <div className={styles.cardNumber}>{card.number}</div>
      <div className={styles.cardTitle}>{card.title}</div>
    </div>
  )
}

export default Card
