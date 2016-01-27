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
	var result = [];
	var prod = 1;
	for (var i = 0; i < input.length-1; i++) {
		prod *= input[i];
		result[i+1] = prod;
	}
	prod = 1;
	result[0] = 1;
	for (var i = input.length-1; i > 0; i--) {
		prod *= input[i];
		result[i-1] *= prod;
	}
	return result;
}

function display() {
	document.getElementById('result').innerHTML = gaop([1,1,0,1]);
}
