var assert = require('chai').assert
var Food = require('../food')

describe( "The Food: ", function() {
  beforeEach( function() {
    cake = new Food( "Cake" )
  })

  it( "Should have a name", function() {
    assert.equal( "Cake", cake.name )
  })

})