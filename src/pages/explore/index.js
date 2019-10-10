import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { Container, More } from './style'
import Notes from './components/Notes'
import DownloadApp from '../../common/downloadApp'
import { actionCreators } from '../../common/downloadApp/store'
import Header from '../../common/header'
import QrCode from '../../common/qrcode'
import Footer from '../../common/footer'

// 社区精选页
class Explore extends PureComponent {
  render () {
    return (
      <DocumentTitle title='小红书_标记我的生活'>
        <div className='pc-wrapper'>
          {/* 向 Header 组件传入主题风格和 url 信息 */}
          <Header theme='light' tab='community' url={this.props.match.url} />
          <Container>
            <Notes />
            <More onClick={this.props.handleMoreClick}>查看更多</More>
            <DownloadApp />
          </Container>
          <QrCode />
          <Footer theme='light' />
        </div>
      </DocumentTitle>
    )
  }
}

const mapDispatch = dispatch => ({
  handleMoreClick () {
    dispatch(actionCreators.showDownload())
  }
})

export default connect(
  null,
  mapDispatch
)(Explore)
