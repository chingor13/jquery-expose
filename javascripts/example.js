$(function(){
  $("#highlight-table").click(function(evt) {
    console.log('click');
    $("#example-table").expose();
    evt.preventDefault();
  });

  $("#highlight-row").click(function(evt) {
    $("#example-table tbody tr:even").expose();
    evt.preventDefault();
  });

  $("#highlight-links").click(function(evt) {
    $("a[href]").expose({
      padding: 5
    });
    evt.preventDefault();
  });
});