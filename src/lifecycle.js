export function initLifecycle(vm) {

}

export function callHook(vm, hook) {
    const handlers = vm.$options(hook)
    if (handlers) {
        for (let i = 0, j = handlers.length; i < j; i++) {
            handlers[i].call(vm)
        }
    }
}

export function lifecycleMixin(Vue){
	
}