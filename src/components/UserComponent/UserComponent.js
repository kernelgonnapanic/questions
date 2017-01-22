import React from 'react'
import styles from './UserComponent.scss'

import Avatar from '../../components/Avatar'

const UserHeader = ({ user }) => user
? (
  <div className={styles.userHeader}>
    <Avatar src={user.avatar} />
    <div className={styles.userName}> {user.name}</div>
    <div className={styles.userShortSummary}>
      <div><span>Member for: </span>{user.membershipLength}</div>
      <div><span>Last seen: </span>{user.lastSeen}</div>
      <div><span>Activity level: </span>{user.activityLevel} </div>
    </div>
  </div>
)
: (<h1> User not found </h1>)

const UserSummary = ({ user }) => user
? (
  <div className={styles.userSummary}>
    <div>How it all started? </div>
    <div>{"That's where we have been those "}{user.membershipLength} ago </div>
  </div>
)
: (<h1> User not found </h1>)

const UserComponent = ({ user }) => {
  return (
    <div>
      <UserHeader user={user} />
      <UserSummary user={user} />
    </div>
  )
}

export default UserComponent
