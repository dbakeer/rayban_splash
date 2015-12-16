// numeric keypad
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault)
    theEvent.preventDefault();
  }
}

// keypad
$(document).ready(function() {

  $("#logo").hide();
  $("#invite").hide();

  $(".pass").keydown(function(){
    pass = $("#digit1").val() +
           $("#digit2").val() +
           $("#digit3").val() +
           $("#digit4").val();

    correctPass = "1937";

    if(pass.trim().length==correctPass.length){
      if (pass==correctPass) {
        $("#keypad").fadeOut(1000, function(){
          $(this).remove();
          $("#logo").fadeIn(8000);
          $("#logo").fadeOut(2000, function(){
            $(this).remove();
            $("#invite").fadeIn(5000);
          });
        });
      } else {
        $("#keycode").effect("shake");
        $("#message").html('Incorrect Keycode');
        $("#digit1").val('');
        $("#digit2").val('');
        $("#digit3").val('');
        $("#digit4").val('');
        $("#digit1").focus();
      }
    }
  });
});