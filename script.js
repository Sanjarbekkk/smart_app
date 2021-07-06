$(document).ready(function(){
    $('.avatar-wrapper').slick({
        autoplay:true,
        autoplaySpeed:1000,
        Speed:500,
        dots:true,
        arrows:false
      });
      $('.slikc').slick({
        autoplay:true,
        autoplaySpeed:1000,
        Speed:1000,
        slidesToShow: 3,
        arrows:false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1
            }
          }

        ]
      });

      $(".burger").click(function(){
        $(this).parents(".menu-2").find("ul").fadeToggle(500);
      })

});
$(document).ready(function(){
    $(".ul-list li.tab1").on("click", function(){
      $(".click-right-wrapper .tab").hide();
      $(".click-right").show();
    });
    $(".ul-list li.tab2").on("click", function(){
      $(".click-right-wrapper .tab").hide();
      $(".click-right1").show();
    });
    $(".ul-list li.tab3").on("click", function(){
      $(".click-right-wrapper .tab").hide();
      $(".click-right2").show();
    });
    $(".ul-list li.tab4").on("click", function(){
      $(".click-right-wrapper .tab").hide();
      $(".click-right3").show();
    });
    $(".ul-list li.tab5").on("click", function(){
      $(".click-right-wrapper .tab").hide();
      $(".click-right4").show();
    });
});
