import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  LogoPic,
  Nav,
  NavItem,
  DropDownWrapper,
  DropDown,
  DropDownItem
} from './style'

const Header = props => {
  return (
    // 把传入的 theme 作为类名，若无传入的属性，类名为空
    <HeaderWrapper className={props.theme || ''}>
      <Logo>
        <Link to='/'>
          <LogoPic className='logo' />
        </Link>
      </Logo>

      <Nav className='navigation'>
        <Link to='/'>
          <NavItem className={props.tab === 'home' ? 'current-tab' : ''}>
            首页
          </NavItem>
        </Link>
        <Link to='/explore'>
          <NavItem className={props.tab === 'community' ? 'current-tab' : ''}>
            社区精选
          </NavItem>
        </Link>
        <Link to={props.url} className='business'>
          <NavItem>业务合作</NavItem>
          <DropDownWrapper className='drop-down-wrapper'>
            <DropDown>
              <DropDownItem>品牌号</DropDownItem>
              <DropDownItem>广告合作</DropDownItem>
              <DropDownItem>品牌合作人</DropDownItem>
              <DropDownItem>招商合作</DropDownItem>
            </DropDown>
          </DropDownWrapper>
        </Link>
        {/* 跳转到外链用 <a> 不用 <Link> */}
        <a href='https://www.xiaohongshu.com/protocols/news'>
          <NavItem className={props.tab === 'news' ? 'current-tab' : ''}>
            新闻中心
          </NavItem>
        </a>
        <a href='https://www.xiaohongshu.com/protocols/about'>
          <NavItem className={props.tab === 'about' ? 'current-tab' : ''}>
            关于我们
          </NavItem>
        </a>
        <a href='https://www.xiaohongshu.com/protocols/liability'>
          <NavItem className={props.tab === 'liability' ? 'current-tab' : ''}>
            社会责任
          </NavItem>
        </a>
        <Link to={props.url}>
          <NavItem>加入我们</NavItem>
        </Link>
      </Nav>
    </HeaderWrapper>
  )
}

const mapState = state => ({
  isHomeMounted: state.getIn(['home', 'isHomeMounted'])
})

export default connect(
  mapState,
  null
)(Header)
