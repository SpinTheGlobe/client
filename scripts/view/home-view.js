// Show verify popup on page load
if (localStorage.getItem('over 21', true)) {
  //continue rendering the page
}
else {

  $(function(){
    $('.container').hide();
    $('.main-nav').hide();
    $('#verify-window').css('display', 'block');
    $('#home-logo').show();
  });

  $('#under-21').on('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://www.oldtimecandy.com/walk-the-candy-aisle/candy-cigarettes/';
  });

  $('#over-21').on('click', function(e) {
    e.preventDefault();
    let over21 = localStorage.setItem('over 21', true);
    location.reload();
  });
}

