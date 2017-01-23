import React from 'react'
import styles from './UserComponent.scss'

import Avatar from '../../components/Avatar'
import Card from '../../components/Card'
import Gradient from '../../assets/icons/gradient.svg'

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

UserHeader.propTypes = {
  user: React.PropTypes.object.isRequired
}

const CardsList = ({ summary }) => {
  const angles = [40, -20, 40, 20]
  return (
    <div className={styles.list}>
      {summary.map((item, idx) => (<Card card={item} key={idx} angle={angles[idx % angles.length]} />))}
    </div>
  )
}

CardsList.propTypes = {
  summary: React.PropTypes.array
}

const UserTile = ({ user }) => (
  <div className={styles.userTile}>
    <Gradient />
    <div className={styles.userTilePhoto}>
      <Avatar src={user.avatar} />
    </div>
    <div className={styles.userName}>
      {user.name}
    </div>
  </div>
)

UserTile.propTypes = {
  user: React.PropTypes.object
}

const UserTilesList = ({ similarUsers }) => (
  <div className={styles.list}>
    { similarUsers.map((item, idx) => (<UserTile user={item} key={idx} />))}
  </div>
)

UserTilesList.propTypes = {
  similarUsers: React.PropTypes.array
}

const UserDiscussion = ({ discussion }) => (
  <div className={styles.userDiscussion}>
    <Gradient />
    <div className={styles.userDiscussionContent} >
      <Avatar src={discussion.user.avatar} />
      <div>
        <span className={styles.userName}>{discussion.user.name} </span>
        <span className={styles.userDiscussionHeader}>found the {discussion.type}</span>
      </div>
      <div className={styles.userDiscussionText}>
        {discussion.text}
      </div>
      <div className={styles.userDiscussionSummary}>
        <span>{discussion.summary.peersInvolved} peers involved</span>
        <span>{discussion.summary.relatedDiscussions} related discussions</span>
        <span>{discussion.summary.conversations} conversations</span>
        <span>{discussion.summary.upvotes} upvotes</span>
      </div>
    </div>
  </div>
)

UserDiscussion.propTypes = {
  discussion: React.PropTypes.object
}

const UserSummary = ({ user }) => user
? (
  <div className={styles.userSummary}>
    <div className={styles.summaryHeader}>How it all started? </div>
    <div className={styles.summarySubHeader}>
      {"That's where we have been these "}{user.membershipLength} ago
    </div>
    <CardsList summary={user.summary} />
    <div className={styles.summarySubHeader}>Who joined the platform that same period </div>
    <UserTilesList similarUsers={user.similarFriends} />
    <div className={styles.summarySubHeader}>The hottest discussion these days </div>
    <UserDiscussion discussion={user.discussion} />
  </div>
)
: (<h1> User not found </h1>)

UserSummary.propTypes = {
  user: React.PropTypes.object.isRequired
}

const UserComponent = ({ user }) => {
  return (
    <div>
      <UserHeader user={user} />
      <UserSummary user={user} />
    </div>
  )
}

UserComponent.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default UserComponent
