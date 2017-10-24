var chai = require('chai')
var assert = chai.assert // Using Assert style
var expect = chai.expect // Using Expect style
var should = chai.should() // Using Should style

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            //   assert.equal(-1, [1,2,3].indexOf(4))
            expect(-1).to.equal([1, 2, 3].indexOf(4))
        })
    })
})