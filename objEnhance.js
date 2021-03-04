function createInstructor(firstName, lastName) {
	return {
		firstName,
		lastName
	};
}

let favoriteNumber = '42';

const instructor = {
	firstName: 'colt',
	[favoriteNumber]: 'thats my favorite number'
};

const instructor2 = {
	firstName: 'colt',
	sayHi() {
		return 'Hi!';
	},
	sayBye() {
		return this.firstName + 'says Bye!';
	}
};

function createAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		}
	};
}
