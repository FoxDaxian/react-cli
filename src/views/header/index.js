import React, { Component } from 'react'
import Button from 'antd/lib/button';
import scss from './index.scss'
// 尝试使用 ant 来写，现在正在处理

class Header extends Component {
	render () {
		return (<div className={scss.wrap}>
			<h1 className="h1">写一个最基本的react-demo</h1>
			<Button type="primary">Primary</Button>
		</div>)
	}	
}

// const mapStateToProps = state => {
// 	return {

// 	}
// }

export default Header