# assignment
any assignment from Awesome people goes here

  - Master Simon https://github.com/sstur

## First Example

  - https://repl.it/COdq

```js
function forEach(array, fn) {
	for (var i=0; i < array.length; i++) {
		var value = array[i];
		fn(value);
	}
}

function addNumber(array) {
	var result = 0;
	var fn = function(value) {
		result = result + value;
	};
	forEach(array, fn);
	
	return result;
}

var testResult = addNumber([1, 3, 5]);
console.log('should be nine:', testResult);
```

## First Assignment
  - nolink
  - https://gist.github.com/anonymous/4b9114dcefd077ad62a6554185733313

```js
function filter(array, fn){
	var result = [];
	// TODO: return a new array with only the value that pass the fn test. (meaning the fn returned true)
	return result;
}

var testArr1 = [1, 2, 3, 4];

var evenNumbers = filter(testArr1, function(values){
	var isEven = (values % 2 === 0); // true if value is even. otherwise false.
 	return isEven;
});

console.log('This Should be [2, 4]:', evenNumbers);
```

## Second Assignment
  - https://repl.it/CPwy

```js
let items = [
	{id: 'a1', name: 'pisang', price: 22},
	{id: 'b2', name: 'keju', price: 34},
	{id: 'c3', name: 'roti', price: 11},
];

function getItemsByID(items) {
	let itemsByID = {};
	// TODO: Write some logic to put the items into the object by ID so it looks like:
	//   {'a1': 'pisang', 'b2': 'keju', 'c3': 'roti'}
	return itemsByID;
}
```

## License
github told me to make license, this reminds me to make it later.
