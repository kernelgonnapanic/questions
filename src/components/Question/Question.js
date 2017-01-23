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

QuestionSidebar.propTypes = {
  user: React.PropTypes.object,
  onAvatarClick: React.PropTypes.func
}

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

QuestionContent.propTypes = {
  user: React.PropTypes.object,
  text: React.PropTypes.string,
  activities: React.PropTypes.array,
  onAvatarClick: React.PropTypes.func
}

const QuestionSummary = ({ summary }) => (
  <div className={styles.questionSummary}>
    <div>{summary.numberOfRelatedDiscussions} related discussion </div>
    <div>x peers involved </div>
    <div>{summary.numberOfConversations} conversations</div>
  </div>
)

QuestionSummary.propTypes = {
  summary: React.PropTypes.object
}

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
  data: React.PropTypes.object.isRequired,
  onAvatarClick: React.PropTypes.func
}

export default Question
