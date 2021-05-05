import { Socket } from 'net';

var client = new Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');

    let pkt = {"name": "joe"};
	client.write(JSON.stringify(pkt));
});

client.on('close', function() {
	console.log('Connection closed');
});
