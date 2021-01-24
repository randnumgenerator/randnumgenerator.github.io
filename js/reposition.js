// adjust vertical position of the toc
$(function(){
	var $toc = $('._toc');

	$(window).scroll(function(){
		if($toc.is(":visible")){
			var space = 24;
			var pos = 200;
			console.log(pos)
		
            if(pos - $(window).scrollTop() > space){
				$toc.css('position','absolute');
                $toc.css('top',200);
            } else{
				$toc.css('position','fixed');
                $toc.css('top',space);
            }
        }
    })
});

$(window).resize(tocPos); // resizing
$(tocPos); // initial position

// adjust horizontal position of the toc
function tocPos(){
	var $toc = $('._toc');
	var $postarticle = $('.post_article');
	var pos = $postarticle.offset().left + $postarticle.width() + 72
	
	if($(window).width()<1520){
        $toc.css("display","none");
    } else {
		$toc.css("display","block");
		$toc.css("left",pos);
	}
}