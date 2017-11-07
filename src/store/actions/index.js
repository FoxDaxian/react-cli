// actions

import {
	ADD_TODO
} from '@/store/types'

export const add_fn = text => {
	return {
		type: ADD_TODO,
		text,
		complete: false
	}	
}