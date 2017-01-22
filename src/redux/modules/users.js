import { OPEN_MODAL } from './ui'

const INITIAL_STATE = {
  userSelected: null,
  users: [{
    userId: 0,
    name: 'Zosia',
    avatar: 'http://lorempixel.com/100/100/people?id=0',
    lastSeen: 'Saturday afternoon',
    membershipLength: '5 months',
    activityLevel: 2,
    summary: [{
      title: 'peers',
      number: 46
    }, {
      title: 'discussions',
      number: 29
    }, {
      title: 'findings',
      number: 19
    }, {
      title: 'questions',
      number: 10
    }],
    similarFriends: [{
      userId: 1,
      name: 'Patricia',
      avatar: 'http://lorempixel.com/100/100/people?id=1'
    }]
  }, {
    userId: 1,
    name: 'Ewa',
    avatar: 'http://lorempixel.com/100/100/people?id=2',
    lastSeen: 'Saturday afternoon',
    membershipLength: '5 months',
    activityLevel: 2,
    summary: [{
      title: 'peers',
      number: 46
    }, {
      title: 'discussions',
      number: 29
    }, {
      title: 'findings',
      number: 19
    }, {
      title: 'questions',
      number: 10
    }],
    similarFriends: [{
      userId: 1,
      name: 'Patricia',
      avatar: 'http://lorempixel.com/100/100/people?id=1'
    }]
  }, {
    userId: 2,
    name: 'Marek',
    avatar: 'http://lorempixel.com/100/100/people?id=5',
    lastSeen: 'Saturday afternoon',
    membershipLength: '5 months',
    activityLevel: 2,
    summary: [{
      title: 'peers',
      number: 46
    }, {
      title: 'discussions',
      number: 29
    }, {
      title: 'findings',
      number: 19
    }, {
      title: 'questions',
      number: 10
    }],
    similarFriends: [{
      userId: 1,
      name: 'Patricia',
      avatar: 'http://lorempixel.com/100/100/people?id=1'
    }]
  }
  ]
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, userSelected: action.userId }
    default:
      return state
  }
}
