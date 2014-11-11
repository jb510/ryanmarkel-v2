(function($) {
    $(document).ready(function() {
        var $container = $( "#portfolio-container" );


        $container.imagesLoaded( function(){
            $container.masonry({
                itemSelector: '.jetpack-portfolio',
            });
            
            // Fade blocks in after images are ready (prevents jumping and re-rendering)
			$container.find( '.jetpack-portfolio' ).animate( {
				'opacity' : 1
			} );
        });

        // Rearrange masonry on resize
        $( window ).resize( function() {
            $container.masonry();
        });

        $( document ).on( "post-load", function () {
        
        	$container = $( "#portfolio-container" );
            
            setTimeout( function() {
            	// Once images are loaded, add the new posts via Masonry
				$container.imagesLoaded( function() {
						
						$container.masonry( 'reloadItems' ).masonry( 'layout' );
						// Fade blocks in after images are ready (prevents jumping and re-rendering)

						$( '#infinite-handle span' ).css( 'display', 'block' );

						$container.find( '.jetpack-portfolio' ).animate( {
							'opacity' : 1
						} );

				});
			}, 1500 );
        });

    });
})(jQuery);