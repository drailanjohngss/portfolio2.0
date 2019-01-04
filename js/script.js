
 $(document).ready(function(){
     $('.center').slick({
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 3,
       variableWidth: true,
       // autoplay: true,
       autoplaySpeed: 2000,
       responsive: [
         {
                 breakpoint: 768,
                 settings: 'unslick'
         }
        ]
     });

     var vSequence = [
       { elements: $('.bsquare2-img'), properties: 'slideDown', options: { duration: 1000, easing: 'easeOutExpo' } },
         { elements: $('.rect2-wrap img'), properties: { top: '-10px' }, options: { loop: true, duration: 800 }}
     ];


     $(".about-container").lazy({
        threshold: -300,
         abtc: function(element) {
         $.Velocity.RunSequence(vSequence);
        }
     });

    $('.rect1-wrap').velocity({ top: "-140px" }, { loop: true, duration: 800 });
 });
