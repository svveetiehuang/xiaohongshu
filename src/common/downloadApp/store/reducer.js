import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  show: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_DOWNLOAD:
      return state.set('show', true)
    case actionTypes.CLOSE_DOWNLOAD:
      return state.set('show', false)
    default:
      return state
  }
}
