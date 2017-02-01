import { connect } from 'react-redux'
import { openModal } from '../redux/modules/ui'

import QuestionList from '../components/QuestionList'

const questions = [
  {
    id: 0,
    text: 'Will insulin make my patient gain weight?',
    user: {
      userId: 0,
      name: 'Eva',
      avatar: 'http://lorempixel.com/100/100/people'
    },
    activities: [
      {
        type: 'comment',
        id: 0,
        user: {
          userId: 1,
          name: 'John',
          avatar: 'http://lorempixel.com/100/100/people'
        }
      }, {
        type: 'answer',
        id: 1,
        user: {
          userId: 2,
          name: 'Maria',
          avatar: 'http://lorempixel.com/100/100/people'
        }
      }, {
        type: 'answer',
        id: 2,
        user: {
          userId: 0,
          name: 'Marysia',
          avatar: 'http://lorempixel.com/100/100/people'
        }
      }
    ],
    summary: {
      numberOfConversations: 1,
      numberOfRelatedDiscussions: 2
    }
  }
]

const mapStateToProps = () => ({ questions })
const mapDispatchToProps = (dispatch) => ({
  onAvatarClick: (userId) => dispatch(openModal(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
