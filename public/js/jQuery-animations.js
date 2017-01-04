// $('#top-image').addClass('animated bounceOutLeft');
// $(document).ready(function(){
// 	$( window ).scroll(function() {
// 	  $( "#contact_us" ).addClass( "animated bounceOutLeft" );
// 	});
// })
// $(document).ready(function(){
// 	$(window).scroll(function() {
//         alert(2);   
//    	}
// })



// $( document ).ready(function() {


//     //services animation
// 	    $('#services').viewportChecker({
// 		    classToAdd: 'animated rotateInDownLeft'
// 	    });   	    


// 	//support animation

// 	    $('#support #sup').viewportChecker({
// 		    classToAdd: 'animated fadeInLeft'
// 	    });	    

// 	    // $('#support #upg').viewportChecker({
// 		   //  classToAdd: 'animated fadeInDown'
// 	    // });	    
	    	    	        
// 	    $('#support #fix').viewportChecker({
// 		    classToAdd: 'animated fadeInRight'
// 	    });    
	    

// 	// portfolio animations

// 	    $('#portfolio').viewportChecker({
// 		    classToAdd: 'animated animated flipInY'
// 	    });  

// 	//team animation

// 	    $('#team .row').viewportChecker({
// 		    classToAdd: 'animated rotateIn'
// 	    });  

// 	//carousel extra settings
// 	var $carousel = $('.gallery').flickity()
//     	.flickity('next')
// 	    .flickity( 'select', 3 );		


// });
// $( document ).ready(function() {
// 	var $carousel = $('.gallery').flickity()
//     	.flickity('next')
// 	    .flickity( 'select', 3 );
	
// });

// $(function() {

// 	// Find all YouTube videos
// 	var $allVideos = $("source[src^='video/background.mp4']"),

// 	    // The element that is fluid width
// 	    $fluidEl = $("body");

// 	// Figure out and save aspect ratio for each video
// 	$allVideos.each(function() {

// 		$(this)
// 			.data('aspectRatio', this.height / this.width)

// 			// and remove the hard coded width/height
// 			.removeAttr('height')
// 			.removeAttr('width');

// 	});

// 	// When the window is resized
// 	// (You'll probably want to debounce this)
// 	$(window).resize(function() {

// 		var newWidth = $fluidEl.width();

// 		// Resize all videos according to their own aspect ratio
// 		$allVideos.each(function() {

// 			var $el = $(this);
// 			$el
// 				.width(newWidth)
// 				.height(newWidth * $el.data('aspectRatio'));

// 		});

// 	// Kick off one resize to fix all videos on page load
// 	}).resize();

// });

