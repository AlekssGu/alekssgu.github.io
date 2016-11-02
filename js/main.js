$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

    if (consoleOpened)
        console.warn("Perhaps you are an employer who is looking for talents?\n" +
                     "If so - please leave me a message on Facebook or LinkedIn");
});

function consoleOpened () {
    console.profile();
    console.profileEnd();
    if(console.clear) { console.clear() };
    return console.profiles.length > 0;
}
