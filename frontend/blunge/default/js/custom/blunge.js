jQuery(document).ready(function(){
	jQuery('.item').hover(imageHoverIn,imageHoverOut)
	jQuery('.image-hover-holder').on('click',addClickToHover)
});

function imageHoverIn(){
	var hoverino = jQuery(this).children()[1]
	console.log(hoverino)
	jQuery(hoverino).fadeIn()
}
function imageHoverOut(){
	var hoverino = jQuery(this).children()[1] 
	jQuery(hoverino).fadeOut()
}

function addClickToHover(){
	var url = jQuery(this).parent().children()[0].href
	console.log(url)
	window.location.href=url
}