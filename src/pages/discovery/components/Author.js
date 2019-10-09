import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { AuthorWrapper, NumberWrapper, NumberItem } from '../style'

// 详情页
class Author extends PureComponent {
  render () {
    return (
      <AuthorWrapper>
        <h3 className='title'>笔记作者</h3>

        <a
          className='author-info'
          href={this.props.profile}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='img'>
            <img alt='' className='author-img' src={this.props.authorImg} />
            <i className='img-border' />
          </div>

          <div className='info'>
            <h6 className='author-name'>
              <span>{this.props.authorName}</span>
              <i
                style={{
                  background:
                    'url(' +
                    this.props.levelIcon +
                    ') no-repeat center/contain'
                }}
              />
            </h6>
            <p className='brief'>{this.props.brief}</p>
          </div>
        </a>

        <NumberWrapper>
          <NumberItem>
            <span className='category'>笔记</span>
            <span className='number'>{this.props.note}</span>
          </NumberItem>
          <NumberItem>
            <span className='category'>粉丝</span>
            <span className='number'>{this.props.fans + '万'}</span>
          </NumberItem>
          <NumberItem>
            <span className='category'>获赞与收藏</span>
            <span className='number'>{this.props.collect + '万'}</span>
          </NumberItem>
        </NumberWrapper>
      </AuthorWrapper>
    )
  }
}

const mapState = state => ({
  authorImg: state.getIn(['discovery', 'authorImg']),
  authorName: state.getIn(['discovery', 'authorName']),
  levelIcon: state.getIn(['discovery', 'levelIcon']),
  brief: state.getIn(['discovery', 'brief']),
  profile: state.getIn(['discovery', 'profile']),
  note: state.getIn(['discovery', 'note']),
  fans: state.getIn(['discovery', 'fans']),
  collect: state.getIn(['discovery', 'collect'])
})

export default connect(
  mapState,
  null
)(Author)
