let searchFrom = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =() =>{
    searchFrom.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
}


let shoppingcart =document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =() =>{
    shoppingcart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginform.classList.remove('active');
}

let loginform = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick =() =>{
    loginform.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingcart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    loginform.classList.remove('active');
    shoppingcart.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 0,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
      delay:2500,
      disableOnInteraction: false,
  },
  centeredSlides:true,
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});