/*==========Header Section js===========*/
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}



let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*==========product Section js===========*/

/*==========framework swiper link js===========*/
var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlider: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  /*==========Review Section js===========*/

/*==========framework swiper link js===========*/

var swiper = new Swiper(".review-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlider: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1020: {
        slidesPerView: 1,
      },
    },
  });
 /*==========Try Home Section js===========*/

/*==========framework swiper link js===========*/
  
  var swiper = new Swiper(".try_home_slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    loop:true,
  });

  /*==========client Section js===========*/

/*==========framework swiper link js===========*/

var swiper = new Swiper(".client-slider", {
  loop:true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
      delay: 3500,
      disableOnInteraction: false,
  },
  centeredSlider: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});