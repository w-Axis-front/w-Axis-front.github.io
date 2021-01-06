document.addEventListener("DOMContentLoaded", function () {
	function cpFunction() {
		let cp = document.querySelector('.close-partner');
		let cp_img_block = document.querySelector('#cp_img_block_js');
		let cp_box = document.querySelector('#cp_box_js');
		let cp_box_top = document.querySelector('#cp_box_top_js');

		function startAnim(event) {
			event.preventDefault();
			cp_img_block.classList.add('cp-active');
			cp_box_top.addEventListener('animationend', function (event) {
				cp_img_block.classList.add('cp-final');
			});
		}

		if (cp) {
			cp.addEventListener("click", function (event) {
				let target = event.target.closest('#cp_box_js');
				if (!target) {
					window.location.href = 'https://www.google.com.ua/';
				}
			});
			cp_box.addEventListener("click", startAnim, {
				once: true
			});
		}
	}
	cpFunction();

});