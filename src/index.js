const one = 'I'
const five = 'V'
const ten = 'X'

const sumarOnes = (num) => one.repeat(num)
const fiveMultiple = number => number / 5 === 1 ? five : ten
module.exports = (number) => {

	if (number % 5 === 4) {
		return one + fiveMultiple(number+1)
	} else if (number % 5 === 0) {
		return fiveMultiple(number)
	} else if (number > 5 && number < 9) {
		return five + sumarOnes(number - 5)
	}

	return sumarOnes(number)
}