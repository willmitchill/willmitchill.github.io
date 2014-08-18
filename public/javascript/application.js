$(document).ready(function() {

  // $( ".featurette-image" ).mouseenter(
  //   function() {
  //     $(this).attr("src", 'http://i1264.photobucket.com/albums/jj493/wmitchel1/supreme_zpsb46b8b2c.jpg');
  // }).mouseleave(
  //   function() {
  //     $(this).attr("src", 'http://i1264.photobucket.com/albums/jj493/wmitchel1/photo2_zpsb7b6d8e3.jpg');
  // });


//   $('.col-md-5 img').hover(function() {
//     $(this).stop(true,true).addClass('imageeagle', 500);
//   });
//
// $('.col-md-5 img').mouseleave(function() {
//   $(this).removeClass('imageeagle').animate({"opacity" : 1}, 400);
// });




  $( "#ruby" ).mouseenter(
    function() {
      $( this ).html( "Bowstaff" ).css( "width", "95%");
  }).mouseleave(
    function() {
      $( this ).html( "Ruby on Rails" ).css( "width", "80%");
  });

  $( "#css" ).mouseenter(
    function() {
      $( this ).html( "Pan Flute" ).css( "width", "45%");
  }).mouseleave(
    function() {
      $( this ).html( "CSS3" ).css( "width", "70%");
  });

  $( "#jquery" ).mouseenter(
    function() {
      $( this ).html( "Knitting" ).css( "width", "15%");
  }).mouseleave(
    function() {
      $( this ).html( "jQuery" ).css( "width", "45%");
  });

  $( "#javascript" ).mouseenter(
    function() {
      $( this ).html( "Lion Taming" ).css( "width", "20%");
  }).mouseleave(
    function() {
      $( this ).html( "Javascript" ).css( "width", "50%");
  });

  $( "#tdd" ).mouseenter(
    function() {
      $( this ).html( "Finger Painting" ).css( "width", "98%");
  }).mouseleave(
    function() {
      $( this ).html( "TDD" ).css( "width", "35%");
  });

  $( "#github" ).mouseenter(
    function() {
      $( this ).html( "Poetry" ).css( "width", "23%");
  }).mouseleave(
    function() {
      $( this ).html( "Github" ).css( "width", "55%");
  });

  $( "#html" ).mouseenter(
    function() {
      $( this ).html( "Group Hugs" ).css( "width", "83%");
  }).mouseleave(
    function() {
      $( this ).html( "HTML5" ).css( "width", "85%");
  });

});
