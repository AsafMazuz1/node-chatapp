var socket = io();

socket.on('connect' , function (){
	console.log('Connected to server');

	socket.emit('createMessage' , {
		to: "asafmazuz",
		text: "Hey from client"
	});
});

socket.on('disconnect' , function (){
	console.log('Disconnected to server');
});


socket.on('newMessage' , function (message){
	console.log('newMessage' , message);
});

