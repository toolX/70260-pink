(function() {
  var mobileMenuOpen = document.querySelector('.page-logo__btn');
  var pageLogo = document.querySelector('.page-logo');

  pageLogo.classList.remove('page-logo--menu-show');
  document.querySelector('.no-js').classList.remove('no-js');

  mobileMenuOpen.addEventListener('tap', function(event) {
    event.preventDefault();
    pageLogo.classList.toggle('page-logo--menu-show');
  });
})();
