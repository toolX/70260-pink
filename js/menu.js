(function() {
  var mobileMenuOpen = document.querySelector('.page-logo__btn');
  var nav = document.querySelector('.main-navigation');
  var iconBurger = document.querySelector('.burger');
  var iconCross = document.querySelector('.cross');
  var pageLogo = document.querySelector('.page-logo');
  isMenuOpen = false;

  mobileMenuOpen.addEventListener('tap', function(event) {
    event.preventDefault();
    if (isMenuOpen == false) {
      pageLogo.classList.add('page-logo--menu-show');
      isMenuOpen = true;
    }
    else if (isMenuOpen == true) {
      pageLogo.classList.remove('page-logo--menu-show');
      isMenuOpen = false;
    }
  });
})();
