import Vue from './src'
let app = new Vue({
    el: '#app',
    data() {
        return {
            msg: 'Hello,World'
        }
    },
    tpl: `
        <div>
        <input v-model="msg">
        {{msg}}
        </div>
        `
})

console.log(app.msg)