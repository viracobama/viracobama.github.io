// jQuery plugin for implementing hoverpulse for social media links on the contact us page
// https://jquery.malsup.com/hoverpulse/
$(document).ready(function() {
    $('div.thumb img').hoverpulse().each(function() {
    	var $img = $(this);
    	var link = $img.attr('data-link');
    	$img.attr('title','Goto: ' + link);
    	$img.click(function() {
    		window.open(link);
    		return false;
    	});
    });
});
      