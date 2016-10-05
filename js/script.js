$(document).ready(function() {
    $("form#questions").submit(function(event) {
        event.preventDefault();
        var firstName = $("#fname").val();
        var lastName = $("#lname").val();
        var spiceLevel = $("input:radio[name=spiceLevel]:checked").val();
        var night = $("input:radio[name=night]:checked").val();
        var preference = $("input:radio[name=preference]:checked").val();


        if (firstName, lastName) {
          $('html, body').animate({scrollTop: $("#questionaire").offset()}, 1000);
            $("#formcenter, .landing").fadeOut();
            $("#reveal").fadeIn();



            if (spiceLevel === 'extraSpicy' || spiceLevel === 'spicy') {
                $("#spicyVeganGuest").show();
                $(".form").hide();
            } else if (night === 'allNights' || night === 'weekendsOnly' || night === 'fridaySunday') {
                $("#spicyVeganGuest").show();
                $('button#reset').click(function() {
                    location.reload();
                });
            } else if (preference === 'vegan'  || preference === 'vegitarian') {
              $("#reveal").append("<h1> Great choice " + firstName + ", we serve vegie food! </h1>");
            }

        } else {
          alert("Wait a second, what is your name?")
        }
    });
});
