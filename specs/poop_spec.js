var assert = require('chai').assert
var Poop = require('../poop')

describe( "The Poop: ", function() {
  beforeEach( function() {
    poop = new Poop()
  })

  it( "Should be a poop icon", function() {
    assert.equal( "💩", poop.icon )
  })

})