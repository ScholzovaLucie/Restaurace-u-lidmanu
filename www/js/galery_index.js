(function() {
  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true
    },
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: ''
    }
  });
}).call(this);