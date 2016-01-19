// keypad
$(document).ready(function() {

  // hide the video div until correct keycode is entered
  $("#video").hide();

  // pause the video until start
  $("#actualvideo").get(0).pause();

  // hide the invite details
  $("#invite").hide();

  // hide the RSVP form
  $("#rsvpmessage").hide();

  // hide mobile alternate view
  $('#mobilewatch').hide();

  // automatically tab to the first keycode box
  $("#val1").focus();

  ///////////////////////
  /////// KEYCODE ///////
  ///////////////////////
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

    pass = $("#val1").val() +
           $("#val2").val() +
           $("#val3").val() +
           $("#val4").val();

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
        $("#val1").val('');
        $("#val2").val('');
        $("#val3").val('');
        $("#val4").val('');
        $("#val1").focus();
      }
    }
  });


  $("#rsvp").click(function(){
    $("#invite").remove();
    $("#rsvpmessage").fadeIn(2000);
  });

  ///////////////////////
  ////// RSVP FORM //////
  ///////////////////////
  $('form > input').keyup(function() {
    // if form is empty, do not permit the user to submit it
    var empty1 = false;
    $('form > input').each(function() {
      if ($(this).val() === '') {
        empty1 = true;
      }
    });
    if (empty1) {
      $('#formsubmit').attr('disabled', 'disabled');
    } else {
      // disable the disabling of the button and allow form submission
      $('#formsubmit').prop("disabled", false);
    }
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
