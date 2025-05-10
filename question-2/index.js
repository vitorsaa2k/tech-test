function isFibonacci(number) {
	if (number < 0) return false;

	let beforeLast = 0,
		last = 1;
	while (last < number) {
		let temp = last;
		last = beforeLast + last;
		beforeLast = temp;
	}

	return last === number || number === 0;
}

isFibonacci(2);
