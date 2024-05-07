var number_html = document.getElementById("number");
var start_btn = document.getElementById("start_btn");
var user_input = document.getElementById("user_input");
var result = document.getElementById("result");
var running = document.getElementById("running");

var runningNumber = 0;
var interval;

function start() {
  if (user_input.value) {
    interval = setInterval(function () {
      if (runningNumber >= 100) {
        clearInterval(interval);
        runningNumber = 0;
        number_html.innerText = runningNumber;
        result.innerText = "You are late";
        start_btn.disabled = false;
      } else {
        runningNumber++;
        number_html.innerText = runningNumber;
      }
    }, 100);
    start_btn.disabled = true;
  } else {
    alert("Number to daal do");
  }
}
function stop() {
  // console.log(user_input.value);
  clearInterval(interval);
  if (user_input.value == runningNumber) {
    result.innerText = "You Win";
  } else {
    result.innerText = "You Loss";
  }
  // running.innerText = runningNumber;
}
function restart(){
  runningNumber = 0 ;
  number_html.innerText = 0 + '0';
  user_input.value = "";
  result.innerText = "-";
  start_btn.disabled = false;
}
  