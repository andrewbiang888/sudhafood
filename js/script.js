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
              $("#reveal").append("<h1> Great Choice! Veggie food rocks " + firstName + ", Check out this gif: </h1> <br> <img src='http://i.giphy.com/xTiTnkZoCSqp3Dn6yk.gif'>");
            }

        } else {
          alert("Wait a second, what is your name?")
        }
    });
});
