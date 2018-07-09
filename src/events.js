export function initEvents(vm){
	vm._events = Object.create(null)
	vm._hasHookEvent = false

	const listeners = vm.$options._parentListeners
	if(listeners){
	}
	
}

export function eventsMixin(Vue){
	
}