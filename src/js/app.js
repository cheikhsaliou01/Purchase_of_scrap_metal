
//modal window


let modal = document.querySelector('#myModal')
let btn = document.getElementById('mybtn');
let span = document.querySelector('.close') 
let backr = document.querySelector('.model__background');
let modelContent = document.querySelector('.model__container')
/*
 methode 2 
  let modal = document.getElementById('myModal'); 
  let span = document.getElementsByClassName('close')[0];
  let backr = document.getElementsByClassName('model__background')[0];
  let modelContent = document.getElementsByClassName('model__container');

*/

btn.onclick = function () {
  modal.style.display = "block";
  backr.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
  backr.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal)  {
    modal.style.display = "none";
    backr.style.display = "none";
  }
}


 