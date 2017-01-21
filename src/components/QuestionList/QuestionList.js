import React from 'react'
import Question from '../Question'

const QuestionList = ({ questions }) => (
  <div>
    {questions.map(item => (<Question data={item} key={item.id} />))}
  </div>
)

export default QuestionList
