import axios from 'axios'
import * as actionTypes from './actionTypes'

// 调用该函数，返回一个函数
export const getHomeData = () => {
  return dispatch => {
    axios
      .get('/api/home.json')
      .then(res => {
        dispatch(changeStoreHome(res.data.data))
      })
      .catch(() => {
        console.log('获取数据失败，请检查 json 文件是否存在')
      })
  }
}

const changeStoreHome = data => ({
  type: actionTypes.CHANGE_STORE_HOME,
  data
})
