import styled from 'styled-components'
import police from '../../statics/police.png'
import rank from '../../statics/rank.png'

export const FooterWrapper = styled.div`
  position: absolute; //配合边偏移使用
  bottom: 0;
  z-index: 1; // 为了能遮住右边二维码
  // 水平居中（保证即使屏幕缩小也能水平居中）
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  // height: 110px; // 写高度在缩小时会压缩 padding-bottom
  padding: 50px 0 30px;

  // 浅色主题
  &.light {
    background-color: #fbfbfb;
    .top > div:hover {
      color: #fe2543;
    }
  }
  // 深色主题
  &.dark {
    .top {
      color: #fff;
    }
    position: fixed;
    bottom: 0; // 保持在最底部（不会因为内容少/脱标而跑上去）
  }

  // 根据屏幕缩放
  @media screen and (max-width: 1400px) and(min-width: 1250px) {
    zoom: 0.9;
  }
  @media screen and (max-width: 1250px) and (min-width: 1100px) {
    zoom: 0.8;
  }
  @media screen and (max-width: 1100px) and (min-width: 1030px) {
    zoom: 0.7;
  }
  @media screen and (max-width: 1030px) and (min-width: 1024px) {
    zoom: 0.6;
  }
  @media screen and (max-width: 1024px) {
    zoom: 0.6;
  }
`

export const Top = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative; //?

  margin-bottom: 20px;
  min-width: 800px;

  list-style-type: none;
  // light theme
  color: #333;
`

export const TopItem = styled.div`
  display: inline; //?

  width: 115px;
  margin-left: 200px;

  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  :first-child {
    margin-left: 0;
  }
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 70px;
`

export const BottomItem = styled.div`
  white-space: nowrap;
  font-size: 12px;
  font-weight: 400;
  color: #999;

  a {
    text-decoration: none;
    color: #999;
  }
`

export const Icon = styled.i`
  display: inline-block;

  vertical-align: middle; // 只能用于行内元素和行内块
  width: 18px;
  height: 18px;
  margin: -3px 0 0 5px;

  background-size: contain;
  background-repeat: no-repeat;

  cursor: pointer;

  &.police {
    background-image: url(${police});
  }
  &.rank {
    background-image: url(${rank});
  }
`

// export const FooterWrapper = styled.div`
// export const FooterWrapper = styled.div`
