// 根组件：负责整合所有小组件
import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style'
import { GlobalStaticStyle } from './statics/iconfont/iconfont'
import Home from './pages/home'
import Explore from './pages/explore'
import Discovery from './pages/discovery'

function App () {
  return (
    <Fragment>
      {/* 全局样式组件写在根节点内的最上面 */}
      <GlobalStyle />
      <GlobalStaticStyle />

      {/* 路由：根据请求的 url 显示不同组件 */}
      {/* 不变的部分如公共组件通常写在外面，用到 Link 组件的要写在里面 */}
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/explore' exact component={Explore} />
          <Route path='/discovery/item/:id' exact component={Discovery} />
        </div>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
