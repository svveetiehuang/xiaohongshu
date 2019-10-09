import { combineReducers } from 'redux-immutable'
import { reducer as downloadAppReducer } from '../common/downloadApp/store'
import { reducer as exploreReducer } from '../pages/explore/store'
import { reducer as discoveryReducer } from '../pages/discovery/store'
import { reducer as homeReducer } from '../pages/home/store'

const reducer = combineReducers({
  downloadApp: downloadAppReducer,
  explore: exploreReducer,
  discovery: discoveryReducer,
  home: homeReducer
})

export default reducer
