import { connect } from 'react-redux'

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
          userId: 3,
          name: 'Marysia',
          avatar: 'http://lorempixel.com/100/100/people'
        }
      }
    ],
    summary: {
      numberOfConversations: 1,
      numberOfRelatedDiscussions: 2
    }
  }, {
    id: 1,
    text: 'Vegan diet in diabetes treatment?',
    user: {
      userId: 4,
      name: 'Zosia',
      avatar: 'http://lorempixel.com/100/100/people?id=0'
    },
    activities: [
      {
        type: 'comment',
        id: 4,
        user: {
          userId: 5,
          name: 'Abdul',
          avatar: 'http://lorempixel.com/100/100/people?id=1'
        }
      }, {
        type: 'answer',
        id: 5,
        user: {
          userId: 6,
          name: 'Anna',
          avatar: 'http://lorempixel.com/100/100/people?id=3'
        }
      }
    ],
    summary: {
      numberOfConversations: 3,
      numberOfRelatedDiscussions: 5
    }
  }
]

const mapStateToProps = () => ({ questions })
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
