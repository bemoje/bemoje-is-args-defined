# @bemoje/is-args-defined

Returns whether or not the passed arguments are defined - ie. not undefined

#### Version

<span><a href="https://npmjs.org/@bemoje/is-args-defined" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-args-defined" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-args-defined" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-args-defined.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-args-defined" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-args-defined.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-args-defined" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-args-defined" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-args-defined/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-args-defined" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-args-defined
npm install --save @bemoje/is-args-defined
npm install --save-dev @bemoje/is-args-defined
```

## Usage

```javascript
import isArgsDefined from '@bemoje/is-args-defined'

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

```

## Benchmark
84800 nanoseconds
## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### isArgsDefined

##### Returns
whether or not the passed arguments are defined - ie. not undefined

##### Returns
**[boolean][2]** boolean

[1]: #isargsdefined

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean