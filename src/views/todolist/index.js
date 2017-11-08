import React, { Component } from 'react'
import scss from './index.scss'

import {
	Button, Icon, Input, message, Row, Col
} from 'antd';

import { connect } from 'react-redux'
import {
	addItem, deleteItem, editItem, togItem
} from '@/store/actions'
const mapStateToProps = state => {
	return {
		todos: state.todoReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem (text) {
			return dispatch(addItem(text))
		},
		deleteItem (index) {
			return dispatch(deleteItem(index))
		},
		editItem (text, index) {
			return dispatch(editItem(text, index))
		},
		togItem (index) {
			return dispatch(togItem(index))
		}
	}
}

class TodoList extends Component {
	constructor () {
		super()
		this.state = {
			itemText: '',
			editText: '',
			uiState: {
				toggleEdit: false
			}
		}
	}
	render () {
		// 从这里开始写
		const { todos } = this.props
		return (<Row className={scss.wrap}>
			{
				todos.map((item, index) => {
					return <Col offset={2} span={20} key={index}>
						<span>{item.text}</span>
						<Icon type={item.completed ? 'smile-o' : 'frown-o'} className="completed" style={{fontSize: '20px'}} />

						<div className="panel">
							<div className="editWrap" style={{display: this.state.uiState.toggleEdit ? 'block' : 'none'}} >
								<Input placeholder="edit" value={this.state.editText} onChange={this.editTextFunc.bind(this)} />
								<Button onClick={this.confirmEdit.bind(this, index)}>
									<Icon type="check" />
								</Button>
							</div>
							<Button type="danger" onClick={this.deleteItem.bind(this, index)}>
								<Icon type="minus-circle-o" />
							</Button>
							<Button onClick={this.toggleEdit.bind(this)}>
								<Icon type="edit" />
							</Button>
							<Button onClick={this.togItem.bind(this, index)}>
								<Icon type="swap" />
							</Button>
						</div>
					</Col>
				})
			}
			<Col offset={2} span={18}>
				<Input placeholder="写点什么" value={ this.state.itemText } onChange={this.eachOtherBind.bind(this)}  onKeyUp={this.todoAdd.bind(this)} />
			</Col>
			
			<Col span={2}>
				<Button type="primary" onClick={this.todoAdd.bind(this)}>
					<Icon type="plus-circle-o" />
				</Button>
			</Col>
		</Row>)
	}

	togItem (index) {
		this.props.togItem(index)
	}

	editTextFunc (e) {
		this.setState({
			editText: e.target.value
		})
	}

	confirmEdit (index) {
		this.props.editItem(this.state.editText, index)
		this.setState({
			uiState: {
				...this.state.uiState,
				toggleEdit: !this.state.uiState.toggleEdit
			}
		})
		this.setState({
			editText: ''
		})
	}

	toggleEdit () {
		this.setState({
			uiState: {
				...this.state.uiState,
				toggleEdit: !this.state.uiState.toggleEdit
			}
		})
	}

	deleteItem (index) {
		this.props.deleteItem(index)
	}

	eachOtherBind (e) {
		this.setState({
			itemText: e.target.value
		})
	}

	todoAdd (e) {
		if (typeof e.keyCode !== 'undefined' && e.keyCode !== 13) {
			return
		}
		if (!this.state.itemText) {
			message.error('不能为空')
			return
		}
		this.props.addItem(this.state.itemText)
		this.setState({
			itemText: ''
		})
	}

}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)