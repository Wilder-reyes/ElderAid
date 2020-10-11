
jQuery(document).ready(function( $ ) {

  $(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

  $("#hero .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 1000
  });
  
  // Initiate the wowjs
  new WOW().init();
  // Stick the header at top on scroll
  $("#header").sticky({topSpacing:0, zIndex: '50'});

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {
              
              var top_space = 0;
              
              if( $('#header').length ) {
                top_space = $('#header').outerHeight();
              }
              
              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');
          }
      }
  }); 

addEventListener('DOMContentLoaded',() => {
  const btn_menu = document.querySelector('.btn_menu')
  if(btn_menu) {
    btn_menu.addEventListener('click',() =>{
      const menu_items = document.querySelector('.menu_items')
      menu_items.classList.toggle('show')
    })
  }
})

});

