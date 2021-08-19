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

/*====================Slide==================*/
let buttonleft = document.querySelector(".slide__button-left"),
	buttonright = document.querySelector(".slide__button-right"),
	slideitem = document.querySelectorAll(".slide__item-profile");
	var vitrihientai = 0;

buttonright.addEventListener("click",function(){
	var slidehientai = slideitem[vitrihientai];
    if(vitrihientai < slideitem.length - 1){
       vitrihientai += 1;
	}
	else{
      vitrihientai = 0;
	}
	var slidetieptheo = slideitem[vitrihientai];

	slidehientai.classList.add("hidden");
	slidetieptheo.classList.add("visible");

	slidehientai.addEventListener("webkitAnimationEnd",function()
	{
	  slidehientai.classList.remove("active");
	  slidehientai.classList.remove("hidden");
	  console.log(slideitem[vitrihientai]);
	})
	slidetieptheo.addEventListener("webkitAnimationEnd",function()
	{
	  slidetieptheo.classList.add("active");
	  slidetieptheo.classList.remove("visible");
	})	
})
buttonleft.addEventListener("click",function(){
	var slidehientai = slideitem[vitrihientai];
	if(vitrihientai > 0)
	{
		vitrihientai --;
	}
	else
	{
		vitrihientai = slideitem.length - 1;
	}
	var slidetieptheo = slideitem[vitrihientai];

	slidehientai.classList.add("hidden1");
	slidetieptheo.classList.add("visible1");

	slidehientai.addEventListener("webkitAnimationEnd",function(){
		slidehientai.classList.remove("active");
		slidehientai.classList.remove("hidden1");
	})

	slidetieptheo.addEventListener("webkitAnimationEnd",function(){
		slidetieptheo.classList.add("active");
		slidetieptheo.classList.remove("visible1");
	})
})
/*================End slide==================*/