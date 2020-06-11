let language = 'pt_BR';

$('header .translate').click(function() {
    language = language === 'pt_BR' ? 'en_US' : 'pt_BR';

    $(this).text(language === 'pt_BR' ? 'EN' : 'PT');

    $.getJSON(`data/${language}/home.json`, function(data) {
        var items = [];
        $.each(data, function(key, val) {
            items[key] = val;
        });

        $('header #menu').children().each(function(index) {
            $(this).text(items['header'][index]);
        });

        $linkConexa = $('#job').children('a');
        $('#job').html(`${items['job']} - `);
        $('#job').append($linkConexa);
        $span = $('#details').children('span');
        $('#details').html(`${items['details']} `);
        $('#details').append($span);
    });
});