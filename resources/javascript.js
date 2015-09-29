(function($) {

	$.fn.scrollPagination = function(options) {
		
		var settings = { 
			nop     : 20, // The number of posts per scroll to be loaded
			offset  : 0, // Initial offset, begins at 0 in this case
			error   : 'No More!', // When the user reaches the end this is the message that is
			                            // displayed. You can change this if you want.
			delay   : 500, // When you scroll down the posts will load after a delayed amount of time.
			               // This is mainly for usability concerns. You can alter this as you see fit
			scroll  : true // The main bit, if set to false posts will not load as the user scrolls. 
			               // but will still load if the user clicks.
		}
		var pageName = location.pathname.substring(1);
			
		//alert(pageName);
		pageName = pageName.substring(15);
		
		alert(pageName);  
		// Extend the options so they work with the plugin
		if(options) {
			$.extend(settings, options);
		}
		
		// For each so that we keep chainability.
		return this.each(function() {		
			
			// Some variables 
			$this = $(this);
			$settings = settings;
			var offset = $settings.offset;
			var busy = false; // Checks if the scroll action is happening 
			                  // so we don't run it multiple times estooo Scroll for more or click here
			
			// Custom messages based on settings
			if($settings.scroll == true) $initmessage = '';
			else $initmessage = 'Click for more';
			
			// Append custom messages and extra UI
			$this.append('<div class="content"></div><div style="text-align:center;font-size:14px;" class="loading-bar">'+$initmessage+'</div>');
			
			
			function getData(pageName) {
				
				if(pageName=='index.html'){
					// Post data to ajax.php
					$.post('resources/php/ajaxFollow.php', {
							
						action        : 'scrollpagination',
						number        : $settings.nop,
						offset        : offset,
						data		  : {}, 
							
					}, function(data) {
						//alert(data);
						// Change loading bar content (it may have been altered)
						$this.find('.loading-bar').html($initmessage);
						// If there is no data returned, there are no more posts to be shown. Show error
						
						var palabra=data.indexOf('start');
						//alert(palabra);
						var letra= data.substring(1105,1116);
						//alert(letra);
						var st= letra.split('"');
						//alert(st[1]);
						
						if(data == "") { 
							$this.find('.loading-bar').html($settings.error);	
						}
						else {
							// Offset increases
							offset = offset+$settings.nop; 
							// Append the data to the content div
							$this.find('.content').append(data);
							// No longer busy!	
							busy = false;
						}		
					});
				}
					
			}	
			
			getData(pageName); // Run function initially
			
			// If scrolling is enabled
			if($settings.scroll == true) {
				// .. and the user is scrolling
				
				$(window).scroll(function() {
					
					// Check the user is at the bottom of the element
					if($(window).scrollTop() + $(window).height() > $this.height() && !busy) {
						
						// Now we are working, so busy is true
						busy = true;
						
						// Tell the user we're loading posts
						$this.find('.loading-bar').html('Loading');
						
						// Run the function to fetch the data inside a delay
						// This is useful if you have content in a footer you
						// want the user to see.
						setTimeout(function() {
							
							getData(pageName);
							
						}, $settings.delay);
							
					}	
				});
			}
			
			// Also content can be loaded by clicking the loading bar/
			$this.find('.loading-bar').click(function() {
			
				if(busy == false) {
					busy = true;
					getData(pageName);
				}
			
			});
			
		});
	}

})(jQuery);
