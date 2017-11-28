function getTimeRemaining(endtime) {
	let now = new Date();
		now = now.setHours(now.getHours());

	const t = Date.parse(endtime) - now,
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60),
		hours = Math.floor((t / (1000 * 60 * 60)) % 24);

	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(endtime) {
	const clock = $('#countTimer'),
		hoursSpan = $('.hours'),
		minutesSpan = $('.minutes'),
		secondsSpan = $('.seconds');

	function updateClock() {
		const t = getTimeRemaining(endtime);

		hoursSpan.html(('0' + t.hours).slice(-2));
		minutesSpan.html(('0' + t.minutes).slice(-2));
		secondsSpan.html(('0' + t.seconds).slice(-2));

		if (t.total < 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const countDownDate = new Date(Date.UTC(2018, 10, 28, 23, 59));

if (window.location.pathname == '/blackfriday.html' || window.location.pathname == '/blackfriday') {
	initializeClock(countDownDate);
}