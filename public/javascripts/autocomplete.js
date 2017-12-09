$(function() {
  $('#q').keyup(function(){
    var query = $('#q').val() || "";
    query = query.trim();

    $('.form').addClass('loading');

    $.ajax({
      url: '/suggest',
      data: {q: query},
      success: function(data) {
        var els = data.map(function(name) {
          return '<li>' + name + '</li>';
        });
        $('.suggest-box').html(els.join('\n')).show();

        $('.suggest-box li').click(function(e){
          $('#q').val($(e.currentTarget).text());
          $('.suggest-box').hide();
        });
      },
      complete: function() {
        $('.form').removeClass('loading');
      }
    });
  });
});
