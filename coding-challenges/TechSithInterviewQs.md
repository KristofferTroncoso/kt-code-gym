

"find common diviser"
```js
function findGreatestCommonDenominator(x, y) {
	if (x >= y) {
		for (let i=y; i >= 1; i--) {
			if (x % i === 0 && y % i === 0) {
				return i;
			}
		}
	}
	else {
		for (let i=x; i >= 1; i--) {
			if (x % i === 0 && y % i === 0) {
				return i;
			}
		}
	}
}
```

n kids are sitting in a circle
k toys available to distribute
i position to start from

example 
toys4tots(3, 5, 1) // 2
```js
function toys4tots(kids, toys, position) {
	for (let i=toys; i > 0; i--) {
		position++;
	}
	position++;
  return (position % kids) + 1;
}
```
basically it loops through as many times as there are toys left.
I have to add 1 to position at the end so it counts the first kid it gives to.
then the modulo of the kids + 1 makes sure the answer is not 0;