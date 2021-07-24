let theme = 'light';

function changeTheme() {
  if (theme === 'light') {
      theme = 'dark';
      $('body').css('color', '#dddddd');
      $('body').css('background-color', '#222222');
      $('.projects-item h2').css({
          'background-color' : '#2b2b2b',
          'color' : '#dddddd'
      });
  } else {
      theme = 'light';
      $('body').css('color', '#222');
      $('body').css('background-color', '#fff');
      $('.projects-item h2').css({
          'background-color' : '#f7f7f7',
          'color' : '#a4a4a4'
      });
  }
}

$('#mode').click(function() {
  const mode = theme === 'light' ? 'far' : 'fas';
  $(this).children('i').removeClass().addClass(`${mode} fa-lightbulb`)
  changeTheme();
});