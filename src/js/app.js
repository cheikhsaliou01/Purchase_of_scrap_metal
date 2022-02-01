
window.carousel = new Carousel({
  "main": ".js-carousel",
  "wrap": ".js-carousel__wrap",
  "prev": ".js-carousel__prev",
  "next": ".js-carousel__next"
});

console.log(carousel);
//Active menu burger 
window.toggleMenu = () => {
  let x = document.getElementsByClassName('header__burger')[0];
  let y = document.getElementsByClassName('header__menu')[0];

  document.getElementsByTagName
  x.classList.toggle('active');
  y.classList.toggle('active');
}

// enable sliders

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// const nextButton = document.querySelector('.slider__next');
// nextButton.addEventListener('click', () => {
//   plusSlides(1);
// })
// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;

//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
 
// }



//modal window

let modal = document.getElementById('myModal');
let btn = document.getElementById('mybtn');
let span = document.getElementsByClassName('close')[0];
let backr = document.getElementsByClassName('model__background');
let modelContent = document.getElementsByClassName('model__container');

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 

// Add yandex Maps

map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -50.5997134, lng: 36.5982621 },
  zoom: 8
});


function Carousel(setting) {

  /* Scope privates methods and properties */
  let privates = {};

  /* Privates properties */
  privates.setting = setting;

  privates.sel = {
    "main": document.querySelector(privates.setting.main),
    "wrap": document.querySelector(privates.setting.wrap),
    "children": document.querySelector(privates.setting.wrap).children,
    "prev": document.querySelector(privates.setting.prev),
    "next": document.querySelector(privates.setting.next)
  };

  privates.opt = {
    "position": 0,
    "max_position": document.querySelector(privates.setting.wrap).children.length
  };

  // Control
  if(privates.sel.prev !== null) {
    privates.sel.prev.addEventListener('click', () => {
      this.prev_slide();
    });
  }

  if(privates.sel.next !== null) {
    privates.sel.next.addEventListener('click', () => {
      this.next_slide();
    });
  }

  this.prev_slide = () => {
    --privates.opt.position;

    if(privates.opt.position < 0) {
      privates.sel.wrap.classList.add('s-notransition');
      privates.opt.position = privates.opt.max_position - 1;
    }

    privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
  };


// Next slide
  this.next_slide = () => {
    ++privates.opt.position;

    if(privates.opt.position >= privates.opt.max_position) {
      privates.opt.position = 0;
    }

    privates.sel.wrap.style["transform"] = `translateX(-${privates.opt.position}00%)`;
  };

}

