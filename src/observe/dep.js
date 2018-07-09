import { remove } from '../util'
export default class Dep {
    constructor() {
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    removeSub(sub) {
        remove(this.subs, sub)
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    notify() {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update
        }
    }
}

Dep.target = null
const targetStack = []

export function pushTarget(_t) {
    if (Dep.target)
        targetStack.push(Dep.target)
    Dep.target = _t
}

export function popTarget() {
    Dep.target = targetStack.pop()
}