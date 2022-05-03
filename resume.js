$(() => {
  const $div = $('div').addClass('wrapper').appendTo('body')
})


// var collapse = document.getElementsByClassName("collapsible");
// var i;
//
// for (i=0; i<collapse.length; i++) {
//   collapse[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display ="none";
//     } else {
//       content.style.display="block";
//     }
//   });
// }
$(document).ready(function(){
  $('.educollapsible').on('click', function() {
  $('.educontent').show();
   });
});

$(document).ready(function(){
  $('.workcollapsible').on('click', function() {
  $('.workcontent').show();
  $('.educontent').hide();
   });
});

$(document).ready(function(){
  $('.servicecollapsible').on('click', function() {
  $('.servicecontent').show();
  $('.workcontent').hide();
  $('.educontent').hide();
   });
});
