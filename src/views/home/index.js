import React, { Component } from 'react'
import scss from './index.scss'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import {
	Menu, Icon
} from 'antd'
import TodoList from '@/views/todolist'

class Home extends Component {
	render () {
		return (<div className={scss.wrap}>
			<Router>
				<div>
					<Menu
			        	mode="inline"
			        	theme="dark"
			        >
			        	<Menu.Item key="1">
			        		<Icon type="pie-chart" />
			        		<span>todolist</span>
			        		<Link to="/todolist"></Link>
			        	</Menu.Item>
			        	<Menu.Item key="2">
			        		<Icon type="desktop" />
			        		<span>暂无</span>
			        		<Link to="/"></Link>
			        	</Menu.Item>
			        	<Menu.Item key="3">
			        		<Icon type="inbox" />
			        		<span>暂无</span>
			        		<Link to="/"></Link>
			        	</Menu.Item>
			        </Menu>
			        <hr/>
			        <Route path="/todolist" component={TodoList}/>
				</div>
			</Router>
		</div>)
	}
}

export default Home
