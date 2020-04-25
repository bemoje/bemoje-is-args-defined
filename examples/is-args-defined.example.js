import isArgsDefined from '../src/is-args-defined'

// require arguments for multiple parameters
function add(a, b) {
	if (!isArgsDefined(a, b)) {
		throw new Error('lol')
	}

	return a + b
}

// require arguments for single parameter
function add_safe(a, b) {
	if (!isArgsDefined(a)) {
		throw new Error('lol')
	}

	if (!isArgsDefined(b)) {
		return a
	}

	return a + b
}
