import React, { Component } from 'react'
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
