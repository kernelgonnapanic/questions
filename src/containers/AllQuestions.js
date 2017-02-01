import { connect } from 'react-redux'
import { openModal } from '../redux/modules/ui'
import { addQuestion } from '../redux/modules/questions'

import QuestionList from '../components/QuestionList'

const getNewQuestion = () => ({
  id: Math.floor(Math.random() * 1000),
  text: 'Vegan diet in diabetes treatment?',
  user: {
    userId: 0,
    name: 'Zosia',
    avatar: 'http://lorempixel.com/100/100/people?id=0'
  },
  activities: [
    {
      type: 'comment',
      id: 4,
      user: {
        userId: 1,
        name: 'Abdul',
        avatar: 'http://lorempixel.com/100/100/people?id=1'
      }
    }, {
      type: 'answer',
      id: 5,
      user: {
        userId: 2,
        name: 'Anna',
        avatar: 'http://lorempixel.com/100/100/people?id=3'
      }
    }
  ],
  summary: {
    numberOfConversations: 3,
    numberOfRelatedDiscussions: 5
  }
})

const mapStateToProps = (state) => ({ questions: state.questions.questions })
const mapDispatchToProps = (dispatch) => ({
  onAvatarClick: (userId) => dispatch(openModal(userId)),
  addQuestion: () => dispatch(addQuestion(getNewQuestion()))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
