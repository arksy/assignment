function filter(array, fn){
	var result = [];
	// TODO: return a new array with only the value that pass the fn test. (meaning the fn returned true)
	for (var i = 0; i < array.length; i++){
		if(even(array[i])){
			result[i] = array[i];
			console.log(result);
			//return result;
		}
	console.log(result);
	//return result;
	}
	console.log(result);
	return result;
}

var testArr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testArr1);
function even(value){
	var isEven = (value % 2 === 0);
	return isEven;
}

var evenNumbers = filter(testArr1, even);

// var evenNumbers = filter(testArr1, function(value){
// 	var isEven = (value % 2 === 0); // true if value is even. otherwise false.
// 	return isEven;
// });

console.log('This Should be [2, 4]:', evenNumbers);

var newArray = [];
for (var i = 0; i < testArr1.length; i++){
	//even(testArr1[i]);
	//console.log(even(testArr1[i]));
	if(even(testArr1[i])){
		//var newArray = []
		newArray = newArray + testArr1[i];
		console.log(newArray);
		//return newArray;
	}
	console.log(newArray);
	//return newArray;
}
//return newArray;
//console.log(even(testArr1[0]));
// if(even(testArr1[1])){
// 	var newArray = []
// 	newArray = newArray + testArr1[1];
// 	console.log(newArray);
// }
//console.log(even(testArr1[1]));
//even(testArr1);
