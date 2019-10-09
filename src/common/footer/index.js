import React from 'react'
import { FooterWrapper, Top, TopItem, Bottom, BottomItem, Icon } from './style'

const Footer = props => {
  return (
    <FooterWrapper className={props.theme || ''}>
      <Top className='top'>
        <TopItem>注册协议</TopItem>
        <TopItem>隐私协议</TopItem>
        <TopItem>侵权投诉指引</TopItem>
      </Top>
      <Bottom>
        <BottomItem>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.miibeian.gov.cn'
            title='小红书_沪ICP备'
          >
            沪ICP备 13030189号 Copyright © 2014-2019
            行吟信息科技（上海）有限公司
          </a>
          {' | '}
          <span>地址：上海市黄浦区马当路388号C座</span>
          {' | '}
          <span>电话：021-64224530</span>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//dc.xhscdn.com/edb5ef30-97e1-11e9-951b-276e4deecf1e/自营商品经营者信息公示.pdf'
          >
            自营经营者营业执照
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010102002533'
            title='小红书_沪公网安备'
          >
            2019 沪公网安备 31010102002533号
            <Icon className='police' />
          </a>
        </BottomItem>
        <BottomItem>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//o3.xiaohongshu.com/d/4-xingyin-sh-wangluowenhua.pdf'
            title='小红书_网络文化经营许可'
          >
            网络文化经营许可证：沪网文[2018]4086-308号
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//dc.xhscdn.com/2df10900-a3da-11e9-9232-a5e3ddde171e/行吟上海-增值电信业务经营许可证.pdf'
            title='小红书_网文'
          >
            增值电信业务经营许可证：沪B2-20150021
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//o3.xiaohongshu.com/d/6-xingyin-sh-shipingjinying.pdf'
            title='小红书_食品经营'
          >
            食品经营许可证：JY13101140093802
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//o3.xiaohongshu.com/d/7-xingyin-sh-chubanwu.pdf'
            title='小红书_出版物经营'
          >
            出版物经营许可证：新出发沪零字第M7553号
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://scjgj.sh.gov.cn/platform/survey/step1_phone'
            title='小红书_网购评价'
          >
            <Icon className='rank' /> 网购(订餐)大家评
          </a>
        </BottomItem>
        <BottomItem>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//o3.xiaohongshu.com/d/5-xingyin-sh-yiliaoqixie.pdf'
            title='小红书_医疗器械经营'
          >
            医疗器械经营许可证：沪嘉食药监械经营许20187006号
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://ci.xiaohongshu.com/%E5%8C%BB%E7%96%97%E5%99%A8%E6%A2%B0%E7%BD%91%E7%BB%9C%E4%BA%A4%E6%98%93%E6%9C%8D%E5%8A%A1%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B3%E5%8F%B0%E5%A4%87%E6%A1%88.PDF'
            title='小红书_医疗器械网络交易服务'
          >
            医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第00006号
          </a>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='//o3.xiaohongshu.com/d/3-xingyin-sh-yiyaoxinxi.pdf'
            title='小红书_互联网药品信息服务'
          >
            互联网药品信息服务资格证书：(沪)-经营性-2018-0011
          </a>
          {' | '}
          <span title='小红书_违法不良信息'>
            违法不良信息举报电话：(027) 5931 3970
          </span>
          {' | '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='http://www.shjbzx.cn'
            title='小红书_上海市互联网举报中心'
          >
            上海市互联网举报中心
          </a>
        </BottomItem>
      </Bottom>
    </FooterWrapper>
  )
}

export default Footer
