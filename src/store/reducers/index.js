// reducers

import { combineReducers } from 'redux'
import {
	todos
} from '@/store/states'

import {
	ADD_TODO
} from '@/store/types'

const todoReducer = (state = todos, action) => {
	switch (action.type) {
		case ADD_TODO:
		return [...state, {
			text: action.text,
			cmplete: false
		}]
		default:
		return state;
	}
}

const temp = (state = todos, action) => {
	switch (action.type) {
		case ADD_TODO:
		return [...state, {
			text: action.text,
			cmplete: false
		}]
		default:
		return state;
	}
}

// 多个reducers 共同使用demo
const redux = combineReducers({
	todoReducer,
	temp
})

export default redux