var linkwriteus = document.querySelector('.main-contacts-btn');
var modalshow = document.querySelector('.modal-write-us');
var modalclose = document.querySelector('.modal-write-us-close')
linkwriteus.addEventListener('click', function (event) {
  event.preventDefault();
  modalshow.classList.add('modal-write-us-show');
});
modalclose.addEventListener('click', function (event) {
  event.preventDefault();
  modalshow.classList.remove('modal-write-us-show');
});
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (modalshow.classList.contains('modal-write-us-show')) {
      modalshow.classList.remove('modal-write-us-show');
    }
  }
});


