import React from 'react'
import styles from './Question.scss'
import Activity from '../Activity'
import Avatar from '../Avatar'

const QuestionSidebar = ({ user, onAvatarClick }) => (
  <div className={styles.questionSidebar}>
    <Avatar src={user.avatar} onClick={() => onAvatarClick(user.userId)} />
    <div className={styles.questionAdditionalInfo}>asked</div>
  </div>
)

const QuestionContent = ({ user, text, activities, onAvatarClick }) => (
  <div className={styles.questionContent}>
    <div className={styles.questionHeader}>
      <div className={styles.questionName}>
        {user.name}<span> is asking:</span>
      </div>
      <div className={styles.questionText}>{text}</div>
    </div>
    <div className={styles.questionActivities}>
      {activities.map(item =>
        (<Activity key={item.id} activity={item} onAvatarClick={() => onAvatarClick(user.userId)} />))}
    </div>
  </div>
)

const QuestionSummary = ({ summary }) => (
  <div className={styles.questionSummary}>
    <div>{summary.numberOfRelatedDiscussions} related discussion </div>
    <div>x peers involved </div>
    <div>{summary.numberOfConversations} conversations</div>
  </div>
)

const Question = ({ data, onAvatarClick }) => (
  <div className={styles.questionWrapper}>
    <div className={styles.question}>
      <QuestionSidebar user={data.user} onAvatarClick={onAvatarClick} />
      <QuestionContent user={data.user} text={data.text} onAvatarClick={onAvatarClick} activities={data.activities} />
      <QuestionSummary summary={data.summary} />
    </div>
  </div>
)

Question.propTypes = {
  data: React.PropTypes.object
}

QuestionSummary.propTypes = {
  summary: React.PropTypes.object
}

QuestionSidebar.propTypes = {
  user: React.PropTypes.object
}

QuestionContent.propTypes = {
  name: React.PropTypes.string,
  text: React.PropTypes.string,
  activities: React.PropTypes.array
}

export default Question
