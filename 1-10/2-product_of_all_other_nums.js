/*
PRODUCT OF ALL OTHER NUMBERS

- given an int array, return an array of the products of every element excluding the element at the current index

- can't use division: have to calculate each product individually with mulitplication
- implies quadratic time

- can use memoization to avoid repeated calculations
*/

function get_all_other_products(input) {
	console.log(input);
	if (input.length <= 1) {
		return undefined;
	}
	var before_hash = {0:1};
	var after_hash = {}; after_hash[input.length-1] = 1;
	var j;
	for(var i = 0; i < input.length; i++) {
		j = input.length-1-i;
		if(i != 0) {
			before_hash[i] = before_hash[i-1]*input[i-1];
		}
		if (j != input.length-1) {
			after_hash[j] = after_hash[j+1]*input[j+1];
		}
	}
	console.log(before_hash);
	console.log(after_hash);
	var result = []
	for (var i = 0; i < input.length; i++) {
		result[i] = before_hash[i]*after_hash[i];
	}
	return result;
}

function display() {
	document.getElementById('result').innerHTML = get_all_other_products([0,0,0,0,0]);
}
