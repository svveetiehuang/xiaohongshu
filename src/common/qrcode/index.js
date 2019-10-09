import React, { Fragment } from 'react'
import { SmallQr, BigQr } from './style'

const QrCode = props => (
  <Fragment>
    <SmallQr>
      <BigQr>
        <img
          alt=''
          src='//ci.xiaohongshu.com/8aa9236a-43ef-44f0-97d3-3167847de82a@r_640w_640h.jpg'
        />
        <p>扫我下载App</p>
      </BigQr>
    </SmallQr>
  </Fragment>
)

export default QrCode
