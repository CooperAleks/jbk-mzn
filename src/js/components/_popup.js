import {OVERLAY, DOC, BODY} from '../constants';

const ACTIVE = 'is-active',
			NOSCROLL = 'no-scroll';

class Popup {

	constructor(options) {

		this._target = $(options.target);
		this._showHand = $(options.showHand);
		this._hideHand = this._target.find(options.hideHand);

		this._init();
	}

	_read(e) {
		const thisHand = e.currentTarget;

		const thisName = thisHand.dataset.popupName;

		const thisTarget = this._target.filter('[data-popup-name='+thisName+']');

		this._show(thisTarget);

		return false;
	}

	_show(target) {
		this._hide();
		target.addClass(ACTIVE);
		OVERLAY.addClass(ACTIVE);
		BODY.addClass(NOSCROLL);

		DOC.on('click', this._hide.bind(this));
	}

	_hide() {
		this._target.removeClass(ACTIVE);
		OVERLAY.removeClass(ACTIVE);
		BODY.removeClass(NOSCROLL);

		DOC.off('click', this._hide.bind(this));
	}

	_init() {
		this._target.on('click', (e)=> { e.stopPropagation() });
		this._showHand.on('click', this._read.bind(this));
		this._hideHand.on('click', this._hide.bind(this));
	}
}


new Popup ({
	target: '.js-popup',
	showHand: '.js-popup-hand',
	hideHand: '.js-close'
});
