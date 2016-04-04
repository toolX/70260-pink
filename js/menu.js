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
      pageLogo.style.borderBottom = '1px solid #000000';
      pageLogo.style.background = '#283645';
      nav.style.display = 'block';
      iconBurger.style.display = 'none';
      iconCross.style.display = 'block';
      isMenuOpen = true;
    }
    else if (isMenuOpen == true) {
      pageLogo.style.borderBottom = 'none';
      pageLogo.style.background = 'rgba(0, 0, 0, .3)';
      nav.style.display = 'none';
      iconBurger.style.display = 'block';
      iconCross.style.display = 'none';
      isMenuOpen = false;
    }
  });
})();
