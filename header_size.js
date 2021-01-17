$(window).resize(function(){
    var header_width = min(32, $(window).width() / 20 );
	$( ".header" ).css( "font-size", header_width+"px" );
	$( ".header" ).css( "text-align", "left" );
});