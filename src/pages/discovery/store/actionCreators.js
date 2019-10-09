import axios from 'axios'
import * as actionTypes from './actionTypes'

// 获取页面的 json 数据
export const getDiscoveryData = id => {
  return dispatch => {
    axios
      .get('/api/discovery.json?id=' + id)
      .then(res => {
        dispatch(changeStoreData(res.data.data))
      })
      .catch(() => {
        alert('获取数据失败，请检查 json 文件是否存在')
      })
  }
}

export const changeCurrentId = () => ({
  type: actionTypes.CHANGE_CURRENT_ID
})

export const nextPic = () => ({
  type: actionTypes.NEXT_PIC
})

export const lastPic = () => ({
  type: actionTypes.LAST_PIC
})

export const handleSmallPic = index => ({
  type: actionTypes.SMALL_PIC_CLICK,
  index
})

export const toggleShareBarFixed = show => ({
  type: actionTypes.TOGGLE_SHARE_BAR_FIXED,
  show
})

// 供内部使用的方法（不导出）
const changeStoreData = data => ({
  type: actionTypes.CHANGE_STORE_DATA,
  data
})
