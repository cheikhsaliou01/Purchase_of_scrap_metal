
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


