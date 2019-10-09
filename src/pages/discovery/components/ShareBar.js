import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
  BarWrapper,
  AuthorInfo,
  MiddleBorder,
  ShareButton,
  Icons,
  WechatCode
} from '../style'

// 详情页
class ShareBar extends PureComponent {
  render () {
    return (
      <BarWrapper className={this.props.fixed ? 'fixed' : ''} ref='shareBar'>
        <AuthorInfo href={this.props.profile} target='_blank'>
          <img alt='' className='author-img' src={this.props.authorImg} />
          <i className='img-border' />
          <span className='author-name'>{this.props.authorName}</span>
        </AuthorInfo>
        <MiddleBorder />
        <ShareButton>
          <span className='share'>一起来分享给朋友们看看吧：</span>
          <Icons>
            <i className='wechat'>
              <WechatCode
                className='wechat-code'
                style={{
                  background:
                    '#fff url(' +
                    this.props.wechatCode +
                    ') no-repeat top center/contain'
                }}
              >
                <p>分享至微信</p>
              </WechatCode>
            </i>
            <i className='weibo' />
            <i className='qq' />
          </Icons>
        </ShareButton>
      </BarWrapper>
    )
  }

  componentDidMount () {
    // 在组件第一次挂载完毕时调用
    this.bindEvents()
    top = this.refs.shareBar.offsetTop
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.toggleShareBarFixed)
  }
}

// ShareBar 绝对位置的纵坐标
var top = 0

const mapState = state => ({
  fixed: state.getIn(['discovery', 'fixed']),
  authorImg: state.getIn(['discovery', 'authorImg']),
  authorName: state.getIn(['discovery', 'authorName']),
  profile: state.getIn(['discovery', 'profile']),
  wechatCode: state.getIn(['discovery', 'wechatCode'])
})

const mapDispatch = dispatch => ({
  toggleShareBarFixed () {
    // document.documentElement.scrollTop 是当前滑动的距离
    // console.log(document.documentElement.scrollTop)
    // console.log(top)
    if (document.documentElement.scrollTop < top) {
      dispatch(actionCreators.toggleShareBarFixed(true))
    } else {
      dispatch(actionCreators.toggleShareBarFixed(false))
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(ShareBar)
