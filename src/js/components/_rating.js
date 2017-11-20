class Rating {
	constructor(options) {

		this._target = $(options.target);
		this._targetBar = this._target.find(options.targetBar);
		this._targetVal = this._target.find(options.targetVal);
		this._targetTxt = this._target.find(options.targetTxt);

		this._targetX = this._targetBar.offset().left;
		this._targetW = this._targetBar.outerWidth();

		this._callback = options.callback;

		this._prevVal = 0;
		this._lastVal = 0;

		this._init();
	}

	_read(e) {

		switch (e.type) {
			case 'click':
				this._fixVal(e); break;
			case 'mousemove' :
			case 'mouseenter':
				this._updVal(e); break;
			case 'mouseleave':
				this._remVal(e); break;
		}
	}

	_updVal(e) {

		const curVal = Math.ceil((((e.pageX-this._targetX)/this._targetW)*100)/20)*20;

		if (e.type == 'mouseenter') {
			this._setVal(curVal);
		} else if (curVal!=this._prevVal) {
			this._setVal(curVal);
		}
	}

	_setVal(val) {
		this._prevVal = val;

		this._updBar(val)
		this._updTxt(val)
	}

	_fixVal(e) {
		this._lastVal = this._prevVal;

		this._callback(this._lastVal);
	}

	_remVal() {
		this._updBar(this._lastVal)
		this._updTxt(this._lastVal)
	}

	_updBar(val) {
		this._targetVal.width(val+'%');
	}

	_updTxt(val) {
		this._targetTxt.removeClass('is-active');
		if (val) {
			this._targetTxt.eq(val/20-1).addClass('is-active');
		}
	}

	_init() {
		this._targetBar.on('click mousemove mouseenter mouseleave', this._read.bind(this))
	}
}


new Rating({
	target: '.js-rating',
	targetBar: '.js-rating-bar',
	targetVal: '.js-rating-val',
	targetTxt: '.js-rating-txt',

	callback: ratingCall
});

const ratingForm = $('.js-rating-form'),
			hiddenBl = ratingForm.find('.js-hidden-bl');

function ratingCall(val) {

	ratingForm.attr('data-rating-val', val/20);

	if ( val==100 ) {
		hiddenBl.addClass('is-hidden');
	} else {
		hiddenBl.removeClass('is-hidden');
	}
}
