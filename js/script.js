
 $(document).ready(function(){
     $('.center').slick({
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 3,
       variableWidth: true,
       // autoplay: true,
       autoplaySpeed: 2000,
     });

     var vSequence = [
       { elements: $('.bsquare2-img'), properties: 'slideDown', options: { duration: 1500 } }
     ];


     $(".bsquare2-img").lazy({
         afterLoad: function(element) {
             // called after an element was successfully handled
             $.Velocity.RunSequence(vSequence);
         }
     });
 });
