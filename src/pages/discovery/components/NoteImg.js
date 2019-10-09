import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Carousel, Switch, SmallPics, SmallPic } from '../style'
import { actionCreators } from '../store'

// 详情页
class NoteImg extends PureComponent {
  render () {
    return (
      <div>
        <Carousel>
          {/* Carousel 包含大图和切换按钮 */}
          <ul className='big-pic'>
            {/* 保证内部所有标签都能使用动画 加上之后 由于异步数据并非首次渲染 首次渲染图片时也会触发动画 此处不使用 */}
            {/* <TransitionGroup> */}
            {this.props.picList.map((item, index) => (
              <CSSTransition
                key={item.get('id')}
                // in 属性的值由 false 变 true 时执行入场动画（按时间给内部标签加上和移除 enter 相关的样式）
                // 当 nextId 不等于 currentId 时执行动画（通常是相等的，store 中初始值也是相等的，只有点击按钮或缩略图时会改变 nextId 的值导致二者不等，右侧显示第二张图片并启动动画——同时移动两张图片）
                // 动画靠属性 in 的值（布尔类型）的变化启动，渲染靠 props/store 中数据的变化启动
                in={this.props.nextId !== this.props.currentId}
                // 点击左右按钮会决定动画切换的方向（行为改变数据，数据影响视觉）
                classNames={this.props.direction}
                timeout={800}
                // 动画执行完后，利用钩子函数把 nextId 的值给 currentId，二者再次相等（此时页面重新渲染，前一张图片消失）
                onEntered={this.props.changeCurrentId}
                /* 总结：
                点击按钮/缩略图时，让 store 中两个 id 的值不等，触发动画，且重新渲染显示两张图（也有可能点击后二者仍相等，此时页面无任何变化）；
                动画结束时，让 store 中的两个 id 值重新相等，检测到数据变化，页面重新渲染，只显示中间一张图，另外的图排到右边或左边（行内样式优先级高） */
              >
                <li
                  // id 的值可能没有规律，只作为循环的 key；切换图片功能使用 index 进行判断
                  // 每次按左右按钮会改变图片的切换方向，也会改变即将出现的图片的位置，因此 this.props.direction 影响每次渲染的样式
                  className={
                    index === this.props.currentId
                      ? 'active ' + this.props.direction
                      : this.props.direction
                  }
                  style={{
                    // background-position 的 center 是 center center 的简写
                    background:
                      'url(' +
                      item.get('bigUrl') +
                      ') no-repeat center/contain',
                    // 只有 index 等于 currentId 或 nextId 的 li 才可以显示
                    // 两个 id 相等时显示一张图片，不等时同时显示两张（只在点击按钮/缩略图后到动画结束之前不相等，其余时间相等）
                    display:
                      index === this.props.currentId ||
                      index === this.props.nextId
                        ? 'block'
                        : 'none'
                  }}
                />
              </CSSTransition>
            ))}
            {/* </TransitionGroup> */}
          </ul>

          <Switch className='left' onClick={this.props.handleLeft} />
          <Switch className='right' onClick={this.props.handleRight} />
        </Carousel>

        <SmallPics>
          {this.props.picList.map((item, index) => {
            return (
              <SmallPic
                key={item.get('id')}
                className={
                  // 注意：因为在点击的同时要立马把对应缩略图变为 active，所以要和点击时立马发生变化的 nextId 做比较，一起变化
                  index === this.props.nextId ? 'active' : ''
                }
                style={{
                  background:
                    'url(' + item.get('smallUrl') + ') no-repeat center/cover'
                }}
                // 点击缩略图时，传入被点击缩略图的 index，改变 store 中 nextId 的值
                onClick={() => this.props.handleSmallPic(index)}
              />
            )
          })}
        </SmallPics>
      </div>
    )
  }
}

const mapState = state => ({
  picList: state.getIn(['discovery', 'picList']),
  currentId: state.getIn(['discovery', 'currentId']),
  nextId: state.getIn(['discovery', 'nextId']),
  direction: state.getIn(['discovery', 'direction'])
})

const mapDispatch = dispatch => ({
  changeCurrentId () {
    dispatch(actionCreators.changeCurrentId())
  },
  handleLeft () {
    dispatch(actionCreators.lastPic())
  },
  handleRight () {
    dispatch(actionCreators.nextPic())
  },
  handleSmallPic (index) {
    dispatch(actionCreators.handleSmallPic(index))
  }
})

export default connect(
  mapState,
  mapDispatch
)(NoteImg)
