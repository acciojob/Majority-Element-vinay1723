//your code here
function majorityElementChecker(arr) {
			let count = 0;
			let currNum;
			for(let num of arr) {
				if (count === 0) {
					currNum = num;
				}
				count += currNum === num ? 1:-1;
			}

			return currNum;
		}
