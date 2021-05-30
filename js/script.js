// // script to menu nav bar 
let MenuItems = document.getElementById("MenuItems");
let chsecer = MenuItems.style.maxHeight = "0px";
let menu = document.getElementById("menu");

function menutoggle() {
    if(chsecer == "0px"){
        chsecer = MenuItems.style.maxHeight = "80vh";
        MenuItems.style.background = "#d63535";
        menu.src = "img/close.svg";
        console.log('hi open')
    }
    else{
        chsecer = MenuItems.style.maxHeight = "0px";
        MenuItems.style.background = "none";
        menu.src = "img/menu.png";
        console.log('hi close')


    }
}

// swiper

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    speed: 1000,
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide : 1,
    coverflowEffect: {
      rotate: 3,
      stretch: 1,
      depth: 200,
      modifier:1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });


  // 
  var swiper = new Swiper('.swiper-container-2', {
    effect: 'cube',
    speed: 800,
    grabCursor: false,
    cubeEffect: {
      shadow: false,
      slideShadows: false,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


