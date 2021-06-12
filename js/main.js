$(document).ready(() => {

    $('.header-item').click(function () {
        $('.header-item').removeClass('active');
        $(this).addClass('active');
    });


    $('.fourth-block-slick-content').slick({
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        dots: true
    });


    $('.fourth-block-slick-content').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".slick-slide").removeClass('slick-fix');
        if (currentSlide === slick.slideCount - 1) {
            $(".fourth-block-slick-content").find("[data-slick-index='" + currentSlide + "']").next().addClass('slick-fix');
        }
    });


    $('.open').click(() => {
        $('#pop-up-discount-container').css('display', 'flex');
    });

    $('#pop-up-discount-cancel, #pop-up-discount-container').click((e) => {
        if (e.target.id === 'pop-up-discount-cancel' || e.target.id === 'pop-up-discount-container' || e.target.id === 'pop-up-discount-cancel-image') {
            $('#pop-up-discount-container').hide();
        }
    });



    $('.open-block ').click(() => {
        $('#pop-up-check-container').css('display', 'flex');
    });

    $('#pop-up-check-cancel, #pop-up-check-container').click((e) => {
        if ( e.target.id === 'pop-up-check' || e.target.id === 'pop-up-check-cancel' || e.target.id === 'pop-up-check-cancel-image') {
            $('#pop-up-check-container').hide();
        }
    });


    $('#submit').click(function () {
        $('.pop-up-check-block-info-error').hide();
        let name = $('#name');
        let services = $('#services');
        let data = $('#data');
        let number = $('#number');
        let man = $('#man');
        let time = $('#time');
        let hasError = false;

        if (!name.val()) {
            name.siblings('.pop-up-check-block-info-error').show();
            hasError = true;
            $(name).css('border-color', 'red');
        } else {
            $(name).css('border-color', 'rgb(185, 145, 80)');
        }
        if ($("#services option:selected").text()==="Выберете услугу") {
            services.siblings('.pop-up-check-block-info-error').show();
            hasError = true;
            $(services).css('border-color', 'red');
        } else {
            $(services).css('border-color', 'rgb(185, 145, 80)');
        }
        if (!data.val()) {
            data.siblings('.pop-up-check-block-info-error').show();
            hasError = true;
            $(data).css('border-color', 'red');
        } else {
            $(data).css('border-color', 'rgb(185, 145, 80)');
        }
        if (!number.val()) {
            number.siblings('.pop-up-check-block-info-error').show();
            hasError = true;
            $(number).css('border-color', 'red');
        } else {
            $(number).css('border-color', 'rgb(185, 145, 80)');
        }
        if ($("#man option:selected").text()==="Выберете мастера") {
            man.siblings('.pop-up-check-block-info-error').show();
            hasError = true;
            $(man).css('border-color', 'red');
        } else {
            $(man).css('border-color', 'rgb(185, 145, 80)');
        }
        if ($("#time option:selected").text()==="Выберете время") {
            time.siblings('.pop-up-check-block-info-error').show();
            hasError = true;
            $(time).css('border-color', 'red');
        } else {
            $(time).css('border-color', 'rgb(185, 145, 80)');
        }

        if (hasError===false) {
            $.ajax({
                type: 'post',
                url:'mail.php',
                data: 'name=' + name.val() +'&services=' + services.val() + '&data=' + data.val() + '&number' + number.val() + '&man' + man.val() + '&time' + time.val(),
                success: () => {
                    $('#pop-up-check-container').hide();
                    $('#pop-up-thanks').css('display', 'flex');
                },
                error: () => {
                    $('#pop-up-check-container').hide();
                    alert('Ошибка бронирования. Свяжитесь пожалуйста по намеру телефона. ')
                }
            });
        }
    });

    $('#pop-up-thanks-close, #pop-up-thanks-container').click((e) => {
        if ( e.target.id === 'pop-up-thanks-close' || e.target.id === 'pop-up-thanks-container' || e.target.id === 'pop-up-thanks-image') {
            $('#pop-up-thanks').hide();
        }
    });

    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header .header-item').click(()=> {
        $('#header').removeClass('menu-open');
    });

});