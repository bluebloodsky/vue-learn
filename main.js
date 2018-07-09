import Vue from './src'
let app = new Vue({
    el: '#app',
    data() {
        return {
            msg: 'Hello,World'
        }
    },
    render:function(c){
        var self = this
        return c('div', [
            c('input', {
                domProps: {
                    value: self.msg
                },
                on: {
                    input: function(event) {
                        self.$emit('input', event.target.vlue)
                    }
                }
            }),
            c(self.msg)
        ])
    }
})

console.log(app.msg)