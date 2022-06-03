function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
	return str.split("").reverse().join("");
}

const calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	divide: function (a, b) {
		return a / b;
	},
	multiply: function (a, b) {
		return a * b;
	},
};

function caesarCipher(str) {
	let charCode = 0;
	let result = "";
	for (let i = 0; i < str.length; i++) {
		str = str.toLowerCase();
		charCode = str.charCodeAt(i);
		charCode >= 122 ? (charCode = 97) : (charCode = str.charCodeAt(i) + 1);
		result += String.fromCharCode(charCode);
	}
	return result;
}

function analyzeArray(arr) {
	let result = {};
	let sum = 0;
	for (let num of arr) {
		sum += num;
	}

	result.average = sum / arr.length;
	result.min = Math.min(...arr);
	result.max = Math.max(...arr);
	result.length = arr.length;
	return result;
}

test("capitalizes first letter of string", () => {
	expect(capitalize("abc")).toMatch("Abc");
});

test("reverses string", () => {
	expect(reverseString("abc")).toMatch("cba");
});

test("takes two numbers and adds them", () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test("takes two numbers and subtracts them", () => {
	expect(calculator.subtract(3, 2)).toBe(1);
});

test("takes two numbers and divides them", () => {
	expect(calculator.divide(2, 2)).toBe(1);
});

test("takes two numbers and multiplies them", () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test("shifts a string one character down", () => {
	expect(caesarCipher("hello")).toMatch("ifmmp");
});

test("returns average, min, max, and length of array", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});
