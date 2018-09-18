$(function () {
    observe('bind', function() {

        var routes = {
            '/dashboard': function() {
                $('section').hide()
                $('section[data-route="dashboard"]').show()
            },
            '/about': function() {
                $('section').hide()
                $('section[data-route="about"]').show()
            }
        };

        var router = Router(routes);
        router.init();
    });
});
