$(document).ready(function(){
  $('#continue').prop('disabled', true);
  $('#agree').change(function() {
      state = $(this).prop('checked');
      //alert(state);
      if(state) {
          $('#continue').prop('disabled', false);
      }
      else {
          $('#continue').prop('disabled', true);
      }
  });
})