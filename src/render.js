export function initRender(vm) {
   vm.$createElement = (a,b,c,d) => createElement(vm,a,b,c,d)
}

export function renderMixin(Vue) {

}

Vue.prototype._render = function(){
	const vm = this
	const render = vm.$options.render
	let vnode = render.call(vm , vm.$createElement)
}

function createElement(ctx , tag, data, children) {

}