const EventEmitter = require("events");

class Job extends EventEmitter {}

job = new Job();

job.on("done", function(timeWhenDone) {
  console.log("Job done at " + timeWhenDone);
});

job.emit("done", new Date());
job.removeAllListeners();
