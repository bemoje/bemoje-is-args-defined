import isArgsDefined from '../src/is-args-defined'

describe('isArgsDefined', () => {
	test('returns false on undefined', () => {
		expect(isArgsDefined(undefined)).toBe(false)
		expect(isArgsDefined(void 0)).toBe(false)
		expect(isArgsDefined(void 0, undefined)).toBe(false)
		expect(isArgsDefined(void 0, void 0, void 0)).toBe(false)
	})
	test('returns true on anything else', () => {
		expect(isArgsDefined('undefined', 'void 0')).toBe(true)
		expect(isArgsDefined(0, 'zero')).toBe(true)
		expect(isArgsDefined([undefined])).toBe(true)
		expect(isArgsDefined({})).toBe(true)
		expect(isArgsDefined([])).toBe(true)
		expect(isArgsDefined(true)).toBe(true)
		expect(isArgsDefined(false)).toBe(true)
	})
})
