/*=====================Load================*/
let load = document.querySelector('.load');


function loaded(){
    load.classList.add("loaded");
}

setTimeout(loaded,1000);
var modalPopUp = function() {
		$(window).on('load', function() {
			setTimeout(function() {
				$('#myModal').modal('show');
			}, 2000);
		});
	};
modalPopUp();

/*====================End load===============*/

/*==================Question================*/
var button = document.querySelectorAll(".option__ans-title");
	// content = document.querySelectorAll(".option__ans-content");
	for(var i=0; i<button.length; i++)
	{
		button[i].addEventListener("click",function(){
			var id = this.getAttribute("data-show");
			var content = document.getElementById(id);

			content.classList.add("visible");

			content.addEventListener("webkitAnimationEnd",function(){
				content.classList.add("active");
				content.classList.remove("visible");
			})	
		})
	}

/*=================End question============*/