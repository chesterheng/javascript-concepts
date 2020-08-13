var w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("demo_workers.js");
    }
    w.onmessage = function (event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML =
      "Sorry! No Web Worker support.";
  }
}

function stopWorker() {
  w.terminate();
  w = undefined;
}

startWorker()