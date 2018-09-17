var expect = require('expect');

var {generateMessage} = require('./message');

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