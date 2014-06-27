$(document).on('ready', function() {
  






	$('#bigbutton').click(function(){

		$('#bigbutton').before("<div class='lightbox'> <p class='subtitle'>Would you like to go on an Adventure?</p></div>")
		$('.lightbox').append("<button class='close'>Mathmatical</button>")
		console.log('This party is so crazy!');
	

		$('.close').click(function(){
		$('.lightbox').remove();
		console.log("closed")


		});

});



		// $('.close').click(function(){
		// // if(close === true){
		// $('.lightbox').remove();
		// console.log("closed")
		// 	// }

		// });
		// $('.close').click(function()	


	
	// 	$('.lightbox').hidden()
	







});




// <button class='close'>Mathmatical</button></div>