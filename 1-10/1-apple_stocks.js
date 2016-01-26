/*
#1 APPLE STOCKS 

- greatest profit = greatest difference, p1 - p2, where p1 is a price chronologically after p2 (because no "shorting")
- can't buy and sell on same time --> p1 can't occur at the same time as p2
- efficient implies linear time
*/

var stock_prices_yesterday = [10, 7, 5, 8, 11, 9];

/*
prices is an array with length > 1
*/
function get_max_profit(prices) {
	var max_diff = prices[1] - prices[0];
	var min_price = Math.min(prices[0], prices[1]);
	for (var i = 2; i < prices.length; i++) {
		curr_diff = prices[i] - min_price;
		max_diff = Math.max(curr_diff, max_diff);
		min_price = Math.min(prices[i], min_price);
	}
	return max_diff;
}

document.getElementById('result').innerHTML =  get_max_profit(stock_prices_yesterday);