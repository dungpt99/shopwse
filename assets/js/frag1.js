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

