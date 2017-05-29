var linkmap = document.querySelector('.main-contacts-map');
var popupmap = document.querySelector('.map-hidden');
var closemap = document.querySelector('.map-close');
linkmap.addEventListener('click', function (event) {
  event.preventDefault();
  popupmap.classList.add('map-show');
});
closemap.addEventListener('click', function (event) {
  event.preventDefault();
  popupmap.classList.remove('map-show');
});

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (popupmap.classList.contains('map-show')) {
        popupmap.classList.remove('map-show')
       }
  }
});