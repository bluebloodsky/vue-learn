import {initState} from './state'
export function initMixin(Vue) {
    Vue.prototype._init = function(options) {
        const vm = this
        vm.$options = options
        vm._self = vm
        initState(vm)
        vm.mount(document.querySelector(options.el))
    }
}