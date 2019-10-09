import styled from 'styled-components'
import heartPic from '../../statics/heart.png'
import videoPic from '../../statics/video.png'

// 主体部分（不含头部底部）
export const Container = styled.div`
  position: relative;
  padding: 30px 0 50px;
  margin-bottom: 150px;
  background-color: #fff;
  border-top: 1px solid #eee;
  box-sizing: border-box;
`

// 笔记区域
export const NoteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start-end;
`

export const NoteColumn = styled.ul`
  margin-right: 20px;
  list-style: none;
  :last-child {
    margin-right: 0;
  }
  // 去掉 <Link> 的下划线
  a {
    text-decoration: none;
  }
`

export const Note = styled.div`
  position: relative;
  width: 220px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

  overflow: hidden; //可以让图片也变圆角
  cursor: pointer;

  // 笔记遮罩
  :hover:after {
    position: absolute; // 给 Note 加上定位（子绝父相）
    top: 0;
    left: 0;
    content: '';
    height: 100%; //父组件 Note 的100%
    width: 100%;
    background-color: rgba(0, 2, 4, 0.2);
  }

  .note-info {
    position: relative;
  }
  .note-img {
    width: 220px;
  }
  .video {
    position: absolute;
    top: 10px;
    right: 8px;
    width: 25px;
    height: 25px;
    color: #fff;
    background: url(${videoPic}) no-repeat center/contain;
    &.hidden {
      display: none;
    }
  }
  h3 {
    margin: 10px 15px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: #000;
  }
  .note-append {
    display: flex;
    justify-content: space-between;
    margin: 0 15px;
  }
  .user,
  .like {
    display: flex;
    align-items: center;
  }
  .user-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  span {
    font-size: 12px;
    color: #555;
  }
  .name {
    margin-left: 10px;
  }
  .heart {
    width: 18px;
    height: 18px;
    color: #aaa;
    background: url(${heartPic}) no-repeat center/contain;
  }
  .likes {
    margin-left: 8px;
  }
`

// 笔记下方查看更多
export const More = styled.div`
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: #ff2741;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`
