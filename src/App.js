import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import '@/App.css'

import Header from '@/views/header'
import Home from '@/views/home'

import { connect } from 'react-redux'

import {
	addItem
} from '@/store/actions'

// 别嫌麻烦，先这样写着
const mapDispatchToProps = (dispatch) => {//遍历dispatch到组件的props，以让组件调用
	return {
		add_fn: (text) => dispatch(addItem(text))
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todoReducer
	}
}



class App extends Component {
	render() {
		const { todos } = this.props

		return (<div className="App">
			<Header></Header>
			<Router>
				<Route path="/" component={Home} />
			</Router>
			{todos.map((el, index) => {
				return <li key={index}>{el.text}</li>
			})}
			<button onClick={this.addTodoList.bind(this)}>添加</button>
		</div>)
	}

	addTodoList () {
		this.props.add_fn('你好')
	}
}

const Index = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default Index
