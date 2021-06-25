$("#start_btn").click(function() {
    var input = $('#input').val();
    $(".field").append(input);

    $('.logo-home').hide();
    $('.input-area').hide();
});