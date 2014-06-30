var duration = 800;

function fill() {
  $('.fill').animate({
    width: '100%'
  }, 
  {
    duration: duration,
    done: function () {
      $('.power-circle').addClass('active');
      $('.power-circle .overlay').fadeIn();
    }
  });

}

function reset() {
  $('.power-circle').removeClass('active');
  $('.fill').animate({
    width: '0%'
  }, {
    duration: duration
  });
}
