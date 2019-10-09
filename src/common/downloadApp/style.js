import styled from 'styled-components'

// 点击查看更多，显示下载 App 二维码
export const DownloadWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%; // 只有 fixed 才能保证 height 继承的是浏览器窗口的100%，同时跟着滚动条动
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  &.hidden {
    display: none;
  }
`

export const DownloadCode = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 280px;
  height: 271px;
  background-color: #fff;
  border-radius: 8px;

  .potato {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    height: 100px;
    width: 105px;
  }
  .qr-code {
    margin-top: 4px;
    width: 128px;
    height: 128px;
  }
  p {
    margin-bottom: 3px;
    font-size: 14px;
    color: #555;
  }
  .close {
    margin-top: 18px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #5b92e1;
    border-top: 1px solid #eee;
    cursor: pointer;
  }
`
