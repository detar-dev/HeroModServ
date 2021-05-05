import { createServer } from 'net';

var server = createServer(function(sock) {
    var name = null

    sock.on('data', (dataStr) => {
        console.log("revc packet")
        var pkt, p, pos, hp, mana;
        try {
            pkt = JSON.parse(dataStr);
        } catch (e) {
            console.log(name)
            return;
        }
        name = pkt.name
        console.log(name + " sent data") 
    });


    sock.on('end', function() {
        console.log(name + " leave") 
        name = null
    });

    sock.on('error', function(err) {
        console.log(name + " leave") 
        name = null
    });
});

server.listen(1337, '127.0.0.1');