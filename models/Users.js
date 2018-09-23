var Users = {};

Users.index = function (client, data) {
    var results = {
        success:0,
        message:'Failed to get users',
        notify:'users-index'
    }
    function finish() {
        client.emit('response', results);
    }

    results.users = [
        {
            id:1,
            name:'john',
        },
        {
            id:2,
            name:'nick'
        }
    ];
    finish();
}

module.exports = Users;