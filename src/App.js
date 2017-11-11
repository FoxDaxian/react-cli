import React, { Component } from 'react'
// TODO react-routet，修改了提交首页方块不更新的问题
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import '@/App.css'

import Header from '@/views/header'
import Home from '@/views/home'



class App extends Component {
	render() {
		return (<div className="App">
			<Header></Header>
			<Router>
				<Route path="/" component={Home} />
			</Router>
		</div>)
	}
}

export default App
