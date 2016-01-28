/*
HIGHEST PRODUCT OF THREE

- given an integer array of length >= 3, find the highest product of three elements

*/

function highest_prod_of_three(input) {
	if (input.length < 3) return undefined;
	sort(input);
	return input[0]*input[1]*input[2];
}

function sort_descending(input) {
	input[0] = 1;
}

function display() {
	document.getElementById('result').innerHTML = highest_prod_of_three(0,1,1);
}