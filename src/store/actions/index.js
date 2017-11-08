// actions

import {
	ADD_TODO, DEL_TODO, EDIT_TODO, TOG_TODO
} from '@/store/types'

export const addItem = text => {
	return {
		type: ADD_TODO,
		text,
		complete: false
	}	
}

export const deleteItem = index => {
	return {
		type: DEL_TODO,
		index
	}
}

export const editItem = (text, index) => {
	return {
		type: EDIT_TODO,
		text, index
	}
}

export const togItem = (index) => {
	return {
		type: TOG_TODO,
		index
	}
}