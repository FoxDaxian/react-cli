import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addItem, test } from './store/actions'

class App extends Component {
	constructor() {
		super()
		this.add = this.add.bind(this)
	}
	componentDidMount() {
		console.log(this.props.test());
	}

	add() {
		this.props.addItem('redux')
	}

	render() {
		return (
			<div className="App">
				{this.props.todo.map((item, index) => <div key={index}>{item.text}</div>)}
				<button onClick={this.add}>增加</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todo: state.todoReducer
	}
}

export default connect(mapStateToProps, {
	addItem,
	test
})(App)
