$(document).ready(function()
	
{ console.log('ready');
		$('.nav-icon').on('click', function() {
		$('.nav').slideToggle();
	});

$(window).on('resize', function() {
	var windowWidth = $(window).width();

if (windowWidth > 714) {
		$('.nav') .show();

} else {
	if (windowWidth < 714)
	$('.nav').hide (); 
	}
});
});

//....for the success circle linkage.

$('.success-circle').click(function () {
    window.location = 'https://www.google.co.uk/';
});
