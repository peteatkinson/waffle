const assert = require('chai').assert;
const example = require('../example');

describe('Example', () => {
    it('example should return example', () => {
        assert.equal(example(), 'example')
    })
})
