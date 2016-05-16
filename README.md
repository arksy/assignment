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

Answers:
  1. this is the first solution I came up with:
   	- see on repl.it [COqm/0](https://repl.it/COqm) or gist [COqm-0](https://gist.github.com/anonymous/4b9114dcefd077ad62a6554185733313)
  2. this one I experiment using forEach
  	- repl.it [COsg/0](https://repl.it/COsg) or gist [COsg-0](https://gist.github.com/arksy/29cd695da293f3aee47a7a4a9f1d5ddf)
  3. also forEach but cleaner
  	- repl.it [COsg/1](https://repl.it/COsg/1) or gist [COsg-1](https://gist.github.com/arksy/f18f6f47545c75c5f8ffdb12722f8904)

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

Answers:
  1. First confused why this doesn't work
  	- repl.it [CPwy/1](https://repl.it/CPwy/1) or gist [CPwy-1](https://gist.github.com/arksy/e238b84fecd4b42d5148ca3b4dfb7576) <== this one I forgot to input function call parameter, that's why I confused.
  2. Same as the first one but I try using a var
  	- repl.it [CPwy/2](https://repl.it/CPwy/2) or gist [CPwy-2](https://gist.github.com/arksy/4e08c990db652ce8ec06bed6a672ec4e)
  3. Final answer
  	- repl.it [CPwy/3](https://repl.it/CPwy/3) or gist [CPwy-3](https://gist.github.com/arksy/b50e3d9a442a45cd09a26cec83366b4e)

most repl.it session are cloned in gist.github
https://gist.github.com/arksy

## License
github told me to make license, this reminds me to make it later.
