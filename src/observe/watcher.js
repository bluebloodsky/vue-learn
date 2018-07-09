import {pushTarget , popTarget } from './dep'

export function Watcher(vm, expOrFn, cb, options, isRenderWarcher) {
    if (isRenderWarcher) {
        vm._watcher.push(this)
    }
    vm._watchers.push(this)
    this.vm = vm
    this.cb = cb
    this.getter = expOrFn
    this.value = this.get()
}

Watcher.prototype.get() {
    pushTarget(this)
    const vm = this.vm
    value = this.getter.call(vm, vm)
    popTarget()
    return value
}