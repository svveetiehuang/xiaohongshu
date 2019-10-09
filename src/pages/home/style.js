import styled from 'styled-components'

export const BackgroundVideo = styled.div`
  //只占满窗口（用 absolute 会超过窗口）
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // Header 和 Footer 都设置了 z-index 所以不会遮挡

  video {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    // 最小宽高是整个父盒子内容区（至少占满窗口）
    min-width: 100%;
    min-height: 100%;
  }
`

export const Content = styled.div`
  position: fixed;
  // （即使屏幕缩小）始终保持相对窗口居中（略微偏上偏左）
  top: 50%;
  left: 50%;
  transform: translate(-60%, -60%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  // 中间部分整体缩放
  @media screen and (min-height:900px){
    zoom: 1;
  }
  @media screen and (max-height:900px){
    zoom: .9;
  }
  @media screen and (max-height:820px){
    zoom: .8;
  }
  @media screen and (max-height:720px){
    zoom: .7;
  }
  @media screen and (max-height:540px){
    zoom: .6;
  }
}
`

export const IPhone = styled.div`
  width: 300px;
  height: 600px;

  // 根据屏幕高度缩放（zoom: 倍数;）IPhone 部分比右边文字缩得厉害（2次叠加）
  @media screen and (min-height: 900px) {
    zoom: 1;
  }
  @media screen and (max-height: 900px) {
    zoom: 0.9;
  }
  @media screen and (max-height: 820px) {
    zoom: 0.8;
  }
  @media screen and (max-height: 720px) {
    zoom: 0.7;
  }
  @media screen and (max-height: 540px) {
    zoom: 0.6;
  }

  video {
    // Content 组件绝对定位
    position: absolute;
    width: 300px;
    height: 600px;
    padding: 18px 20px;
    box-sizing: border-box;
  }
  div {
    // Content 组件绝对定位
    position: absolute;
    width: 300px;
    height: 600px;
  }
`

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 60px;

  .logo {
    width: 143px;
    height: 50px;
  }
  h2 {
    margin-top: 13px;
    font-size: 48px;
    font-weight: 500;
    color: #fff;
    white-space: nowrap;
  }
  h5 {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 400;
    font-family: Helvetica, Arial, sans-serif;
    font-style: oblique;
    color: #fff;
    white-space: nowrap;
  }
  .qrcodes {
    margin-top: 36px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    // 苹果、安卓下载按钮，悬停显示二维码
    .ios,
    .android {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      width: 150px;
      height: 40px;
      border-radius: 20px;
      background: #fff;
      cursor: pointer;

      // 苹果、安卓小 logo
      .iconfont {
        font-size: 24px;
        margin-right: 6px;
      }

      // 二维码
      .qrcode {
        position: absolute;
        top: 100%;
        width: 150px;
        height: 142px;
        border-radius: 0 0 12px 12px;
        opacity: 0;
      }

      // 鼠标悬停时显示
      :hover {
        border-radius: 20px 20px 0 0;
        .qrcode {
          opacity: 1;
        }
      }
    }
  }
`
