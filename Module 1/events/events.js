const EventEmitter = require("events");

class Job extends EventEmitter {}
let job = new Job();

job.on("done", () => {
  console.log("Job completed at " + new Date());
});

job.emit("done");

class Emitter extends EventEmitter {}

let n = 1;

emitter = new Emitter();
emitter.on("knock", () => {
  console.log(`Knocked ${n++} times`);
});

emitter.once("knock", () => {
  console.log("This knock will only happen once");
});

for (let i = 0; i < 10; i++) {
  emitter.emit("knock");
}
