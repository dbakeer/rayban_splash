// numeric keypad
// function validate(evt) {
//   var theEvent = evt || window.event;
//   var key = theEvent.keyCode || theEvent.which;
//   key = String.fromCharCode(key);
//   var regex = /[0-9]|\./;
//   if (!regex.test(key)) {
//     theEvent.returnValue = false;
//     if (theEvent.preventDefault)
//     theEvent.preventDefault();
//   }
// }


// keypad
$(document).ready(function() {

  $("#logo").hide();
  $("#video").hide();
  $("#actualvideo").get(0).pause();
  $("#invite").hide();
  $("#rsvpmessage").hide();
  $(".icon-container").hide();
  $('#mobilewatch').hide();
  $("#digit1").focus();
  $('form > input').keyup(function() {
    var empty1 = false;
    $('form > input').each(function() {
      if ($(this).val() === '') {
        empty1 = true;
      }
    });
    if (empty1) {
      $('#formsubmit').attr('disabled', 'disabled');
    } else {
      $('#formsubmit').prop("disabled", false);
    }
  });

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

    correctPass = "SOHO";
    correctPass2 = "soho";

    if(pass.trim().length==correctPass.length){
      if (pass==correctPass || pass==correctPass2) {
        $("#keypad").fadeOut(1000, function(){
          $(this).remove();
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('#video video').hide();
            $("#invite").fadeIn(5000);
            $('#mobilewatch').show();
            $("#mobilewatch").click(function(){
              $("#invite").hide();
              $("#video video").fadeIn(5000, function(){
                $("#actualvideo").get(0).play();
                $('#video video').bind('ended', function(){
                  $(this).parent().fadeOut(function(){
                    $(this).remove();
                    $("#invite").fadeIn(5000);
                  });
                });
              });
            });
  }
          $("#video").fadeIn(2000, function(){
            $("#actualvideo").get(0).play();
            $('#video video').bind('ended', function(){
              $(this).parent().fadeOut(function(){
                $(this).hide();
                $("#invite").fadeIn(5000);
              });
            });
          });
        });
      } else {
        $("#keycode").effect("shake");
        $("#message").html('INCORRECT PASSWORD');
        $('#hint').html('HINT : THE LOCATION OF THE NEW RAY-BAN STORE');
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

  $("#invite-return").click(function(){
    $("#thankyou").hide();
    $("#invite").fadeIn(5000);
  });
});
