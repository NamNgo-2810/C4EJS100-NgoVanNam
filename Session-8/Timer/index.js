const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const status = document.getElementById("status");

let runner = 0;
status.innerHTML = 0;
stop.disabled = true;
let inter;
start.addEventListener('click', () => {
    start.disabled = true;
    stop.disabled = false;
    runner = time.value;
    if (runner == null || runner <= 0) {
        alert("Invalid time");
    }
    status.innerHTML = runner;
    
    inter = setInterval(() => {
        runner--;
        status.innerHTML = runner;
        if (runner == 0) {
            clearInterval(inter);
            status.innerHTML = 'Times up';
            start.disabled = false;
            stop.disabled = true;
        };
    }, 1000);
});

stop.addEventListener('click', () => {
    start.disabled = false;
    stop.disabled = true;
    clearInterval(inter);
    status.innerHTML = 'Stopped';
});