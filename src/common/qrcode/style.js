import styled from 'styled-components'
import smallPic from '../../statics/small.png'

// 右侧漂浮的二维码
export const SmallQr = styled.div`
  position: fixed;
  right: 10px;
  bottom: 80px;
  width: 30px;
  height: 30px;
  background: url(${smallPic});
  background-size: contain;

  // 鼠标悬停小图时，显示子 div（大图本质是 div）
  :hover > div {
    display: block;
  }
`

export const BigQr = styled.div`
  display: none;
  position: fixed;
  right: 50px;
  bottom: 10px;
  width: 100px;
  height: 120px;
  background: #fff;
  box-shadow: 0 2px 4px #eee;
  border-radius: 5px;
  img {
    width: 86px;
    height: 86px;
    margin: 7px 7px 5px;
  }
  p {
    font-size: 13px;
    color: #555;
    text-align: center;
  }
`
