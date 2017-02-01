import React from 'react'
import Question from '../Question'
import styles from './QuestionList.scss'

const QuestionList = ({ questions, onAvatarClick, addQuestion }) => (
  <div className={styles.list}>
    <div>
      {questions.map(item => (
        <Question data={item} key={item.id} onAvatarClick={onAvatarClick} />
      ))}
    </div>
    <div className={styles.listEnding} onClick={addQuestion}>
      <span>load more questions</span>
    </div>
  </div>
)

QuestionList.propTypes = {
  questions: React.PropTypes.array,
  onAvatarClick: React.PropTypes.func,
  addQuestion: React.PropTypes.func
}

export default QuestionList
