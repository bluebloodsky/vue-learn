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

export function lifecycleMixin(Vue) {
    Vue.prototype.mount = function(el) {
        var vm = this
        vm.$el = el
        new Watcher(vm, function() {
            vm.update(vm.render())
        })
    }

}

export function mountComponent(vm, el) {
    vm.$el = el
    callHook(vm, 'beforeMount')

    new Watcher(vm, () => {
        vm._update(vm._render())
    })
}