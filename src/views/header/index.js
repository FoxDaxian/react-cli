import React, { Component } from 'react'
import {
	Icon
} from 'antd';
import scss from './index.scss'
// 尝试使用 ant 来写，现在正在处理

class Header extends Component {
	render () {
		return (<div className={scss.wrap}>
			<h1>头部内容</h1>
			<Icon type="smile-o" />
		</div>)
	}	
}

// const mapStateToProps = state => {
// 	return {

// 	}
// }

export default Header