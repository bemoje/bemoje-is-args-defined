import isUndefined from '@bemoje/is-undefined'

/**
 * Returns whether or not the passed arguments are defined - ie. not undefined
 * @method isArgsDefined
 * @param {any} ...args - pass arguments normally
 * @return {boolean} boolean
 */
export default function isArgsDefined(...args) {
	for (let arg of args) {
		if (isUndefined(arg)) {
			return false
		}
	}
	return true
}
