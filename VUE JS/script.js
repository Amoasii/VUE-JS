$(function(){
  $('.tab-nav li:first').addClass('select');
  $('.tab-panels>div').hide().filter(':first').show();
  $('.tab-nav a').mouseover(function(){ 
    $('.tab-panels>div').hide().filter(this.hash).show();
    $('.tab-nav li').removeClass('select'); 
    $(this).parent().addClass('select');
    return (false);
  })
});