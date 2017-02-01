const ADD_QUESTION = 'questions/ADD_QUESTION'

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question
})

const INITIAL_STATE = {
  questions: [
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
    }, {
      id: 2,
      text: 'Vegan diet to stop diabetes progress?',
      user: {
        userId: 1,
        name: 'Zosia',
        avatar: 'http://lorempixel.com/100/100/people?id=0'
      },
      activities: [
        {
          type: 'comment',
          id: 4,
          user: {
            userId: 2,
            name: 'Abdul',
            avatar: 'http://lorempixel.com/100/100/people?id=1'
          }
        }, {
          type: 'answer',
          id: 5,
          user: {
            userId: 3,
            name: 'Anna',
            avatar: 'http://lorempixel.com/100/100/people?id=3'
          }
        }, {
          type: 'comment',
          id: 40,
          user: {
            userId: 2,
            name: 'Abdul',
            avatar: 'http://lorempixel.com/100/100/people?id=1'
          }
        }, {
          type: 'comment',
          id: 44,
          user: {
            userId: 2,
            name: 'Abdul',
            avatar: 'http://lorempixel.com/100/100/people?id=1'
          }
        }, {
          type: 'comment',
          id: 54,
          user: {
            userId: 2,
            name: 'Abdul',
            avatar: 'http://lorempixel.com/100/100/people?id=1'
          }
        }
      ],
      summary: {
        numberOfConversations: 3,
        numberOfRelatedDiscussions: 5
      }
    }, {
      id: 1,
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
    }
  ]
}

export const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return { questions: [...state.questions, action.question] }
    default:
      return state
  }
}
