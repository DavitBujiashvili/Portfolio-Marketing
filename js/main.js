$(document).ready(function(){

   
    var mixer = mixitup('.portfolio__content');

     $(".menu , .go-top").on("click","a", function (event) {

        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.slider__blog-inner').slick({
        dots:true,
        prevArrow:`<button type="button" class="slick-prev"><img src="Images/arrow-left.svg" alt=""></button>        `,
        nextArrow:` <button type="button" class="slick-next"><img src="Images/arrow-right.svg" alt=""></button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                }
            }
         
          ]
    });

    $(".menu__btn").on("click",function(){
        $(".menu__list").toggleClass("menu__list--active");
    });
  });