import { OPEN_MODAL, CLOSE_MODAL } from './ui'

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
    }],
    discussion: {
      user: {
        name: 'Andrew',
        avatar: 'http://lorempixel.com/100/100/people?id=1'
      },
      type: 'article',
      text: 'Vegan diet to stop bla bla',
      summary: {
        peersInvolved: 6,
        relatedDiscussions: 3,
        conversations: 3,
        upvotes: 19
      }
    }
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
    }, {
      userId: 0,
      name: 'Patricia',
      avatar: 'http://lorempixel.com/100/100/people?id=1'
    }, {
      userId: 2,
      name: 'Patricia',
      avatar: 'http://lorempixel.com/100/100/people?id=1'
    }],
    discussion: {
      user: {
        name: 'Andrew',
        avatar: 'http://lorempixel.com/100/100/people?id=1'
      },
      type: 'article',
      text: 'Vegan diet to stop bla bla',
      summary: {
        peersInvolved: 6,
        relatedDiscussions: 3,
        conversations: 3,
        upvotes: 19
      }
    }
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
    }],
    discussion: {
      user: {
        name: 'Andrew',
        avatar: 'http://lorempixel.com/100/100/people?id=1'
      },
      type: 'article',
      text: 'Vegan diet to stop bla bla',
      summary: {
        peersInvolved: 6,
        relatedDiscussions: 3,
        conversations: 3,
        upvotes: 19
      }
    }
  }
  ] }

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, userSelected: action.userId }
    case CLOSE_MODAL:
      return { ...state, userSelected: null }
    default:
      return state
  }
}
