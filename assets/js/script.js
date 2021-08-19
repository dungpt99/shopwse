 
$(window).on('load', function(event) {
		$('#preloader').delay(1000).fadeOut('fast');
	});
new WOW().init();
$('#sliderhome').owlCarousel({
    items:1,
    autoplay:true,
    loop:true,
    // transitionStyle : "fade"
});

$('.basic__slider').owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
        320:{
            items:1
        },
        600:{
            items:2
        },
        767:{
            items:3,
    
        }
    }
})

$('.instagram__shop').owlCarousel({
    loop:true,
    autoplay:true,
    dots:false,
    responsive:{
        320:{
            items:2
        },
        768:{
            items:4
        },
        1000:{
            items:5,
        }
    }
})
$('.stakeholer__slider').owlCarousel({
    loop:true,
    margin:10,
    autoplay:false,
    dots:false,
    responsive:{
        329:{
            items:2
        },
        576:{
            items:3
        },
        767:{
            items:4,
        },
        1000:{
            items:5,
            
        }
    }
})


//====================================== Header================================//

    let language = document.querySelector('.left__list-language');
    let language__drop = document.querySelector('.language__select');
    let money = document.querySelector('.left__list-money');
    let money__drop = document.querySelector('.money__dropdown');
    let icon3 = document.querySelector('.right_icon3');
    let icon4 = document.querySelector('.right_icon4');
    let dropmenu = document.querySelector('.header__navbar-mid');
    let icon1 = document.querySelector('.right__icon1');
    let search = document.querySelector('.right__icon1-background');
    let close = document.querySelector('.cl');
    let midtext = document.querySelectorAll('.mid__text-span');
    let midtextshow = document.querySelectorAll('.mid__text-sub');
    let load = document.querySelector('.load');
    let spanSize = document.getElementsByClassName('size__span');

    for(i=0;i<spanSize.length;i++){
        console.log(spanSize[i]);
        spanSize[i].addEventListener('click',function(){
            if(this.classList[1]== "span__black")
            {
               this.classList.remove("span__black");
            }
            else
            {
                for(j=0;j<spanSize.length;j++)
                {
                    spanSize[j].classList.remove('span__black');
                }
                    this.classList.toggle('span__black'); 
            }
            })
    }
    
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


 midtext.forEach(element => { 
    element.addEventListener('click',function(){
        this.nextElementSibling.classList.toggle('mid__textsub-show');
    })
});

        language.onclick = function(){
           language__drop.classList.toggle('language__hidden');
        }
        money.onclick = function(){
           money__drop.classList.toggle('language__hidden');
        }
        icon3.onclick = function(){
            icon3.classList.remove('visible');
            icon3.classList.add('hidden');
            icon4.classList.remove('hidden');
            dropmenu.classList.remove('dropmenu');
        }
        icon4.onclick = function() {
            icon4.classList.add('hidden');
            icon3.classList.add('visble');
            icon3.classList.remove('hidden');
            dropmenu.classList.add('dropmenu');
        }
        icon1.onclick = function() {
            search.classList.add('show');
        }
        close.addEventListener('click',function(){
            search.classList.remove('show');
        })
  function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


