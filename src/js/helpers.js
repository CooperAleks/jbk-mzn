// detect device width
const detectDevice = (w) => {
	if (!window.matchMedia) return false;
	return window.matchMedia('(max-width: '+ w +'px)').matches;
}

// detect touch device
const isTouchDevice = () => {
	return 'ontouchstart' in window;
}

const randomInteger = (min, max) => {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

export {detectDevice, isTouchDevice, randomInteger};