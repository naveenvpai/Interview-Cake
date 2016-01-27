/*
PRODUCT OF ALL OTHER NUMBERS

- given an int array, return an array of the products of every element excluding the element at the current index

- can't use division: have to calculate each product individually with mulitplication
- implies quadratic time

- can use memoization to avoid repeated calculations: linear time

- NOTE: (hash[i] || 1) == 1 when hash[i] is undefined or equal to 0
*/

function get_all_other_products(input) {
	if (input.length <= 1) return undefined;
	var before_hash = {0:1};
	var after_hash = {}; after_hash[input.length-1] = 1;
	var j;
	for(var i = 1; i < input.length; i++) {
		j = input.length-1-i;
		before_hash[i] = before_hash[i-1]*input[i-1];
		after_hash[j] = after_hash[j+1]*input[j+1];
	}
	var result = []
	for (var i = 0; i < input.length; i++) {
		result[i] = before_hash[i]*after_hash[i];
	}
	return result;
}

function display() {
	document.getElementById('result').innerHTML = get_all_other_products([0,0,0,0,0]);
}
