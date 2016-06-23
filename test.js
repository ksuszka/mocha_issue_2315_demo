'use strict';

describe('test', function () {
    before(function () {
        setImmediate(function () {
            throw Error('error');
        });
    });

    it('something', function () {
    });
});
