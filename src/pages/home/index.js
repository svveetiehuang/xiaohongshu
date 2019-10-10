import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { actionCreators } from './store'
import Header from '../../common/header'
import Footer from '../../common/footer'
import { BackgroundVideo, Content, IPhone, Slogan } from './style'

class Home extends PureComponent {
  render () {
    return (
      <DocumentTitle title='小红书_标记我的生活'>
        <div className='pc-wrapper'>
          {/* Header 的3个参数都需要传，Footer 传 theme 即可 */}
          <Header theme='dark' tab='home' url={this.props.match.url} />
          <BackgroundVideo>
            <video
              src={this.props.bgVideo}
              poster={this.props.bgPoster}
              autoPlay='autoplay'
              muted='muted'
              loop='loop'
            />
          </BackgroundVideo>
          <Content>
            <IPhone>
              <video
                src={this.props.phoneVideo}
                poster={this.props.phonePoster}
                autoPlay='autoplay'
                loop='loop'
              />
              <div
                style={{
                  background:
                    'url(' +
                    this.props.phoneCase +
                    ') no-repeat center/contain'
                }}
              />
            </IPhone>
            <Slogan>
              <div
                className='logo'
                style={{
                  background:
                    'url("//ci.xiaohongshu.com/83074709-0d05-4d1c-9d38-24a8e910d914") no-repeat center/contain'
                }}
              />
              <h2>标记我的生活</h2>
              <h5>world's best lifestyle at your fingertips</h5>
              <div className='qrcodes'>
                <div className='ios'>
                  <i className='iconfont'>&#xe63a;</i>
                  IOS 版
                  <div
                    className='qrcode'
                    style={{
                      background:
                        '#fff url(' +
                        this.props.iosCode +
                        ') no-repeat top/90%'
                    }}
                  />
                </div>
                <div className='android'>
                  <i className='iconfont'>&#xe60e;</i>
                  Android 版
                  <div
                    className='qrcode'
                    style={{
                      background:
                        '#fff url(' +
                        this.props.iosCode +
                        ') no-repeat top/90%'
                    }}
                  />
                </div>
              </div>
            </Slogan>
          </Content>
          <Footer theme='dark' />
        </div>
      </DocumentTitle>
    )
  }

  componentDidMount () {
    this.props.getHomeData()
  }
}

const mapState = state => ({
  bgVideo: state.getIn(['home', 'bgVideo']),
  bgPoster: state.getIn(['home', 'bgPoster']),
  phoneVideo: state.getIn(['home', 'phoneVideo']),
  phonePoster: state.getIn(['home', 'phonePoster']),
  phoneCase: state.getIn(['home', 'phoneCase']),
  iosCode: state.getIn(['home', 'iosCode']),
  androidCode: state.getIn(['home', 'androidCode'])
})

const mapDispatch = dispatch => ({
  getHomeData () {
    dispatch(actionCreators.getHomeData())
  }
})
export default connect(
  mapState,
  mapDispatch
)(Home)
