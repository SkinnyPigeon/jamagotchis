var assert = require('chai').assert
var Jamagotchi = require('../jamagotchi')
var Food = require('../food')

describe( "The Jamagotchi", function() {
  beforeEach( function() {
    jeff = new Jamagotchi( "Jeff", "👻" )

    cake = new Food( "Cake")
    jeff.eat( cake )
  })

  it( "Should have a name", function() {
    assert.equal( "Jeff", jeff.name )
  })

  it( "Should have an icon", function() {
    assert.equal( "👻", jeff.icon )
  })

  it( "Should be able to eat", function() {
    assert.deepEqual( [ cake ], jeff.food )
  })

  it( "Should empty it's tummy after a second", function() {
    jeff.hunger()
    assert.deepEqual( [], jeff.food )
  })

})