// 全局样式
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	/* http://meyerweb.com/eric/tools/css/reset/ 
		v2.0 | 20110126
		License: none (public domain)
	*/

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		font-size: 14px;
    font-family: -apple-system, SF UI Text, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, Helvetica Neue, Helvetica,Arial, sans-serif;
    color: #333;
		// 小红书的 body 背景色是灰色（上滑下滑到底都能看到）
		background-color: #fbfbfb;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	// 包在每个 page 的最外层
	.pc-wrapper{
		// 高度只能被 非 fixed 定位的子盒子撑开（fixed 的盒子是浏览器窗口的儿子），宽度默认为窗口宽度
		// 宽度超出部分隐藏，当且仅当都是自己儿子和都不是自己儿子的情况
		// 都是自己儿子，高度就是所有儿子高度和；都是窗口的儿子，窗口多高显示多少
		// 如果有浏览器窗口的儿子，自己儿子会守规矩，但是浏览器儿子仍然可以划动查看
		position:relative;
		// 超出窗口右边界部分不显示（即使用力向右划也不显示）
		overflow: hidden;
	}
`
