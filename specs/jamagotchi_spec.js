var assert = require('chai').assert
var Jamagotchi = require('../jamagotchi')
var Food = require('../food')
var Poop = require('../poop')

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

  it( "Should be alive", function() {
    jeff.dead();
    assert.equal( true, jeff.alive )
  })

  it( "Should be able to eat", function() {
    assert.deepEqual( [ cake ], jeff.food )
  })

  it( "Should empty it's tummy after a second", function() {
    jeff.hunger()
    assert.deepEqual( [], jeff.food )
  })

  it( "Should be able to produce new poop", function() {
    jeff.poop()
    assert.deepEqual( "💩", jeff.waste[0].icon )
  })

  it( "Should die without energy", function() {
    jeff.energy = 0;
    jeff.dead();
    assert.equal( false, jeff.alive )
  })

  it( "Should die if there's too much poop", function() {
    jeff.poop()
    jeff.poop()
    jeff.poop()
    jeff.poop()
    jeff.poop()
    jeff.dead()
    assert.equal( false, jeff.alive )
  })

  it( "Should get ill if there's too much poop", function() {
    jeff.poop()
    jeff.poop()
    jeff.poop()
    jeff.sick()
    assert.equal( true, jeff.ill )
  })


})













