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
  $("#video").hide();
  $("#actualvideo").get(0).pause();
  $("#invite").hide();
  $("#rsvpmessage").hide();
  $("#digit1").focus();

  $(".pass").keyup(function(){

    // autotab function
    var $all = $('form .pass');
    var focused = $(':focus')[0];
    for (var i = 0; i < $all.length - 1; ++i) {
    if ($all[i] != focused)
        continue;
    $all[i + 1].focus();
    break;
  }

    pass = $("#digit1").val() +
           $("#digit2").val() +
           $("#digit3").val() +
           $("#digit4").val();

    correctPass = "1937";

    if(pass.trim().length==correctPass.length){
      if (pass==correctPass) {
        $("#keypad").fadeOut(1000, function(){
          $(this).remove();
          // $("#logo").fadeIn(8000);
          // $("#logo").fadeOut(function(){
          //   $(this).remove();
          // });
          $("#video").fadeIn(5000, function(){
            $("#actualvideo").get(0).play();
            $('#video video').bind('ended', function(){
              $(this).parent().fadeOut(function(){
                $(this).remove();
                $("#invite").fadeIn(5000);
              });
            });
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

  $("#rsvp").click(function(){
    $("#invite").remove();
    $("#rsvpmessage").fadeIn(2000);
  });

  $("#rewatch").click(function(){
    $("#thankyou").hide();
    $("#video").fadeIn(5000, function(){
      $("#actualvideo").get(0).play();
      $('#video video').bind('ended', function(){
        $(this).parent().fadeOut(function(){
          $(this).remove();
          $("#thankyou").fadeIn(5000);
        });
      });
    });
  });
});
