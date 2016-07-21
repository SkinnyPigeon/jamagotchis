var assert = require('chai').assert
var Jamagotchi = require('../tamamoji')
var Food = require('../food')
var Poop = require('../poop')

describe( "The Tamamoji", function() {
  beforeEach( function() {
    jeff = new Jamagotchi( "Jeff", "👻" )
    dave = new Jamagotchi( "Dave", "🤕" )

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

  it( "Should be happy with the right food", function() {
    jeff.eat( cake )
    jeff.eat( cake )
    jeff.setMood()
    assert.equal( true, jeff.happy )
  })

  it( "Should get hungry when tummy is empty", function() {
    jeff.eat( cake )
    jeff.poop()
    jeff.setHunger()
    assert.equal( true, jeff.hungry )
  })

  it( "Should have some health", function() {
    assert.equal( 100, jeff.health )
  })

  it( "Should start with no damage", function() {
    assert.equal( 0, jeff.damage )
  })

  it( "Should be able to damage Dave", function() {
    jeff.punch( dave )
    assert.equal( 95, dave.health )
  })

  it( "Should be able to pull a super on Dave", function() {
    jeff.super( dave )
    assert.equal( 85, dave.health )
  })

  it( "Should not be able to keep doing Supers on Dave", function() {
    jeff.super( dave )
    jeff.super( dave )
    jeff.super( dave )
    jeff.super( dave )
    assert.equal( 55, dave.health )
  })

  it( "Should not let Dave do a super on Jeff when his health is too low", function() {
    jeff.super( dave )
    jeff.super( dave )
    jeff.super( dave )
    jeff.punch( dave )
    jeff.punch( dave )
    dave.super( jeff )
    assert.equal( 100, jeff.health )
  })



})













