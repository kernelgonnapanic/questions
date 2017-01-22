import { connect } from 'react-redux'

import UserComponent from '../components/UserComponent'

const mapStateToProps = (state) => {
  return {
    user: state.users.users[state.users.userSelected]
  }
}

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
