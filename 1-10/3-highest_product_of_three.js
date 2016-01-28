/*
HIGHEST PRODUCT OF THREE

- given an integer array of length >= 3, find the highest product of three elements

*/

function highest_prod_of_three(input) {
	if (input.length < 3) return undefined;
	sort_descending(input);
	console.log(input);
	int j = input.length-1;
	return Math.max(input[0]*input[1]*input[2], input[j]*input[j-1]*input[0]);
}

function sort_descending(input) {
	input.sort(function(a,b) {
		return b-a;
	});
}

function display() {
	document.getElementById('result').innerHTML = highest_prod_of_three([1,3,5,2123,35,2]);
}