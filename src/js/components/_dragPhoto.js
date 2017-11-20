const form = $(".js-photo-drop"),
	photo = document.querySelector(".photo-drop__ic>img"),
	input = document.querySelector('input[type="file"]'),
	submit = form.find(".js-form-submit"),
	action = form.attr("action"),
	method = form.attr("method") || "POST";

input.addEventListener("change", function() {
	if (this.files[0]) {
		var fr = new FileReader();
		fr.addEventListener(
			"load",
			function() {
				photo.setAttribute("src", fr.result);
			},
			false
		);

		fr.readAsDataURL(this.files[0]);
	}
});

let droppedFiles = false;

form
	.on("drag dragstart dragend dragover dragenter dragleave drop", e => {
		e.preventDefault();
		e.stopPropagation();
	})
	.on("dragover dragenter", () => {
		form.addClass("is-dragover");
	})
	.on("dragleave dragend drop", () => {
		form.removeClass("is-dragover");
	})
	.on("drop", e => {
		droppedFiles = e.originalEvent.dataTransfer.files;
	});
	function validateEmail(email) {
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}
submit.on("click", e => {
	e.preventDefault();
	const file = input.files[0];
	var userEmail = form.find('[name="userEmail"]').val();
	if(!validateEmail(userEmail)) {
		form.find('[name="userEmail"]').addClass('is-error'); 
		return false;
	}
	var userName = form.find('[name="userName"]').val();

	// if ( file.size > 1024*1024*2 ) return;

	let data = new FormData();
	data.append("userImage", file);
	data.append("userEmail", userEmail);
	data.append("userName", userName);

	$.ajax(action, {
		type: method,
		data: data,
		contentType: false,
		cache: false,
		processData: false,
		success: function(data) {
			console.log(data);
			form.find('.js-popup-hand').trigger('click');
		}
	});

	return false;
});
