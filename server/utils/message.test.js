var expect = require('expect');

var {generateMessage , generateLocationMessage} = require('./message');

describe('generateMessage' , () =>{


	it('should generateMessage object' , () =>{
		var from = "asaf";
		var text = "hey";

		var message = generateMessage(from , text);

		expect(message.from).toBe(from);
		expect(message.text).toBe(text);
		expect(typeof message.createdAt).toBe('number');
	});


});

describe('generateLocationMessage' , () =>{


	it('should generateLocationMessage object' , () =>{
		var from = "asaf";
		var lat = 31.9068187;
		var long = 34.9921004;
		var url = `https://www.google.com/maps?q=${lat},${long}`;

		var locationMessage = generateLocationMessage(from , lat , long);

		expect(locationMessage.from).toBe(from);
		expect(locationMessage.url).toBe(url);
		expect(typeof locationMessage.createdAt).toBe('number');
	});


});