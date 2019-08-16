(function ($) {
  $(function () {
    setEvent()
	});

	function setEvent() {
		$('#phone').on('focus', function() {
			let $this = $(this);
			$this.attr('placeholder', '');
		});

		$('#phone').on('blur', function() {
			let $this = $(this);
			$this.attr('placeholder', '0900123456');
		});

		$('#path').on('change', function() {
			let $this = $(this);
			let $other = $('#other');
			let val = $this.val();
			if (val === '其他') {
				$other.fadeIn();
			} else {
				$other.fadeOut();
			}
		});
	}
})(jQuery);
