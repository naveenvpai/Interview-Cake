/*
INFLIGHT ENTERTAINMENT

- given integer array return true if two distinct elements exist whose sum is a given integer
- optimize for runtime over memory implies linear time
*/

var test1 = [1,0,0,1];
var test2 = [5,3,7,5];

//O(n^2)
function get_two_movies1(movie_lengths, flight_length) {
	for (var i = 0; i < movie_lengths.length; i++) {
		for (var j = i+1; j < movie_lengths.length; j++) {
			if (movie_lengths[i] == movie_lengths[j]) {
				return true;
			}
		}
	}
	return false;	
}

console.log(get_two_movies1(test1));