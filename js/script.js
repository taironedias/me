let language = 'pt';

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

$('#language').click(function() {
    language = language === 'pt' ? 'en' : 'pt';
    $(this).text(language === 'pt' ? 'EN' : 'PT');

    changeTextContent();
});

$( document ).ready(function() {
    changeTextContent();
});