import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  bgVideo: '',
  bgPoster: '',
  phoneVideo: '',
  phonePoster: '',
  phoneCase: '',
  iosCode: '',
  androidCode: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STORE_HOME:
      return state.merge({
        bgVideo: fromJS(action.data.background.videoUrl),
        bgPoster: fromJS(action.data.background.poster),
        phoneVideo: fromJS(action.data.iPhone.videoUrl),
        phonePoster: fromJS(action.data.iPhone.poster),
        phoneCase: fromJS(action.data.iPhone.iPhoneCase),
        iosCode: fromJS(action.data.qrCode.ios),
        androidCode: fromJS(action.data.qrCode.android)
      })
    default:
      return state
  }
}
