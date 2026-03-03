//your code here
function majorityElement(arr) {
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
		majorityElement([2,1,2]);