export const OPEN_MODAL = 'ui/OPEN_MODAL'
export const CLOSE_MODAL = 'ui/CLOSE_MODAL'

export const openModal = (userId) => {
  return {
    type: OPEN_MODAL,
    userId
  }
}

export const closeModal = () => ({
  type: CLOSE_MODAL,
  userId: null
})

const INITIAL_STATE = {
  modalOpened: false
}

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalOpened: true }
    case CLOSE_MODAL:
      return { ...state, modalOpened: false }
    default:
      return state
  }
}
