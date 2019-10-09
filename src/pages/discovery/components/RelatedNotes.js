import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RelatedWrapper } from '../style'
import { actionCreators } from '../../../common/downloadApp/store'

// 详情页
class RelatedNotes extends PureComponent {
  render () {
    return (
      <RelatedWrapper>
        <div>
          <h3 className='title'>相关笔记</h3>
          <ul className='panel-list'>
            {this.props.relatedList.map(item => (
              <a key={item.get('id')} href={item.get('href')}>
                <li>
                  <span
                    className='photo'
                    style={{
                      background:
                        'url(' + item.get('photo') + ') no-repeat center/cover'
                    }}
                  />

                  <div className='content'>
                    <h4>{item.get('title')}</h4>
                    <div className='likes'>
                      <i className='likes' />
                      <span className='likes'>{item.get('likes')}</span>
                    </div>
                  </div>
                </li>
              </a>
            ))}
          </ul>
          <div className='more' onClick={this.props.handleMoreClick}>
            查看更多
          </div>
        </div>
        {/* 页面别处有一个 DownloadApp 组件，此处不需要重复放置，否则点击后会同时生效，背景透明度叠加 */}
        {/* <DownloadApp /> */}
      </RelatedWrapper>
    )
  }
}

const mapState = state => ({
  relatedList: state.getIn(['discovery', 'relatedList'])
})

const mapDispatch = dispatch => ({
  handleMoreClick () {
    dispatch(actionCreators.showDownload())
  }
})

export default connect(
  mapState,
  mapDispatch
)(RelatedNotes)
