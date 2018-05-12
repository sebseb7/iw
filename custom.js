$(function(){

    $("head").append('<link id="themeCss" type="text/css" rel="stylesheet" href="' + themeCss + '">');

    var loadCSS = function() {
        var value = $.cookie('night_mode');
        $('.switch-checkbox').prop('checked', (value === 'true'));

        var ipbc_logo = $('.ipbc_logo');
        var ipbc_logo_src = '';
        if (ipbc_logo && ipbc_logo.length) {
            ipbc_logo_src = ipbc_logo.attr('src');
        }

        if (value === 'true') {
            //console.log('Loading Night mode');
            $('#themeCss').attr('href', 'themes/nightly-mining-dark-theme.css');
            if (ipbc_logo_src !== '') {
                ipbc_logo.attr('src', ipbc_logo_src.replace('ipbc_logo.svg', 'ipbc_logo_dark.svg'));
            }
        } else {
            //console.log('Loading Day mode');
            $('#themeCss').attr('href', themeCss);
            if (ipbc_logo_src !== '') {
                ipbc_logo.attr('src', ipbc_logo_src.replace('ipbc_logo_dark.svg', 'ipbc_logo.svg'));
            }
        }
    };
    loadCSS();

    var toggleCSS = function(value) {
        $.cookie('night_mode', value, { expires: 365, path: '/' });
        loadCSS();
    };

    $('.switch-checkbox').on('change', function() {
        toggleCSS(this.checked);
    });
});