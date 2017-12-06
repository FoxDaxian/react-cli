import { observable, action, useStrict } from 'mobx'
// 使用严格模式必须加上 action
useStrict(true)
// @observable 为了可观察，也就是双向绑定
class appState {
	@observable timer = 0
	
	add = action(() => {
		this.timer += 1
	})
}

export default appState
