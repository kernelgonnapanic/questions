import { connect } from 'react-redux'

import UserComponent from '../components/UserComponent'

const user = {
  userId: 0,
  name: 'Zosia',
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

const mapStateToProps = () => ({ user })
const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
