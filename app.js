// numeric keypad
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// keypad
$( document ).ready(function() {

 $(".pass").keydown( function() {
 pass=$("#digit1").val() + $("#digit2").val() + $("#digit3").val() + $("#digit4").val();

 correctPass = "1937";
    if(pass==correctPass)    {
         $("#submit").removeAttr("disabled");
    }
    else    {
         $("#submit").attr('disabled','disabled');
    }
   });
});
