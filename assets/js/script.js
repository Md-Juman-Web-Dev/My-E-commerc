$(document).ready(function () {
  $('.menuToggle').click(function () {
    $('.mobilemenu').toggleClass('showmenu');
    $('.catdSlider, .mobileSearch').removeClass('showCart showSearch');
    if ($('.mobilemenu').hasClass('showmenu')) {
      $('.menuToggle iconify-icon').attr('icon', 'tabler:x');
    } else {
      $('.menuToggle iconify-icon').attr('icon', 'tabler:menu-2');
    }
  });

  // Search Toggle
  $('.searchBtn').click(function () {
    $('.mobileSearch').toggleClass('showSearch');
    $('.mobilemenu, .catdSlider').removeClass('showmenu showCart');
  });

  // Clear Cart & Continue Shopping
  $(document).on('click', '.clearCartBtn, .continueBtn', function () {
    $('.catdSlider').removeClass('showCart');
    $('.menuToggle iconify-icon').attr('icon', 'tabler:menu-2');
  });

  // Cart Toggle
  $('.cartBtn').click(function () {
    $('.catdSlider').toggleClass('showCart');
    $('.offCart, .mobilemenu, .mobileSearch').removeClass(
      'showCart showmenu showSearch'
    ); // অন্য UI বন্ধ হবে
  });

  // Mobile Footer Nav Bae
  $('.nav-item').click(function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
  });

  // Swiper Slider
  var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  });

  // Best Selling Products

  var swiper = new Swiper('.bestSellmySwiper', {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    /*   autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        reverseDirection: true,
      }, */
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    breakpoints: {
      320: {
        // For mobile screens
        slidesPerView: 1,
      },
      768: {
        // For tablets
        slidesPerView: 2,
      },
      1024: {
        // For desktops
        slidesPerView: 3,
      },
      1200: {
        // Large desktops
        slidesPerView: 4,
      },
    },
  });

  // Categories
  var swiper = new Swiper('.categoriesMySwiper', {
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.categories-next',
      prevEl: '.categories-prev',
    },
    slidesPerView: 4,
    breakpoints: {
      320: {
        // For mobile screens
        slidesPerView: 2,
      },
      768: {
        // For tablets
        slidesPerView: 3,
      },
      1024: {
        // For desktops
        slidesPerView: 4,
      },
      1200: {
        // Large desktops
        slidesPerView: 5,
      },
    },
  });

  // Flash Sales Timeing functionality
  /* function updateCountDown(countDownItem) {
            const timeleft = new Date(countDownItem.getAttribute('data-count')).getTime() - new Date().getTime();

            const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            countDownItem.querySelector('.count-days').innerHTML = days;
            countDownItem.querySelector('.count-hours').innerHTML = hours;
            countDownItem.querySelector('.count-minutes').innerHTML = minutes;
            countDownItem.querySelector('.count-seconds').innerHTML = seconds;

         }

         document.querySelectorAll('.countdown').forEach(function (countDownItem) {
            updateCountDown(countDownItem);
            setInterval(function () {
               updateCountDown(countDownItem);
            }, 1000);
         }); */
});
