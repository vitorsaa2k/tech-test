function isFibonacci(number) {
	if (number < 0) return false;

	let beforeLast = 0,
		last = 1;
	while (last < number) {
		let temp = last;
		last = beforeLast + last;
		beforeLast = temp;
	}

	return last === number || number === 0
		? "Numero informado pertence à sequencia fibonacci"
		: "Numero informado não pertence à sequencia fibonacci";
}

isFibonacci(2);
