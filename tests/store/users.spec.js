import {
  OPEN_MODAL,
  CLOSE_MODAL,
  openModal,
  closeModal,
  uiReducer
} from 'redux/modules/ui'

describe('(Internal Module) Ui', () => {
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(uiReducer).to.be.a('function')
    })

    it('Should initialize with a inital state of modal.', () => {
      expect(uiReducer(undefined, {})).to.have.property('modalOpened', false)
    })

    it('Should return the previous state if an action was not matched.', () => {
      const uiState = { openModal: false }
      const state = uiReducer(uiState, { type: '@@@@@@@' })
      expect(state).to.equal(uiState)
    })
  })

  describe('(Action Creator) openModal', () => {
    it('Should be exported as a function.', () => {
      expect(openModal).to.be.a('function')
    })

    it('Should return an action with type "OPEN_MODAL".', () => {
      expect(openModal()).to.have.property('type', OPEN_MODAL)
    })
  })

  describe('(Action Creator) closeModal', () => {
    it('Should be exported as a function.', () => {
      expect(closeModal).to.be.a('function')
    })
    it('Should return an action with type "CLOSE_MODAL".', () => {
      expect(closeModal()).to.have.property('type', CLOSE_MODAL)
    })
  })
})
