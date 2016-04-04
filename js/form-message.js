(function () {
  var submit = document.querySelector('.form-btn');
  var messageError = document.querySelector('.form-message--error');
  var messageOk = document.querySelector('.form-message--ok');
  var buttonOk = messageError.querySelector('.btn');
  var buttonClose = messageOk.querySelector('.btn');
  isOpen = false;

  submit.addEventListener('tap', function(event) {
    event.preventDefault();
    if (isOpen == false) {
      messageError.style.display = 'block';
      messageOk.style.display = 'block';
      isOpen = true;
    }
    else if (isOpen == true) {
      messageError.style.display = 'none';
      messageOk.style.display = 'none';
      isOpen = false;
    }
  });
})();
