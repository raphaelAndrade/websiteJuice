//Functions

 //OPEN MENU DESKTOP
 function openMenu() {
     $('.full-menu').addClass('openMenu')
 }

function closeMenu() {
    $('.full-menu').removeClass('openMenu')
}

//OPEN MENU DESKTOP
function openMenuMobile() {
    $('.full-menu-mobile').addClass('openMenuMobile')
}


$(document).ready(function () {
    $('#viewMenu').on('click', function(){
        openMenu();
        openMenuMobile()
    })

    $('.full-menu').on('mouseleave',function(){
        setTimeout(function(){ closeMenu(); 
        }, 500);
    })

    $(window).on('resize', function(){
        heightMenuMobile()
    });
})