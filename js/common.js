document.addEventListener('DOMContentLoaded', function(){
    var menu = document.querySelector('.toggle_mnu');
    menu.addEventListener('click', function(){
        var sandwich = document.querySelector('.sandwich');
        sandwich.classList.toggle('active');
        var leftNav = document.querySelector('.header__left-nav');
        leftNav.classList.toggle('active');

    });


	// $(".animation_1").animated("fadeInRight","fadeOutDown");
    // $(".animation_2").animated("fadeInLeft","fadeOutDown");
    // $(".animation_3").animated("fadeInUp","fadeOutDown");
    // $(".animation_4").animated("fadeInLeft","fadeOutRight");
});

