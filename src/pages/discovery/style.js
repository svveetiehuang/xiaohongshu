import styled from 'styled-components'
import leftPic from '../../statics/left.png'
import leftHoverPic from '../../statics/left-hover.png'
import rightPic from '../../statics/right.png'
import rightHoverPic from '../../statics/right-hover.png'
import tagHeart from '../../statics/tag-heart.png'
import tagComment from '../../statics/tag-comment.png'
import tagStar from '../../statics/tag-star.png'
import wechatPic from '../../statics/wechat.png'
import weiboPic from '../../statics/weibo.png'
import qqPic from '../../statics/qq.png'
import wechatHoverPic from '../../statics/wechat-hover.png'
import weiboHoverPic from '../../statics/weibo-hover.png'
import qqHoverPic from '../../statics/qq-hover.png'

// 详情页
export const CardWrapper = styled.div`
  // display: flex;
  // justify-content: center;
  // 通过 margin auto 的居中方法，在浏览器宽度缩小时，优先压缩 margin 部分，保证内容显示（弹性布局居中不能实现）
  width: 850px;
  margin: 0 auto;
  padding: 24px 0 36px;
  margin-bottom: 150px;
  background: #fbfbfb;
  // 清除浮动
  overflow: hidden;
`

export const LeftCard = styled.div`
  float: left;
  width: 500px;
  margin-right: 30px;
  // background: pink;
`

export const RightCard = styled.div`
  float: left;
  width: 320px;
  height: 700px;
  // background: skyblue;
`
// 笔记大图（含左右切换按钮）
export const Carousel = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background: #fbfbfb;
  border-radius: 4px;
  overflow: hidden; // 保证背景色和里面的盒子不超出圆角

  ul {
    list-style: none;
  }

  li {
    // display: flex; 貌似和 display: none; 冲突
    // display: flex;
    // justify-content: center;
    // align-items: center;

    // 让所有的 li 都消失，在标签中把 id 等于 currentId 和 nextId 的 li 放出来（可见的只有一个或两个）
    display: none;
    position: absolute;
    top: 0;
    width: 500px;
    height: 500px;

    // 图片默认往左滑动（一定一定不要漏掉 & 喔）
    &.left {
      left: 100%;
    }
    &.right {
      left: -100%;
    }

    // 所有 li 都放在右边（hidden），只有 id 等于 currentId 的 li 放在中间
    &.active {
      top: 0;
      left: 0;
    }

    // 动画（按进度添加和移除不同的类样式）
    // 往左切换图片
    /* 入场动画执行的第一个时刻 */
    &.left-enter {
      transform: translateX(0);
    }

    /* 整个动画过程（写的是动画最后的效果，并非最后保留的样式；
    只有写在 transition 后的属性变化会应用动画，其他属性直接呈现最后的样式） */
    &.left-enter-active {
      transform: translateX(-500px);
      transition: transform 0.8s ease;
    }

    /* 动画执行完成后呈现的样式 */
    &.left-enter-done {
      transform: translateX(-500px);
    }

    // 往右切换图片
    &.right-enter {
      transform: translateX(0);
    }
    &.right-enter-active {
      transform: translateX(500px);
      transition: transform 0.8s ease;
    }
    &.right-enter-done {
      transform: translateX(500px);
    }

    // img 不方便做切换动画，改用背景图（貌似用 img 也可以...）
    // img {
    //   // 块元素才能用 margin 居中
    //   display: block;
    //   margin: 0 auto;
    //   // 图片等比例缩放，不超出父盒子（最大宽高是父盒子宽高的100%）
    //   max-width: 100%;
    //   max-height: 100%;
    // }
  }
`
// 大图左右切换按钮
export const Switch = styled.i`
  // 相对定位在 Carousel 上
  // 绝对定位后转为行内块
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &.left {
    left: 10px;
    background: url(${leftPic}) no-repeat;
    background-size: contain; // 背景图等比缩小（和背景图一起写才生效）
    :hover {
      // 悬停时换灰色小图标
      background: url(${leftHoverPic}) no-repeat;
      background-size: contain; // 背景图等比缩小
    }
  }

  &.right {
    right: 10px;
    background: url(${rightPic}) no-repeat;
    background-size: contain; // 背景图等比缩小
    :hover {
      background: url(${rightHoverPic}) no-repeat;
      background-size: contain; // 背景图等比缩小
    }
  }
`

// 缩略图
export const SmallPics = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  list-style: none;
`

export const SmallPic = styled.li`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  // 样式变化时的过渡(简单的变化直接用过渡而不是动画实现)
  transition: opacity 0.8s ease;

  &.active {
    border: 1px solid #ff2741;
    box-sizing: border-box;
    opacity: 1;
    box-shadow: 0 3px 8px 0 rgba(255, 82, 103, 0.5);
    transition: opacity 0.8s ease;
  }
`

