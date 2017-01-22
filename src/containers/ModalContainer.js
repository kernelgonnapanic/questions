import { connect } from 'react-redux'

import { closeModal } from '../redux/modules/ui'
import Modal from '../components/Modal'

const mapStateToProps = (state) => ({
  modalOpened: state.ui.modalOpened
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
