var v65 = {
	global : {
		init : function(){
			v65.global.navItemEqualizer();
			v65.global.submitButtonClass();
			v65.global.formResetButton();
		},
		navItemEqualizer : function(){
			var pageCount = $('.v65-mainNav nav ul li').length;
			var width = (100 / pageCount);
			$('.v65-mainNav nav ul li').css("width", width+'%');
		},
		submitButtonClass : function(){
			$('[type="submit"]').parent().addClass('submitForm');
		},
		formResetButton : function(){
			$('form > fieldset > div:last-child').after('<div><label for="resetForm">&nbsp;</label><button v65js="resetForm" class="altBtn">Reset</button></div>');
			$('[v65js="resetForm"]').parent().addClass('resetForm');

			$('[v65js="resetForm"]').on('click', function(e){
				e.preventDefault();
		    $('form').find('input:text, input:password, input:file, select, textarea').val('').blur();
		    $('form').find('input:radio, input:checkbox')
		         .removeAttr('checked').removeAttr('selected');
			});
		},
		pageNavigationAnimation : function(){
			
		}
	}
}

v65.global.init();

$(document).ajaxComplete(function() {
	// When a user submits a form fire this function.
	v65.global.formResetButton();
	v65.global.submitButtonClass();
});