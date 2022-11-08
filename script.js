$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // var typed = new Typed(".typing", {
  //   strings: ["Developer", "Java Backened Developer", "Software-Engineer"],
  //   typespeed: 100,
  //   backspeed: 60,
  //   loop: false,
  // });

  // var typed = new Typed(".typing-2", {
  //   strings: ["Developer", "Java Backened Developer", "Software-Engineer"],
  //   typespeed: 100,
  //   backspeed: 60,
  //   loop: false,
  // });
  //   toogel caste thing menu

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // owl carousel
  $(".carousel").owlCarousel({
    // margin: 20,
    // loop: true,
    // autoplayTimeOut: 2000,
    // autoplayHoverPause: true,
    // responsive: {
    //   0: {
    //     item: 1,
    //     nav: false,
    //   },
    //   600: {
    //     item: 2,
    //     nav: false,
    //   },
    //   1000: {
    //     item: 3,
    //     nav: false,
    //   },
    //},
  });
});
