import React from 'react'
import styles from './Question.scss'
import Activity from '../Activity'

const QuestionSidebar = ({ user }) => (
  <div className={styles.questionSidebar}>
    <img src={user.avatar} />
    <div className={styles.questionAdditionalInfo}>asked</div>
  </div>
)

const QuestionContent = ({ name, text, activities }) => (
  <div className={styles.questionContent}>
    <div className={styles.questionHeader}>
      <div className={styles.questionName}>
        {name}<span> is asking:</span>
      </div>
      <div className={styles.questionText}>{text}</div>
    </div>
    <div className={styles.questionActivities}>
      {activities.map(item => (<Activity key={item.id} activity={item} />))}
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

const Question = ({ data }) => (
  <div className={styles.question}>
    <QuestionSidebar user={data.user} />
    <QuestionContent name={data.user.name} text={data.text} activities={data.activities} />
    <QuestionSummary summary={data.summary} />
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
