import homoglyphs from './homoglyphs';

const { map, reversedMap } = homoglyphs;

function getRandomly(str) {
	if (str.length > 1) {
		return str[Math.floor(Math.random() * str.length)];
	}
	return str;
}

function youAreLuckly(chance) {
	return chance && (Math.random() >= chance / 100);
}

function replace(text, symbolsMap, opts = {}) {
	return text.split('').map(char => {
		if (!(char in symbolsMap) || youAreLuckly(opts.chance)) {
			return char;
		}

		return getRandomly(symbolsMap[char]);
	}).join('');
}

export function decode(text) {
	return replace(text, reversedMap);
}

export function encode(text, opts = { chance: 1 }) {
	return replace(text, map, opts);
}
