$(document).ready(function () {

    $('.crsl').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
    });

    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    const Form = document.querySelector('form');

    Form.addEventListener('submit', (event) => {
        event.preventDefault();

        const Data = new FormData(Form);
        const name = Data.get('Name');
        const text = Data.get('Text-area');

        if (name.trim() && text.trim()) {
            const msg = {
                name,
                text
            };
        }

    })

});