$( document ).ready(function() {

 $(".pass").keydown( function() {
 pass=$("#digit1").val() + $("#digit2").val() + $("#digit3").val() + $("#digit4").val();

 correctPass = "1234";
    if(pass==correctPass)    {
         $("#submit").removeAttr("disabled");
    }
    else    {
         $("#submit").attr('disabled','disabled');
    }
   });
});
