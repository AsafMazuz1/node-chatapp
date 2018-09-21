var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString' , () =>{


	it('should reject non string object' , () =>{
		var text = 123;
		
		var res = isRealString(text);

		expect(res).toBe(false);
		
	});

	it('should reject only spaces string object' , () =>{
		var text = "     ";
		
		var res = isRealString(text);

		expect(res).toBe(false);
	});

	it('should allow string object' , () =>{
		var text = "  Asaf mazuz  ";
		
		var res = isRealString(text);

		expect(res).toBe(true);
	});
});
