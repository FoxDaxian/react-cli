import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/normalize.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appState from '@/mobx/appState'

// 实例化，然后注入
const store = new appState()

ReactDOM.render(
	<App appState={store}/>,
	document.getElementById('root')
)
registerServiceWorker()
