(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-undefined')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-undefined'], factory) :
	(global = global || self, global['is-args-defined'] = factory(global.isUndefined));
}(this, (function (isUndefined) { 'use strict';

	isUndefined = isUndefined && isUndefined.hasOwnProperty('default') ? isUndefined['default'] : isUndefined;

	/**
	 * Returns whether or not the passed arguments are defined - ie. not undefined
	 * @method isArgsDefined
	 * @param {any} ...args - pass arguments normally
	 * @return {boolean} boolean
	 */
	function isArgsDefined(...args) {
		for (let arg of args) {
			if (isUndefined(arg)) {
				return false
			}
		}
		return true
	}

	return isArgsDefined;

})));
