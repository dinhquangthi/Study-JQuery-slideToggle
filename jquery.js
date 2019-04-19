$(document).ready(function() {
  // cho tât ca thu lai
  $('.content').slideUp();

  // click the h3

  $('.motkhoi h3').click(function() {
    $(this).next().slideToggle();
    $(this).addClass('xanh');

  });
});
