import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { DownloadWrapper, DownloadCode } from './style'
import { actionCreators } from './store'

class DownloadApp extends PureComponent {
  render () {
    return (
      <DownloadWrapper className={this.props.show ? '' : 'hidden'}>
        <DownloadCode>
          <i
            style={{
              background:
                'url(//ci.xiaohongshu.com/0feac0b2-2134-438c-8b59-3ddeec95b811@r_640w_640h.jpg) no-repeat center/contain'
            }}
            className='potato'
          />
          <img
            alt=''
            src='//ci.xiaohongshu.com/8aa9236a-43ef-44f0-97d3-3167847de82a@r_640w_640h.jpg'
            className='qr-code'
          />
          <p>扫码下载小红书app</p>
          <p>与全世界的小红薯一起标记生活</p>
          <div className='close' onClick={this.props.handleClose}>
            关闭
          </div>
        </DownloadCode>
      </DownloadWrapper>
    )
  }
}

const mapState = state => ({
  show: state.getIn(['downloadApp', 'show'])
})

const mapDispatch = dispatch => ({
  handleMore () {
    dispatch(actionCreators.showDownload())
  },
  handleClose () {
    dispatch(actionCreators.closeDownload())
  }
})

export default connect(
  mapState,
  mapDispatch
)(DownloadApp)
