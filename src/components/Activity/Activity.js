import React from 'react'
import styles from './Activity.scss'

const Activity = ({ activity }) => (
  <div>
    <div className={styles.activity}>
      <img src={activity.user.avatar} />
      <div
        className={styles.additionalInfo + (activity.type === 'answer' ? ` ${styles.answered}` : '')}>
        {activity.type + 'ed'}
      </div>
    </div>
    <div className={styles.dot + (activity.type === 'answer' ? ` ${styles.answered}` : '')} />
  </div>
)

Activity.propTypes = {
  activity: React.PropTypes.object
}

export default Activity
