import { observe } from './observe'

function noop(a,b,c){}
const sharedPropertyDefinition = {
    emumerable : true ,
    configurable : true ,
    get : noop ,
    set : noop
}
export function initState(vm) {
    vm._watchers = []
    const opts = vm.$options
    opts.props && initProps(vm, opts.props)
    if (opts.data) {
        initData(vm, opts.data)
    } else {
        observe(vm._data = {}, true)
    }
}

function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter() {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function proxySetter(val){
        this[sourceKey][key] = val
    }
    Object.defineProperty(target , key , sharedPropertyDefinition)
}

function initProps(vm, propsOptions) {
    console.log(propsOptions)
}

function initData(vm, dataOptions) {
    let data = vm._data = typeof dataOptions === 'function' ? getData(dataOptions, vm) : dataOptions || {}
    const keys = Object.keys(data)
    for (let key of keys) {
        proxy(vm, '_data', key)
    }
    observe(data, true)
}

function getData(data, vm) {
    return data.call(vm)
}
export function stateMixin(Vue) {

}