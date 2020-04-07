const assert = require('assert');

// I wasn's able to set up environment for proper running mocha/jest tests
// on current app configuration

// SyntaxError: Unexpected token 'export'
//     at Module._compile (internal/modules/cjs/loader.js:881:18)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:962:10)
//     at Module.load (internal/modules/cjs/loader.js:798:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:711:12)
//     at Module.require (internal/modules/cjs/loader.js:838:19)
//     at require (internal/modules/cjs/helpers.js:74:18)

describe('test', () => {
    it('should be 1', () => {
        assert.equal(1, 1);
    });
});
