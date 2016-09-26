

$(document).ready(function() {
  $("form#questions").submit(function(event){
    var spiceLevel = $("input:radio[name=spiceLevel]:checked").val();

    var night = $("input:radio[name=night]:checked").val();

    var preference = $("input:radio[name=preference]:checked").val();

    if (spiceLevel === 'extraSpicy' || spiceLevel === 'spicy') {
      $("#spicyVeganGuest").show();
    }
    else if (night === 'allNights' || night === 'weekendsOnly' || night === 'fridaySunday') {
        $("#spicyVeganGuest").show();
    }

    event.preventDefault();
  });

  // $("#hidebutton").click(function(event){
  //   $("#formcenter").hide();
  //
  //
  //   event.preventDefault();
  // });

});
