jQuery('[name=form1]').submit(function(evt){
  var numberVal = jQuery(evt.target).find('[name=number1]').val();
  if(numberVal != "1") {
    evt.preventDefault();
  }
});
