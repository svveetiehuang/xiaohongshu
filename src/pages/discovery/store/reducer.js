import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

// 记住，要想页面变化，一定要改变数据
const defaultState = fromJS({
  // NoteImg
  picList: [],
  picSum: 1,
  currentId: 0,
  nextId: 0,
  direction: 'left',

  // NoteContent
  title: '',
  noteContent: '',
  like: 0,
  comment: 0,
  star: 0,
  publishDate: '',

  // ShareBar
  fixed: true,
  authorImg: '',
  authorName: '',
  levelIcon: '',
  brief: '',
  profile: '',
  note: 0,
  fans: 0,
  collect: 0,
  wechatCode: '',

  // Comments
  commentList: [],

  // RelatedNotes
  relatedList: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STORE_DATA:
      // 对于要转成 immutable 对象的 JS 对象，可以先用点的写法写到最后再转
      return state.merge({
        // NoteImg
        picList: fromJS(action.data.picList),
        picSum: action.data.picList.length,

        // NoteContent
        title: fromJS(action.data.text.title),
        noteContent: fromJS(action.data.text.noteContent),
        like: fromJS(action.data.text.number.like),
        comment: fromJS(action.data.text.number.comment),
        star: fromJS(action.data.text.number.star),
        publishDate: fromJS(action.data.text.publishDate),

        // ShareBar & Author
        authorImg: fromJS(action.data.author.authorImg),
        authorName: fromJS(action.data.author.authorName),
        levelIcon: fromJS(action.data.author.levelIcon),
        brief: fromJS(action.data.author.brief),
        profile: fromJS(action.data.author.profile),
        note: fromJS(action.data.author.number.note),
        fans: fromJS(action.data.author.number.fans),
        collect: fromJS(action.data.author.number.collect),
        wechatCode: fromJS(action.data.share.wechatCode),

        // Comments
        commentList: fromJS(action.data.commentList),

        // RelatedNotes
        relatedList: fromJS(action.data.relatedList)
      })
    case actionTypes.CHANGE_CURRENT_ID:
      return state.set('currentId', state.get('nextId'))
    case actionTypes.NEXT_PIC:
      if (state.get('currentId') === state.get('picSum') - 1) {
        return state.merge({ nextId: 0, direction: 'left' })
      }
      return state.merge({
        nextId: state.get('currentId') + 1,
        direction: 'left'
      })
    case actionTypes.LAST_PIC:
      if (state.get('currentId') === 0) {
        return state.merge({
          nextId: state.get('picSum') - 1,
          direction: 'right'
        })
      }
      return state.merge({
        nextId: state.get('currentId') - 1,
        direction: 'right'
      })
    case actionTypes.SMALL_PIC_CLICK:
      return state.set('nextId', action.index)

    case actionTypes.TOGGLE_SHARE_BAR_FIXED:
      return state.set('fixed', action.show)

    default:
      return state
  }
}
