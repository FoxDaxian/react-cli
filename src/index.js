import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/normalize.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// action定义了什么事件会发生
// reducers定义了事件的具体内容
import { createStore } from 'redux'
import redux from '@/store/reducers'

//react-redux
import { Provider } from 'react-redux'

const store = createStore(redux)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
	)
registerServiceWorker()
