const eventEmitter = require('events');

const emitter = new eventEmitter();
// console.log(eventEmitter);

// for event listen
const msg = (data)=>{
    console.log(`Student Name is ${data.name} and Education is ${data.education}`); 
};

emitter.on("notification",msg);

// trigger events
emitter.emit("notification",{name : "Chirag",education : "B.Tech"});
emitter.emit("notification",{name : "Jay",education : "BBA"});

