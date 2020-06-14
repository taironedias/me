let language = 'pt';
let theme = 'light';

function changeTextContent() {
    $.getJSON('data/data.json', function(data) {
        var items = [];
        $.each(data, function(key, val) {
            if (key === language) {
                items = val;
                return false;
            }
        });

        $.each(items, function(key, val) {
            const section = key;
            $.each(val, function(key, val) {
                $(`.${section} ${key}`).html(val);
            });
        });
    });
}

function changeTheme() {
    if (theme === 'light') {
        theme = 'dark';
        $('body').css('color', '#dddddd');
        $('body').css('background-color', '#222222');
        $('.projects-item h2').css({
            'background-color' : '#2b2b2b',
            'color' : '#dddddd'
        });
    } else {
        theme = 'light';
        $('body').css('color', '#222');
        $('body').css('background-color', '#fff');
        $('.projects-item h2').css({
            'background-color' : '#f7f7f7',
            'color' : '#a4a4a4'
        });
    }
}

$('#language').click(function() {
    language = language === 'pt' ? 'en' : 'pt';
    $(this).text(language === 'pt' ? 'EN' : 'PT');

    changeTextContent();
});

$( document ).ready(function() {
    changeTextContent();
});

$('#mode').click(function() {
    const mode = theme === 'light' ? 'far' : 'fas';
    $(this).children('i').removeClass().addClass(`${mode} fa-lightbulb`)
    changeTheme();
});