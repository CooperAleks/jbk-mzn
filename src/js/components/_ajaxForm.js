function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
(function(){
	
	const signForm = $('.js-sign-form');

	const ajaxHref = signForm.attr('action'),
				ajaxType = signForm.attr('method') || 'GET';

	const sendHand = signForm.find('.js-form-submit');
	
	function sendForm() {
		// signForm.find('.js-popup-hand').trigger('click');
		if(!validateEmail(signForm.find('[name="userEmail"]').val())){
			signForm.find('[name="userEmail"]').addClass('is-error');
			return false;
		}

		const ajaxData = signForm.serialize();
		// console.log(ajaxHref, ajaxType);
		$.ajax(ajaxHref, {
			type: ajaxType,
			data: ajaxData,
			success: function(data) {
				// console.log(data);
				signForm.find('.js-popup-hand').trigger('click');
			}
		});
	}

	sendHand.on('click', sendForm);
})();

(function(){
	
	const rateForm = $('.js-rating-form');

	const ajaxHref = rateForm.attr('action'),
				ajaxType = rateForm.attr('method') || 'GET';

	const sendHand = rateForm.find('.js-form-submit');

	const dataRatingVal = 'data-rating-val',
	dataSuccesLink = 'data-success-link';

	function sendForm() {

		// const rateData = rateForm.attr(dataRatingVal);

		let rateData = new FormData();
		rateData.append("userRating", rateForm.attr(dataRatingVal));
		rateData.append("userComment", rateForm.find('[name="userComment"]').val());
		rateData.append("userEmail", $('.js-sign-form').find('[name="userEmail"]').val());

		if ( rateData == 5 ) {

			window.open(rateForm.attr(dataSuccesLink), '_blank');
			// window.location.href = rateForm.attr(dataSuccesLink);
			return;
		}

		const ajaxData = rateForm.serialize();

		$.ajax(ajaxHref, {
			type: ajaxType,
			data: rateData,
			contentType: false,
			cache: false,
			processData: false,
			success: function(data) {
				//console.log(data);
				rateForm.find('.js-popup-hand').trigger('click');
			}
		});
	}

	sendHand.on('click', sendForm);
})();

(function(){
	
	const faqsForm = $('.js-faq-form');

	const ajaxHref = faqsForm.attr('action'),
				ajaxType = faqsForm.attr('method') || 'GET';

	const sendHand = faqsForm.find('.js-form-submit');

	function sendForm(e) {
		e.preventDefault();
		if(!validateEmail(faqsForm.find('[name="userEmail"]').val())){
			faqsForm.find('[name="userEmail"]').addClass('is-error');
			return false
		}
		const ajaxData = faqsForm.serialize();

		if (!ajaxData.match(/=[\s\S]/gim)) return;

		$.ajax(ajaxHref, {
			type: ajaxType,
			data: ajaxData,
			success: function(){
				$('.faq__el .popup__btn').text('Thank you!');
				faqsForm.find('.js-popup-hand').trigger('click');
			}
		});
	}

	sendHand.on('click', sendForm);
})();