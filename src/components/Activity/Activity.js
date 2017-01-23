import React from 'react'
import Avatar from '../Avatar'
import styles from './Activity.scss'

const Activity = ({ activity, onAvatarClick }) => (
  <div className={styles.activityWrapper}>
    <div className={styles.activity}>
      <Avatar src={activity.user.avatar} onClick={onAvatarClick} />
      <div
        className={styles.additionalInfo + (activity.type === 'answer' ? ` ${styles.answered}` : '')}>
        {activity.type + 'ed'}
      </div>
    </div>
    <div className={styles.dot + (activity.type === 'answer' ? ` ${styles.answered}` : '')} />
  </div>
)

Activity.propTypes = {
  activity: React.PropTypes.object,
  onAvatarClick: React.PropTypes.func
}

export default Activity