// 笔记文字部分
export const ContentWrapper = styled.div`
  margin-top: 25px;
  width: 500px;
`

export const NoteTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 36px;
`

export const NoteText = styled.div`
  p {
    margin: 1em 0;
  }
`

// 笔记底部标签
export const NoteTags = styled.div`
  margin: 30px 0;
  font-size: 16px;
  color: #555;

  i {
    // i 是 inline 元素，转为行内块才能设置宽高
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .like i {
    // 写了背景图后 其他背景相关属性才生效 所以要写在一起
    background: url(${tagHeart}) no-repeat;
    background-size: contain;
  }
  .comment i {
    background: url(${tagComment}) no-repeat;
    background-size: contain;
  }
  .star i {
    background: url(${tagStar}) no-repeat;
    background-size: contain;
  }
  .like,
  .comment {
    margin-right: 30px;
  }
  span span {
    margin-left: 3px;
    vertical-align: middle;
  }
`
// 发布日期
export const PublishDate = styled.div`
  margin-top: 30px;
  color: #999;
`

// 底部分享条
export const BarWrapper = styled.div`
  // 微信二维码需要浮动
  position: relative;
  // 弹性布局，便于垂直居中，以及 ShareButton 拉伸占满全部
  display: flex;
  flex-direction: row; // 默认
  align-items: center; // 垂直居中
  margin-bottom: 16px;
  width: 500px;
  height: 50px;
  border-radius: 25px; // 此处不能写50%（正方形才可）
  border: 1px solid #eee;
  box-sizing: border-box;
  background: #fff;

  :hover {
    // 鼠标进入分享条时内部所有文字变粗
    font-weight: 500;
  }
  &.fixed {
    position: fixed;
    bottom: 0; // 不写 left/right 自动保持水平位置
    border: none; // 只有浅色盒子阴影，没有边框
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);
    :hover {
      // 固定定位时，鼠标进入还会加深盒子阴影
      font-weight: 500;
      box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.15);
    }
  }
