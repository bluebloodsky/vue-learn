import { observe } from './observe'
export function initState(vm) {
    vm._watchers = []
    const opts = vm.$options
    opts.props && initProps(vm, opts.props)
    if (opts.data) { 
    	initData(vm, opts.data) 
    }else{
    	observe(vm._data={},true)
    }
}

function initProps(vm, propsOptions) {
    console.log(propsOptions)
}

function initData(vm, dataOptions) {
    let data = vm._data = typeof dataOptions === 'function' ? getData(dataOptions, vm) : dataOptions || {}
    observe(data, true)
}

function getData(data, vm) {
    return data.call(vm)
}
export function stateMixin(Vue) {

}