const EventEmiter = require("events")
const myEmitter = new EventEmiter()
// listener
myEmitter.on('brithday', ()=> {
    console.log('happy brithday to you')
})
myEmitter.on('brithday', (gift)=> {
    console.log(`I will send a gift ${gift}`);
})
myEmitter.emit('brithday', 'mackbook air')