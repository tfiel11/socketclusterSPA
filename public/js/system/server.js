$(function() {
    
    var socket = socketCluster.connect({

    });

    socket.on('connect', function() {
        socket.emit('messages', {
            id: 11,
            name: 'Ty Man!'
        })
    })
    socket.on('response', function(data) {
        console.log(data)
    })

})