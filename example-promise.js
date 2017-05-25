// function getTempCallback(location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
// 	if (err) {
// 		console.log('error', err);
// 	} else {
// 		console.log('succes', temp);
// 	}
// });
//
// function getTempPromise(location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve(79);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
// 	console.log('promise succes', temp);
// }, function (err) {
// 	console.log('promise error', err);
// });

function addPromise(a, b) {
	return new Promise(function (resolve, reject) {
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		} else {
			reject('een van de twee invoervelden is geen getal');
		}
	})
}

addPromise(1, 2).then(function (number) {
	console.log('promise succes', number)
}, function (err) {
	console.log('error', err)
});

addPromise(1, 'test').then(function (number) {
	console.log('promise succes', number)
}, function (err) {
	console.log('error', err)
});