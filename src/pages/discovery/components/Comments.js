import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fromJS } from 'immutable'
import {
  CommentWrapper,
  CommentTitle,
  CommentContent,
  Comment,
  User,
  UserInfo,
  CommentStats,
  Content,
  Replies,
  Reply
} from '../style'
import DownloadApp from '../../../common/downloadApp'
import { actionCreators } from '../../../common/downloadApp/store'

// 详情页
class Comments extends PureComponent {
  render () {
    return (
      <CommentWrapper>
        <CommentTitle>
          <i className='title' />
          <span className='title'>笔记评论</span>
        </CommentTitle>

        <CommentContent>
          {/* 循环评论 */}
          {this.props.commentList.map(item => (
            <Comment key={item.get('id')}>
              {/* 评论人、回复数 */}
              <div className='comment-info'>
                <User>
                  <img
                    alt=''
                    className='user-avatar'
                    src={item.get('userAvatar')}
                  />

                  <UserInfo>
                    <h4
                      className='user-nickname'
                      onClick={this.props.handleMoreClick}
                    >
                      {item.get('userName')}
                    </h4>
                    <span className='comment-date'>
                      {item.get('commentDate')}
                    </span>
                  </UserInfo>
                </User>

                <CommentStats onClick={this.props.handleMoreClick}>
                  <i className='agree iconfont'>&#xe797;</i>
                  <span
                    className='agree-sum'
                    style={{
                      display:
                        // 注意 span 是 inline-block
                        item.get('agreeSum') !== 0 ? 'inline-block' : 'none'
                    }}
                  >
                    {item.get('agreeSum')}
                  </span>
                  <span className='reply-action'>回复</span>
                </CommentStats>
              </div>

              {/* 评论内容 */}
              <Content>{item.get('commentContent')}</Content>

              {/* 评论的回复 */}
              <Replies
                style={{
                  display:
                    // immutable 数组要和 immutable 数组作比较
                    item.get('replyList') !== fromJS([]) ? 'block' : 'none'
                }}
              >
                {/* 循环评论列表 */}
                {item.get('replyList').map(item => (
                  <Reply key={item.get('id')}>
                    <span className='replier'>
                      {item.get('replier') + ' : '}
                    </span>
                    <p className='reply-content'>{item.get('replyContent')}</p>
                  </Reply>
                ))}
              </Replies>
            </Comment>
          ))}

          <div className='more' onClick={this.props.handleMoreClick}>
            查看更多评论
          </div>
        </CommentContent>

        <DownloadApp />
      </CommentWrapper>
    )
  }
}

const mapState = state => ({
  commentList: state.getIn(['discovery', 'commentList'])
})

const mapDispatch = dispatch => ({
  handleMoreClick () {
    dispatch(actionCreators.showDownload())
  }
})

export default connect(
  mapState,
  mapDispatch
)(Comments)
