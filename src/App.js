import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import '@/App.css'

const view1 = () => (
	<div>view1</div>
	)

const view2 = () => (
	<div>view2</div>
	)

class App extends Component {
	render() {
		return (<div className="App">
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/view1">view1</Link>
						</li>
						<li>
							<Link to="/view2">view2</Link>
						</li>
					</ul>
					<hr/>
					<Route path="/view1" component={view1} />
					<Route path="/view2" component={view2} />
				</div>
			</Router>
		</div>)
	}
}

export default App
