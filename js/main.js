$(document).ready(function ($) {
    // nav bg onscroll
    $(window).on('scroll', function(){
        if ($(this).scrollTop() >= 150) {
            $("header").addClass("menu--onscroll");
            $(".logo-svg").addClass("logo-svg--inverse");
            $(".scroll-top").addClass("is-scrolled");
        }
        else {
          $("header").removeClass("menu--onscroll");
          $(".logo-svg").removeClass("logo-svg--inverse");
          $(".scroll-top").removeClass("is-scrolled");
        }
    });

    // mobile menu
    $(".nav-icon-wrapper, .menu__list--link").click(function(){
      if ($(window).width() <= 1200) { 
          $(".menu").toggle();
          $("body").toggleClass('overflow-hidden');
          $(".nav-icon").toggleClass("nav-icon--open");
          $("header").toggleClass("header--mobile");
          $(".logo-svg").toggleClass("logo-svg--inverse");
          $(".header__inner > div").toggleClass("box-shadow");
      }
  });
  if ($(window).width() <= 1200) { 
      $(".logo-svg").click(function(){
          $(".menu").hide();
          $("body").removeClass('overflow-hidden');
          $(".nav-icon").removeClass("nav-icon--open");
          $("header").removeClass("header--mobile");
          $(".logo-svg").removeClass("logo-svg--inverse");
          $(".header__inner > div").removeClass("box-shadow");
      });
  }
  $(window).resize(function() {
      if ($(window).width() <= 1200) {
          $(".menu").hide();
          $(".nav-icon").removeClass("nav-icon--open");
          $("header").removeClass("header--mobile");
          $("body").removeClass('overflow-hidden');
          $(".logo-svg").click(function(){
              $(".menu").hide();
              $("body").removeClass('overflow-hidden');
              $(".nav-icon").removeClass("nav-icon--open");
              $(".header__inner > div").removeClass("box-shadow");
          });
      } else {
          $(".menu").show();
          $(".logo-svg").click(function(){$(".menu").show();});
      } 
  });


// accordion
  let acc = document.querySelectorAll(".accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
          } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
  }
    
    // slick slider banner
    $('.blog-banner-widget').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 540,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });


      // other posts 
    $('.other-posts__slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<button type='button' class='slick-prev'></button>",
      nextArrow:"<button type='button' class='slick-next'></button>",
      responsive: [
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
});