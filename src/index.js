import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/normalize.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import state from './store/reducers'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(state, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()