import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { NoteWrapper, NoteColumn, Note } from '../style'
import { actionCreators } from '../store'

class Notes extends PureComponent {
  render () {
    return (
      <NoteWrapper>
        {/* 两层循环 */}
        {/* note 是 immutable 对象 */}
        {this.props.note.map((item, index) => (
          // 记得外层循环项也要加 key
          <NoteColumn key={index}>
            {item.map(item => (
              <Link
                key={item.get('id')}
                to={'/discovery/item/' + item.get('id')}
              >
                <Note>
                  <div className='note-info'>
                    <img
                      alt=''
                      src={item.get('noteImg')}
                      className='note-img'
                    />
                    <i
                      className={item.get('isVideo') ? 'video' : 'video hidden'}
                    />
                    <h3 className='note-title'>{item.get('title')}</h3>
                  </div>

                  <div className='note-append'>
                    <div className='user'>
                      <img
                        alt=''
                        src={item.get('userImg')}
                        className='user-img'
                      />
                      <span className='name'>{item.get('userName')}</span>
                    </div>

                    <div className='like'>
                      <i className='heart' />
                      <span className='likes'>{item.get('likes')}</span>
                    </div>
                  </div>
                </Note>
              </Link>
            ))}
          </NoteColumn>
        ))}
      </NoteWrapper>
    )
  }

  componentDidMount () {
    // 获取数据并改变 store 中 note 的内容
    this.props.changeNoteData()
  }
}

const mapState = state => ({
  note: state.getIn(['explore', 'note'])
})

const mapDispatch = dispatch => ({
  changeNoteData () {
    // dispatch 一个函数会执行该函数（函数内部会获取 AJAX 数据并发送给 store）
    dispatch(actionCreators.getNote())
  }
})

export default connect(
  mapState,
  mapDispatch
)(Notes)
