import {
  usersReducer
} from 'redux/modules/users'

import {
  OPEN_MODAL,
  CLOSE_MODAL
} from 'redux/modules/ui'

describe('(Internal Module) Users', () => {
  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(usersReducer).to.be.a('function')
    })

    it('Should initialize with a inital state of modal.', () => {
      expect(usersReducer(undefined, {})).to.have.property('userSelected', null)
    })

    it('Should return the previous state if an action was not matched.', () => {
      const usersState = { userSelected: 2 }
      const state = usersReducer(usersState, { type: '@@@@@@@' })
      expect(state).to.equal(usersState)
    })

    it('Should set user selected after modal was opened', () => {
      const usersState = { userSelected: null }
      const state = usersReducer(usersState, { type: OPEN_MODAL, userId: 2 })
      expect(state).to.have.property('userSelected', 2)
    })

    it('Should set user selected to null after modal was closed', () => {
      const usersState = { userSelected: 2 }
      const state = usersReducer(usersState, { type: CLOSE_MODAL })
      expect(state).to.have.property('userSelected', null)
    })
  })
})
