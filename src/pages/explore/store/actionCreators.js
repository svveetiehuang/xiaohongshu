import axios from 'axios'
import * as actionTypes from './actionTypes'

export const showDownload = () => ({
  type: actionTypes.SHOW_DOWNLOAD
})

// 移到 conmmon/downloadApp/store 下
export const closeDownload = () => ({
  type: actionTypes.CLOSE_DOWNLOAD
})

export const getNote = () => {
  return dispatch => {
    axios
      .get('/api/explore.json')
      .then(res => {
        dispatch(changeStoreNote(res.data.data))
      })
      .catch(() => {
        alert('获取数据失败，请检查 json 文件是否存在')
      })
  }
}

// 供内部使用的方法（不导出）
const changeStoreNote = data => ({
  type: actionTypes.CHANGE_STORE_NOTE,
  data
})
