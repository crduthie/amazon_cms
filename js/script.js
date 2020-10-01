$(function(){
	
	"use strict";

	$(".arrow").hover(function(){

			$(".arrow_animated").addClass("arrow_animated_appear");
			}, function(){

			$(".arrow_animated").removeClass("arrow_animated_appear");

	});
	
});

$(document).ready(function(){
	
	"use strict";
	
  $("a").on('click',function(event){

      if (this.hash !== "") {

      	event.preventDefault();

      	var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },800, function(){
   
        window.location.hash = hash;
      });
		  
    }
	  
  });
  
  
});