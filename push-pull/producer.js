// producer.js
var zmq = require("zeromq"),
  sock = zmq.socket("push");

sock.bindSync("tcp://127.0.0.1:3000");
console.log("Producer bound to port 3000");

let startTime = Date.now();
console.log("Start Time:" + startTime);
for (let index = 0; index < 10000; index++) {
    sock.send("index:" + index + " date: " + Date.now());
}
let endTime = Date.now();
console.log("End Time:" + endTime);

console.log("Total Time:" + (endTime - startTime));

