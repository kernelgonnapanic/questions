import {
  default as createStore
} from 'redux/createStore'

describe('(Store) createStore', () => {
  let store

  before(() => {
    store = createStore()
  })

  describe('(Location)', () => {
    it('store should be initialized with Location state', () => {
      const location = {
        pathname : '/echo'
      }
      store.dispatch({
        type    : 'LOCATION_CHANGE',
        payload : location
      })
      expect(store.getState().location).to.deep.equal(location)
    })
  })
})
