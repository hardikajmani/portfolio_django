(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	$('#cform').submit(function(){

		var action = $(this).attr('action');
		var csrftoken = Cookies.get('csrftoken');

		$("#message").slideUp(750,function() {
		$('#message').hide();

 		$('#submit')
			.before('<img src="{% static images/ajax-loader.gif  %}" class="contact-loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val(),
			csrfmiddlewaretoken: csrftoken
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#cform').slideUp('slow');
			}
		);

		});

		return false;

	});

});

}(jQuery));