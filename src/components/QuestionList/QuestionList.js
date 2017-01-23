import React from 'react'
import Question from '../Question'
import styles from './QuestionList.scss'

const QuestionList = ({ questions, onAvatarClick }) => (
  <div className={styles.list}>
    <div>
      {questions.map(item => (
        <Question data={item} key={item.id} onAvatarClick={onAvatarClick} />
      ))}
    </div>
    <div className={styles.listEnding}>
      <span>load more questions</span>
    </div>
  </div>
)

QuestionList.propTypes = {
  questions: React.PropTypes.array,
  onAvatarClick: React.PropTypes.func
}

export default QuestionList
