
$(document).ready(function() {
  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('.change');
  });
});



// tooltip
// $(document).ready(function(){
//   $('[data-toggle="tooltip"]').tooltip();
// });
// end tooltip



// $('body').scrollspy({ target: '#active-body' })



// Menu-items Filter
$(document).ready(function() {
  $('.all').hide();
  $('.tab1').show();

  $('.menu-link').click(function() {
    var value = $(this).attr('data-filter');
  
    $(".all").not("." + value).hide(1000);
    $(".all" ).filter("." + value).show(1000);

  });  
});



  // active-menu in menu filter
  $('.menu-link').click(function() {
    // $(this).removeClass('text-golden');
    $(this).addClass('active-menu').siblings().removeClass('active-menu');
  });
// Menu-items Filter End




// Slick slider
$(document).ready(function(){
  $('.single-item').slick({
  	infinite: true,
  	autoplay: true,
    slidesToShow: 1,
  });
});
// end slick



// For Section8 Accordian

  // Clicking on the accordion header title
  $(".accordions").on("click", ".accordions_title", function() {
  // will (slide) toggle the related panel.
  $(this).toggleClass("active").next().slideToggle();
  });


// Accordian end 
