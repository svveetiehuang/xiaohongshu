import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  ContentWrapper,
  NoteTitle,
  NoteText,
  NoteTags,
  PublishDate
} from '../style'

// 详情页
class NoteContent extends PureComponent {
  render () {
    return (
      <ContentWrapper>
        <NoteTitle>{this.props.title}</NoteTitle>

        {/* 使标签能够被解析，而不是被当做字符串 */}
        <NoteText
          dangerouslySetInnerHTML={{ __html: this.props.noteContent }}
        />

        <NoteTags>
          <span className='like'>
            <i />
            <span>{this.props.like}</span>
          </span>
          <span className='comment'>
            <i />
            <span>{this.props.comment}</span>
          </span>
          <span className='star'>
            <i />
            <span>{this.props.star}</span>
          </span>

          <PublishDate>{'发布于 ' + this.props.publishDate}</PublishDate>
        </NoteTags>
      </ContentWrapper>
    )
  }
}

const mapState = state => ({
  title: state.getIn(['discovery', 'title']),
  noteContent: state.getIn(['discovery', 'noteContent']),
  like: state.getIn(['discovery', 'like']),
  comment: state.getIn(['discovery', 'comment']),
  star: state.getIn(['discovery', 'star']),
  publishDate: state.getIn(['discovery', 'publishDate'])
})

export default connect(
  mapState,
  null
)(NoteContent)
