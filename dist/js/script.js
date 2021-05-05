const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

close.addEventListener('click', () => {
	menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progress-counter'),
		lines = document.querySelectorAll('.skills__progress-bar span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

$(document).ready(function () {
	$('form').validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			check: "required"
		},
		messages: {
			name: "Пожалуйста, введите ваше имя",
			email: {
				required: "Пожалуйста, введите вашe почту",
				email: "Введите корректный email"
			}
		}
	});
});	