console.log("time to start the timer!");

var p = document.getElementsByTagName("p");
var sec = 00;
var min = 00;
var time = 0;
var ticker = null;

function tick() {
	sec++;
	if (sec >= 60) {
		sec = 00;
		min ++;
	}
	p.textConent = `${min}:${sec}`;
	timer();
}

function timer() {
	ticker = setInterval(function () {
		document.getElementById('time').innerHTML = `${min}:${sec}`;
		sec++;
		console.log(sec);
	}, 1000);
}

function start() {
	timer();
};

function stop() {
	clearInterval(ticker);
}

function reset() {
	sec = 00;
	document.getElementById('time').innerHTML = `${min}:${sec}`;
	stop();
}