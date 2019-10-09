import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  show: false,
  note: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_DOWNLOAD:
      return state.set('show', true)
    case actionTypes.CLOSE_DOWNLOAD:
      return state.set('show', false)
    case actionTypes.CHANGE_STORE_NOTE:
      return state.set('note', fromJS(action.data).get('note'))
    default:
      return state
  }
}
