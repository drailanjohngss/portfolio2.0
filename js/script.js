
 $(document).ready(function(){
     $('.center').slick({
       centerMode: true,
       centerPadding: '60px',
       slidesToShow: 3,
       variableWidth: true,
       autoplay: true,
       autoplaySpeed: 2000,
     });

     var vSequence = [
       { elements: $('.bsquare2-img'), properties: 'slideDown', options: { duration: 1000, easing: 'easeOutExpo' } },
         { elements: $('.rect2-wrap img'), properties: { top: '-140px' }, options: { loop: true, duration: 800 }}
     ];


     $(".about-container").lazy({
        threshold: -300,
         abtc: function(element) {
         $.Velocity.RunSequence(vSequence);
        }
     });

    $('.laptop-img-cont').velocity({ top: "-140px" }, { loop: true, duration: 1000 });
    $('.rect1-wrap').velocity({ top: "-10px" }, { loop: true, duration: 700 });
 });
