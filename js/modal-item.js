var linkitem = document.querySelector('.action-btn-buy');
var modalitem = document.querySelector('.modal-item-added');
var modalclose = document.querySelector('.modal-item-close');
linkitem.addEventListener('click', function (event) {
  event.preventDefault();
  modalitem.classList.add('modal-item-added-show');
});
modalclose.addEventListener('click', function (event) {
  event.preventDefault();
  modalitem.classList.remove('modal-item-added-show');
});
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    if (modalitem.classList.contains('modal-item-added-show')) {
      modalitem.classList.remove('modal-item-added-show');
    }
  }
});