`
// 分享条 左边作者信息
export const AuthorInfo = styled.a`
  // 头像框要绝对定位
  position: relative;
  display: block;
  margin: 0 11px;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  // 头像、头像框、名字，内部所有子盒子都左浮动
  // 作者头像
  .author-img {
    float: left;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  // 头像框
  .img-border {
    // 脱标转为行内块
    float: left;
    position: absolute; // 相对定位在 AuthorInfo 上
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
  }
  // 作者名字
  .author-name {
    float: left;
    width: 82px;
    margin-left: 15px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 500;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const MiddleBorder = styled.span`
  display: inline-block;
  width: 3px;
  height: 19px;
  margin: 0 5px 0 22px;
  background-color: #d8d8d8;
  border-radius: 1.5px;
`

export const ShareButton = styled.div`
  flex: 1; // 拉伸占满右侧剩余空间
  // 内部盒子横向排列，垂直居中
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`
export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 7px;

  i {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 10px;
    cursor: pointer;

    &.wechat {
      background: url(${wechatPic}) no-repeat;
      background-size: contain;
      :hover {
        background: url(${wechatHoverPic}) no-repeat;
        background-size: contain;
        .wechat-code {
          display: block;
        }
      }
    }
    &.weibo {
      background: url(${weiboPic}) no-repeat;
      background-size: contain;
      :hover {
        background: url(${weiboHoverPic}) no-repeat;
        background-size: contain;
      }
    }
    &.qq {
      background: url(${qqPic}) no-repeat;
      background-size: contain;
      :hover {
        background: url(${qqHoverPic}) no-repeat;
        background-size: contain;
      }
    }
  }
`

// 微信扫码
export const WechatCode = styled.div`
  display: none;
  position: absolute;
  right: 40px;
  top: -155px;
  width: 118px;
  height: 143px;
  box-sizing: border-box;
  border: 1px solid #eee;
  border-radius: 4px;
  p {
    margin-top: 120px;
    text-align: center;
    font-size: 12px;
    color: #555;
  }
`

// 评论部分
export const CommentWrapper = styled.div`
  width: 500px;
  overflow: hidden;
`

export const CommentTitle = styled.h3`
  margin-bottom: 20px;

  i.title {
    // i 是内联 无法设置宽高
    display: inline-block;
    margin-right: 12px;
    width: 5px;
    height: 16px;
    background: #ff2442;
    vertical-align: middle;
  }
  span.title {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    vertical-align: middle;
  }
`

// 评论内容区
export const CommentContent = styled.div`
  // 底部查看更多评论
  .more {
    padding: 10px 0;
    font-size: 14px;
    font-weight: 500;
    color: #5b92e1;
    text-align: center;
    cursor: pointer;
  }
`
export const Comment = styled.div`
  margin-left: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  .comment-info {
    overflow: hidden;
  }
  :first-child {
    padding-top: 0;
  }
`
export const User = styled.div`
  img.user-avatar {
    float: left;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`
export const UserInfo = styled.div`
  float: left;
  margin-left: 10px;
  h4 {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }
  span {
    display: inline-block;
    margin-top: 5px;
    line-height: 14px;
    font-size: 12px;
    color: #999;
  }
`
export const CommentStats = styled.div`
  float: right;
  cursor: pointer;
  i.agree {
    display: inline-block;
    margin-right: 6px;
    // width: 17px;
    // height: 17px;
    font-size: 17px;
    color: #888;
  }
  span {
    font-size: 14px;
    color: #666;
  }
  span.agree-sum {
    margin-right: 4px;
  }
`
export const Content = styled.div`
  margin: 10px 0 0 40px;
  line-height: 27px;
`
export const Replies = styled.div`
  margin: 10px 0 0 40px;
  padding: 0 10px;
  background: #f5f8fa;
`
export const Reply = styled.div`
  padding: 10px 0;
  line-height: 21px;
  p {
    display: inline;
  }
`

// 右边卡片
export const AuthorWrapper = styled.div`
  width: 320px;
  height: 176px;
  margin-bottom: 20px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  box-sizing: border-box;

  // 第一栏
  h3.title {
    padding: 10px 0 10px 20px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }

  // 第二栏
  .author-info {
    display: block;
    margin: 10px 20px 0;
    padding-bottom: 9px;
    border-bottom: 1px solid #eee;
    overflow: hidden; // 清除浮动
    color: #333;
    text-decoration: none;
    cursor: pointer;

    // 左边图片
    .img {
      float: left;
      position: relative;
      cursor: pointer;

      .author-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .img-border {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-sizing: border-box;
      }
    }

    // 右边简介
    .info {
      float: left;
      // 如果不设置宽度，宽度过宽，即使加了 float 也会到下一行，所以要浮动元素的限制宽度
      width: 190px;
      margin-left: 15px;

      // 作者名字和等级
      h6.author-name {
        margin-top: 4px;
        height: 20px;
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        word-wrap: normal;
        text-overflow: ellipsis;

        span {
          display: inline-block;
        }

        // 等级标志
        i {
          display: inline-block;
          width: 18px;
          height: 16px;
          transform: translateY(10%);
        }
      }

      // 作者简介
      .brief {
        margin-top: 5px;
        height: 20px;
        font-size: 14px;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`
// 第三栏
export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // 默认左对齐
  margin: 8px 20px;
`

export const NumberItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 86px;
  margin: 0 3px;
  font-size: 14px;
  lint-height: 20px;

  span {
    display: block;
    line-height: 20px;
  }

  .category {
    color: #999;
  }

  .number {
    font-weight: 500;
    color: #4f4f4f;
  }
`

// 相关笔记
export const RelatedWrapper = styled.div`
  width: 320px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-sizing: border-box;
  background: #fff;

  // 第一栏
  h3.title {
    padding: 10px 0 10px 20px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }

  // 第二栏
  ul.panel-list {
    max-height: 400px;
    // 垂直方向空间不足时隐藏（带滚动条）
    overflow-y: auto;
    list-style: none;

    a {
      text-decoration: none;
      color: #555;
    }
    // 相关笔记列表的每一项
    li {
      width: 280px;
      height: 80px;
      margin: 10px 20px;

      :hover h4 {
        color: #ff2741;
      }

      // 左边图片
      .photo {
        float: left;
        margin-right: 10px;
        width: 80px;
        height: 80px;
        border-radius: 4px;
      }
      // 右边标题和点赞数
      .content {
        float: left;
        // 需要限制宽度才能实现浮动效果
        width: 190px;
        margin-top: 3px;

        // 笔记标题
        h4 {
          line-height: 20px;
        }
        // 笔记点赞数
        div.likes {
          margin-top: 15px;

          i.likes {
            display: inline-block;
            width: 15px;
            height: 15px;
            margin-right: 8px;
            background: url(${tagHeart}) no-repeat;
            background-size: contain;
          }

          span.likes {
            display: inline-block;
            transform: translateY(-10%);
          }
        }
      }
    }
  }

  // 第三栏
  .more {
    padding: 9px 0;
    margin: 0 20px;
    font-size: 14px;
    color: #555;
    text-align: center;
    border-top: 1px solid #eee;
    cursor: pointer;
  }
`
