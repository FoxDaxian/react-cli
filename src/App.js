import React, { Component } from 'react'

import {observer} from 'mobx-react';
// 双向绑定

@observer
class App extends Component {
	constructor() {
		super()
		this.state = {
			name: ['冯世雨', '朱丽']
		}
	}

	render() {
		console.log(this.props.appState.timer)
		console.log(this.props.appState)
		

		return (
			<div className="App">
				<h1>{this.props.appState.timer}</h1>
				<h1>{this.props.appState.completeCount}</h1>
				<button onClick={this.props.appState.add.bind(this)}>增加</button>
			</div>
		)
	}
}

// 方法在下面写，类里面只写生命周期和render
const sayName = function() {
	console.log(this.state)
}

Object.assign(App.prototype, {
	sayName
})

export default App
