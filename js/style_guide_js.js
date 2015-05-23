
    $().ready(function () {

	    $('select').change(function() {
	    $('.body_inner').css('width',$(this).val());
	    // $('.body_inner').css('{width:'+ $(this).val()+'}');
	    });
	
	    var returntext = 
	    "<div>"+
	    "<strong>Body Text</strong></br>"+ 
	    "<strong>font:<\/strong> "+  $('p').css("font-family")+"<br>"+
	    "<strong>font-size:<\/strong> "+  $('p').css("font-size")+"<br>"+
	    "<strong>color:<\/strong> "+ rgb2hex($('p').css("color"))+"<br>"+
	    "<strong>line-height:<\/strong> "+ ($('p').css("line-height").replace('px','')/$('p').css("font-size").replace('px','')*100)+"%<br>"+
	    "<\/div>"
	
	    $("#result").html(returntext);
	
	    $('.color_1').html(rgb2hex($('.color_1').css("background-color")));
	    $('.color_2').html(rgb2hex($('.color_2').css("background-color")));
	    $('.color_3').html(rgb2hex($('.color_3').css("background-color")));
	    $('.color_4').html(rgb2hex($('.color_4').css("background-color")));
	    $('.color_5').html(rgb2hex($('.color_5').css("background-color")));
	    $('.color_6').html(rgb2hex($('.color_6').css("background-color")));

	   	$('.color_7').html(rgb2hex($('.color_7').css("background-color")));
	   	$('.color_8').html(rgb2hex($('.color_8').css("background-color")));

	    
	
/* 	     $('.example_button').after(($('.example_button').css("background"))); */
	
	    /*
	    $('h1.example').append(' (font-size: '+$('h1').css("font-size")+ ' font-weight: '+$('h1').css("font-weight")+ ' color: '+ rgb2hex($('h1').css("color"))+')' );
	    $('h2.example').append(' (font-size: '+$('h2').css("font-size")+ ' font-weight: '+$('h2').css("font-weight")+ ' color: '+ rgb2hex($('h2').css("color"))+')' );
	    $('h3.example').append(' (font-size: '+$('h3').css("font-size")+ ' font-weight: '+$('h3').css("font-weight")+ ' color: '+ rgb2hex($('h3').css("color"))+')' );
	    $('h4.example').append(' (font-size: '+$('h4').css("font-size")+ ' font-weight: '+$('h4').css("font-weight")+ ' color: '+ rgb2hex($('h4').css("color"))+')' );
	
	    
	    
	    $('.font').each(function(i,e){
	    	$(e).append(' (font-family: '+$(e)css("font-family")+ 'font-size: '+$(e).css("font-size")+ ' font-weight: '+$(e).css("font-weight")+ ' color: '+ rgb2hex($(e).css("color"))+')' );
	    	// debugger; alert(e.tagName);
	    }) 
	     */

         $('blockquote').each(function(i,e){
	    	$(e).append('<span style="font-size:12px; font-weight:normal"> (font: '+$(e).css("font-family")+' size: '+$(e).css("font-size")+ ' weight: '+$(e).css("font-weight")+ ' color: '+ rgb2hex($(e).css("color"))+') </span>' );
	    	// debugger; alert(e.tagName);
	    }) 


	    $('.font').each(function(i,e){
	    	$(e).append(' ( font: '+$(e).css("font-family")+')' );
	    	// debugger; alert(e.tagName);
	    }) 

	    $('.example').each(function(i,e){
	    	$(e).append('<span style="font-size:12px; font-weight:normal"> (font: '+$(e).css("font-family")+' size: '+$(e).css("font-size")+ ' weight: '+$(e).css("font-weight")+ ' color: '+ rgb2hex($(e).css("color"))+') </span>' );
	    	// debugger; alert(e.tagName);
	    }) 
	    
	    $('.example_block').each(function(i,e){
	    	$(e).append(' (font-size: '+$(e).css("font-size")+ ' font-weight: '+$(e).css("font-weight")+ ' color: '+ rgb2hex($(e).css("color"))+')' );
	    	// debugger; alert(e.tagName);
	    })
	     $('.example_block_right').each(function(i,e){
	    	$(e).append(' (font-size: '+$(e).css("font-size")+ ' font-weight: '+$(e).css("font-weight")+ ' color: '+ rgb2hex($(e).css("color"))+')' );
	    	// debugger; alert(e.tagName);
	    })
	       $('.example_a').each(function(i,e){
	    	$(e).append(' (color: '+ rgb2hex($(e).css("color"))+' text-decoration: '+$(e).css("text-decoration")+ ')' );
	    	// debugger; alert(e.tagName);
	    })
	         $('.example_ah a').each(function(i,e){
	    	$(e).append(' (color: '+ rgb2hex($(e).css("color"))+' text-decoration: '+$(e).css("text-decoration")+ ')' );
	    	// debugger; alert(e.tagName);
	    })
	     $('.example_a .hover').each(function(i,e){
	    	$(e).append(' (color: '+ rgb2hex($(e).css("color"))+' text-decoration: '+$(e).css("text-decoration")+ ')' );
	    	// debugger; alert(e.tagName);
	    })

    });



    function rgb2hex(rgb) {
     if (  rgb.search("rgb") == -1 ) {
          return rgb;
     } else {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}

