$(function() {
    observe('bind', function() {

    });
    observe('start', function() {

    });
    observe('build-users', function() {
        $('section[data-route="users"]').show();
        setTimeout(function() {notify('finish-loading');}, 200);

    });
});