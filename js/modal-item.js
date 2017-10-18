var linkitem = document.querySelectorAll('.action-btn-buy');
var modalitem = document.querySelector('.modal-item-added');
var modalshow = document.querySelector('.modal-item-added-show');
var modalclose = document.querySelector('.modal-item-close');
var shopping = document.querySelector('.btn-continue-shopping');


for (var i = 0; i < linkitem.length; i++) {
  linkitem[i].addEventListener('click', function(event) {
    event.preventDefault();
    modalitem.classList.add('modal-item-added-show');
  });
};

modalclose.addEventListener('click', function(event) {
  event.preventDefault();
  modalitem.classList.remove('modal-item-added-show');
});
window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modalitem.classList.contains('modal-item-added-show')) {
      modalitem.classList.remove('modal-item-added-show');
    }
  }
});
shopping.addEventListener('click', function(event) {
  event.preventDefault();
  modalitem.classList.remove('modal-item-added-show');
});
