$(function() {
    observe('bind', function() {

    });
    observe('start', function() {

    });
    observe('build-users', function() {
        notify('server', {
            route:'Users',
            resource:'index'
        });
    });
    
    observe('users-index', function(data) {
        console.log(data)
        $('section[data-route="users"]').show();
        setTimeout(function() {notify('finish-loading');}, 200);
    })
});