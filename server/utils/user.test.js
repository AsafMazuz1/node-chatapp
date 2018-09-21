var expect = require('expect');

var {Users} = require('./users');

describe('Users', () =>{

	var users;
	beforeEach(() =>{
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Asaf1',
			room: 'A'
		}, {
			id: '2',
			name: 'Asaf2',
			room: 'A'
		}, {
			id: '3',
			name: 'Asaf3',
			room: 'B'
		}]
	});

	it('should add new user' , () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Asaf',
			room: 'Aromm'
		};
		var resUser = users.addUser(user.id, user.name, user.room);
		expect(users.users).toEqual([user]);
	});

	it('should return A room users' , () => {
		
		var resList = users.getUserList('A');
		expect(resList).toEqual(['Asaf1' , 'Asaf2']);
	});

	it('should return B room users' , () => {
		
		var resList = users.getUserList('B');
		expect(resList).toEqual(['Asaf3']);
	});

	it('should remove user' , () => {
		
		var resUser = users.removeUser('1');
		expect(resUser.id).toBe('1');
		expect(users.users.length).toBe(2);
	});

	it('should not remove user' , () => {
		
		var resUser = users.removeUser('5');
		expect(resUser).toBeFalsy();
		expect(users.users.length).toBe(3);
	});

	it('should find user' , () => {
		
		var resUser = users.getUser('2');
		expect(resUser.id).toBe('2');
	});

	it('should not find user' , () => {
		
		var resUser = users.getUser('5');
		expect(resUser).toBeFalsy();
	});
});