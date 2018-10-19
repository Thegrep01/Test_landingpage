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

    const IP = 'http://localhost:5000/mail';
    const Form = document.querySelector('form');

    Form.addEventListener('submit', (event) => {
        event.preventDefault();

        const Data = new FormData(Form);
        const name = Data.get('Name');
        const text = Data.get('Text-area');

        const msg = {
            name,
            text
        };

        document.getElementById("Name").value = "";
        document.getElementById("Text-area").value = "";

        fetch(IP, {
            method: 'POST',
            body: JSON.stringify(msg),
            headers: {
                'content-type': 'application/json'
            }
        });

    });

});