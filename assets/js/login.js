let language = document.querySelector('.left__list-language');
let language__drop = document.querySelector('.language__select');
let money = document.querySelector('.left__list-money');
let money__drop = document.querySelector('.money__dropdown');
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
    
language.onclick = function(){
    language__drop.classList.toggle('language__hidden');
}
    money.onclick = function(){
    money__drop.classList.toggle('language__hidden');
}

