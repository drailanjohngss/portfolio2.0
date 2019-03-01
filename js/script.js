
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
         { elements: $('.rect2-wrap img'), properties: { top: '-10px' }, options: { loop: true, duration: 2000 }}
     ];


     $(".about-container").lazy({
        threshold: -300,
         abtc: function(element) {
         $.Velocity.RunSequence(vSequence);
        }
     });

    $('.rect1-wrap').velocity({ top: "-100px" }, { loop: true, duration: 2000 });

        var userFeed = new Instafeed({
          get: 'user',
          limit: 4,
          userId: '241875566',
          accessToken: '241875566.eace9ed.6dcc131300314526ba375f33218c9938',
          resolution: 'low_resolution',
          template: `
          <div class="ig">
            <a href="{{link}}" class="ig__link">
              <div class="ig__header">
                <p> <i class="fas fa-map-marked-alt"></i> {{location}} </p>
              </div>
              <div class="ig__img">
                <img src="{{image}}" />
              </div>
              <div class="ig__footer">
                <p> {{caption}}</p>
              </div>
            </a>
          </div>
          `,
          after: function() {
              // disable button if no more results to load
              if (!this.hasNext()) {
                  loadButton.setAttribute('disabled', 'disabled');
              }
          },
    });
    userFeed.run();
    $('#load-more').on('click', function() {
     $("#instafeed").fadeTo("slow", 1, function() {
          userFeed.next();
     });
    });

 });
