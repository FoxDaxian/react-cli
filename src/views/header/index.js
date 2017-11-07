import React, { Component } from 'react'
import css from './index.css'
// 加上scss

class Header extends Component {
	render () {
		return (<div className={css.wrap}>
			<h1>写一个最基本的react-demo</h1>
		</div>)
	}	
}

// const mapStateToProps = state => {
// 	return {

// 	}
// }

export default Header