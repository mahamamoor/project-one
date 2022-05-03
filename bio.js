$(document).ready(function() {
    $('<button class="btn" type="button">My pet</button>').appendTo('.bottom-left');
});


$(document).ready(function() {

 $('.btn').on('click', function() {
 $('#myPet').show(2000);

  });
});
