var names = ['Job', 'Peter', 'Annemarie'];

names.forEach(function (name) {
	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrwoFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Job'));

var person = {
	name: 'Job',
	greet: function () {
		names.forEach((name) => {
			console.log(this.name + ' zecht hallo tegen ' + name);
		});
	}
};

person.greet();

function add(a, b) {
	return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

var addStatement = (a, b) => {
	return a + b;
};

console.log(addStatement(4,7));

var addExpression = (a, b) => a + b;

console.log(addExpression(1, 9));