import { def , remove } from '../util'
import Dep from './dep'
export function Observe(value){
	this.value = value
	this.dep = new Dep()
	def(value , '__ob__' , this)
	if(Array.isArray(value)){
		this.observeArray(value)
	}else{
		this.walk(value)
	}
}

Observe.prototype.walk = function(obj){
	let keys = Object.keys(obj)
	for(let key of keys){
		defineReactive(obj,key)
	}

}

Observe.prototype.observeArray = function(value){
	for(let item of items){
		observe(item)
	}
}


export function observe(data , asRootData){
	if(typeof value !== 'ojbect'){
		return
	}
	let ob = new Observe(data)
	return ob
}

export function defineReactive(obj,key ,val){
	const dep = new Dep()
	const property = Object.getOwnPropertyDescriptor(obj,key)

	const getter = property && property.get
	const setter = property && property.set
	if((!getter || setter) && arguments.length ===2){
		val = obj[key]
	}

	let childOb = observe(val)

	Object.defineProperty(obj , key , {
		enumerable : true ,
		configurable : true ,
		get : function(){
			const value = getter ? getter.call(obj) : val
			if(Dep.target){
				dep.depend()
				if(childOb){
					childOb.dep.depend()
				}
			}
			return value
		},
		set: function(newVal){
			const value = getter ? getter.call(obj) : val
			if(newVal === value || (newVal !== newVal && value !==value)){
				return
			}
			if(setter){
				setter.call(obj , newVal)
			}else{
				val = newVal
			}
			childOb = observe(newVal)
			dep.notify()
		}
	})
}