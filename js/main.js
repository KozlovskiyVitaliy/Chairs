// -------Burger Menu-------------
(function() {
  $('.toggle-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('aside').animate({width: 'toggle'}, 200);
  });
})();
// ----------TOGGLE SEARCH------------
$(function(){
  var $searchlink = $('#searchtoggl i');
  var $searchbar  = $('#searchbar');
  
  $('.toggle_search').on('click', function(e){
    e.preventDefault();
    
    if($(this).attr('id') == 'searchtoggl') {
      if(!$searchbar.is(":visible")) { 
        // if invisible we switch the icon to appear collapsable
        $searchlink.removeClass('fa-search').addClass('fa-search-minus');
      } else {
        // if visible we switch the icon to appear as a toggle
        $searchlink.removeClass('fa-search-minus').addClass('fa-search');
      }
      
      $searchbar.slideToggle(300, function(){
        // callback after search bar animation
      });
    }
  });
  
  $('#searchform').submit(function(e){
    e.preventDefault(); // stop form submission
  });
});
// -----SLICK SLIDER------------
$(document).ready(function(){
$('.slider').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll:2,
  variableWidth: true,
  responsive: [
  {
  	breakpoint:767,
  	settings: {
      arrows:false,
  		slidesToShow: 1,
  		slidesToScroll: 1,
      variableWidth:false,
      adaptiveHeight: true
  	}
  }
  ]
});
});
