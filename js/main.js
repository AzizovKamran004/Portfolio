$(document).ready(function () {

    elem = $(".text-change-elem")[0];
    if (elem) {
        var words = $(elem).data("text").split('/');
        $(elem).text(words[0]);
        var index = 0;
        function changeText() {
            $(elem).addClass("animated fadeOut");
            elem.addEventListener('animationend', function () {
                $(elem).html(words[index])
                $(elem).removeClass("fadeOut");
                $(elem).addClass("fadeIn");
            })
            index = (index + 1) % words.length;
            window.setTimeout(changeText, 4000);
        }
        changeText();
    }


    var app = document.querySelector("nav .navbar-brand h2");
    var typewriter = new Typewriter(app, {
        loop: false
    });

    typewriter.typeString('Kamran Azizov.').start();
})