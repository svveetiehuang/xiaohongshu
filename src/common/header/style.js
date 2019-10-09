import styled from 'styled-components'
// 引入（即使是引入图片）都要用 import
import logoPic from '../../statics/logo.png'
import darkLogoPic from '../../statics/logo-dark.png'

// 头部外层包裹
export const HeaderWrapper = styled.div`
  // 弹性布局兼容多种浏览器的写法（6种）(styled-components 会自动添加浏览器前缀)
  // display: -webkit-box;
  // display: -moz-box;
  // display: -webkit-flex;
  // display: -ms-flexbox;
  // display: box;
  display: flex;

  // 主轴：水平从左到右
  flex-direction: row;

  // 项目在主轴两端对齐
  justify-content: space-between;

  // 项目在交叉轴的中点对齐
  align-items: center;

  position: relative; // 搭配边偏移使用
  z-index: 3; // 在最上面（不被 download app 的遮罩遮住）

  width: 100%;
  height: 106px;

  // 浅色主题
  &.light {
    background-color: #fff;
  }
  // 深色主题
  &.dark {
    position: fixed;
    .logo {
      background: url(${darkLogoPic}) no-repeat center/contain;
    }
    .navigation > a > li {
      color: #fff;
      &.current-tab::before {
        background-color: hsla(0, 0%, 100%, 0.5);
        bottom: -9px;
      }
    }
  }

  // 根据屏幕宽度缩放首部
  @media screen and (max-width: 1250px) and (min-width: 1100px) {
    zoom: 0.9;
  }
  @media screen and (max-width: 1100px) {
    zoom: 0.8;
  }
`
// 头部 logo
export const Logo = styled.div`
  // 为了让 logo 脱标
  // logo 图片外需要有个盒子占位子再设置脱标，不然右边的导航栏会往左跑
  position: relative;

  min-width: 72px;
  // 高度不能省 否则垂直居中会出问题
  height: 25px;
  margin-left: 91px;
  margin-top: 1px;

  // 去掉 a 默认的下划线（改写成 div 了）
  // text-decoration: none;
`

export const LogoPic = styled.div`
  // 让 logo 图片脱标，不被右边文字遮挡
  position: absolute;

  width: 72px;
  height: 25px;

  background: url(${logoPic}) no-repeat center/contain;
`
// 头部导航栏
export const Nav = styled.ul`
  // 使用 flex 布局
  display: flex;

  // 主轴为水平方向，起点在左端
  flex-direction: row;

  // 项目在主轴上的对齐方式：右对齐
  justify-content: flex-end;

  // 项目在交叉轴的中点对齐
  align-items: center;

  // 设置最小宽度后，盒子不会被浏览器窗口挤压移动变形
  min-width: 1014px;
  height: 23px;
  margin-right: 76px;
  // 如果屏幕小于一个值就是 50px
  @media screen and (max-width: 1280px) and (min-width: 1100px) {
    margin-right: 50px;
  }

  // 不要列表小圆点
  list-style-type: none;

  // background: pink;

  // 去掉 Link 的下划线（Link 在 NavItem 外面所以写在这里）
  a {
    text-decoration: none;
    &.business {
      // 下拉菜单的爸爸要相对定位
      position: relative;
      // :hover {
      //   background: orange;
      // }
      :hover .drop-down-wrapper {
        // 在链接上（包括内部下拉菜单上）悬停时显示下拉菜单
        display: block;
      }
    }
  }
`

export const NavItem = styled.li`
  // 小横线子绝父相
  position: relative;

  margin-left: 58px;

  font-size: 16px;
  font-family: PingFang SC, Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #555;
  cursor: pointer;

  // background: orange;

  // 这个是被选中的标签下面的小横线
  ::before {
    // 横线是小 li 的子元素（给小 li 设置相对定位）
    position: absolute;
    // 距离小 li 的底部往下移
    bottom: -8px;

    content: '';

    width: 100%; // 占小 li 内容宽度的100%
    height: 2px;

    background-color: #ff2442;
    border-radius: 2px;

    // 左移自己的100%(why??)
    transform: translateX(-100%);

    // 完全透明
    // filter: alpha(opacity=0); 相当于CSS3 opacity 透明
    // 而filter属性是 IE 特有的，它还有很多其它滤镜效果
    // filter: alpha(opacity=0); 兼容 IE8 及以下的 IE 浏览器，而在支持 CSS3 opacity 的浏览器中，可以 opacity:0;
    opacity: 0;
    filter: alpha(opacity=0);
  }

  // 导航栏中当前被选中的 tab
  // 加上 & 适用于样式组件本身带有这个类名，去掉 & 适用于该组件内部子组件或子标签（不含该组件）
  &.current-tab {
    // light-theme
    color: #ff2442;

    ::before {
      // 不左移（覆盖上面的）
      transform: translateX(0);

      // 兼容写法
      opacity: 1;
      filter: none;
    }
  }
`

// 下拉菜单，鼠标悬停显示
export const DropDownWrapper = styled.div`
  display: none;
  // 下拉菜单用绝对定位（记得给爸爸加相对定位）
  position: absolute;
  // 不能完全靠边偏移 top 来下移拉菜单的位置，必须保证菜单和链接衔接，其余靠菜单内部推开
  top: 100%; // 正好下移父元素（链接）的高度
  left: 20px;
  // 靠 DropDownWrapper 的 padding-top 或 DropDown 的 margin-top 下移菜单，保证链接和菜单衔接
  padding-top: 30px;
`

export const DropDown = styled.ul`
  // margin-top: 30px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  list-style: none;
  // 保证选项的背景色在 border-radius 之内
  overflow: hidden;
`
// 下拉菜单选项
export const DropDownItem = styled.li`
  padding: 15px 30px;
  text-align: center;
  line-height: 16px;
  font-size: 16px;
  font-weight: 300;
  font-family: PingFang SC, Helvetica, Arial, sans-serif;
  color: #999;
  white-space: nowrap;
  :fisrt-child {
    margin-top: 30px;
  }
  :hover {
    background-color: #f5f5f5;
  }
`
