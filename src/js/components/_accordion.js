const wrap = $('.js-faq'),
			hand = wrap.find('.js-faq-ques'),
			answers = wrap.find('.js-faq-answ');

hand.on('click', (e)=>{

	const target = $(e.currentTarget),
				parent = target.parent(),
				content = parent.find(answers);

	parent.siblings().removeClass('is-active');
	answers.not(content).slideUp();
	
	parent.toggleClass('is-active');
	content.slideToggle();

});