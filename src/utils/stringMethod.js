export const capitalizeLetter = (str) => {
	let x = str;
	x = x.toLowerCase().replace(/\b[a-z]/g, function (letter) {
		return letter.toUpperCase(); // Hello World
	});
	return x;
};

export const capitalizeFirstLetter = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1); // Hello world
}

export const uppercase = (str) => {
	return str.toUpperCase(); // HELLO WORLD
}

export const lowercase = (str) => {
	return str.toLowerCase(); // hello world
}

