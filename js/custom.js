AOS.init({
    once: true
});
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("header").addClass("scroll");
    } else {
        $("header").removeClass("scroll");
    }
});
$(document).ready(function () {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    if (filename == "") {
        filename = "index.php"
    }
    $(".nav-item .nav-link").removeClass("active");
    $(`.nav-item .nav-link[href="${filename}"]`).addClass("active")
})


// tabbing portfolio home 
$(".our-portfolio-home .portfolio-tabs-btn li a").click(function () {
    $(".our-portfolio-home .portfolio-tabs-btn li a").removeClass("active")
    $(this).addClass("active")
    $(".our-portfolio-home .portfolio-filter").fadeOut();
    setTimeout(() => {
        $(`.our-portfolio-home .portfolio-filter[data-port-content="${$(this).data("tab-target")}"]`).fadeIn();
    }, 300);
})

const processSlider = $('#processSlider')
$(processSlider).owlCarousel({
    margin: 0,
    loop: true,
    autoWidth: true,
    nav: false,
    dots: false,
    items: 4
})
$('#process-slider-left').click(function () {
    $("#processSlider .owl-prev").click()
})
// Go to the previous item
$('#process-slider-right').click(function () {
    $("#processSlider .owl-next").click()
})



$('.testimonial-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.testimonial-thumb'
});
$('.testimonial-thumb').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.testimonial-text',
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true
});