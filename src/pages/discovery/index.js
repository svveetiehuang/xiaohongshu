import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { CardWrapper, LeftCard, RightCard } from './style'
import NoteImg from './components/NoteImg'
import NoteContent from './components/NoteContent'
import ShareBar from './components/ShareBar'
import Comments from './components/Comments'
import Author from './components/Author'
import RelatedNotes from './components/RelatedNotes'
import { actionCreators } from './store'
import Header from '../../common/header'
import QrCode from '../../common/qrcode'
import Footer from '../../common/footer'

// 详情页
class Discovery extends PureComponent {
  render () {
    return (
      <div className='pc-wrapper'>
        {/* 向 Header 传入深浅主题、头部当前所选标签、当前页面的 url */}
        <Header theme='light' tab='community' url={this.props.match.url} />
        <DocumentTitle title={this.props.title}>
          <CardWrapper>
            <LeftCard>
              <NoteImg />
              <NoteContent />
              <ShareBar />
              <Comments />
            </LeftCard>

            <RightCard>
              <Author />
              <RelatedNotes />
            </RightCard>
          </CardWrapper>
        </DocumentTitle>
        <QrCode />
        <Footer theme='light' />
      </div>
    )
  }

  componentDidMount () {
    // console.log(this.props.match.url)
    this.props.getDiscoveryData(this.props.match.params.id)
  }
}

const mapState = state => ({
  title: state.getIn(['discovery', 'title'])
})

const mapDispatch = dispatch => ({
  getDiscoveryData (id) {
    dispatch(actionCreators.getDiscoveryData(id))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Discovery)
